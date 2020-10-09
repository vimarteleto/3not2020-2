/*
    Area do retangulo = base * altura
    Area do triangulo = base * altura / 2
    Area do elipse = (base / 2) * (altura / 2) * pi
*/

let retangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'R'
}

let triangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'T'
}

let elipse = {
    base: 2.5,
    altura: 4.5,
    tipo: 'E'
}

const area = forma => {
    switch(forma.tipo) {
        case 'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default:
            return null
    }
}

console.log(area(retangulo))
console.log(area(triangulo))
console.log(area(elipse))