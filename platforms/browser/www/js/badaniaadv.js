
  function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var qsParm = new Array();
function qs() {
    var query = window.location.search.substring(1);
    console.log(query);
    var parms = query.split('&');
    console.log(parms);
    for (var i=0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsParm[key] = val;
            console.log(qsParm[key]);
            console.log(query);
        }
    }
    return qsParm[key];
}






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





const provider = new firebase.auth.GoogleAuthProvider();
        var database = firebase.database();
        var plecstatus;

         firebase.auth().onAuthStateChanged(function(user) {
          var user = firebase.auth().currentUser;
          var uid = user.uid;

          if(user){
  var data3 =   firebase.database().ref('users/' + uid).child("płeć");
       data3.on('value', function(snapshot){
         plecstatus = snapshot.val();
});
     }else{
      
     }
     }); 
    



            


    function addZeroes( num ) {
    var tostring = num.toString();
    var value = Number(tostring);
    var res = tostring.split(".");
    if(res.length < 10 || (res[1].length < 3)) {
        value = value.toFixed(2);
    }else{

    }
    return value
}



function szczegolyPage (clicked_id) {
        firebase.auth().onAuthStateChanged(function(user) {
          $('.container_badanie_bad_above').remove();
          $('.separator').remove();
          var id = clicked_id; 
          var numberPattern = /\d+/g;

          var id2 = id.match(numberPattern);
          var user = firebase.auth().currentUser;
          var uid = user.uid;
          var licznik = 0;
          var licznik_prawidlowe = 0;
          var procent;
          var tablica = [];
          var tabindex = 0;
          var tablica2 = [];
          var tabindex2 = 0 ;
          var negatywne = [];
          var pozytywy = [];          
          var gornyzakres = [11,6.5,18,51,45,0.4,97,32,36,400,20,99,199,5,40,45,5.5,145,1.2,2.75,158,740];
          var dolnyzakres = [4.1,4.5,13.5,40,20,0.1,80,26,31,140,3,70,170,0.32,5,8,3.5,135,0.65,2.25,50,148];
          var gornyzakreskobiety = [11,5.6,15.5,47,45,0.4,97,32,36,400,30,99,199,5,40,35,5.5,145,1.2,2.75,145,740];
          var dolnyzakreskobiety = [4.1,3.9,11.5,37,20,0.1,80,26,31,140,6,70,170,0.32,5,7,3.5,135,0.65,2.25,37,148];
          var nazwy = ["Białe krwinki", "Czerwone krwinki", "Hemoglobina", "Hematokryt", "Limfocyty", "Monocyty", "MCV", "MCH",
                      "MCHC", "Płytki krwi", "OB", "Glukoza", "Cholesterol", "TSH", "ALAT", "AspAT", "Potas",
                      "Sód", "Magnez", "Wapń", "Żelazo", "Witamina B12"];
           var nazwy2 = ["Bialekrwinki", "Czerwonekrwinki", "Hemoglobina", "Hematokryt", "Limfocyty", "Monocyty", "MCV", "MCH",
                      "MCHC", "Plytkikrwi", "OB", "Glukoza", "Cholesterol", "TSH", "ALAT", "AspAT", "Potas",
                      "Sod", "Magnez", "Wapn", "Zelazo", "WitaminaB12"];           

          var twojewartosci = [];
          var rozneodnormy = [];
          
          var przekroczonawartosc = [];
          var prawidłowe = 0;
          var obliczenia ;
          var data;
          var wartosc = [];
         
    if(user){

      var ref = firebase.database().ref('users/' + uid + '/Badania/').orderByKey();
   ref.on('value',function(badaniaSnapshot){



    badaniaSnapshot.forEach(function(snapshot){
      var key = snapshot.key;
      tablica[tabindex] = key;
      console.log(tablica[tabindex]);
        tabindex = tabindex + 1;
        console.log(tablica.length);


});

         var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + tablica[id2 - 1]);
          ref2.on('value', function(snapshot2){
            var key2 = snapshot2.val();
            
            wartosc[0] = key2.Białe_krwinki;
            wartosc[1] = key2.Czerwone_krwinki;
            wartosc[2] = key2.Hemoglobina;
            wartosc[3] = key2.Hematokryt;
            wartosc[4] = key2.Limfocyty ;
            wartosc[5] = key2.Monocyty ;
            wartosc[6] = key2.MCV;
            wartosc[7] = key2.MCH;
            wartosc[8] = key2.MCHC;
            wartosc[9] = key2.Płytki_krwi;
            wartosc[10] = key2.OB;
            wartosc[11] = key2.Glukoza;
            wartosc[12] = key2.Cholesterol ;
            wartosc[13] = key2.TSH ;
            wartosc[14] = key2.ALAT;
            wartosc[15] = key2.AspAT;
            wartosc[16] = key2.Potas ;
            wartosc[17] = key2.Sód ;
            wartosc[18] = key2.Magnez ;
            wartosc[19] = key2.Wapń;
            wartosc[20] = key2.Żelazo;
            wartosc[21] = key2.Witamina_B12 ;
            console.log('dolny zakres wynos ' + dolnyzakres.length);
            console.log('gorny zakres wynos ' + gornyzakres.length);

            if(plecstatus == "Mężczyzna"){
          for(var i = 1; i<=22; i++){
            if(wartosc[i - 1] != 0){
            if(wartosc[i - 1] > gornyzakres[i - 1]){
              licznik++;
              
            $('#szczegolybadaniamain').append('     <div class="container_badanie_bad_above"> \
          <div class="badania_all_inner"> \
            <div style="line-height: 100%;"> \
              \
              <span class="badania_bad_above_wskaznik" id="nazwawskaznika"> \
                WBC Białe krwinki \
              </span> \
              <br><br> \
               \
              <span class="badania_all_wartosc_value_text"> \
                wartość ponad normą \
              </span> \
              <br> \
 \
              <span class="badania_bad_above_value" id="wartoscszczegoly"> \
                144,00 \
              </span> \
 \
              <span class="badania_bad_above_value_sec" id="wartoscroznaodnormy"> \
                (+12,00) \
              </span> \
              <br><br> \
 \
              <span class="badania_all_note" id="wskazowki"> \
                W Twoim organizmie toczy się infekcja/ stan zapalny, zbadaj się dokładnie. \
              </span> \
\
              <div class="box">             <div class ="content-box">               <div class="ikona"><img src="img/doctor1.png" alt=""></div>                <div class="line">&nbsp;</div>                  <div class="tekst" id="notepowyzej"></div>                </div>              </div>\
 \
            </div> \
          </div> \
      </div> \
 \
      <div name="Separator" style=" background-color: #eaeaea; width: 100%; height: 4px; " class="separator"></div>');
$(document).ready(function(){ 
            var nazwawskaznika = document.getElementById('nazwawskaznika');
            var wartoscszczegoly = document.getElementById('wartoscszczegoly');
            var wartoscroznaodnormy = document.getElementById('wartoscroznaodnormy');
            var wskazowki = document.getElementById('wskazowki');
            var notepowyzej = document.getElementById('notepowyzej');
            nazwawskaznika.setAttribute('id', 'nazwawskaznika ' + i);
            nazwawskaznika.innerHTML = nazwy[i - 1];
            wartoscszczegoly.setAttribute('id', 'wartoscszczegoly ' + i);
            wartoscszczegoly.innerHTML = addZeroes(wartosc[i - 1]);
            obliczenia = wartosc[i - 1] - gornyzakres[i - 1];
            wartoscroznaodnormy.setAttribute('id', 'wartoscroznaodnormy ' + i);
            wartoscroznaodnormy.innerHTML = "(+ " + addZeroes(obliczenia) + ")";
            wskazowki.setAttribute('id', 'wskazowki ' + i);
            notepowyzej.setAttribute('id', 'notepowyzej ' + i);
            var xhttp = new XMLHttpRequest();
            var file = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/Powyzej.json";
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   wskazowki.innerHTML = xhttp.responseText.replace(/['"]+/g, '');
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();

            var xhttp2 = new XMLHttpRequest();
            var file2 = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/NotePowyzej.json";
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   notepowyzej.innerHTML = xhttp2.responseText.replace(/['"]+/g, '');
                }
            };
            xhttp2.open("GET", file2, true);
            xhttp2.send();
          });

                  }else if(wartosc[i - 1] < dolnyzakres[i - 1]){
              licznik++;
              

               $('#szczegolybadaniamain').append('    <div class="container_badanie_bad_above badania_bad_below_border" id=""> \
          <div class="badania_all_inner">  \
            <div style="line-height: 100%;"> \
               \
              <span class="badania_bad_above_wskaznik badania_bad_below" id="nazwawskaznika" > \
                HGB(Hb) Hemoglobina \
              </span> \
              <br><br> \
               \
              <span class="badania_all_wartosc_value_text"> \
                wartość poniżej normą \
              </span> \
              <br> \
 \
              <span class="badania_bad_above_value badania_bad_below" id="wartoscszczegoly"> \
                144,00 \
              </span> \
 \
              <span class="badania_bad_above_value_sec badania_bad_below" id="wartoscroznaodnormy"> \
                (-12,00) \
              </span> \
              <br><br> \
 \
              <span class="badania_all_note" id="wskazowki"> \
                Możliwe, że masz anemię. Uzupełnij niedobór żelaza, witaminy B12 lub kwasu foliowego. \
              </span> \
           <div class="box" style="margin-top:20px">              <div class ="content-box">                 <div class="ikona"><img src="img/doctor.png" alt=""></div>                <div class="line">&nbsp;</div>                 <div class="tekst" id="noteponizej"></div>              </div>            </div>\
            </div> \
          </div> \
      </div> \
 \
      <div name="Separator" style=" background-color: #eaeaea; width: 100%; height: 4px; " class="separator"></div>');

            $(document).ready(function(){ 
            var nazwawskaznika = document.getElementById('nazwawskaznika');
            var wartoscszczegoly = document.getElementById('wartoscszczegoly');
            var wartoscroznaodnormy = document.getElementById('wartoscroznaodnormy');
            var wskazowki = document.getElementById('wskazowki');
            var noteponizej = document.getElementById('noteponizej');
            nazwawskaznika.setAttribute('id', 'nazwawskaznika ' + i);
            nazwawskaznika.innerHTML = nazwy[i - 1];
            wartoscszczegoly.setAttribute('id', 'wartoscszczegoly ' + i);
            wartoscszczegoly.innerHTML = addZeroes(wartosc[i - 1]);
            obliczenia = dolnyzakres[i - 1] - wartosc[i - 1] ;
            wartoscroznaodnormy.setAttribute('id', 'wartoscroznaodnormy ' + i);
            wartoscroznaodnormy.innerHTML = "(- " + addZeroes(obliczenia) + ")"
            wskazowki.setAttribute('id','wskazowki ' + i);
            noteponizej.setAttribute('id', 'noteponizej ' + i);
          
            var xhttp = new XMLHttpRequest();
            var file = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/Ponizej.json";
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   wskazowki.innerHTML = xhttp.responseText.replace(/['"]+/g, '');
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();

            var xhttp2 = new XMLHttpRequest();
            var file2 = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/NotePonizej.json";
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   noteponizej.innerHTML = xhttp2.responseText.replace(/['"]+/g, '');
                }
            };
            xhttp2.open("GET", file2, true);
            xhttp2.send();
                       
          });

            }else if(wartosc[i - 1] >= dolnyzakres[i - 1] && wartosc[i - 1] <= gornyzakres[i-1]){
              licznik_prawidlowe++;
              $('#szczegolybadaniamain').append('<div class="container_badanie_bad_above badania_good_border" id=""> \
          <div class="badania_all_inner">\
            <div style="line-height: 100%;">\
              \
              <span class="badania_bad_above_wskaznik badania_good" id="nazwawskaznika" >\
                Glukoza\
              </span>\
              <br><br>\
              \
              <span class="badania_all_wartosc_value_text">\
                wartość w normie\
              </span>\
              <br>\
\
              <span class="badania_bad_above_value badania_good" id="wartoscszczegoly">\
                144,00\
              </span>\
\
              <br><br>\
\
              <span class="badania_all_note">\
                Twoje wyniki są w normie. Trzymaj tak dalej!\
              </span>\
\
            </div>\
          </div>\
      </div>\
      \
      <div name="Separator" style=" background-color: #eaeaea; width: 100%; height: 4px; " class="separator"></div>');
              
            $(document).ready(function(){ 
            var nazwawskaznika = document.getElementById('nazwawskaznika');
            var wartoscszczegoly = document.getElementById('wartoscszczegoly');
            nazwawskaznika.setAttribute('id', 'nazwawskaznika ' + i);
            nazwawskaznika.innerHTML = nazwy[i - 1];
            wartoscszczegoly.setAttribute('id', 'wartoscszczegoly ' + i);
            wartoscszczegoly.innerHTML = addZeroes(wartosc[i - 1]);
          });
              }
          }
        }
      }else if(plecstatus == "Kobieta"){

        for(var i = 1; i<=22; i++){
            if(wartosc[i - 1] != 0){
            if(wartosc[i - 1] > gornyzakreskobiety[i - 1]){
              licznik++;
              
            $('#szczegolybadaniamain').append('     <div class="container_badanie_bad_above"> \
          <div class="badania_all_inner"> \
            <div style="line-height: 100%;"> \
              \
              <span class="badania_bad_above_wskaznik" id="nazwawskaznika"> \
                WBC Białe krwinki \
              </span> \
              <br><br> \
               \
              <span class="badania_all_wartosc_value_text"> \
                wartość ponad normą \
              </span> \
              <br> \
 \
              <span class="badania_bad_above_value" id="wartoscszczegoly"> \
                144,00 \
              </span> \
 \
              <span class="badania_bad_above_value_sec" id="wartoscroznaodnormy"> \
                (+12,00) \
              </span> \
              <br><br> \
 \
              <span class="badania_all_note" id="wskazowki"> \
                W Twoim organizmie toczy się infekcja/ stan zapalny, zbadaj się dokładnie. \
              </span> \
 \
            </div> \
<div class="box">             <div class ="content-box">               <div class="ikona"><img src="img/doctor1.png" alt=""></div>                <div class="line">&nbsp;</div>                  <div class="tekst" id="notepowyzej"></div>                </div>              </div>\
          </div> \
      </div> \
 \
      <div name="Separator" style=" background-color: #eaeaea; width: 100%; height: 4px;"class="separator"></div>');
$(document).ready(function(){ 
            var nazwawskaznika = document.getElementById('nazwawskaznika');
            var wartoscszczegoly = document.getElementById('wartoscszczegoly');
            var wartoscroznaodnormy = document.getElementById('wartoscroznaodnormy');
            var wskazowki = document.getElementById('wskazowki');
            var notepowyzej = document.getElementById('notepowyzej');
            nazwawskaznika.setAttribute('id', 'nazwawskaznika ' + i);
            nazwawskaznika.innerHTML = nazwy[i - 1];
            wartoscszczegoly.setAttribute('id', 'wartoscszczegoly ' + i);
            wartoscszczegoly.innerHTML = addZeroes(wartosc[i - 1]);
            obliczenia = wartosc[i - 1] - gornyzakreskobiety[i - 1];
            wartoscroznaodnormy.setAttribute('id', 'wartoscroznaodnormy ' + i);
            wartoscroznaodnormy.innerHTML = "(+ " + addZeroes(obliczenia) + ")";
            wskazowki.setAttribute('id', 'wskazowki ' + i);
            notepowyzej.setAttribute('id', 'notepowyzej ' + i);
            var xhttp = new XMLHttpRequest();
            var file = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/Powyzej.json";
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   wskazowki.innerHTML = xhttp.responseText.replace(/['"]+/g, '');
                }
            };

            xhttp.open("GET", file, true);
            xhttp.send();

            var xhttp2 = new XMLHttpRequest();
            var file2 = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/NotePowyzej.json";
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   notepowyzej.innerHTML = xhttp2.responseText.replace(/['"]+/g, '');
                }
            };
            xhttp2.open("GET", file2, true);
            xhttp2.send();

           
            
          });

                  }else if(wartosc[i - 1] < dolnyzakreskobiety[i - 1]){
              licznik++;
              

               $('#szczegolybadaniamain').append('    <div class="container_badanie_bad_above badania_bad_below_border" id=""> \
          <div class="badania_all_inner">  \
            <div style="line-height: 100%;"> \
               \
              <span class="badania_bad_above_wskaznik badania_bad_below" id="nazwawskaznika" > \
                HGB(Hb) Hemoglobina \
              </span> \
              <br><br> \
               \
              <span class="badania_all_wartosc_value_text"> \
                wartość poniżej normą \
              </span> \
              <br> \
 \
              <span class="badania_bad_above_value badania_bad_below" id="wartoscszczegoly"> \
                144,00 \
              </span> \
 \
              <span class="badania_bad_above_value_sec badania_bad_below" id="wartoscroznaodnormy"> \
                (-12,00) \
              </span> \
              <br><br> \
 \
              <span class="badania_all_note" id="wskazowki"> \
                Możliwe, że masz anemię. Uzupełnij niedobór żelaza, witaminy B12 lub kwasu foliowego. \
              </span> \
\
              <div class="box">              <div class ="content-box">                 <div class="ikona"><img src="img/doctor.png" alt=""></div>                <div class="line">&nbsp;</div>                 <div class="tekst" id="noteponizej"></div>              </div>            </div>\
 \
            </div> \
          </div> \
      </div> \
 \
      <div name="Separator" style=" background-color: #eaeaea; width: 100%; height: 4px; " class="separator"></div>');

            $(document).ready(function(){ 
            var nazwawskaznika = document.getElementById('nazwawskaznika');
            var wartoscszczegoly = document.getElementById('wartoscszczegoly');
            var wartoscroznaodnormy = document.getElementById('wartoscroznaodnormy');
            var wskazowki = document.getElementById('wskazowki');
            var noteponizej = document.getElementById('noteponizej');
            nazwawskaznika.setAttribute('id', 'nazwawskaznika ' + i);
            nazwawskaznika.innerHTML = nazwy[i - 1];
            wartoscszczegoly.setAttribute('id', 'wartoscszczegoly ' + i);
            wartoscszczegoly.innerHTML = addZeroes(wartosc[i - 1]);
            obliczenia = dolnyzakreskobiety[i - 1] - wartosc[i - 1] ;
            wartoscroznaodnormy.setAttribute('id', 'wartoscroznaodnormy ' + i);
            wartoscroznaodnormy.innerHTML = "(- " + addZeroes(obliczenia) + ")"
            wskazowki.setAttribute('id','wskazowki ' + i);
            noteponizej.setAttribute('id','noteponizej ' + i);
        
            var xhttp = new XMLHttpRequest();
            var file = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/Ponizej.json";
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   wskazowki.innerHTML = xhttp.responseText.replace(/['"]+/g, '');
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();

             
            var xhttp2 = new XMLHttpRequest();
            var file2 = "https://health-care-71096.firebaseio.com/Komunikaty/" + nazwy2[i - 1]+ "/NotePonizej.json";
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   noteponizej.innerHTML = xhttp2.responseText.replace(/['"]+/g, '');
                }
            };
            xhttp2.open("GET", file2, true);
            xhttp2.send();
                       
          });

            }else if(wartosc[i - 1] >= dolnyzakreskobiety[i - 1] && wartosc[i - 1] <= gornyzakreskobiety[i-1]){
              licznik_prawidlowe++;
              $('#szczegolybadaniamain').append('<div class="container_badanie_bad_above badania_good_border" id=""> \
          <div class="badania_all_inner">\
            <div style="line-height: 100%;">\
              \
              <span class="badania_bad_above_wskaznik badania_good" id="nazwawskaznika" >\
                Glukoza\
              </span>\
              <br><br>\
              \
              <span class="badania_all_wartosc_value_text">\
                wartość w normie\
              </span>\
              <br>\
\
              <span class="badania_bad_above_value badania_good" id="wartoscszczegoly">\
                144,00\
              </span>\
\
              <br><br>\
\
              <span class="badania_all_note">\
                Twoje wyniki są w normie. Trzymaj tak dalej!\
              </span>\
\
            </div>\
          </div>\
      </div>\
      \
      <div name="Separator" style=" background-color: #eaeaea; width: 100%; height: 4px; " class="separator"></div>');
              
            $(document).ready(function(){ 
            var nazwawskaznika = document.getElementById('nazwawskaznika');
            var wartoscszczegoly = document.getElementById('wartoscszczegoly');
            nazwawskaznika.setAttribute('id', 'nazwawskaznika ' + i);
            nazwawskaznika.innerHTML = nazwy[i - 1];
            wartoscszczegoly.setAttribute('id', 'wartoscszczegoly ' + i);
            wartoscszczegoly.innerHTML = addZeroes(wartosc[i - 1]);
          });
              }
          }
        }

      }

            

            prawidłowe = licznik_prawidlowe;

            var correct = document.getElementById('correctValue');
            var no_correct = document.getElementById('IncorrectValue');
            correct.innerHTML = prawidłowe;
            no_correct.innerHTML = licznik;
            procent = prawidłowe/(licznik + licznik_prawidlowe);
            

            if(procent > 0.8){
              var el = document.getElementById('testbadanie');
              el.src = "img/dobrze.png";
            }else if(procent <= 0.8 && procent >= 0.54){
              var el = document.getElementById('testbadanie');
              el.src = "img/srednio.png";
            }else if(procent < 0.54){
              var el = document.getElementById('testbadanie');
              el.src = "img/slabo.png";
            }

            var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + tablica[id2 - 1]).child("Data");
          ref2.on('value', function(snapshot4){

              data = snapshot4.val();
              var datachange = document.getElementById('data_change');
              datachange.innerHTML = data;
          });
            
console.log(licznik);



   }); 
     });
  



    }else{
window.location.href = "page2.html";
    }

        });




     }


szczegolyPage(qs());
