// Controller of expense dashboard page.
appControllers.controller('expenseDashboardCtrl', function ($scope, $state, $timeout,$cordovaSplashscreen, $ionicHistory, $mdBottomSheet, $stateParams, $cordovaOauth, $http, localStorage, $mdToast) {

    //$scope.isAnimated is the variable that use for receive object data from state params.
    //For enable/disable row animation.
    $scope.isAnimated =  $stateParams.isAnimated;

	// doSomeThing is for do something when user click on a button
    $scope.doSomeThing = function () {
    	// You can put any function here.
    } // End doSomeThing.

    // goToSetting is for navigate to Dashboard Setting page
    $scope.goToSetting = function () {
        $state.go("app.expenseSetting");
    };// End goToSetting.

    $scope.showGridBottomSheet = function ($event) {
        $mdBottomSheet.show({
            templateUrl: 'ui-grid-bottom-sheet-template',
            targetEvent: $event,
            scope: $scope.$new(false),
        });
    };// End of showGridBottomSheet.

    $scope.showListBottomSheet1 = function ($event1) {
        $mdBottomSheet.show({
            templateUrl: 'ui-list-bottom-sheet-template1',
            targetEvent: $event1,
            scope: $scope.$new(false),
        });
    };// End of showListBottomSheet (Orang Awam).

    $scope.showListBottomSheet2 = function ($event2) {
        $mdBottomSheet.show({
            templateUrl: 'ui-list-bottom-sheet-template2',
            targetEvent: $event2,
            scope: $scope.$new(false),
        });
    };// End of showListBottomSheet (Warga PKNS).

    $scope.showListBottomSheet3 = function ($event3) {
        $mdBottomSheet.show({
            templateUrl: 'ui-list-bottom-sheet-template3',
            targetEvent: $event3,
            scope: $scope.$new(false),
        });
    };// End of showListBottomSheet (Usahawan).

    $scope.showListBottomSheet4 = function ($event4) {
        $mdBottomSheet.show({
            templateUrl: 'ui-list-bottom-sheet-template4',
            targetEvent: $event4,
            scope: $scope.$new(false),
        });
    };// End of showListBottomSheet (Perkhidmatan).

    //ShowToast for show toast when user press button.
    // $scope.showToast = function (menuName) {
    //     //Calling $mdToast.show to show toast.
    //     $mdToast.show({
    //         controller: 'toastController',
    //         templateUrl: 'toast.html',
    //         hideDelay: 800,
    //         position: 'top',
    //         locals: {
    //             displayOption: {
    //                 title: 'Going to ' + menuName + " !!"
    //             }
    //         }
    //     });
    // }// End showToast.

});// End of controller expense dashboard.


// Controller of expense dashboard setting.
appControllers.controller('expenseDashboardSettingCtrl', function ($scope, $state,$ionicHistory,$ionicViewSwitcher) {

    // navigateTo is for navigate to other page
    // by using targetPage to be the destination state.
    // Parameter :
    // stateNames = target state to go.
    // objectData = Object data will send to destination state.
    $scope.navigateTo = function (stateName,objectData) {
        if ($ionicHistory.currentStateName() != stateName) {
            $ionicHistory.nextViewOptions({
                disableAnimate: false,
                disableBack: true
            });

            //Next view animate will display in back direction
            $ionicViewSwitcher.nextDirection('back');

            $state.go(stateName, {
                isAnimated: objectData,
            });
        }
    }; // End of navigateTo.
}); // End of controller expense dashboard setting.
