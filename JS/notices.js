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
  previousPage = "Main.html";
  localStorage.setItem("previousPage", previousPage);
}

function contact() {
  window.location = "Contact.html";
  previousPage = "Main.html";
  localStorage.setItem("previousPage", previousPage);
}
