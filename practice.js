
// ADD YOUR FIREBASE 
const firebaseConfig = {
  apiKey: "AIzaSyA4Feqx2NPldS9DjUasY9SEuaJM0dW4KRQ",
  authDomain: "kwitter-15c41.firebaseapp.com",
  databaseURL: "https://kwitter-15c41-default-rtdb.firebaseio.com",
  projectId: "kwitter-15c41",
  storageBucket: "kwitter-15c41.appspot.com",
  messagingSenderId: "212433597185",
  appId: "1:212433597185:web:a82410adfe0378e3ce2100"
};

firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


