
var switcher = UIkit.switcher('#switcher', {
  connect: '#content',
  animation: 'uk-animation-fade'
});
var $toggles = UIkit.util.$$('.switcher-toggle');

UIkit.util.each($toggles, function() {
  var $toggle = this;  
  
  UIkit.util.on($toggle, 'click', function(e) {
    var dir = UIkit.util.attr($toggle, 'uk-switcher-nav');
    var $active = UIkit.util.$('#content .uk-active');
    var index = UIkit.util.index($active);
    
    if (dir === 'previous') {
      switcher.show(index - 1);
    } else if (dir === 'next') {
      switcher.show(index + 1);
    }
  });
});


  function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
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

document.querySelector('#glukozadodawanie').addEventListener('click', function () {
          var user = firebase.auth().currentUser;
          var uid = user.uid;

 if(user){
          var today = new Date();          
          var msec = today.getTime();     
          var dd = today.getDate();
          var mm = today.getMonth();
          var mm3 = today.getMonth();
          var hh = today.getHours();
          var minutes = today.getMinutes() 
          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 

          if(minutes<10){
              minutes='0'+minutes;
          } 

         if(mm3<10){
              mm3+=1;
              mm3='0'+mm3;
          }else if(mm3 >= 10){
            mm3+=1;
          }
          var mm2 = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
          var glukoza = document.getElementById('wartoscglukozy').value;



          if (glukoza == "") {
            document.getElementById("label-error2").innerHTML = "Pole wymagane";

          }
          else{

           firebase.database().ref('users/' + uid + '/Pomiary/Glukoza/' + msec).set({
              Dzien: dd,
              Miesiac: mm2[mm],
              Miesiac2: mm3,
              Rok: yyyy,
              Minuta: minutes,
              Godzina: hh,
              Wartosc: glukoza
           });
           self.location.reload();

           }

}else{

}
    });

document.querySelector('#cisnieniedodawanie').addEventListener('click', function () {
          var user = firebase.auth().currentUser;
          var uid = user.uid;
 if(user){
          var today = new Date();          
          var msec = today.getTime();     
          var dd = today.getDate();
          var mm = today.getMonth();
          var mm3 = today.getMonth();
          var hh = today.getHours();
          var minutes = today.getMinutes() 
          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 

          if(minutes<10){
              minutes='0'+minutes;
          } 

          if(mm3<10){
              mm3+=1;
              mm3='0'+mm3;
          }else if(mm3 >= 10){
            mm3+=1;
          }
          var mm2 = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
          var cisnienieskurczowe = document.getElementById('cisnienieskurczowe').value;
          var cisnienierozkurczowe = document.getElementById('cisnienierozkurczowe').value;

          if (cisnienieskurczowe == "" || cisnienierozkurczowe == "" ) {
             document.getElementById("label-error0").innerHTML = "Pole wymagane";
             document.getElementById("label-error1").innerHTML = "Pole wymagane";

          }
          else{

           firebase.database().ref('users/' + uid + '/Pomiary/Cisnienie/' + msec).set({
              Dzien: dd,
              Miesiac: mm2[mm],
              Miesiac2: mm3,
              Rok: yyyy,
              Minuta: minutes,
              Godzina: hh,
              Wartoscskurczowe: cisnienieskurczowe,
              Wartoscrozkurczowe: cisnienierozkurczowe
           });
            self.location.reload();
          
         }
}else{

}
    });
var labelsCisnienie = [];
var dataSkurczowe = [];
var dataRozkurczowe = [];
var cukier = [];
var labelCukier = [];
$(document).ready(function(){

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    var user = firebase.auth().currentUser;
          var uid = user.uid;


  
  var tablica = [];
  var tabindex = 0;

var ref = firebase.database().ref('users/' + uid + '/Pomiary/Cisnienie/').orderByKey();
   ref.on('value',function(pomiarySnapshot){

       pomiarySnapshot.forEach(function(snapshot){
      var key = snapshot.key;
      tablica[tabindex] = key;
      console.log(tablica[tabindex]);
        tabindex = tabindex + 1;
        console.log(tablica.length);


});
       var licznik = tablica.length;
       var licznik2 = tablica.length + 1;
      
       for(var i = 1; i <=6; i++){
var ref2 = firebase.database().ref('users/' + uid + '/Pomiary/Cisnienie/' + tablica[licznik - 1]);
          ref2.on('value', function(snapshot2){
            var key2 = snapshot2.val();
            var data = key2.Dzien + "." + key2.Miesiac2;
            var skurczowevalue = key2.Wartoscskurczowe;
            var rozkurczowevalue = key2.Wartoscrozkurczowe;
            labelsCisnienie.push(data);
            dataSkurczowe.push(skurczowevalue);
            dataRozkurczowe.push(rozkurczowevalue);
              });

        
          licznik--;
          }


while(licznik2 > 0){
          var ref3 = firebase.database().ref('users/' + uid + '/Pomiary/Cisnienie/' + tablica[licznik2 - 1]);
          ref3.on('value', function(snapshot3){
            var key3 = snapshot3.val();
            var data2 = key3.Dzien + " " + key3.Miesiac + ", " + key3.Godzina + ":" + key3.Minuta;
            var skurczowevalue2 = key3.Wartoscskurczowe;
            var rozkurczowevalue2 = key3.Wartoscrozkurczowe;
            
            
if(licznik2 % 2 != 0){
            $('#cisnienietabela').append('<tr>      <td class="mdl-data-table__cell--non-numeric" id="cisnieniedata">27 kwiecien, 14:50</td>      <td class="" id="cisnieniewartosc">180/60</td>     </tr>');
             }
             else{
              $('#cisnienietabela').append('<tr style="background-color: #f4f4f4">      <td class="mdl-data-table__cell--non-numeric" id="cisnieniedata">27 kwiecien, 14:50</td>      <td class="" id="cisnieniewartosc">180/60</td>     </tr>');
             }
             
             
            $(document).ready(function(){
             var cisnieniedata = document.getElementById('cisnieniedata');
             var cisnieniewartosc = document.getElementById('cisnieniewartosc');
             cisnieniedata.setAttribute('id', 'cisnieniedata ' + licznik2);
             cisnieniedata.innerHTML = data2;
             cisnieniewartosc.setAttribute('id', 'cisnieniewartosc ' + licznik2);
             cisnieniewartosc.innerHTML = skurczowevalue2 + "/" + rozkurczowevalue2;
           });
              });
          licznik2--;
          }

var ctx = document.getElementById("line-chart");
var myChart = new Chart(ctx,{
  type: 'line',
  data: {
    
    datasets: [{ 
        data: dataSkurczowe,
        label: "ciśn. skurczowe",
        borderColor: "#67C9C9",
        backgroundColor: 'rgba(165, 223, 223, 0.3)',
        fill: true
      }, { 
        data: dataRozkurczowe,
        label: "ciśn. rozkurczowe",
        borderColor: "#FF6E8C",
        backgroundColor: 'rgba(255, 110, 140, 0.3)',
        fill: true
      }
    ]
  },
  options: {
    legend: {
      position: 'bottom'
    },
    scales: {
            xAxes: [{
                type: 'category',
                labels: labelsCisnienie,
            }]
        },
    title: {
      display: false,
      
    }
  }
});

});
}else{

}

});

});

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    var user = firebase.auth().currentUser;
          var uid = user.uid;

// var labelCukier = ['22.07', '22.07', '23.07', '24.07', '25.07', '26.07'];
// var cukier = [120,140,125,130,160,115];
  
  var tablica = [];
  var tabindex = 0;


 var ref = firebase.database().ref('users/' + uid + '/Pomiary/Glukoza/').orderByKey();
   ref.on('value',function(pomiarySnapshot){

       pomiarySnapshot.forEach(function(snapshot){
      var key = snapshot.key;
      tablica[tabindex] = key;
      console.log(tablica[tabindex]);
        tabindex = tabindex + 1;
        console.log(tablica.length);


});
       var licznik = tablica.length;
       var licznik2 = tablica.length + 1;
       
       for(var i = 1; i <=6; i++){
var ref2 = firebase.database().ref('users/' + uid + '/Pomiary/Glukoza/' + tablica[licznik - 1]);
          ref2.on('value', function(snapshot2){
            var key2 = snapshot2.val();
            var data = key2.Dzien + "." + key2.Miesiac2;
            var glukozavalue = key2.Wartosc;
            labelCukier.push(data);
            cukier.push(glukozavalue);
            
              });
          licznik--;
          }
while(licznik2 > 0){
          var ref3 = firebase.database().ref('users/' + uid + '/Pomiary/Glukoza/' + tablica[licznik2 - 1]);
          ref3.on('value', function(snapshot3){
            var key3 = snapshot3.val();
            var data2 = key3.Dzien + " " + key3.Miesiac + ", " + key3.Godzina + ":" + key3.Minuta;
            var glukozavalue2 = key3.Wartosc;
            
            
if(licznik2 % 2 != 0){
            $('#glukozatabela').append('<tr>   <td class="mdl-data-table__cell--non-numeric" id="glukozadata">27 kwiecien, 14:50</td>  <td class="" id="glukozawartosc">180</td>    </tr>');
             }
             else{
              $('#glukozatabela').append('<tr style="background-color: #f4f4f4">   <td class="mdl-data-table__cell--non-numeric" id="glukozadata">27 kwiecien, 14:50</td>  <td class="" id="glukozawartosc">180</td>    </tr>');
             }
             
            $(document).ready(function(){
             var glukozadata = document.getElementById('glukozadata');
             var glukozawartosc = document.getElementById('glukozawartosc');
             glukozadata.setAttribute('id', 'glukozadata ' + licznik2);
             glukozadata.innerHTML = data2;
             glukozawartosc.setAttribute('id', 'glukozawartosc ' + licznik2);
             glukozawartosc.innerHTML = glukozavalue2;
           });
              });
          licznik2--;
          }

var ctx = document.getElementById("line-chart1");
var myChart1 = new Chart(ctx,{
  type: 'line',
  data: {
    
    datasets: [{ 
        data: cukier,
        label: "Poziom glukozy we krwi",
        borderColor: "#FFA31A",
        backgroundColor: 'rgba(255, 163, 26, 0.3)',
        fill: true
      }
    ]
  },
  options: {
    legend: {
      position: 'bottom'
    },
    scales: {
            xAxes: [{
                type: 'category',
                labels: labelCukier,
            }]
        },
    title: {
      display: false,
      
    }
  }
});

});
}else{
window.location.href = "page2.html";
}

});

