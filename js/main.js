
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    /*==================================================================
    [ Show / hide Form ]*/
    
    $('.contact100-btn-hide').on('click', function(){
        $('.wrap-contact100').fadeOut(400);
    })

    $('.contact100-btn-show').on('click', function(){
        $('.wrap-contact100').fadeIn(400);
    })

})(jQuery);


//////////////7

var w = window.innerWidth;
var h = window.innerHeight;
 var config = {
    apiKey: "AIzaSyDDeEsPxBYxzisg4GDOpmYbHBLvIw6L_IY",
    authDomain: "mejorvargaslleras-4fd2e.firebaseapp.com",
    databaseURL: "https://mejorvargaslleras-4fd2e.firebaseio.com",
    projectId: "mejorvargaslleras-4fd2e",
    storageBucket: "mejorvargaslleras-4fd2e.appspot.com",
    messagingSenderId: "912759721594"
  };
  firebase.initializeApp(config);



//unavesmensaje("mensajedos");
unavesmensaje("user");

unavesmensaje2("aweblog");


var urllog="";
function unavesmensaje(ref)
{

  firebase.database().ref().child("user").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
var s=mi;// firebase.database().ref().child("user");
console.log(s);

for (var indice in s) {
  console.log("ind'" + indice + "'= " + s[indice]);
}

 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}


//subirdatos("user","cedula","33311111111");


//nuevochid(nodo,nombre,cedula,celular,direccion,email,departamento,municipio);
function subirdatos(ref1,ref2,mn){

    //firebase.database().ref().child(ref1).value(String(mn));
   // firebase.database().ref().child(ref1).push(String(mn));

        // var person = {fname:"Johns", lname:"Does", age:27}; 
    //  firebase.database().ref().child(ref1).push(person);

            var person = {nombre:"Johns",whatsapp:"Does", cedula:"Does",email:"Does",
            departamento:"Does",municipio:"Does",direccion:"Does"}; 
      firebase.database().ref().child(ref1).push(person);
}

function nuevochid(nodo,nombre1, cedula1, celular1, direccion1 , email1, departamento1,municipio1){
     
// entienda que no importa si se llama diez veces esata funcion alla en firebase  en el nod que  
// le asigne aparecera unnuenvo nodo hijo un child 

        var person = {nombre:nombre1,whatsapp:celular1,
         cedula:cedula1,email:email1,departamento:departamento1,
         municipio:municipio1,direccion:direccion1}; 
      firebase.database().ref().child(nodo).push(person);

}

function myFunction(){

  document.getElementById("sele").value;
    alert(document.getElementById("sele").value);

var nodo="user";
var nombre=document.getElementById("nombre").value;;
var departamento=document.getElementById("sele").value;;
var municipio=document.getElementById("municipio").value;;
var celular=document.getElementById("celular").value;;
var email=document.getElementById("email").value;;
var direccion=document.getElementById("direccion").value;;
var cedula=document.getElementById("cedula").value;;

nuevochid(nodo,nombre,cedula,celular,direccion,email,departamento,municipio);
}


function myFunctionlogin(){
window.location=urllog;

}


function unavesmensaje2(id)
{

//var c=String(cedu);
//var cl= String(celu);

  firebase.database().ref().child(String(id)).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
var s=mi;// firebase.database().ref().child("user");
urllog=mi;
//general=s;

/*for (var indice in s) {
    if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
    }
  console.log("ind'" + indice + "'= " + s[indice]);
}
*/
 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}


function myFunctionocultarlog(){
  

     document.getElementById("idbtirlog").hidden = true;
}

function myFunctionclose(){

    document.getElementById("idbtirlog").hidden = false;
}




if(w<=800){
   

showAndroidToast("");
}
else{}

