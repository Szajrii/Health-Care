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
console.log(addZeroes(5));

     function homePage () {
        firebase.auth().onAuthStateChanged(function(user) {
          var user = firebase.auth().currentUser;
          var uid = user.uid;
          var licznik = 0;
          var tablica = [];
          var tabindex = 0;
          var tablica2 = [];
          var tabindex2 = 0 ;
          var negatywne = [];
          var twojewartosci = [];
          var rozneodnormy = [];
          var przekroczonawartosc = [];
          var obliczenia ;
          var data;
          var bialekrwinki ;
          var czerwonekrwinki ;
          var hemoglobina ;
          var hematokryt ;
          var limfocyty ;
          var monocyty ;
          var mcv ;
          var mch ;
          var mchc ;
          var plytkikrwi ;
          var ob ;
          var glukoza ;
          var cholesterol ;
          var tsh ;
          var alat ;
          var aspat ;
          var potas ;
          var sod ;
          var magnez ;
          var wapn ;
          var zelazo ;
          var witaminab ;
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

         var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + tablica[tablica.length - 1]);
          ref2.on('value', function(snapshot2){
            var key2 = snapshot2.val();
            
            bialekrwinki = key2.Białe_krwinki;
            czerwonekrwinki = key2.Czerwone_krwinki;
            hemoglobina = key2.Hemoglobina;
            hematokryt = key2.Hematokryt;
            limfocyty = key2.Limfocyty ;
            monocyty = key2.Monocyty ;
            mcv = key2.MCV;
            mch = key2.MCH;
            mchc = key2.MCHC;
            plytkikrwi = key2.Płytki_krwi;
            ob = key2.OB;
            glukoza = key2.Glukoza;
            cholesterol = key2.Cholesterol ;
            tsh = key2.TSH ;
            alat = key2.ALAT;
            aspat = key2.AspAT;
            potas = key2.Potas ;
            sod = key2.Sód ;
            magnez = key2.Magnez ;
            wapn = key2.Wapń;
            zelazo = key2.Żelazo;
            witaminab = key2.Witamina_B12 ;

            if( bialekrwinki < 4.1  ){
              licznik = licznik + 1;
              negatywne[0] = "Białe krwinki";
              twojewartosci[0] = addZeroes(bialekrwinki);
              rozneodnormy[0] = "Poniżej normy";
              obliczenia = 4.1 - bialekrwinki;
              przekroczonawartosc[0] = "(- " + addZeroes(obliczenia) + ")";
            }if(bialekrwinki > 11){
              licznik = licznik + 1;
              negatywne[0] = "Białe krwinki";
              twojewartosci[0] = addZeroes(bialekrwinki);
              rozneodnormy[0] = "Powyżej normy";
              obliczenia =  bialekrwinki - 11;
              przekroczonawartosc[0] = "(+ " + addZeroes(obliczenia) + ")";
            }else{}

            if(czerwonekrwinki < 4.5 ){
              licznik = licznik + 1;
              negatywne.push("Czerwone krwinki");
              twojewartosci.push(addZeroes(czerwonekrwinki));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 4.5 - czerwonekrwinki;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if(czerwonekrwinki > 6.5){
              licznik = licznik + 1;
              negatywne.push("Czerwone krwinki");
              twojewartosci.push(addZeroes(czerwonekrwinki));
              rozneodnormy.push("Powyżej normy");
              obliczenia =  czerwonekrwinki - 6.5;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")")
            }else{}
        
             if( hemoglobina < 13.5){
              licznik = licznik + 1;
              negatywne.push("Hemoglobina");
              twojewartosci.push(addZeroes(hemoglobina));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 13.5 - hemoglobina;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( hemoglobina > 18){
              licznik = licznik + 1;
              negatywne.push("Hemoglobina");
              twojewartosci.push(addZeroes(hemoglobina));
              rozneodnormy.push("Powyżej normy");
              obliczenia =  hemoglobina - 18;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

              if( hematokryt < 40 ){
              licznik = licznik + 1;
              negatywne.push("Hematokryt");
              twojewartosci.push(addZeroes(hematokryt));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 40 - hematokryt;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( hematokryt > 51){
              licznik = licznik + 1;
              negatywne.push("Hematokryt");
              twojewartosci.push(addZeroes(hematokryt));
              rozneodnormy.push("Powyżej normy");
              obliczenia = hematokryt - 51;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

               if(limfocyty < 20 ){
              licznik = licznik + 1;
              negatywne.push("Limfocyty");
              twojewartosci.push(addZeroes(limfocyty));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 20 - limfocyty;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if(limfocyty > 45){
              licznik = licznik + 1;
              negatywne.push("Limfocyty");
              twojewartosci.push(addZeroes(limfocyty));
              rozneodnormy.push("Powyżej normy");
              obliczenia = limfocyty - 45;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

             if( monocyty  < 0.3 ){
              licznik = licznik + 1;
              negatywne.push("Monocyty");
              twojewartosci.push(addZeroes(monocyty));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 0.3 - monocyty;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( monocyty > 0.8){
              licznik = licznik + 1;
              negatywne.push("Monocyty");
              twojewartosci.push(addZeroes(monocyty));
              rozneodnormy.push("Powyżej normy");
              obliczenia = monocyty - 0.8;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

              if( mcv  < 80 ){
              licznik = licznik + 1;
              negatywne.push("MCV");
              twojewartosci.push(addZeroes(mcv));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 80 - mcv;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( mcv > 97){
              licznik = licznik + 1;
              negatywne.push("MCV");
              twojewartosci.push(addZeroes(mcv));
              rozneodnormy.push("Powyżej normy");
              obliczenia = mcv - 97;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}


             if( mch < 26 ){
              licznik = licznik + 1;
              negatywne.push("MCH");
              twojewartosci.push(addZeroes(mch));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 26 - mch;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( mch > 32){
              licznik = licznik + 1;
              negatywne.push("MCH");
              twojewartosci.push(addZeroes(mch));
              rozneodnormy.push("Powyżej normy");
              obliczenia = mch - 32;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

               if(mchc < 31 ){
              licznik = licznik + 1;
              negatywne.push("MCHC");
              twojewartosci.push(addZeroes(mchc));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 31 - mchc;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( mchc > 36){
              licznik = licznik + 1;
              negatywne.push("MCHC");
              twojewartosci.push(addZeroes(mchc));
              rozneodnormy.push("Powyżej normy");
              obliczenia = mchc - 36;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( plytkikrwi < 140){
              licznik = licznik + 1;
              negatywne.push("Płytki krwi");
              twojewartosci.push(addZeroes(plytkikrwi));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 140 - plytkikrwi;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( plytkikrwi > 400){
              licznik = licznik + 1;
              negatywne.push("Płytki krwi");
              twojewartosci.push(addZeroes(plytkikrwi));
              rozneodnormy.push("Powyżej normy");
              obliczenia = plytkikrwi - 400;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}
          
            if( ob < 3){
              licznik = licznik + 1;
              negatywne.push("OB");
              twojewartosci.push(addZeroes(ob));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 3 - ob;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( ob > 8){
              licznik = licznik + 1;
              negatywne.push("OB");
              twojewartosci.push(addZeroes(ob));
              rozneodnormy.push("Powyżej normy");
              obliczenia = ob - 8;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( glukoza < 70){
              licznik = licznik + 1;
              negatywne.push("Glukoza");
              twojewartosci.push(addZeroes(glukoza));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 70 - glukoza;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( glukoza > 99){
              licznik = licznik + 1;
              negatywne.push("Glukoza");
              twojewartosci.push(addZeroes(glukoza));
              rozneodnormy.push("Powyżej normy");
              obliczenia = glukoza - 99;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

              if( cholesterol < 170){
              licznik = licznik + 1;
              negatywne.push("Cholesterol");
              twojewartosci.push(addZeroes(cholesterol));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 170 - cholesterol;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( cholesterol > 199){
              licznik = licznik + 1;
              negatywne.push("Cholesterol");
              twojewartosci.push(addZeroes(cholesterol));
              rozneodnormy.push("Powyżej normy");
              obliczenia = cholesterol - 199;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( tsh < 0.32){
              licznik = licznik + 1;
              negatywne.push("TSH");
              twojewartosci.push(addZeroes(tsh));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 0.32 - tsh;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( tsh > 5.0){
              licznik = licznik + 1;
              negatywne.push("TSH");
              twojewartosci.push(addZeroes(tsh));
              rozneodnormy.push("Powyżej normy");
              obliczenia = tsh - 5;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( alat < 5){
              licznik = licznik + 1;
              negatywne.push("ALAT");
              twojewartosci.push(addZeroes(alat));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 5 - alat;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( alat > 40){
              licznik = licznik + 1;
              negatywne.push("ALAT");
              twojewartosci.push(addZeroes(alat));
              rozneodnormy.push("Powyżej normy");
              obliczenia = alat - 40;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( aspat < 8){
              licznik = licznik + 1;
              negatywne.push("AspAT");
              twojewartosci.push(addZeroes(aspat));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 8 - aspat;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( aspat > 45){
              licznik = licznik + 1;
              negatywne.push("AspAT");
              twojewartosci.push(addZeroes(aspat));
              rozneodnormy.push("Powyżej normy");
              obliczenia =  aspat - 45;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( potas < 3.5 ){
              licznik = licznik + 1;
              negatywne.push("Potas");
              twojewartosci.push(addZeroes(potas));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 3.5 - potas;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( potas > 5.5){
              licznik = licznik + 1;
              negatywne.push("Potas");
              twojewartosci.push(addZeroes(potas));
              rozneodnormy.push("Powyżej normy");
              obliczenia = potas - 5.5;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( sod < 135 ){
              licznik = licznik + 1;
              negatywne.push("Sód");
              twojewartosci.push(addZeroes(sod));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 135 - sod;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( sod > 145){
              licznik = licznik + 1;
              negatywne.push("Sód");
              twojewartosci.push(addZeroes(sod));
              rozneodnormy.push("Powyżej normy");
              obliczenia =  sod - 145 ;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

              if( magnez < 0.65 ){
              licznik = licznik + 1;
              negatywne.push("Magnez");
              twojewartosci.push(addZeroes(magnez));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 0.65 - magnez;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( magnez > 1.2){
              licznik = licznik + 1;
              negatywne.push("Magnez");
              twojewartosci.push(addZeroes(magnez));
              rozneodnormy.push("Powyżej normy");
              obliczenia =  magnez - 1.2;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

             if( wapn < 2.25 ){
              licznik = licznik + 1;
              negatywne.push("Wapń");
              twojewartosci.push(addZeroes(wapn));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 2.25 - wapn;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( wapn > 2.75){
              licznik = licznik + 1;
              negatywne.push("Wapń");
              twojewartosci.push(addZeroes(wapn));
              rozneodnormy.push("Powyżej normy");
              obliczenia =  wapn - 2.75;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}
             
            if( zelazo < 50 ){
              licznik = licznik + 1;
              negatywne.push("Żelazo");
              twojewartosci.push(addZeroes(zelazo));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 50 - zelazo;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( zelazo > 158){
              licznik = licznik + 1;
              negatywne.push("Żelazo");
              twojewartosci.push(addZeroes(zelazo));
              rozneodnormy.push("Powyżej normy");
              obliczenia =  zelazo - 158;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            if( witaminab < 148 ){
              licznik = licznik + 1;
              negatywne.push("Witamina B12");
              twojewartosci.push(addZeroes(witaminab));
              rozneodnormy.push("Poniżej normy");
              obliczenia = 148 - witaminab;
              przekroczonawartosc.push("(- " + addZeroes(obliczenia) + ")");
            }if( witaminab > 740){
              licznik = licznik + 1;
              negatywne.push("Witamina B12");
              twojewartosci.push(addZeroes(witaminab));
              rozneodnormy.push("Powyżej normy");
              obliczenia = witaminab - 740;
              przekroczonawartosc.push("(+ " + addZeroes(obliczenia) + ")");
            }else{}

            // licznik = negatywne.length;


            var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + tablica[tablica.length - 1]).child("Data");
          ref2.on('value', function(snapshot4){

              data = snapshot4.val();
          });
            
console.log(licznik);

            for(var i=1; i <= 4; i ++){

var random = Math.floor((Math.random() * licznik) + 1);

$( "#homewyswietlanie" ).append( '  <div class="first-box" id="rest-box"> \
        <div class="rest-box-content"> \
          <div class="circle"  style="" id="znakwskaznika">G</div> \
        </div> \
         \
        <div class="container-element-box"> \
          <div style="color: #3A4759;" id="rodzaj">Glukoza</div>  \
          <span class="value-element-mark">wartość: \
           <span style="color:#E36E7B" id="rozneodnormy">powyżej normy</span> \
         </span> \
        </div> \
 \
       <div class="value-element-inner"> \
        <div style="color: #E36E7B;" ><span id="wartoscwskaznika">115,00</span>  \
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
                      var idostatniegobadania = document.getElementById('dataostatniegobadania');
                      var splitdata = data.split(" ");
                      id.setAttribute('id', "rodzaj" + i); 
                      id.innerHTML = negatywne[random];
                      idwartosc.setAttribute('id', 'wartoscwskaznika ' + i);
                      idwartosc.innerHTML = twojewartosci[random];
                      idnorma.setAttribute('id', 'rozneodnormy ' + i);
                      idnorma.innerHTML = rozneodnormy[random];
                      idznak.setAttribute('id', 'znakwskaznika ' + i);
                      idznak.innerHTML = negatywne[random].charAt(0);
                      idprzekroczonawartosc.setAttribute('id', 'przekroczonawartosc ' + i);
                      idprzekroczonawartosc.innerHTML = przekroczonawartosc[random];
                      iddatabadania.setAttribute('id', "databadania " + i);
                      iddatabadania.innerHTML = data;
                      idostatniegobadania.innerHTML = splitdata[0]  + " " + splitdata[1] ;
                      

            }

            for(var j=1; j <=licznik; j = j + 2){

              var idznak = document.getElementById('znakwskaznika ' + j);
              idznak.style.backgroundColor = "#4298b7";
            }
        }); 
     });
  



    }else{

    }

        });




     }
     homePage();