var myVar;

function showGif() {
  document.getElementById("loader1").style.display = "block";
  document.getElementById("myDiv1").style.display = "none";
  document.getElementById("Siema").style.backgroundColor = "#9CD2FE"
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
const provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();
var plecstatus;
firebase.auth().onAuthStateChanged(function (user) {
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  if (user) {
    var data3 = firebase.database().ref('users/' + uid).child("płeć");
    data3.on('value', function (snapshot) {
      plecstatus = snapshot.val();
    });
  } else {}
});

function checkboxes(clicked_id) {
  var id = clicked_id;
  var numberPattern = /\d+/g;
  var id2 = id.match(numberPattern);
  var inputs = ['bialekrwinki1', 'czerwonekrwinki1', 'hemoglobina1', 'hematokryt1', 'limfocyty1', 'monocyty1', 'mcv1', 'mch1', 'mchc1', 'plytkikrwi1', 'ob1', 'glukoza1', 'cholesterol1', 'tsh1', 'alat1', 'aspat1', 'potas1', 'sod1', 'magnez1', 'wapn1', 'zelazo1', 'witaminab1'];
  var checkbox = document.getElementById(clicked_id);
  var input = document.getElementById(inputs[id2 - 1]);
  if (checkbox.checked) {
    input.disabled = false;
  } else {
    input.disabled = true;
    input.value = '';
  }
}
document.querySelector('#dodajbadania').addEventListener('click', function () {
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  if (user) {
    var wartosc = [];
    var liczniknieprawidlowe = 0;
    var licznikwszystkie = 0;
    var obliczenia;
    var prawidłowe;
    wartosc[0] = document.getElementById('bialekrwinki1').value;
    wartosc[1] = document.getElementById('czerwonekrwinki1').value;
    wartosc[2] = document.getElementById('hemoglobina1').value;
    wartosc[3] = document.getElementById('hematokryt1').value;
    wartosc[4] = document.getElementById('limfocyty1').value;
    wartosc[5] = document.getElementById('monocyty1').value;
    wartosc[6] = document.getElementById('mcv1').value;
    wartosc[7] = document.getElementById('mch1').value;
    wartosc[8] = document.getElementById('mchc1').value;
    wartosc[9] = document.getElementById('plytkikrwi1').value;
    wartosc[10] = document.getElementById('ob1').value;
    wartosc[11] = document.getElementById('glukoza1').value;
    wartosc[12] = document.getElementById('cholesterol1').value;
    wartosc[13] = document.getElementById('tsh1').value;
    wartosc[14] = document.getElementById('alat1').value;
    wartosc[15] = document.getElementById('aspat1').value;
    wartosc[16] = document.getElementById('potas1').value;
    wartosc[17] = document.getElementById('sod1').value;
    wartosc[18] = document.getElementById('magnez1').value;
    wartosc[19] = document.getElementById('wapn1').value;
    wartosc[20] = document.getElementById('zelazo1').value;
    wartosc[21] = document.getElementById('witaminab1').value;
    var msec = new Date();
    var text;
    var text2 = msec.getTime();
    var wynik;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var mm2 = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    var gornyzakres = [11, 6.5, 18, 51, 45, 0.4, 97, 32, 36, 400, 20, 99, 199, 5, 40, 45, 5.5, 145, 1.2, 2.75, 158, 740];
    var dolnyzakres = [4.1, 4.5, 13.5, 40, 20, 0.1, 80, 26, 31, 140, 3, 70, 170, 0.32, 5, 8, 3.5, 135, 0.65, 2.25, 50, 148];
    var gornyzakreskobiety = [11, 5.6, 15.5, 47, 45, 0.4, 97, 32, 36, 400, 30, 99, 199, 5, 40, 35, 5.5, 145, 1.2, 2.75, 145, 740];
    var dolnyzakreskobiety = [4.1, 3.9, 11.5, 37, 20, 0.1, 80, 26, 31, 140, 6, 70, 170, 0.32, 5, 7, 3.5, 135, 0.65, 2.25, 37, 148];
    if (plecstatus == "Mężczyzna") {
      for (var i = 1; i <= 22; i++) {
        if (wartosc[i - 1] != 0) {
          if (wartosc[i - 1] > gornyzakres[i - 1]) {
            liczniknieprawidlowe++;
            licznikwszystkie++;
          } else if (wartosc[i - 1] < dolnyzakres[i - 1]) {
            liczniknieprawidlowe++;
            licznikwszystkie++;
          } else {
            licznikwszystkie++;
          }
        }
      }
    } else {
      for (var i = 1; i <= 22; i++) {
        if (wartosc[i - 1] != 0) {
          if (wartosc[i - 1] > gornyzakreskobiety[i - 1]) {
            liczniknieprawidlowe++;
            licznikwszystkie++;
          } else if (wartosc[i - 1] < dolnyzakreskobiety[i - 1]) {
            liczniknieprawidlowe++;
            licznikwszystkie++;
          } else {
            licznikwszystkie++;
          }
        }
      }
    }
    prawidłowe = licznikwszystkie - liczniknieprawidlowe;
    obliczenia = prawidłowe / licznikwszystkie;
    if (obliczenia > 0.8) {
      wynik = "Prawidłowy"
    } else {
      wynik = "Nieprawidłowy"
    }
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    var today = dd + ' ' + mm2[mm] + ' ' + yyyy;
    var licznik;
    var ref = firebase.database().ref('users/' + uid + '/Badania');
    ref.once('value', function (snapshot) {
      licznik = snapshot.numChildren();
      firebase.database().ref('users/' + uid + '/Badania/' + text2).set({
        "Białe_krwinki": wartosc[0],
        "Czerwone_krwinki": wartosc[1],
        "Hemoglobina": wartosc[2],
        "Hematokryt": wartosc[3],
        "Limfocyty": wartosc[4],
        "Monocyty": wartosc[5],
        "MCV": wartosc[6],
        "MCH": wartosc[7],
        "MCHC": wartosc[8],
        "Płytki_krwi": wartosc[9],
        "OB": wartosc[10],
        "Glukoza": wartosc[11],
        "Cholesterol": wartosc[12],
        "TSH": wartosc[13],
        "ALAT": wartosc[14],
        "AspAT": wartosc[15],
        "Potas": wartosc[16],
        "Sód": wartosc[17],
        "Magnez": wartosc[18],
        "Wapń": wartosc[19],
        "Żelazo": wartosc[20],
        "Witamina_B12": wartosc[21],
        Data: today,
        Wynik: wynik,
      });
    });
  } else {
  }
  showGif();
  setTimeout(function () {
    window.location = "home.html";
  }, 5000);
});
firebase.auth().onAuthStateChanged(function (user) {
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  if (user) {} else {
    window.location.href = "page2.html";
  }
});