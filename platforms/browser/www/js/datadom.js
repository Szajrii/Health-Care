function status(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var status = document.getElementById('statuslog');
    status.innerHTML = "użytkownik zalogowany!"
  } else {
    // No user is signed in.
    var status = document.getElementById('statuslog');
    status.innerHTML = "użytkownik nie zalogowany!"
  }
});
}

function daneOsobowe(){
 
          var dane = document.getElementById('daneosobowe');
          firebase.auth().onAuthStateChanged(function(user) {
          var user = firebase.auth().currentUser;
          var uid = user.uid;

          if(user){


        var data =   firebase.database().ref('users/' + uid).child("name");
       data.on('value', function(snapshot){
            dane.innerHTML = snapshot.val() + " ";
         });

       var data2 =   firebase.database().ref('users/' + uid).child("secondname");
       data2.on('value', function(snapshot){
        var text = document.createTextNode(snapshot.val());
          dane.appendChild(text);
         });

        var data3 =   firebase.database().ref('users/' + uid).child("płeć");
       data3.on('value', function(snapshot){
        var plecstatus = snapshot.val();
       var zdjecie = document.getElementById('zdjecieprofilowe');
          if(plecstatus == "Kobieta"){
              zdjecie.src = "img/female.png";
          }else {
            zdjecie.src = "img/male.png";
          }
         });

    
        }else {
}
        });
  
  
}

status();
daneOsobowe();