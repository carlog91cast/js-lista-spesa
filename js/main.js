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
const button = document.getElementById('btn-genera');
button.addEventListener('click', function () {
    listaSpesa.push(prompt('add shopping list'));

    // aggancio all'id nell'html

    const listElement = document.getElementById('lista-spesa');
    console.log(listElement);
    let index = 0;

    // creo un ciclo while per gestire l'array listaSpesa
    while (index < listaSpesa.length) {

        index++

        console.log(listElement[index]);
        const elementList = document.createElement('li');
        elementList.innerHTML += listaSpesa[index];

        // aggancio la lista con append all'html

        listElement.append(elementList);
    }
})

// creo un prompt in cui chiedo all'utente di inserire un nuovo elemento 
