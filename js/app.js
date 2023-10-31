//Ввод данных
// Преобразование строки в число "parseInt()" или "+"
//let x = +(prompt("Введите x"))
// В prompt('передача текста', 'подсказка в поле ввода')
//let name = prompt("Введите имя", 'Имя')

// Обработка данных
//x += 1
//str = `Привет ${name}`

// Вывод данных
//alert("x = " + x)
//alert(`x = ${x}`)
//alert(str)

//Функции:
//function askName(){
    //let name = prompt("Введите свое имя", "Name");
    //if (name == "Name") {
        //alert("no Name");
    //} else {
        //str = `Привет ${name}`;
        //alert(str);
    //}
    //str = `Привет ${name}`
    //alert(str)
//}

//askName()
function askName() {
    let name = document.getElementById("name").value;
    //console.log(name)
    // Валидация данных
    if (name == '') {
        document.getElementById("error-name").innerText = 'Ошибка! Введите Ваше имя!';
        return;
    }
    str = `Привет, ${name}!`;
    document.getElementById("result-name").innerText = str;
    document.getElementById("name").value = '';
    document.getElementById("error-name").innerText = '';

}

function askbrendName() {
    let brend = document.getElementById("brend").value;
    //console.log(name)
    // Валидация данных
    if (brend == '') {
        document.getElementById("error").innerText = 'Ошибка! Введите название ручки!';
        return;
    }
    if ((brend == 'Bic') || (brend =='ErichKrause') || (brend =='Beifa') || (brend =='Brauberg') || (brend =='Centrum')) {
        document.getElementById("result").innerText = `${brend} - хороший выбор!`;
        document.getElementById("brend").value = '';
        document.getElementById("error").innerText = '';
        return
    }
    str = `${brend} - главное чтобы хорошо писала!`;
    document.getElementById("result").innerText = str;
    document.getElementById("brend").value = '';
    document.getElementById("error").innerText = '';

}
