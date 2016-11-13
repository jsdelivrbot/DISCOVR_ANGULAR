discovrApp.controller('Signup.IndexController', function(
    $location,
    $localStorage,
    AuthenticationService,
    $scope,
    $filter,
    $translate){

    var vm = this;
    //Variables
    vm.signup = signup;
    vm.profileData = {};
    vm.filterLocation = filterLocation;
    //Use SignUp Data
    var data = { Country:{},CountryDetail:{},Department:{},DepartmentDetail:{},City:{},CityDetail:{} };
    //Country, Department & City Variables and variables Filters
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
        //Load Country Data
        AuthenticationService.GetData('country').then(function(dt){
            data.Country = dt;
        });
        //Load Country Detail Data
        AuthenticationService.GetData('countrydetail').then(function(dt){
            data.CountryDetail = dt;
        });
        //Load Depatment Data
        AuthenticationService.GetData('department').then(function(dt){
            data.Department = dt;
        });
        //Load Department Detail Data
        AuthenticationService.GetData('departmentdetail').then(function(dt){
            data.DepartmentDetail = dt;
        });
        //Load City Data
        AuthenticationService.GetData('city').then(function(dt){
            data.City = dt;
            vm.country = alasql('SELECT Country.IdCountry, CountryDetail.IdLanguage, CountryDetail.Name \
            FROM ? AS Country JOIN ? AS CountryDetail ON Country.IdCountry = CountryDetail.IdCountry',[data.Country,data.CountryDetail]);
            vm.department = alasql('SELECT Department.IdDepartment, Department.IdCountry, DepartmentDetail.IdLanguage, DepartmentDetail.Name \
            FROM ? AS Department JOIN ? AS DepartmentDetail ON Department.IdDepartment = DepartmentDetail.IdDepartment',[data.Department,data.DepartmentDetail]);
            vm.city = alasql('SELECT City.IdCity, City.IdDepartment, CityDetail.IdLanguage, CityDetail.Name \
            FROM ? AS City JOIN ? AS CityDetail ON City.IdCity = CityDetail.IdCity',[data.City,data.CityDetail]);
        });
        //Load City Detail
        AuthenticationService.GetData('citydetail').then(function(dt){
            data.CityDetail = dt;
        });

    };
    //Sign Upp Function
    function signup() {
        //Convert Date object to String
        var date = vm.profileData.birthday.toISOString().substring(0, 10);
        //Call SignUp function from AuthenticationService
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
              //redirect user to home
              $location.path('/');
            }else{
              //print error
              vm.error = 'Something happens';
            }
        });
    };
  //Filter location
  function filterLocation(kind, lan){
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

    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/prinsipalSlider/1.jpg',
            id: 0,
            name: "Esto es un Nombre de Ejemplo"
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/2.jpg',
            id: 1,
            name: "Esto es un Nombre de Ejemplo"
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/3.jpg',
            id: 2,
            name: "Esto es un Nombre de Ejemplo"
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/4.jpg',
            id: 3,
            name: "Esto es un Nombre de Ejemplo"
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/5.jpg',
            id: 4,
            name: "Esto es un Nombre de Ejemplo"
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/6.jpg',
            id: 5,
            name: "Esto es un Nombre de Ejemplo"
        }
    ];
});
