const provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();
var providergit = new firebase.auth.GithubAuthProvider();
var providertwitter = new firebase.auth.TwitterAuthProvider();

document.querySelector('#loginButton').addEventListener('click', function () {

  firebase.auth().signOut().then(function() {
  // Sign-out successful.
 
}).catch(function(error) {
  // An error happened.
});
          var login = document.getElementById('imejl').value;
          var pw = document.getElementById('pw').value;
        firebase.auth().signInWithEmailAndPassword(login, pw).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  console.log(errorCode);
  // ...
});
        firebase.auth().onAuthStateChanged(function(user) {
          
          // setTimeout(function(){
          //   var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
        // alert("witaj dziubasku");
        // var a = document.getElementById("loginButton");
        // a.href = "#home";
    window.location.href = "home.html";
    var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;



  } else {
        // alert("spierdalaj dziubasku");
  }


// },3000);
});
      });

// document.querySelector('#signOut').addEventListener('click', function () {
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
//   alert("wylogowales sie poprawnie dziubasku");
// }).catch(function(error) {
//   // An error happened.
// });
// });

    function status(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var status = document.getElementById('statuslog');
    status.innerHTML = "użytkownik zalogowany!"
    window.location.href = "home.html";
    var user = firebase.auth().currentUser;
    var name = user.displayName;
    alert(name);
    console.log(name);
  } else {
    // No user is signed in.
    var status = document.getElementById('statuslog');
    status.innerHTML = "użytkownik nie zalogowany!"

  }
});
}

status();

document.querySelector('#googleLogIn').addEventListener('click', function () {
            firebase.auth().signInWithRedirect(provider).then(function() {
              return firebase.auth().getRedirectResult();
            }).then(function(result) {
              // This gives you a Google Access Token.
              // You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;

           
 
      // ...
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
                alert(errorMessage);
              console.log(errorCode)
              console.log(errorMessage);
            });


        });

document.querySelector('#githubLogIn').addEventListener('click', function () {
            firebase.auth().signInWithRedirect(providergit).then(function() {
              return firebase.auth().getRedirectResult();
            }).then(function(result) {
              // This gives you a Google Access Token.
              // You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              console.log(token);
              console.log(user);

           
 
      // ...
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
                alert(errorMessage);
              console.log(errorCode)
              console.log(errorMessage);
            });


        });


document.querySelector('#twitterbLogIn').addEventListener('click', function () {
            firebase.auth().signInWithRedirect(providertwitter).then(function() {
              return firebase.auth().getRedirectResult();
            }).then(function(result) {
              // This gives you a Google Access Token.
              // You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;

           
 
      // ...
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
                alert(errorMessage);
              console.log(errorCode)
              console.log(errorMessage);

            });


        });