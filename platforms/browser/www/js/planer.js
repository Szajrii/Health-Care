
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

function planerDisplay(){
  var licznik;
  var wiekpomocniczy;
  var licznikpomocniczy = 1;
  var tablica = [];
  var name;

      firebase.auth().onAuthStateChanged(function(user) {
          var user = firebase.auth().currentUser;
          var uid = user.uid;

          if(user){
             var data2 =   firebase.database().ref('users/' + uid).child("name");
           data2.on('value', function(snapshot){
           name = snapshot.val();
           if(name != "" || name != null){
           var planerdisplayname  = document.getElementById('planerdisplayname');
           planerdisplayname.innerHTML = "Witaj " + name + "!";
         }else{
          var planerdisplayname  = document.getElementById('planerdisplayname');
           planerdisplayname.innerHTML = "Zaktualizuj profil"
         }
});
  var data3 =   firebase.database().ref('users/' + uid).child("płeć");
           data3.on('value', function(snapshot){
           plecstatus = snapshot.val();
var zdjecie  = document.getElementById('planerimg') 
             if(plecstatus == "Kobieta"){

              zdjecie.src = "img/female-planer.png";
          }else {
            zdjecie.src = "img/male-planer.png";
          }

   var data4 =   firebase.database().ref('users/' + uid).child("wiek");
          data4.on('value', function(snapshot){
          wiek = snapshot.val();

if(plecstatus == "Mężczyzna"){
              switch(true){
  case (wiek >= 20 && wiek < 29):
    licznik = 8;
    wiekpomocniczy = 20;
    break;
  case (wiek >= 30 && wiek < 39):
    licznik = 10;
    wiekpomocniczy = 30;
    break;
  case (wiek >= 40 && wiek < 49):
    licznik = 13;
    wiekpomocniczy = 40;
    break;
  case (wiek >= 50):
    licznik = 13;
    wiekpomocniczy = 50;
    
}
} else if(plecstatus == "Kobieta"){
             switch(true){
  case (wiek >= 20 && wiek < 29):
    licznik = 7;
    wiekpomocniczy = 20;
    break;
  case (wiek >= 30 && wiek < 39):
    licznik = 8;
    wiekpomocniczy = 30;
    break;
  case (wiek >= 40 && wiek < 49):
    licznik = 10;
    wiekpomocniczy = 40;
    break;
  case (wiek >= 50):
    licznik = 10;
    wiekpomocniczy = 50;
    
}
}

for(var i = 1; i <= licznik; i++){
$( "#planer-lista" ).append('<dt> \
      <div class="tittle-dt" id="planername">Lipidogram</div> \
      <div><span class="uk-label uk-label-danger" id="planertime">Raz na pół roku</span></div> \
    </dt> \
    <dd class="content-dd" id="planeropis">Badanie określające poziom cholesterolu cholesterolu całkowitego, frakcji HDL i LDL oraz trójglicerydów we krwi.</dd>');
     }

    


if(plecstatus == "Mężczyzna"){
  for(var i = 1; i <= licznik; i++){
    $(document).ready(function(){
     var planername = document.getElementById('planername');
     planername.setAttribute('id', 'planername ' + i);
     var planertime = document.getElementById('planertime');
     planertime.setAttribute('id', 'planertime ' + i);
     var planeropis = document.getElementById('planeropis');
     planeropis.setAttribute('id', 'planeropis ' + i);

    var file = "https://health-care-71096.firebaseio.com/Profilaktyka/Mezczyzna/" + wiekpomocniczy + "/Badanie" + i +  "/Name.json";
    
     var xhttp = new XMLHttpRequest();
           
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                    
                  
                   planername.innerHTML = xhttp.responseText.replace(/['"]+/g, '');
                
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();


            var file2 = "https://health-care-71096.firebaseio.com/Profilaktyka/Mezczyzna/" + wiekpomocniczy + "/Badanie" + i +  "/Czas.json";
    
           var xhttp2 = new XMLHttpRequest();
           
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                    
                  
                   planertime.innerHTML = xhttp2.responseText.replace(/['"]+/g, '');
                
                }
            };
            xhttp2.open("GET", file2, true);
            xhttp2.send();


            var file3 = "https://health-care-71096.firebaseio.com/Profilaktyka/Mezczyzna/" + wiekpomocniczy + "/Badanie" + i +  "/Opis.json";
    
             var xhttp3 = new XMLHttpRequest();
           
            xhttp3.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                    
                  
                   planeropis.innerHTML = xhttp3.responseText.replace(/['"]+/g, '');
                
                }
            };
            xhttp3.open("GET", file3, true);
            xhttp3.send();
        }); 


  }

} else if(plecstatus == "Kobieta"){

   for(var i = 1; i <= licznik; i++){
    $(document).ready(function(){
     var planername = document.getElementById('planername');
     planername.setAttribute('id', 'planername ' + i);
     var planertime = document.getElementById('planertime');
     planertime.setAttribute('id', 'planertime ' + i);
     var planeropis = document.getElementById('planeropis');
     planeropis.setAttribute('id', 'planeropis ' + i);

    var file = "https://health-care-71096.firebaseio.com/Profilaktyka/Kobieta/" + wiekpomocniczy + "/Badanie" + i +  "/Name.json";
    
     var xhttp = new XMLHttpRequest();
           
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                    
                  
                   planername.innerHTML = xhttp.responseText.replace(/['"]+/g, '');
                
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();


            var file2 = "https://health-care-71096.firebaseio.com/Profilaktyka/Kobieta/" + wiekpomocniczy + "/Badanie" + i +  "/Czas.json";
    
           var xhttp2 = new XMLHttpRequest();
           
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                    
                  
                   planertime.innerHTML = xhttp2.responseText.replace(/['"]+/g, '');
                
                }
            };
            xhttp2.open("GET", file2, true);
            xhttp2.send();


            var file3 = "https://health-care-71096.firebaseio.com/Profilaktyka/Kobieta/" + wiekpomocniczy + "/Badanie" + i +  "/Opis.json";
    
             var xhttp3 = new XMLHttpRequest();
           
            xhttp3.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                    
                  
                   planeropis.innerHTML = xhttp3.responseText.replace(/['"]+/g, '');
                
                }
            };
            xhttp3.open("GET", file3, true);
            xhttp3.send();
        }); 


  }

}
   
   
          

});
});  
           }else{
window.location.href = "page2.html";
     }
     });




}

document.querySelector('#tooglebutton ').addEventListener('click', function () {
    var toogle = document.getElementById('tooglebutton');
    var text = toogle.innerHTML;
    if(text == "Zobacz liste"){
      toogle.innerHTML = "Schowaj liste";
    }else if(text == "Schowaj liste"){
        toogle.innerHTML  = "Zobacz liste";
    }
  });

planerDisplay();

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




