// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDrXd_PrsOLKxd5v9JbdLDkZJfzgDbi2F8",
    authDomain: "zetachat-site.firebaseapp.com",
    databaseURL: "https://zetachat-site-default-rtdb.firebaseio.com",
    projectId: "zetachat-site",
    storageBucket: "zetachat-site.appspot.com",
    messagingSenderId: "857843573430",
    appId: "1:857843573430:web:c9dc9b10748e966725bc17",
    measurementId: "G-FJWY9ES7F4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



