const provider = new firebase.auth.GoogleAuthProvider();
        var database = firebase.database();


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
    window.location.href = "#home";
    var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;
self.location.reload();


  } else {
        // alert("spierdalaj dziubasku");
  }


// },3000);
});
      });


        //funkcja sluząca do rejestrowania użytkownika
document.querySelector('#signUpButton').addEventListener('click', function () {
          var login = document.getElementById('imejl2').value;
          var pw = document.getElementById('pw2').value;
          var imie = document.getElementById('imie').value;
          var nazwisko = document.getElementById('nazwisko').value;
          var radio1 = document.getElementById('option-1');
          var radio2 = document.getElementById('option-2');
           // var sex = document.getElementById('nazwisko').value;
firebase.auth().createUserWithEmailAndPassword(login, pw).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    alert(errorMessage);
  console.log(errorCode);
  // ...
});
// var user = firebase.auth().currentUser;
// user.updateProfile({
//   displayName: "Marian",
//   photoURL: "http://printthatthing.xyz/images/chinese-black-dick-lovers-2594.jpg"
// }).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });


 firebase.auth().onAuthStateChanged(function(user) {
          
          
          //   var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
      
if(radio1.checked){
 plec = document.getElementById('option-1').value;
}else{
  plec = document.getElementById('option-2').value;
}
var user = firebase.auth().currentUser;
 var uid = user.uid;
         firebase.database().ref('users/' + uid).set({
    email : login,
    name : imie,
    secondname: nazwisko,
    płeć: plec
    
   
  });
         firebase.auth().signOut().then(function() {
  // Sign-out successful.

}).catch(function(error) {
  // An error happened.
});
    window.location.href = "#login";



}
  else {
        

         var errorCode = error.code;
  var errorMessage = error.message;
    alert(errorMessage);
  console.log(errorCode);
  }
});
});

document.querySelector('#signOut').addEventListener('click', function () {
firebase.auth().signOut().then(function() {
  // Sign-out successful.
  alert("wylogowales sie poprawnie dziubasku");
}).catch(function(error) {
  // An error happened.
});

//Logowanie via google
        const hLogInfo = document.querySelector('#logInfo');
        document.querySelector('#googleLogIn').addEventListener('click', function () {
            firebase.auth().signInWithRedirect(provider).then(function() {
              return firebase.auth().getRedirectResult();
            }).then(function(result) {
              // This gives you a Google Access Token.
              // You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;

               setTimeout(function(){
 firebase.auth().onAuthStateChanged(function(user) {
          
          // setTimeout(function(){
          //   var user = firebase.auth().currentUser;
         


  if (user) {
    // User is signed in.
    window.location.href = "#home";
  } else {
        
  }
});
         },6000);      // ...
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
                alert(errorMessage);
              console.log(errorCode)
              console.log(errorMessage);
            });
        });