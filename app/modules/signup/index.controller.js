discovrApp.controller('Signup.IndexController', function(
    $location,
    $localStorage,
    AuthenticationService,
    $scope,
    $filter,
    $translate){    

    var vm = this;

    vm.signup = signup;    
    vm.profileData = {};
    vm.filterLocation = filterLocation;

    var data = { Country:{},CountryDetail:{},Department:{},DepartmentDetail:{},City:{},CityDetail:{} };

    vm.country;
    vm.department;
    vm.city;
    vm.selectedCountry;
    vm.selectedDepartment;
    vm.selectedCity;
    vm.filterDepartment = {};
    vm.filterCity = {};

    initController();

    function initController(){
        //reset login status
        AuthenticationService.Logout();
        AuthenticationService.GetData('country').then(function(dt){
            data.Country = dt;            
        });
        AuthenticationService.GetData('countrydetail').then(function(dt){
            data.CountryDetail = dt;
        });
        AuthenticationService.GetData('department').then(function(dt){
            data.Department = dt;                       
        });
        AuthenticationService.GetData('departmentdetail').then(function(dt){
            data.DepartmentDetail = dt;  
        });
        AuthenticationService.GetData('city').then(function(dt){
            data.City = dt;
            vm.country = alasql('SELECT Country.IdCountry, CountryDetail.IdLanguage, CountryDetail.Name \
            FROM ? AS Country JOIN ? AS CountryDetail ON Country.IdCountry = CountryDetail.IdCountry',[data.Country,data.CountryDetail]);   
            vm.department = alasql('SELECT Department.IdDepartment, Department.IdCountry, DepartmentDetail.IdLanguage, DepartmentDetail.Name \
            FROM ? AS Department JOIN ? AS DepartmentDetail ON Department.IdDepartment = DepartmentDetail.IdDepartment',[data.Department,data.DepartmentDetail]);                      
            vm.city = alasql('SELECT City.IdCity, City.IdDepartment, CityDetail.IdLanguage, CityDetail.Name \
            FROM ? AS City JOIN ? AS CityDetail ON City.IdCity = CityDetail.IdCity',[data.City,data.CityDetail]);                          
        });
        AuthenticationService.GetData('citydetail').then(function(dt){
            data.CityDetail = dt;                        
        });
                
    };

    function signup() {

        var date = vm.profileData.birthday.toISOString().substring(0, 10);
        console.log(date);
    
        AuthenticationService.SignUp(
            vm.profileData.username,
            vm.profileData.password1,
            vm.profileData.password2,
            vm.profileData.email,
            vm.profileData.name,
            vm.profileData.surname,
            vm.profileData.phone,
            date, 
            vm.profileData.genre,
            vm.selectedCity,function(result){
            if(result === true){
                $location.path('/');
            }else{
                vm.error = 'Something happens';
            }
        });
    };
  
  function filterLocation(kind, lan){
      console.log(kind);
      if (kind === 1){
          vm.filterDepartment = $filter('filter')(vm.department, { IdCountry: vm.selectedCountry, IdLanguage: lan }, true);
      }else if(kind === 2){
        vm.filterCity = $filter('filter')(vm.city, { IdDepartment: vm.selectedDepartment, IdLanguage: lan}, true);
      }
  };

    $scope.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'us-en','value':'English'}
    ];

    $scope.selected = 'es-es';    
    $scope.changeLang = function changeLangFn() {
        var opt = $scope.selected;
         console.log(opt);
        $translate.use('login/languages/' + opt); 
    };
    
});    
