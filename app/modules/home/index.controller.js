discovrApp.controller('Home.IndexController', function($localStorage,$location,AuthenticationService,$scope,$translate) {
    var vm = this;
 
    initController();

    function initController() {
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan-5),szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY','home/languages/' + lang);
    };
    $scope.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'us-en','value':'English'}
    ];
    $scope.selected = 'es-es';    
    $scope.changeLang = function changeLangFn() {
        var opt = $scope.listLan.key;
        console.log(opt);
        $translate.use('home/languages/' + opt); 
    };
});