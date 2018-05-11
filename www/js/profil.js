var database = firebase.database();
var licznik;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0";
  } else {
    document.getElementById("navbar").style.bottom = "-81px";
  }
  prevScrollpos = currentScrollPos;
}

function pokazProfil() {
  var tablica = [];
  var tablicaglukoza = [];
  var tablicacisnienie = [];
  firebase.auth().onAuthStateChanged(function (user) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    if (user) {
      var ref = firebase.database().ref('users/' + uid + '/Badania');
      ref.once('value', function (snapshot) {
        licznik = snapshot.numChildren();
        var iloscbadan = document.getElementById('iloscbadan');
        iloscbadan.innerHTML = licznik;
      });
      var ref = firebase.database().ref('users/' + uid + '/Badania/').orderByKey();
      ref.on('value', function (badaniaSnapshot) {
        badaniaSnapshot.forEach(function (snapshot) {
          var key = snapshot.key;
          tablica.push(key);
        });
        if (tablica.length != 0) {
          var date = new Date();
          date.getTime();
          var obliczenia = date - tablica[tablica.length - 1];
          obliczenia = obliczenia / 1000;
          obliczenia = obliczenia / 60;
          obliczenia = obliczenia / (60 * 24);
          var text = obliczenia.toString();
          text.split('.');
          var dataostatniegobadania = document.getElementById('dataostatniegobadania');
          dataostatniegobadania.innerHTML = text[0] + " dni temu";
        } else {
          var dataostatniegobadania = document.getElementById('dataostatniegobadania');
          dataostatniegobadania.innerHTML = "Brak danych";
        }
      });
      var ref3 = firebase.database().ref('users/' + uid + '/Pomiary/Glukoza').orderByKey();
      ref3.on('value', function (badaniaSnapshot) {
        badaniaSnapshot.forEach(function (snapshot) {
          var key = snapshot.key;
          tablicaglukoza.push(key);
        });
        var ref4 = firebase.database().ref('users/' + uid + '/Pomiary/Cisnienie').orderByKey();
        ref4.on('value', function (badaniaSnapshot) {
          badaniaSnapshot.forEach(function (snapshot) {
            var key = snapshot.key;
            tablicacisnienie.push(key);
          });
          var date = new Date();
          date.getTime();
          if (tablicacisnienie[tablicacisnienie.length - 1] > tablicaglukoza[tablicaglukoza.length - 1]) {
            var pomiar = tablicacisnienie[tablicacisnienie.length - 1];
          } else if (tablicaglukoza[tablicaglukoza.length - 1] > tablicacisnienie[tablicacisnienie.length - 1]) {
            var pomiar = tablicaglukoza[tablicaglukoza.length - 1];
          }
          obliczenia = date - pomiar;
          obliczenia = obliczenia / 1000;
          obliczenia = obliczenia / 60;
          obliczenia = obliczenia / (60 * 24);
          var text = obliczenia.toString();
          text.split('.');
          var dataostatniegopomiaru = document.getElementById('dataostatniegopomiaru');
          if (text[0] != "N") {
            dataostatniegopomiaru.innerHTML = text[0] + " dni temu";
          } else {
            dataostatniegopomiaru.innerHTML = "Brak danych";
          }
        });
      });
      var ref2 = firebase.database().ref('users/' + uid + '/Pomiary/Cisnienie');
      ref2.once('value', function (snapshot) {
        licznik = snapshot.numChildren();
        var ref3 = firebase.database().ref('users/' + uid + '/Pomiary/Glukoza');
        ref3.once('value', function (snapshot2) {
          licznik = licznik + snapshot2.numChildren();
          var iloscpomiarow = document.getElementById('iloscpomiarow');
          iloscpomiarow.innerHTML = licznik;
        });
      });
      var data33 = firebase.database().ref('users/' + uid).child("płeć");
      data33.on('value', function (snapshot) {
        var image = document.getElementById('profilimage');
        var gender = document.getElementById('profilgender');
        gender.innerHTML = snapshot.val();
        if (snapshot.val() == "Mężczyzna") {
          image.src = "img/male-profil.png"
        } else if (snapshot.val() == "Kobieta") {
          image.src = "img/female-profil.png"
        }
      });
      var data34 = firebase.database().ref('users/' + uid).child("name");
      data34.on('value', function (snapshot) {
        var name = document.getElementById('profilname');
        if(snapshot.val() == null || snapshot.val() == ''){
          name.innerHTML = "Brak danych";
        }else{
          name.innerHTML = snapshot.val() + " ";
        }
      });
      var data35 = firebase.database().ref('users/' + uid).child("secondname");
      data35.on('value', function (snapshot) {
        var name = document.getElementById('profilname');
        var text = document.createTextNode(snapshot.val());
        if(snapshot.val() == null || snapshot.val() == ''){
    
        }else{
          name.appendChild(text);
        }
        
      });
    } else {
      window.location.href = "page2.html";
    }
  });
}
pokazProfil();