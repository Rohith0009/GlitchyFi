function startup() {
  full_name = localStorage.getItem("full_name");
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");
  document.getElementById("name_display1").innerHTML = "Hello, " + full_name + "<sup><img src='Images/Verified_logo.png' /></sup>";
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

function send() {
  full_name = localStorage.getItem("full_name");
  msg = document.getElementById("message_input").value;
  if (msg == "") {
    document.getElementById("alert").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong> The Query Cannot Be Empty!</strong></div></div>";
  }
  firebase
    .database()
    .ref("/Contact/" + full_name_chat)
    .push({
      user: full_name,
      message: msg,
    });
  document.getElementById("message_input").value = "";
}

function getData() {
  full_name = localStorage.getItem("full_name");
  email = localStorage.getItem("email");
  if (email == "rohithmerala@gmail.com") {
    full_name_chat = localStorage.getItem("full_name_chat");
  } else {
    full_name_chat = full_name;
  }

  firebase
    .database()
    .ref("/Contact/" + full_name_chat)
    .on("value", function (snapshot) {
      document.getElementById("message_container").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "message") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
          message = message_data["message"];
          user = message_data["user"];

          message_display = "<div class='single_message'><h4>" + message + "</h4>";
          status_bar_display = "<p><b>Sent By " + user + "</b></p></div>";
          final_display = message_display + status_bar_display;
          document.getElementById("message_container").innerHTML += final_display;
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
  previousPage = "Contact.html";
  localStorage.setItem("previousPage", previousPage);
}

function notices() {
  window.location = "Notices.html";
  previousPage = "Contact.html";
  localStorage.setItem("previousPage", previousPage);
}
