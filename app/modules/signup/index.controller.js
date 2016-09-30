discovrApp.controller('Signup.IndexController', function(
    $location,
    $localStorage,
    AuthenticationService,
    $scope,
    $translate){    

    var vm = this;

    vm.signup = signup;    
    vm.formData = {};

    initController();

    function initController(){
        //reset login status
        AuthenticationService.Logout();
    };

    $scope.processForm = function() {
        alert('awesome!');  
    };

    function signup(){

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
