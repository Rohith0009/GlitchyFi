function startup() {
  full_name = localStorage.getItem("full_name");
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");
  web_name = localStorage.getItem("web_name");
  document.getElementById("name_display1").innerHTML = "Hello, " + full_name + "<sup><img src='Images/Verified_logo.png' /></sup>";
  document.getElementById("room_name_display").innerHTML = "Welcome To, " + web_name + " Glitch Viewer";
}

var firebaseConfig = {
  apiKey: "AIzaSyBxHJwv8WZmVazMEqg7ukqzZgXxf7hFvjU",
  authDomain: "glitchyfi.firebaseapp.com",
  databaseURL: "https://glitchyfi-default-rtdb.firebaseio.com",
  projectId: "glitchyfi",
  storageBucket: "glitchyfi.appspot.com",
  messagingSenderId: "308475277179",
  appId: "1:308475277179:web:0974753c082a055a6a97de",
};

firebase.initializeApp(firebaseConfig);

function getData() {
  web_name = localStorage.getItem("web_name");
  firebase
    .database()
    .ref("/Websites/" + web_name)
    .on("value", function (snapshot) {
      document.getElementById("glitches_list").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          title = message_data["title"];
          description = message_data["description"];
          status_ = message_data["status"];
          user = message_data["user"];

          title_display = "<div class='glitch_message_part'> <h4>" + title + "</h4>";
          description_display = "<h6>" + description + "</h6>";
          status_bar_display = "<p style='text-align: left !important; margin-left: 8px;'>Reported By: <b>" + user + "</b><br> Status: <b>" + status_ + "</b></p></div>";
          final_display = title_display + description_display + status_bar_display;
          document.getElementById("glitches_list").innerHTML += final_display;

          //End code
        }
      });
    });
}
getData();

//Navigation Buttons code
previousPage = localStorage.getItem("previousPage");
function logout() {
  localStorage.removeItem("full_name");
  localStorage.removeItem("full_name_chat");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("web_name");
  window.location = "index.html";
}

function back() {
  window.location = previousPage;
}

function report() {
  window.location = "Report.html";
  previousPage = "Glitches_Viewer.html";
  localStorage.setItem("previousPage", previousPage);
}

function contact() {
  window.location = "Contact.html";
  previousPage = "Glitches_Viewer.html";
  localStorage.setItem("previousPage", previousPage);
}

function notices() {
  window.location = "Notices.html";
  previousPage = "Glitches_Viewer.html";
  localStorage.setItem("previousPage", previousPage);
}
