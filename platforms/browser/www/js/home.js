const provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();
var uzytkownik;
var plecstatus;
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}
document.querySelector('#signOut').addEventListener('click', function () {
  window.location = "page2.html";
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
});

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
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {} else {
    window.location.href = "page2.html";
  }
});

function daneOsobowe() {
  var dane = document.getElementById('daneosobowe');
  firebase.auth().onAuthStateChanged(function (user) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
 
    if (user) {
      var data = firebase.database().ref('users/' + uid).child("name");
      data.on('value', function (snapshot) {
        if (snapshot.val() == "" || snapshot.val() == null) {
          dane.innerHTML = "Brak danych";
        } else {
          dane.innerHTML = snapshot.val() + " ";
        }
      });
      var data2 = firebase.database().ref('users/' + uid).child("secondname");
      data2.on('value', function (snapshot) {
        if (snapshot.val() == "" || snapshot.val() == null) {} else {
          var text = document.createTextNode(snapshot.val());
          dane.appendChild(text);
        }
      });
      var data3 = firebase.database().ref('users/' + uid).child("płeć");
      data3.on('value', function (snapshot) {
        plecstatus = snapshot.val();
        var zdjecie = document.getElementById('zdjecieprofilowe');
        if (plecstatus == "Kobieta") {
          zdjecie.src = "img/female.png";
        } else {
          zdjecie.src = "img/male.png";
        }
      });
    } else {
      window.location.href = "page2.html";
    }
  });
}
// checkIfGoogle();
daneOsobowe();

function addZeroes(num) {
  var tostring = num.toString();
  var value = Number(tostring);
  var res = tostring.split(".");
  if (res.length < 10 || (res[1].length < 3)) {
    value = value.toFixed(2);
  } else {}
  return value
}

function homePage() {
  firebase.auth().onAuthStateChanged(function (user) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var licznik = 0;
    var tablica = [];
    var tabindex = 0;
    var tablica2 = [];
    var tabindex2 = 0;
    var negatywne = [];
    var twojewartosci = [];
    var rozneodnormy = [];
    var przekroczonawartosc = [];
    var wartosc = [];
    var obliczenia;
    var data;
    var data2;
    var bialekrwinki;
    var czerwonekrwinki;
    var hemoglobina;
    var hematokryt;
    var limfocyty;
    var monocyty;
    var mcv;
    var mch;
    var mchc;
    var plytkikrwi;
    var ob;
    var glukoza;
    var cholesterol;
    var tsh;
    var alat;
    var aspat;
    var potas;
    var sod;
    var magnez;
    var wapn;
    var zelazo;
    var witaminab;
    var msec = new Date();
    var text;
    var text2 = msec.getTime();
    var wynik;
    var gornyzakres = [11, 6.5, 18, 51, 45, 0.4, 97, 32, 36, 400, 20, 99, 199, 5, 40, 45, 5.5, 145, 1.2, 2.75, 158, 740];
    var dolnyzakres = [4.1, 4.5, 13.5, 40, 20, 0.1, 80, 26, 31, 140, 3, 70, 170, 0.32, 5, 8, 3.5, 135, 0.65, 2.25, 50, 148];
    var gornyzakreskobiety = [11, 5.6, 15.5, 47, 45, 0.4, 97, 32, 36, 400, 30, 99, 199, 5, 40, 35, 5.5, 145, 1.2, 2.75, 145, 740];
    var dolnyzakreskobiety = [4.1, 3.9, 11.5, 37, 20, 0.1, 80, 26, 31, 140, 6, 70, 170, 0.32, 5, 7, 3.5, 135, 0.65, 2.25, 37, 148];
    var nazwy = ["Białe krwinki", "Czerwone krwinki", "Hemoglobina", "Hematokryt", "Limfocyty", "Monocyty", "MCV", "MCH", "MCHC", "Płytki krwi", "OB", "Glukoza", "Cholesterol", "TSH", "ALAT", "AspAT", "Potas", "Sód", "Magnez", "Wapń", "Żelazo", "Witamina B12"];
    if (user) {
      var ref = firebase.database().ref('users/' + uid + '/Badania/').orderByKey();
      ref.on('value', function (badaniaSnapshot) {
        badaniaSnapshot.forEach(function (snapshot) {
          var key = snapshot.key;
          if (key != "") {
            tablica[tabindex] = key;
            tabindex = tabindex + 1;
          }
        });
        if (tabindex != 0) {
          var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + tablica[tablica.length - 1]);
          ref2.on('value', function (snapshot2) {
            var key2 = snapshot2.val();
            wartosc[0] = key2.Białe_krwinki;
            wartosc[1] = key2.Czerwone_krwinki;
            wartosc[2] = key2.Hemoglobina;
            wartosc[3] = key2.Hematokryt;
            wartosc[4] = key2.Limfocyty;
            wartosc[5] = key2.Monocyty;
            wartosc[6] = key2.MCV;
            wartosc[7] = key2.MCH;
            wartosc[8] = key2.MCHC;
            wartosc[9] = key2.Płytki_krwi;
            wartosc[10] = key2.OB;
            wartosc[11] = key2.Glukoza;
            wartosc[12] = key2.Cholesterol;
            wartosc[13] = key2.TSH;
            wartosc[14] = key2.ALAT;
            wartosc[15] = key2.AspAT;
            wartosc[16] = key2.Potas;
            wartosc[17] = key2.Sód;
            wartosc[18] = key2.Magnez;
            wartosc[19] = key2.Wapń;
            wartosc[20] = key2.Żelazo;
            wartosc[21] = key2.Witamina_B12;
            var data3 = firebase.database().ref('users/' + uid).child("płeć");
            data3.on('value', function (snapshot) {
              plecstatus = snapshot.val();
              if (plecstatus == "Mężczyzna") {
                for (var i = 1; i <= 22; i++) {
                  if (wartosc[i - 1] != 0) {
                    if (wartosc[i - 1] < dolnyzakres[i - 1]) {
                      negatywne.push(nazwy[i - 1]);
                      twojewartosci.push(addZeroes(wartosc[i - 1]));
                      rozneodnormy.push("Poniżej normy");
                      obliczenia = dolnyzakres[i - 1] - wartosc[i - 1];
                      przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
                      licznik++;
                    } else if (wartosc[i - 1] > gornyzakres[i - 1]) {
                      negatywne.push(nazwy[i - 1]);
                      twojewartosci.push(addZeroes(wartosc[i - 1]));
                      rozneodnormy.push("Powyżej normy");
                      obliczenia = wartosc[i - 1] - gornyzakres[i - 1];
                      przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
                      licznik++;
                    }
                  } else {}
                }
              } else {
                for (var i = 1; i <= 22; i++) {
                  if (wartosc[i - 1] != 0) {
                    if (wartosc[i - 1] < dolnyzakreskobiety[i - 1]) {
                      negatywne.push(nazwy[i - 1]);
                      twojewartosci.push(addZeroes(wartosc[i - 1]));
                      rozneodnormy.push("Poniżej normy");
                      obliczenia = dolnyzakreskobiety[i - 1] - wartosc[i - 1];
                      przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
                      licznik++;
                    } else if (wartosc[i - 1] > gornyzakreskobiety[i - 1]) {
                      negatywne.push(nazwy[i - 1]);
                      twojewartosci.push(addZeroes(wartosc[i - 1]));
                      rozneodnormy.push("Powyżej normy");
                      obliczenia = wartosc[i - 1] - gornyzakreskobiety[i - 1];
                      przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
                      licznik++;
                    }
                  } else {}
                }
              }
              var licznikpomocniczy = licznik;
              if (licznikpomocniczy > 4) {
                licznikpomocniczy = 4;
              } else {}
              // if(tabindex != 0){
              var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + tablica[tablica.length - 1]).child("Data");
              ref2.on('value', function (snapshot4) {
                data = snapshot4.val();
                var splitdata = data.split(" ");
                var idostatniegobadania = document.getElementById('dataostatniegobadania');
                idostatniegobadania.innerHTML = splitdata[0] + " " + splitdata[1];
              });
              var liczby = [];
              for (var j = 1; j <= licznik; j++) {
                liczby.push(j);
              }
              if (licznik != 0) {
                for (var i = 1; i <= licznikpomocniczy; i++) {
                  if (negatywne.length != 0) {
                    var random = Math.floor(Math.random() * licznik);
                    var podstaw = liczby[random];
                    liczby.splice(random, 1);
                    licznik--;
                  } else {}
                  $("#homewyswietlanie").append('  <div class="first-box" id="rest-box"> \
        <div class="rest-box-content"> \
          <div class="circle"  style="" id="znakwskaznika">G</div> \
        </div> \
         \
        <div class="container-element-box"> \
          <div style="color: #3A4759; font-size: 14px; font-weight:600" id="rodzaj">Glukoza</div>  \
          <span class="value-element-mark">wartość: \
           <span style="color:#E36E7B" id="rozneodnormy">powyżej normy</span> \
         </span> \
        </div> \
 \
       <div class="value-element-inner"> \
        <div style="color: #E36E7B; font-size: 12px;" ><span id="wartoscwskaznika">115,00</span>  \
          <span style="font-size: 10px; color: #47A0B5" id="przekroczonawartosc">(+12,00)</span> \
        </div> \
         <span class="element-date" id="databadania">Kwi. 24</span> \
       </div> \
      </div>   ');
                  var id = document.getElementById('rodzaj');
                  var idwartosc = document.getElementById('wartoscwskaznika');
                  var idnorma = document.getElementById('rozneodnormy')
                  var idznak = document.getElementById('znakwskaznika');
                  var idprzekroczonawartosc = document.getElementById('przekroczonawartosc')
                  var iddatabadania = document.getElementById('databadania');
                  id.setAttribute('id', "rodzaj" + i);
                  id.innerHTML = negatywne[podstaw - 1];
                  idwartosc.setAttribute('id', 'wartoscwskaznika ' + i);
                  idwartosc.innerHTML = twojewartosci[podstaw - 1];
                  idnorma.setAttribute('id', 'rozneodnormy ' + i);
                  idnorma.innerHTML = rozneodnormy[podstaw - 1];
                  idznak.setAttribute('id', 'znakwskaznika ' + i);
                  idznak.innerHTML = negatywne[podstaw - 1].charAt(0);
                  idprzekroczonawartosc.setAttribute('id', 'przekroczonawartosc ' + i);
                  idprzekroczonawartosc.innerHTML = przekroczonawartosc[podstaw - 1];
                  iddatabadania.setAttribute('id', "databadania " + i);
                  iddatabadania.innerHTML = data;
                }
                for (var j = 1; j <= licznikpomocniczy; j = j + 2) {
                  var idznak = document.getElementById('znakwskaznika ' + j);
                  idznak.style.backgroundColor = "#4298b7";
                }
              } else {
                $("#homewyswietlanie").append('<div class="uk-text-center" style="margin: 30px 0;"><div class="uk-alert-success" uk-alert><a class="uk-alert-close" uk-close></a><p>Wszysie wyniki w normie. <br> <span style="font-size: 25px; font-weight: 600; ">HURA</span>.</p></div></div>')
              }
            });
          });
        } else {
          $('#ostatnietext').remove();
          $('#ostatnieicon').remove();
          $('#wyswietlostatniebadanie').append('  <div class="first-box-content">  <div class="first-box-date" id="dataostatniegobadania">Brak Badań</div>   <div class="first-box-comment">Dodaj swoje badanie</div>   </div>   <div class="icon">     <a  href="dodajbadanie.html"> <span uk-icon="icon:  chevron-right; ratio: 1.75" style="color: #E36E7B;"></span></a>   </div>   ');
          $('#button-dodaj').append('<div class="uk-text-center" style="margin-top:30px;"><a href="dodajbadanie.html" class="uk-button uk-button-primary">Dodaj Badanie</a></div>')
        }
      });
    } else {
      window.location.href = "page2.html";
    }
  });
}

function sprawdzProfil() {
  firebase.auth().onAuthStateChanged(function (user) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var imie;
    var nazwisko;
    var wiek;
    var plec;
    if (user) {
      var data = firebase.database().ref('users/' + uid).child("name");
      data.on('value', function (snapshot) {
        imie = snapshot.val();
        var data2 = firebase.database().ref('users/' + uid).child("secondname");
        data2.on('value', function (snapshot) {
          nazwisko = snapshot.val();
          var data3 = firebase.database().ref('users/' + uid).child("wiek");
          data3.on('value', function (snapshot) {
            wiek = snapshot.val();
            var data4 = firebase.database().ref('users/' + uid).child("płeć");
            data4.on('value', function (snapshot) {
              plec = snapshot.val();
              if (imie == "" || nazwisko == "" || wiek == "" || plec == "" || imie == null || nazwisko == null || wiek == null || plec == null) {
                window.location.href = "updated-profil.html";
              }
            });
          });
        });
      });
    } else {
      window.location.href = "page2.html";
    }
  });
}
sprawdzProfil();
homePage();
var ostatniebadanie = document.getElementById('ostatniebadanie');
var zliczanie;
firebase.auth().onAuthStateChanged(function (user) {
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  if (user) {
    var ref = firebase.database().ref('users/' + uid + '/Badania');
    ref.once('value', function (snapshot) {
      zliczanie = snapshot.numChildren();
      ostatniebadanie.setAttribute('id', "ostatniebadanie" + zliczanie);
    });
  } else {
    window.location.href = "page2.html";
  }
});

function sendID(clickID) {
  var somval = clickID;
  window.location = 'badania-adv.html?somval=' + somval;
}