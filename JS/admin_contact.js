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
email = localStorage.getItem("email");

if (email == "rohithmerala@gmail.com") {
  document.getElementById("load").innerHTML = "<div id='contacts_box' class='col-lg-5 col-md-7 col-sm-7 col-xs-12'><h3>Click On The Contact To Help The User!</h3><div id='contacts'></div></div>";
  function getData() {
    firebase
      .database()
      .ref("/Contact")
      .on("value", function (snapshot) {
        document.getElementById("contacts").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Contact_list = childKey;
          Updated_Contact_list = Contact_list.replace(" ", "_");
          //Start code
          row = "<div class='contacts_list' id=" + Updated_Contact_list + " onclick='redirect(this.id)'> #" + Contact_list + " </div><hr>";
          document.getElementById("contacts_box").innerHTML += row;
          //End code
        });
      });
  }
  getData();

  function redirect(name) {
    name = name.replace("_", " ");
    console.log(name);
    localStorage.setItem("full_name_chat", name);
    window.location = "contact.html";
  }
}

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
  window.location = "Main.html";
}

function report() {
  window.location = "Report.html";
  previousPage = "Admin_Contact.html";
  localStorage.setItem("previousPage", previousPage);
}

function notices() {
  window.location = "Notices.html";
  previousPage = "Admin_Contact.html";
  localStorage.setItem("previousPage", previousPage);
}
