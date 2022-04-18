function pluss() {

let p1 = parseInt(document.getElementById("p1").value);
let p2 = parseInt(document.getElementById("p2").value);
let p3 = parseInt(document.getElementById("p3").value);

let suma = p1 + p2 + p3;
alert("el total es "+suma);
}

function laMed() {

    let med1 = parseInt(document.getElementById("med1").value);
   let med2 = parseInt(document.getElementById("med2").value);
    let med3 = parseInt(document.getElementById("med3").value);
    let med4 = parseInt(document.getElementById("med4").value);
    let med5 = parseInt(document.getElementById("med5").value);
    
    let media = (med1+med2+med3+med4+med5)/5;
    alert("la media es "+media);
}

function cuadrado() {
    let cuad1 = parseInt(document.getElementById("cuad1").value);

    let cuadrado = cuad1*cuad1;
    alert("el número que busca es "+cuadrado);

}

function multi() {

    let multi1 = parseInt(document.getElementById("multi1").value);
    let multi2 = parseInt(document.getElementById("multi2").value);
    
    
    let suma = multi1+multi2;
    let restar = multi1-multi2;
    let producto = multi1*multi2;
    let division = multi1%multi2;


    document.write("<p>tus números:</p>");
    document.write(multi1); 
    document.write("<br>");
    document.write(multi2);
    document.write("<p>la suma de tus números</p>");
    document.write(suma);
    document.write("<p>la resta de tus números</p>");
    document.write(restar);
    document.write("<p>la multiplicación de tus números</p>");
    document.write(producto);
    document.write("<p>el resto de la división de tus números</p>");
    document.write(division);
  
    }

function sueldo() {

    let shora = parseInt(document.getElementById("shora").value);
    let horas = parseInt(document.getElementById("horas").value); 
    let irpf = parseInt(document.getElementById("irpf").value);

    let cobra = (shora*horas)-((shora*horas)*(irpf/100));
    document.write("<p>Cobrarías lo siguiente: </p>");
    document.write(cobra);

}

function segundos() {

    let hrs = parseInt(document.getElementById("hrs").value);
   let minutos = parseInt(document.getElementById("minutos").value);
    let segundos = parseInt(document.getElementById("segundos").value);

    
    let totseg = ((hrs*60)*60)+(minutos*60)+segundos;
    document.write("<p>En segundos serían: </p>");
    document.write(totseg);
}

function producto() {

    let unit = parseInt(document.getElementById("unit").value);
   let unidad = parseInt(document.getElementById("unidad").value);
   let descuentos = parseInt(document.getElementById("descuentos").value);
   let desc1=7;
   let desc2=10;
   let desc3=15;
   let desc4=20;
  
    let iva=15;

if (descuentos==desc1) {

    let siete = (unit*unidad)-((unit*unidad)*(7/100))+((unit*unidad)*(iva/100));
    document.write("<p>Aplicando 7% de descuento, pagaría: </p>");
    document.write(siete);
}
else if (descuentos==desc2) {

    let diez = (unit*unidad)-((unit*unidad)*(10/100))+((unit*unidad)*(iva/100));
    document.write("<p>Aplicando 10% de descuento, pagaría: </p>");
    document.write(diez);
}
else if (descuentos===desc3) {

    let quince = (unit*unidad)-((unit*unidad)*(15/100))+((unit*unidad)*(iva/100));
    document.write("<p>Aplicando 15% de descuento, pagaría: </p>");
    document.write(quince);
}
else if (descuentos==desc4) {

    let veinte = (unit*unidad)-((unit*unidad)*(20/100))+((unit*unidad)*(iva/100));
    document.write("<p>Aplicando 20% de descuento, pagaría: </p>");
    document.write(veinte);
}
}


function expon() {

    let exp1 = parseInt(document.getElementById("exp1").value);
    let exp2 = parseInt(document.getElementById("exp2").value);

    var exponente = Math.pow(exp1, exp2);
    document.write(exponente);

}

function salario() {

    let salhora  = parseInt(document.getElementById("salhora").value);
    let numhora  = parseInt(document.getElementById("numhora").value);
    let exthora  = parseInt(document.getElementById("exthora").value);
    let precext  = parseInt(document.getElementById("precext").value);
    let sirpf = parseInt(document.getElementById("sirpf").value);

    let saltot = ((salhora*numhora)+(exthora*precext))-(sirpf/100);

    document.write(saltot);


}



function fahren() {

   let  fahr = parseInt(document.getElementById("fahr").value);


    let  cels = (fahr - 32) * 5 / 9;

    document.write(cels);
}


function triangulo() {

    let lbase = parseInt(document.getElementById("lbase").value);
    let altura = parseInt(document.getElementById("altura").value);

    var superf = (lbase*altura)/2;
    document.write(superf);

}

function disco() {

    let lradio = parseInt(document.getElementById("lradio").value);
    const PI = 3.1416;
    
    let superfi = 2*PI*lradio;
    let longitud = PI*(lradio*lradio);

    document.write("<p>La superficie es: </p>");
    document.write(superfi);
    document.write("<p>La longitud es: </p>");
    document.write(longitud);

}


function cifras() {

    let tunum = document.getElementById("tunum").value;
    
    let unidades = tunum[3];
    let decenas = tunum[2];
    let centenas = tunum[1];
    let millares = tunum[0];
   
   console.log("hola silvia");

    document.write("<p>Las unidades del número: </p>");
    document.write(unidades);
    document.write("<p>Las decenas del número: </p>");
    document.write(decenas);
    document.write("<p>Las centenas del número: </p>");
    document.write(centenas);
    document.write("<p>Los millares del número: </p>");
    document.write(millares);

}