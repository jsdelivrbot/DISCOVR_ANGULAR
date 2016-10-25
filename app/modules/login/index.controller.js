discovrApp.controller('Login.IndexController', function($location,AuthenticationService,$scope,$translate){    
    var vm = this;

    vm.login = login;

    initController();

    function initController(){
        //reset login status
        AuthenticationService.Logout();
    };
    function login(){
        vm.loading = true;
        AuthenticationService.Login(vm.username, vm.password, function(result){
            if(result === true){
                $location.path('/');                    
            }else{
                vm.error = 'Username or password is incorrect';
                vm.loading = false;
            }
        });
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
            id: 0
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/3.jpg',
            id: 2
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/4.jpg',
            id: 3
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/5.jpg',
            id: 4
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/6.jpg',
            id: 5
        }
    ];
});    
