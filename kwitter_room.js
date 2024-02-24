
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC4pb3qSWu7WAcQbkhCQCEf0NJzZuIFHFM",
      authDomain: "kwitter-e8311.firebaseapp.com",
      databaseURL: "https://kwitter-e8311-default-rtdb.firebaseio.com",
      projectId: "kwitter-e8311",
      storageBucket: "kwitter-e8311.appspot.com",
      messagingSenderId: "860977274025",
      appId: "1:860977274025:web:0c0b1448c51e9cfb2c1db8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name"
  });
    localStorage.setItem("room_name", room_name);  
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name : " + Room_names);
      row = "<div class='room_name' id="+Room_names + " onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = index.html;
}