import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyD0GFuToF18w5FVV5y-idvLKI2fqtiLDVA",
    authDomain: "explorer-game-7b314.firebaseapp.com",
    databaseURL: "https://explorer-game-7b314.firebaseio.com",
    projectId: "explorer-game-7b314",
    storageBucket: "explorer-game-7b314.appspot.com",
    messagingSenderId: "1078432424291",
    appId: "1:1078432424291:web:3284530ca42dcb0772b356",
    measurementId: "G-SSHYM4G2P4"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  const auth = firebase;

  export {database,auth}