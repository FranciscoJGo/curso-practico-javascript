// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}


function buttonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const ResultP = document.getElementById("ResultP");
ResultP.innerText = `El precio de tu producto con descuento es de ${precioConDescuento}`
}

function buttonCupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const cuponInput = document.getElementById("CuponDiscount");
    const cuponValue = cuponInput.value;

    const cupones = [
        "fruta",
        "verdura",
        "carne",
    ]

    let descuento;

    switch(cuponValue) {
        case cupones[0]:
            descuento = 20;
        break;
        case cupones[1]:
            descuento = 15;
        break;
        case cupones[2]:
            descuento = 10;
        break;
        default: descuento = 0;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = `El precio de tu producto con descuento es de ${precioConDescuento}`
    console.log(cuponValue);
    console.log(descuento)
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })