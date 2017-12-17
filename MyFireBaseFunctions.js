function myFunction(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCnxH-eIo3juteSetl_KYMu_VBpRmKrNYI",
        authDomain: "yourcv-bb562.firebaseapp.com",
        databaseURL: "https://yourcv-bb562.firebaseio.com",
        projectId: "yourcv-bb562",
        storageBucket: "",
        messagingSenderId: "599929738139"
    };
    var admin = require("firebase");
    var serviceAccount = require("/serviceAccountKey.json");


    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://yourcv-bb562.firebaseio.com/"
    });

    admin.initializeApp(defaultAppConfig);

// Initialize another app with a different config
    var otherApp = admin.initializeApp(otherAppConfig, "other");

    console.log(admin.app().name);  // "[DEFAULT]"
    console.log(otherApp.name);     // "other"

// Use the shorthand notation to retrieve the default app's services
    var defaultAuth = admin.auth();
    var defaultDatabase = admin.database();

// Use the otherApp variable to retrieve the other app's services
    var otherAuth = otherApp.auth();
    var otherDatabase = otherApp.database();

}