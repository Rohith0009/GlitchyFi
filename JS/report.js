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

function submit() {
  website_name = document.getElementById("website_name").value;
  website_url = document.getElementById("website_url").value;
  title = document.getElementById("title").value;
  description = document.getElementById("description").value;
  firebase
    .database()
    .ref("/Websites/" + website_name)
    .push({
      website_name: website_name,
      website_url: website_url,
      title: title,
      description: description,
      status: "Unresolved",
      user: full_name,
    });
  document.getElementById("alert").innerHTML =
    "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong> Successfully Reported </strong>Waiting For The Developer To Resolve It</div></div>";
  document.getElementById("website_name").value = "";
  document.getElementById("website_url").value = "";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
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
  window.location = previousPage;
}

function contact() {
  window.location = "Contact.html";
  previousPage = "Report.html";
  localStorage.setItem("previousPage", previousPage);
}

function notices() {
  window.location = "Notices.html";
  previousPage = "Report.html";
  localStorage.setItem("previousPage", previousPage);
}
