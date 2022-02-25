// Código del cuadrado
console.group("cuadrado")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " metros");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " metros");

function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El area del cuadrado tiene: " + areaCuadrado + " metros cuadrados");

console.groupEnd();




// Código del triangulo
console.group("triangulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
}
function areaTriangulo(base, altura) {
   return (Number(base) * Number(altura)) / 2;
}



// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`);

// console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`)
// console.log(`La altura del triangulo es: ${alturaTriangulo}cm`)
// console.log(`El area del triangulo es: ${areaTriangulo}cm`)
console.groupEnd();


// Código del circulo
console.group("circulo")
// const radioCirculo = 4;
// console.log(`El radio circulo es: ${radioCirculo}cm`)

function diametro(radio) {
    return radio * 2;
}
// console.log(`El diametro circulo es: ${diametro}cm`)


// console.log(`El PI es: ${pi}`)

function perimetroCirculo(radio) {
    const pi = Math.PI;
    const diametro = radio * 2
    return diametro * pi;
}
// console.log(`El perimetro circulo es: ${perimetroCirculo}cm`)

function areaCirculo(radio) {
   const pi = Math.PI;
   return (radio * radio) * pi;
}
// console.log(`El area circulo es: ${areaCirculo}cm`)



console.groupEnd();

// Aqui intereaccion con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}


// Triangulo
function calcularPerimetroTriangulo() {
    const inputLado = document.getElementById("inputTriangulo");
    const inputBase = document.getElementById("baseTriangulo");
    const inputAltura = document.getElementById("alturaTriangulo");
    const valueLado = inputLado.value;
    const valueLado2 = inputLado.value;
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const perimetro = perimetroTriangulo(valueLado, valueLado, valueBase);
    alert(perimetro)
}


function calcularAreaTriangulo() {
    const inputLado = document.getElementById("inputTriangulo");
    const inputBase = document.getElementById("baseTriangulo");
    const inputAltura = document.getElementById("alturaTriangulo");
    
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura)
    alert(area)
}

function calcularAlturaTrianguloIsoceles() {
     const inputLado = document.getElementById("inputTriangulo");
     const inputBase = document.getElementById("baseTriangulo");
     const inputAltura = document.getElementById("alturaTriangulo");
     const valueLado = inputLado.value;
     const valueLado2 = inputLado.value;
     const valueBase = inputBase.value;
     const valueAltura = inputAltura.value;

         if(valueLado != valueLado2) {
             console("Los lados no son iguales")
         } else {
             const baseIsoceles = valueBase / 2;
             const ladoIsoceles = valueLado;
             const baseIsocelesAlCuadrado = baseIsoceles * baseIsoceles;
             const ladoIsocelesAlCuadrado = ladoIsoceles * ladoIsoceles;
             console.log(baseIsocelesAlCuadrado)
             console.log(ladoIsocelesAlCuadrado)

             const alturaTrianguloIsoceles = Math.sqrt(ladoIsocelesAlCuadrado - baseIsocelesAlCuadrado);
             console.log(alturaTrianguloIsoceles)
             return alturaTrianguloIsoceles;
             alert(alturaTrianguloIsoceles);
         }
    const alturaIsoceles = alturaTrianguloIsoceles;
    alert(alturaIsoceles);
 }


 // Circulo
 function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = inputRadio.value;

    const radio =  diametro(valueRadio);
    alert(radio)
 }

 function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = inputRadio.value;

    const perimetro =  perimetroCirculo(valueRadio);
    alert(perimetro)
 }

 function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = inputRadio.value;

    const area =  areaCirculo(valueRadio);
    alert(area)
 }
