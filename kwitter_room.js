const firebaseConfig = {
      apiKey: "AIzaSyAQy2jI6xSPFl3j2AxKzY1ekY9xzBRpg2E",
      authDomain: "chatter-app-c19ec.firebaseapp.com",
      databaseURL: "https://chatter-app-c19ec-default-rtdb.firebaseio.com",
      projectId: "chatter-app-c19ec",
      storageBucket: "chatter-app-c19ec.appspot.com",
      messagingSenderId: "825462409704",
      appId: "1:825462409704:web:0d0cba0afee5c40c5afc5d"
    };
    
    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);


var username = localStorage.getItem("user_name");
console.log("Username = " + username);
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";
//ADD YOUR FIREBASE LINKS HERE

function addRoom() {
      room_name = document.getElementById("roomName").value;

     localStorage.setItem("Roomname",room_name);
 
     window.location = "kwitter_room.html";

     firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
