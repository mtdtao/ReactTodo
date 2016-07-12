import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyA4a_mSYokZGaUbqh5MCfUEiN683LO8p6g",
        authDomain: "todoapp-85ac8.firebaseapp.com",
        databaseURL: "https://todoapp-85ac8.firebaseio.com",
        storageBucket: "todoapp-85ac8.appspot.com",
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
