
function mayor(){

var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var n3 = parseInt(document.getElementById("n3").value);

if (n1 > n2 && n1 > n3) {
    document.write(n1);
    } 
    
    else if (n2 > n3) {
    document.write(n2);
    } 

    else {
    document.write(n3);
    }
}


   function entre() {

    var entre1 = parseInt(document.getElementById("entre1").value);

    if (n1 > 0 && n1 < 11) {

        document.write(entre1);
    }
     else {
         document.write("<p>Fuera de rango</p>");
     }
}