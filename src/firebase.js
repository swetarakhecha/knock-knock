import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD47Fbfz-tLirX3itew_1ClWrV8ZqGxrns",
    authDomain: "knock-knock-cc1e8.firebaseapp.com",
    projectId: "knock-knock-cc1e8",
    storageBucket: "knock-knock-cc1e8.appspot.com",
    messagingSenderId: "1022272321917",
    appId: "1:1022272321917:web:c3b184e0375514b3627414"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;