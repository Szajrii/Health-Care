document.querySelector('#dodajbadania').addEventListener('click', function () {
 
          var user = firebase.auth().currentUser;
          var uid = user.uid;
 if(user){
          var bialekrwinki = document.getElementById('bialekrwinki1').value;
          var czerwonekrwinki = document.getElementById('czerwonekrwinki1').value;
          var hemoglobina = document.getElementById('hemoglobina1').value;
          var hematokryt = document.getElementById('hematokryt1').value;
          var limfocyty = document.getElementById('limfocyty1').value;
          var monocyty = document.getElementById('monocyty1').value;
          var mcv = document.getElementById('mcv1').value;
          var mch = document.getElementById('mch1').value;
          var mchc = document.getElementById('mchc1').value;
          var plytkikrwi = document.getElementById('plytkikrwi1').value;
          var ob = document.getElementById('ob1').value;
          var glukoza = document.getElementById('glukoza1').value;
          var cholesterol = document.getElementById('cholesterol1').value;
          var tsh = document.getElementById('tsh1').value;
          var alat = document.getElementById('alat1').value;
          var aspat = document.getElementById('aspat1').value;
          var potas = document.getElementById('potas1').value;
          var sod = document.getElementById('sod1').value;
          var magnez = document.getElementById('magnez1').value;
          var wapn = document.getElementById('wapn1').value;
          var zelazo = document.getElementById('zelazo1').value;
          var witaminab = document.getElementById('witaminab1').value;
          var msec = new Date();
          var text;
          var text2 = msec.getTime();
          var wynik;
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth(); //January is 0!
          var mm2 = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

          if( 

            bialekrwinki < 4.1 || bialekrwinki > 11 ||
            czerwonekrwinki < 4.5 || czerwonekrwinki > 6.5 ||
            hemoglobina < 13.5 || hemoglobina > 18 ||
            hematokryt < 40 || hematokryt > 51 ||
            limfocyty < 20 || limfocyty > 45 ||
            monocyty  < 0.3 || monocyty > 0.8 ||
            mcv  < 80 || mcv > 97 ||
            mch < 26 || mch > 32 ||
            mchc < 31 || mchc > 36 ||
            plytkikrwi < 140 || plytkikrwi > 400 ||
            ob < 3 || ob > 8 ||
            glukoza < 70 || glukoza > 99 ||
            cholesterol < 170 || cholesterol > 199 ||
            tsh < 0.32 || tsh > 5.0 ||
            alat < 5 || alat > 40 ||
            aspat < 8 || aspat > 45 ||
            potas < 3.5 || potas > 5.5 ||
            sod < 135 || sod > 145 ||
            magnez < 0.65 || magnez > 1.2 ||
            wapn < 2.25 || wapn > 2.75 ||
            zelazo < 50 || zelazo > 158 ||
            witaminab < 148 || witaminab > 740 

            ){
              wynik = "Nieprawidłowy"
          }else{
            wynik = "Prawidłowy"
          }

          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 
         
          var today = dd+' '+mm2[mm]+' '+yyyy;
          //var userRef = firebase.database().ref.child('users/' + uid);
          var licznik;
          var ref = firebase.database().ref('users/' + uid + '/Badania');
          ref.once('value', function(snapshot){
              licznik = snapshot.numChildren();
            // var licznik2 = Number(licznik);
               
               // if(licznik == 0){
               //  text = "Badanie nr 1";
               // }else {
               //  licznik = licznik + 1;
               //  text = "Badanie nr " + licznik;
               // }

 firebase.database().ref('users/' + uid + '/Badania/' + text2).set({
         
    "Białe_krwinki" : bialekrwinki,
    "Czerwone_krwinki" : czerwonekrwinki,
    "Limfocyty" : limfocyty,
    "Hemoglobina" : hemoglobina,
    "Hematokryt" : hematokryt,
    "Monocyty" : monocyty,
    "MCV" : mcv,
    "MCH" : mch,
    "MCHC" : mchc,
    "Płytki_krwi" : plytkikrwi,
    "OB" : ob,
    "Glukoza" : glukoza,
    "Cholesterol" : cholesterol,
    "TSH" : tsh,
    "ALAT" : alat,
    "AspAT" : aspat,
    "Potas" : potas,
    "Sód" : sod,
    "Magnez" : magnez,
    "Wapń" : wapn,
    "Żelazo" : zelazo,
    "Witamina_B12" : witaminab,
     Data : today,
     Wynik: wynik,
    // "Data msec": text2
  

  });

          });
         
 // alert(licznik);
         }else{
          alert("Użytkownik Niezalogowany")
         }
         window.location.href = "#home";
         self.location.reload();
});