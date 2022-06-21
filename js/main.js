// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


// inziializzo la variabile di contatore

const listaSpesa = [
    'latte',
    'kinder pingui',
    'barbera',
    'ardbeg',
    'Barolo Rinaldi',
    'waghiu iberico',
    'patanegra',
];
// aggancio all'id nell'html
const listElement = document.getElementById('lista-spesa');
console.log(listElement);
let index = 0

while (index < listaSpesa.length) {

    i++

    console.log(listElement[i]);
    const elementList = document.createElement('li');
    elementList
}