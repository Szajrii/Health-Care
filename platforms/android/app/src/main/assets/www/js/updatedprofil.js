 var myVar;
  var plecstatus;
  var wiek;

  const provider = new firebase.auth.GoogleAuthProvider();
        var database = firebase.database();
        

     

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

document.querySelector('#profilupdate').addEventListener('click', function () {
 firebase.auth().onAuthStateChanged(function(user) {
    if(user){
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  var imie = document.getElementById('profilimie').value;
  var nazwisko = document.getElementById('profilnazwiko').value;
  var wiek = document.getElementById('profilwiek').value;
  // var plec1 = document.getElementById('option1').value;
  // var plec2 = document.getElementById('option2').value;
  if(imie != "" && nazwisko != "" && wiek != ""){
  var plec1 = document.getElementById("profilplec");
  var plec = plec1.options[plec1.selectedIndex].value; 


      firebase.database().ref('users/' + uid).update({
    email: user.email,
    name : imie,
    secondname: nazwisko,
    płeć: plec,
    wiek: wiek
   
   
   
  });
      window.location.href = "profil.html";
    }else{
     var imie2 = document.getElementById('profilimie');
     var nazwisko2 = document.getElementById('profilnazwiko');
     var wiek2 = document.getElementById('profilwiek');
     imie2.placeholder = "Pole wymagane";
     imie2.className += " uk-form-danger";
     nazwisko2.placeholder = "Pole wymagane";
     nazwisko2.className += " uk-form-danger";
     wiek2.placeholder = "Pole wymagane";
     wiek2.className += " uk-form-danger";
    }
    }else{

    }
  });
});

function personalData(){
firebase.auth().onAuthStateChanged(function(user) {
    if(user){
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  var data =   firebase.database().ref('users/' + uid).child("name");
       data.on('value', function(snapshot){
        var name = document.getElementById('displayname');
        var imie = document.getElementById('profilimie');
            
            if(snapshot.val() == "" || snapshot.val() == null){
              imie.placeholder = "Wpisz imię";
              name.innerHTML = "Brak danych";
            }else{
            imie.placeholder = snapshot.val();
            name.innerHTML = snapshot.val();
          }
       });

     var data2 =   firebase.database().ref('users/' + uid).child("secondname");
       data2.on('value', function(snapshot){
        var secondname = document.getElementById('displaysecondname');
            
       var nazwisko = document.getElementById('profilnazwiko');
            
            if(snapshot.val() == "" || snapshot.val() == null){
              nazwisko.placeholder = "Wpisz nazwisko";
              secondname.innerHTML = "Brak danych"
            }else{
            nazwisko.placeholder = snapshot.val();
            secondname.innerHTML = snapshot.val();
          }

       });


    var data3 =   firebase.database().ref('users/' + uid).child("płeć");
       data3.on('value', function(snapshot){
        var gender = document.getElementById('displaygender');
            if(snapshot.val() == ""){
              gender.innerHTML = "Brak danych";
            
        }else{
          gender.innerHTML = snapshot.val();
        }
       });

       var data4 =   firebase.database().ref('users/' + uid).child("wiek");
       data4.on('value', function(snapshot){
        var age = document.getElementById('displayage');
            
            var wiek = document.getElementById('profilwiek');
               if(snapshot.val() == "" || snapshot.val() == null){
              wiek.placeholder = "Wpisz wiek";
              age.innerHTML = "Brak danych";
            }else{
            wiek.placeholder = snapshot.val();
            age.innerHTML = snapshot.val() + " lat";
          }

       });

     }else{
      window.location.href = "page2.html"
     }
   });
  }

  personalData();
  var prevScrollpos = window.pageYOffset;



window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0";


  } else {
    document.getElementById("navbar").style.bottom = "-81px";
  }
  prevScrollpos = currentScrollPos;
}