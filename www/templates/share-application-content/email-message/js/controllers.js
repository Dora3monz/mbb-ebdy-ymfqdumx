// For sent email you have to install $cordovaSocialSharing by running the following
// command in your cmd.exe for windows or terminal for mac:
// $ cd your_project_path
// $ ionic plugin remove nl.x-services.plugins.socialsharing
// $ ionic plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
//
// Learn more about $cordovaSocialSharing :
// http://ngcordova.com/docs/plugins/socialSharing/
//
// For sent message you have to install $cordovaSMS by running the following
// command in your cmd.exe for windows or terminal for mac:
// $ cd your_project_path
// $ ionic plugin remove com.cordova.plugins.sms
// $ ionic plugin add https://github.com/cordova-sms/cordova-sms-plugin.git
//
// Learn more about $cordovaSMS :
// http://ngcordova.com/docs/plugins/sms/
//
//
// For using mobile calling you must go to yourProjectPath/config.xml
// and put this following code in the access area.
// <access origin="tel:*" launch-external="yes"/>
//
// Controller of contract us page.
appControllers.controller('contractUsCtrl', function ($scope, $cordovaSocialSharing, $cordovaSms) {

    // This function is the first activity in the controller.
    // It will initial all variable data and let the function works when page load.
    $scope.initialForm = function () {
        // $scope.contractInfo is store contract us data
        $scope.contractInfo = {
            telephone: "+603-8886 7000",
            sms:"+6019-6000 696",
            fax:"+603-8888 9562",
            email: "info@sprm.gov.my"
        };
        $scope.destinationLocation = "2.937297,101.705073";
    };// End initialForm.
    // sentSms is for send message by calling $cordovaSms
    // Parameter :
    // phoneNumber = number of sending message
    $scope.sentSms = function (phoneNumber) {
        //config options to sent message
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default.
            android: {
                intent: 'INTENT' // send SMS with the native android SMS messaging.
                //intent: '' // send SMS without open any other app.
            }
        };
        // calling $cordovaSms to sent message
        $cordovaSms.send(phoneNumber, " ", options);
    } // End sentSms.

    // sentEmail is for send email by calling $cordovaSocialSharing.
    // Parameter :
    // email = email of receiver
    $scope.sentEmail = function (email) {
        $cordovaSocialSharing.shareViaEmail("", "", email, "", "", "");
        // format of sent email by using $cordovaSocialSharing is :
        //$cordovaSocialSharing.shareViaEmail(message, subject, toArr, ccArr, bccArr,file)
        // toArr, ccArr and bccArr must be an array, file can be either null, string or array.
    } // End sentEmail.

    // callTo is for using mobile calling.
    // Parameter :
    // number = number that going to call.
    $scope.callTo = function (number) {
        window.open("tel:" + number);
    }// End callTo.

    // initialForm is the first activity in the controller.
      // It will initial all variable data and let the function works when page load.
      // $scope.initialForm = function () {
      // 	//destinationLocation is latitude,longitude of the destination location.
      //     $scope.destinationLocation = " 3.070378,101.517234";
      // };// End initialForm

      // openMap is for open Google Map application.
      // Parameter :
      // targetDestinationLocation = latitude,longitude of the destination location.
      $scope.openMap = function (targetDestinationLocation) {

      	// window.open is to link to URL.
          // The format is geo:?q=targetDestinationLocation(latitude,longitude)&z=15(Specifies the zoom level of the map).
          //  '_system' is for open map application
          window.open('geo:?q=' + targetDestinationLocation + '&z=15', '_system');
          // If you would like to custom map you can use this parameter below:
    		// latitude and longitude set the center point of the map.
  		// z optionally sets the initial zoom level of the map. Accepted values range from 0 (the whole world) to 21 (individual buildings).
  		// The upper limit can vary depending on the map data available at the selected location.
      };// End openMap

    $scope.initialForm();

});// End of contract us controller.
