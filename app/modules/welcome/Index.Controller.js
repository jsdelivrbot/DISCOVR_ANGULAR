discovrApp.controller('Login.IndexController', function(
    $location,
    $localStorage,
    $anchorScroll,
    AuthenticationService,
    $scope,
    $state,
    $filter,
    $translate){

    var vm = this;

    vm.login = login;
    vm.redirect = redirect;

    function login(){
        //vm.loading = true;
        AuthenticationService.Login(vm.username, vm.password, function(result){
          var tourist;
          var client;
            if(result === true){
                AuthenticationService.GetData('tourist').then(function(dt){
                  tourist = $filter('filter')(dt, { Owner: $localStorage.currentUser.id }, true);
                  AuthenticationService.GetDataId('client',tourist[0].IdClient).then(function(dt){
                    localStorage.setItem('tourist', JSON.stringify(tourist[0]));
                    localStorage.setItem('client', JSON.stringify(dt));
                  });
                });
                AuthenticationService.GetProfile($localStorage.currentUser.id).then(function(dt){
                  localStorage.setItem('profile', dt);
                  if(dt === 1){
                      $state.go('Home', {}, {reload: true});
                  }else if(dt === 2){
                      console.log("Nestor es un genio!");
                      $state.go('Home', {}, {reload: true});
                  }
                });
                //GetProfile = JSON.parse(localStorage.getItem('user'));
            }else{
                vm.error = 'Username or password is incorrect';
                vm.loading = false;
            }
        });

    };
    function redirect(){
        console.log("Good luck!");
        $location.path('welcome/signup');
    };

    //languages options
    vm.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'en-us','value':'English'}
    ];

    var browserLan = navigator.language; //Get browser language
    if (browserLan === 'es' || browserLan === 'es-es' || browserLan === 'es-NI'){
        browserLan = 'es-es';
    }else if(browserLan === 'en' || browserLan === 'en-us' || browserLan === 'en-US') {
        browserLan = 'en-us';
    }else{
        browserLan = 'es-es';
    }
    //Function that change the language
    vm.changeLang = function changeLangFn(opt) {
         console.log(opt);
        $translate.use('welcome/languages/' + opt);
    };

    function togglePassword(e) {
      e.preventDefault();
      let passwordInput = document.getElementById('txtPassword'),
          toggle = document.getElementById('btnToggle');

      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggle.innerHTML = 'hide';
      } else {
        passwordInput.type = 'password';
        toggle.innerHTML = 'show';
      }
    }

    (function () {
      let toggle = document.getElementById('btnToggle');
      toggle.addEventListener('click', togglePassword, false);
    })();

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

    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;


    initController();
    function initController(){
      $translate.use('welcome/languages/' + browserLan);
      //reset login status
      AuthenticationService.Logout();
    };
});
