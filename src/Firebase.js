import * as firebase from 'firebase/firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCwojwp_j0rOeWRGfP7FgPvBCHO2zJAoEc",
    authDomain: "crud-operations-d16f3.firebaseapp.com",
    databaseURL: "https://crud-operations-d16f3-default-rtdb.firebaseio.com",
    projectId: "crud-operations-d16f3",
    storageBucket: "crud-operations-d16f3.appspot.com",
    messagingSenderId: "267686516070",
    appId: "1:267686516070:web:36a58715f206603df724a7"
  };
  var fireDb= firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();