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

function getData() {
  firebase
    .database()
    .ref("/Websites")
    .on("value", function (snapshot) {
      document.getElementById("sites").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Websites_list = childKey;
        Updated_Websites_list = Websites_list.replace(" ", "_");
        //Start code
        row = "<div class='web_list' id=" + Updated_Websites_list + " onclick='redirect(this.id)'> #" + Websites_list + " </div><hr id='hr1'>";
        document.getElementById("sites").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirect(name) {
  name = name.replace("_", " ");
  console.log(name);
  localStorage.setItem("web_name", name);
  window.location = "Glitches_Viewer.html";
}

//Navigation Buttons code
function logout() {
  localStorage.removeItem("full_name");
  localStorage.removeItem("full_name_chat");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("web_name");
  window.location = "index.html";
}

function report() {
  window.location = "Report.html";
  previousPage = "Main.html";
  localStorage.setItem("previousPage", previousPage);
}

function contact() {
  window.location = "Contact.html";
  previousPage = "Main.html";
  localStorage.setItem("previousPage", previousPage);
}

function notices() {
  window.location = "Notices.html";
  previousPage = "Main.html";
  localStorage.setItem("previousPage", previousPage);
}
