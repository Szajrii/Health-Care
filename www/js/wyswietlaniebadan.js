 function pokazBadanie() {
  var i = 1;
  var j = 1;   
  var g = 1;
  
          

firebase.auth().onAuthStateChanged(function(user) {
          var user = firebase.auth().currentUser;
          var uid = user.uid;
          var licznik;
    if(user){
      
// function licznik (snapshot){
//   var licznik;
//   licznik = snapshot.numChildren();
//   return licznik;
// }

var ref = firebase.database().ref('users/' + uid + '/Badania');
          ref.once('value', function(snapshot){
             licznik = snapshot.numChildren();
          

while(i <= licznik){

  

 $( "#wyswietlanie" ).append( ' <div id="sort"> <div class="first-box" id="rest-box"> \
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
         <div><a href="#szczegolybadania" color ="blue" class="ahrefDecoration" id="szczegoly" onclick="szczegolyPage(this.id)" >zobacz szczegóły</a></div> \
       </div> \
      </div> </div>');


                 var x = document.getElementById('asdd');
            x.setAttribute("id", "data " + i);

            var sort = document.getElementById('sort');
            sort.setAttribute("id", "sort " + i);

            var szczegoly = document.getElementById('szczegoly');
            szczegoly.setAttribute('id', "szczegoly" + " " + i);


     //    firebase.database().ref('users/' + uid + '/Badania/' + badanie).child("Data").once('value').then(function(snapshot){
     //     var y = document.getElementById(j);
     //        data = snapshot.val();
     //       y.innerHTML = snapshot.val();
     // alert(data);
     //        // y.innerHTML = data ;
     //       j = j + 1 ;
     //         });

            var wynikbadania = document.getElementById('b');
            var kolor = document.getElementById('c');
  
            wynikbadania.setAttribute("id", "wynik " + i);
            kolor.setAttribute("id", "kolor " + i);

     // firebase.database().ref('users/' + uid + '/Badania/' + badanie).child("Wynik").once('value').then(function(snapshot){
     //     var r = document.getElementById("wynik " + g);
     //     var t = document.getElementById("kolor " + g);
     //       var kolor = snapshot.val();
     //       if(kolor == "Prawidłowy"){
     //        r.style.color = "green";
     //        t.src = "img/icons/blood-green.png"
     //       }else{
     //        r.style.color = "red";
     //        t.src = "img/icons/blood-red.png"
     //       }
     //       r.innerHTML = snapshot.val();
     
     //        // y.innerHTML = data ;
     //       g = g + 1 ;
     //         });

 i = i + 1;
}
// for(var a = 1; a <7; a++){
  // var badanie = "Badanie nr " + a;
  var j = 1;
  var g = 1;
  
   var ref = firebase.database().ref('users/' + uid + '/Badania/').orderByKey();
   ref.on('value',function(badaniaSnapshot){



    badaniaSnapshot.forEach(function(snapshot){
      var key = snapshot.key;
     



   var ref2 = firebase.database().ref('users/' + uid + '/Badania/' + key).child("Data");
   ref2.on('value',function(snapshot2){

        // snapshot2.forEach(function(childSnapshot2){


    var obj = snapshot2.val();
    console.log(obj);

var y = document.getElementById('data ' + j);
            
           y.innerHTML = obj;
 
    j = j + 1;
 
      });


    var ref3 = firebase.database().ref('users/' + uid + '/Badania/' + key).child("Wynik");
     ref3.on('value', function(snapshot3){

        var wynikbadania1 = snapshot3.val();

           var wynik = document.getElementById("wynik " + g);
           var kolor = document.getElementById("kolor " + g);
           var sort = document.getElementById("sort " + g);
           var wynikbadania1  = snapshot3.val();
           wynik.innerHTML = wynikbadania1;
           if(wynikbadania1 == "Prawidłowy"){
            wynik.style.color = "green";
            kolor.src = "img/icons/blood-green.png"
            sort.classList.add("Prawidłowa");
           }else{
            wynik.style.color = "red";
            kolor.src = "img/icons/blood-red.png"
            sort.classList.add("Nieprawidłowa");
           }


           g = g + 1;
     });
             });
            });


 

 });
}
else{

}
  
  });   

 pokazBadanie();


     $(document).ready(function(){
    $("#prawidłowebadania").click(function(){
        $("#prawidłowebadania").css("font-weight", 600);
        $("#nieprawidłowebadania").css("font-weight", 300);
        $("#wszystkiebadania").css("font-weight", 300);
        $(".Nieprawidłowa").hide();
        $(".Prawidłowa").show();
    });
    $("#nieprawidłowebadania").click(function(){
        $("#prawidłowebadania").css("font-weight", 300);
        $("#nieprawidłowebadania").css("font-weight",600);
        $("#wszystkiebadania").css("font-weight", 300);
        $(".Prawidłowa").hide();
        $(".Nieprawidłowa").show();
    });

    $("#wszystkiebadania").click(function(){
        $("#prawidłowebadania").css("font-weight", 300);
        $("#nieprawidłowebadania").css("font-weight", 300);
        $("#wszystkiebadania").css("font-weight", 600);
        $(".Prawidłowa").show();
        $(".Nieprawidłowa").show();
    });

});