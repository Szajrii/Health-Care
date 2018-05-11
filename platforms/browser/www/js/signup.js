        
const provider = new firebase.auth.GoogleAuthProvider();
        var database = firebase.database();


document.querySelector('#signUpButton').addEventListener('click', function () {
          var login = document.getElementById('imejl2').value;
          var pw = document.getElementById('pw2').value;
          var imie = document.getElementById('imie').value;
          var nazwisko = document.getElementById('nazwisko').value;
          var wiek = document.getElementById('wiek').value;
          var radio1 = document.getElementById('option-1');
          var radio2 = document.getElementById('option-2');

firebase.auth().createUserWithEmailAndPassword(login, pw).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    alert(errorMessage);
  console.log(errorCode);

});



 firebase.auth().onAuthStateChanged(function(user) {
          
          
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
    płeć: plec,
    wiek: wiek

    
   
  });
         firebase.auth().signOut().then(function() {
  // Sign-out successful.

}).catch(function(error) {
  // An error happened.
});
    window.location.href = "page2.html";



}
  else {
        

         var errorCode = error.code;
  var errorMessage = error.message;
    alert(errorMessage);
  console.log(errorCode);
  }
});
});
