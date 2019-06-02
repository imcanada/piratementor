function login() {
    var email = document.getElementById("login_ascx_txtNotandanafn").value
    var password = document.getElementById("login_ascx_txtLykilord").value

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("success");
          document.location.href="loggedin.html";
        } else {
          // No user is signed in
          console.log("fuck you");
        }
      });
    
}

function logout() {
    firebase.auth().signOut().then(function() {
        console.log("Signed out")
        document.location.href = "index.html";
      }).catch(function(error) {
        // An error happened.
      });
}