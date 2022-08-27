var firebaseConfig = { 
      apiKey: "AIzaSyBQLKqqqMNzw7MIyMknpIpT7oChrMjmFp4",
      authDomain: "kwitter-social-website-ebf2c.firebaseapp.com",
      databaseURL: "https://kwitter-social-website-ebf2c-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-website-ebf2c",
      storageBucket: "kwitter-social-website-ebf2c.appspot.com",
      messagingSenderId: "967237626353",
      appId: "1:967237626353:web:4f418b32128ee07b723c50",
      measurementId: "G-0DH81H8N5T"
}; 

firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)' >#" + room_name + "<div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitterpage.html";
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "index.html";
}