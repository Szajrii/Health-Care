var myVar;

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
    document.getElementById("AddButton").style.bottom = "110px"
  } else {
    document.getElementById("navbar").style.bottom = "-81px";
    document.getElementById("AddButton").style.bottom = "29px"
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

function addZeroes(num) {
  var tostring = num.toString();
  var value = Number(tostring);
  var res = tostring.split(".");
  if (res.length < 10 || (res[1].length < 3)) {
    value = value.toFixed(2);
  } else {}
  return value
}

function pokazBadanie() {
  var i = 1;
  var j = 1;
  var g = 1;
  firebase.auth().onAuthStateChanged(function (user) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var licznik;
    if (user) {
      var ref = firebase.database().ref('users/' + uid + '/Badania');
      ref.once('value', function (snapshot) {
        licznik = snapshot.numChildren();
        if (licznik != 0) {
          while (i <= licznik) {
            $("#wyswietlanie").append(' <div id="sort"> <div class="first-box rest-box" id="szczegoly" onclick="sendID(this.id)"> \
        <div class="rest-box-content"> \
          <img src="img/icons/blood-green.png" alt="" id="c"> \
        </div> \
        \
        <div class="container-element-box">  \
          <div style="color: #3A4759; text-transform: none;">Badanie krwi</div>  \
          <span class="value-element-mark">wynik: \
           <span style="color:green;" id="b">prawidłowy</span> \
         </span> \
        </div> \
\
      <div class="value-element-inner"> \
        <div style="color: #A6B1C0; text-transform: none; font-weight: 400; font-size: 11px;" id ="asdd">2018 Luty 14 \
          \
        </div> \
         <div><a color ="blue" class="ahrefDecoration" >zobacz szczegóły</a></div> \
       </div> \
      </div> </div>');
            var x = document.getElementById('asdd');
            x.setAttribute("id", "data " + i);
            var sort = document.getElementById('sort');
            sort.setAttribute("id", "sort " + i);
            var szczegoly = document.getElementById('szczegoly');
            szczegoly.setAttribute('id', "szczegoly" + i);
            var wynikbadania = document.getElementById('b');
            var kolor = document.getElementById('c');
            wynikbadania.setAttribute("id", "wynik " + i);
            kolor.setAttribute("id", "kolor " + i);
            i = i + 1;
          }
          var j = 1;
          var g = 1;
          var ref = firebase.database().ref('users/' + uid + '/Badania/').orderByKey();
          ref.on('value', function (badaniaSnapshot) {
            badaniaSnapshot.forEach(function (snapshot) {
              var key = snapshot.key;
              var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + key).child("Data");
              ref2.on('value', function (snapshot2) {
                var obj = snapshot2.val();
                var y = document.getElementById('data ' + j);
                y.innerHTML = obj;
                j = j + 1;
              });
              var ref3 = firebase.database().ref('users/' + uid + '/Badania/' + key).child("Wynik");
              ref3.on('value', function (snapshot3) {
                var wynikbadania1 = snapshot3.val();
                var wynik = document.getElementById("wynik " + g);
                var kolor = document.getElementById("kolor " + g);
                var sort = document.getElementById("sort " + g);
                var wynikbadania1 = snapshot3.val();
                wynik.innerHTML = wynikbadania1;
                if (wynikbadania1 == "Prawidłowy") {
                  wynik.style.color = "green";
                  kolor.src = "img/icons/blood-green.png"
                  sort.classList.add("Prawidłowa");
                } else {
                  wynik.style.color = "red";
                  kolor.src = "img/icons/blood-red.png"
                  sort.classList.add("Nieprawidłowa");
                }
                g = g + 1;
              });
            });
          });
        } else {
          $('#wyswietlanie').append('<div id="brakbadan"><div class="uk-alert-danger uk-text-center uk-margin-top" uk-alert><p>Aktualnie masz żadnych badań!</p></div><div class="uk-text-center"><a href="dodajbadanie.html" class="uk-button uk-button-primary">Dodaj Badanie</a></div></div>')
        }
      });
    } else {
      window.location.href = "page2.html";
    }
  });
}
pokazBadanie();
$(document).ready(function () {
  $("#prawidłowebadania").click(function () {
    $("#prawidłowebadania").css({
      "background-color": '#E9E9E9',
      "font-weight": '600'
    });
    $("#nieprawidłowebadania").css({
      "background-color": 'transparent',
      "font-weight": '300'
    });
    $("#wszystkiebadania").css({
      "background-color": 'transparent',
      "font-weight": '300'
    });
    $(".Nieprawidłowa").hide();
    $(".Prawidłowa").show();
  });
  $("#nieprawidłowebadania").click(function () {
    $("#prawidłowebadania").css({
      "background-color": 'transparent',
      "font-weight": '300'
    });
    $("#nieprawidłowebadania").css({
      "background-color": '#E9E9E9',
      "font-weight": '600'
    });
    $("#wszystkiebadania").css({
      "background-color": 'transparent',
      "font-weight": '300'
    });
    $(".Prawidłowa").hide();
    $(".Nieprawidłowa").show();
  });
  $("#wszystkiebadania").click(function () {
    $("#prawidłowebadania").css({
      "background-color": 'transparent',
      "font-weight": '300'
    });
    $("#nieprawidłowebadania").css({
      "background-color": 'transparent',
      "font-weight": '300'
    });
    $("#wszystkiebadania").css({
      "background-color": '#E9E9E9',
      "font-weight": '600'
    });
    $(".Prawidłowa").show();
    $(".Nieprawidłowa").show();
  });
});

function sendID(clickID) {
  var somval = clickID;
  window.location = 'badania-adv.html?somval=' + somval;
}