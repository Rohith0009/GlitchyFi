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

function login() {
  full_name = document.getElementById("full_name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  valid_email = email.replace(".", "^");
  actual_pass = "q";

  //Space To Get The Actual Password in "actual_pass" Variable
  //firebase.database().ref("/Emails/" + valid_email);

  if ((full_name == "", email == "", password == "")) {
    document.getElementById("alert").innerHTML =
      "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong> All Fields Are Required To Be Filled</strong></div></div>";
  } else if (actual_pass == password) {
    localStorage.setItem("full_name", full_name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    document.getElementById("full_name").innerHTML = " ";
    document.getElementById("email").innerHTML = " ";
    document.getElementById("password").innerHTML = " ";
    window.location = "Main.html";
  } else if (actual_pass != password) {
    document.getElementById("alert").innerHTML =
      "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong> Incorrect Password Please Check You Email Or Password</strong></div></div>";
  }
}

function register() {
  full_name = document.getElementById("full_name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  valid_email = email.replace(".", "^");

  if ((full_name == "", email == "", password == "")) {
    document.getElementById("alert").innerHTML =
      "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong> All Fields Are Required To Be Filled</strong></div></div>";
  } else {
    firebase
      .database()
      .ref("/Emails/" + valid_email)
      .update({
        Password: password,
        Name: full_name,
      });
    localStorage.setItem("full_name", full_name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    document.getElementById("full_name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("alert").innerHTML =
      "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong> Successfully Registered Please Login!</strong></div></div>";
  }
}
