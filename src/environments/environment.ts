// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 firebase: {
    apiKey: "AIzaSyD2m81h0i047OLGiot_BYSBgC6tibjF5gw",
    authDomain: "potoprueba-eee24.firebaseapp.com",
    databaseURL: "https://potoprueba-eee24-default-rtdb.firebaseio.com",
    projectId: "potoprueba-eee24",
    storageBucket: "potoprueba-eee24.appspot.com",
    messagingSenderId: "624607208492",
    appId: "1:624607208492:web:46cd01137a403e27cc5d89",
    measurementId: "${config.measurementId}"
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
