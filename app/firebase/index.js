import firebase from 'firebase';

try {
    let config = {
        apiKey: "AIzaSyDRVcytOgVWX2inRzgTj9RJduqV8fZKnZc",
        authDomain: "kools-todo-app.firebaseapp.com",
        databaseURL: "https://kools-todo-app.firebaseio.com",
        projectId: "kools-todo-app",
        storageBucket: "kools-todo-app.appspot.com",
        messagingSenderId: "1012929872371"
    };

    firebase.initializeApp(config);

} catch (e) {

}

export let firebaseRef = firebase.database().ref();

export default firebase;