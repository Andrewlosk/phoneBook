const phoneBook = [
    { name: "Олексій Іванов", phone: "+380 67 123-45-67" },
    { name: "Марія Смирнова", phone: "+380 67 234-56-78" },
    { name: "Іван Кузнецов", phone: "+380 67 345-67-89" },
    { name: "Ольга Попова", phone: "+380 67 456-78-90" },
    { name: "Дмитро Васильєв", phone: "+380 67 567-89-01" },
    { name: "Анна Петрова", phone: "+380 67 678-90-12" },
    { name: "Сергій Соколов", phone: "+380 67 789-01-23" },
    { name: "Олена Михайлова", phone: "+380 67 890-12-34" },
    { name: "Микола Новіков", phone: "+380 67 901-23-45" },
    { name: "Тетяна Федорова", phone: "+380 67 012-34-56" },
    { name: "Олександр Волков", phone: "+380 67 123-45-78" },
    { name: "Вікторія Лебедєва", phone: "+380 67 234-56-89" },
    { name: "Юрій Морозов", phone: "+380 67 345-67-90" },
    { name: "Наталія Павлова", phone: "+380 67 456-78-01" },
    { name: "Андрій Семенов", phone: "+380 67 567-89-12" },
    { name: "Світлана Григор'єва", phone: "+380 67 678-90-23" },
    { name: "Михайло Романов", phone: "+380 67 789-01-34" },
    { name: "Катерина Медведєва", phone: "+380 67 890-12-45" },
    { name: "Георгій Борисов", phone: "+380 67 901-23-56" },
    { name: "Ірина Васильченко", phone: "+380 67 012-34-67" }
];

const phoneList = document.querySelector('#phoneList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// сортую масив обєктів за алфавітом
phoneBook.sort((a,b) => a.name.localeCompare(b.name))

// const copiedPhoneBook = [...phoneBook]
// const copyPhoneBookLow = phoneBook.map(entry => ({
//     name: entry.name.toLowerCase(),
//     phone: entry.phone
// }))
// console.log(copyPhoneBookLow);



// виводжу масив обєктів на сторінку
phoneBook.forEach(elem => {
    const listElem = document.createElement('div');
    listElem.innerHTML = `<p id="listItem">ім'я: ${elem.name}, телефон: ${elem.phone}</p>`
    phoneList.appendChild(listElem)
});


// функція для знаходження контакту
const searchContact = () => {
    phoneList.innerHTML = '';
    const inputValue = searchInput.value
    phoneBook.forEach(elem => {

        if (elem.name.includes(inputValue) || elem.phone.includes(inputValue)) {
            console.log(elem.name, elem.phone);
            
            const listElem = document.createElement('div');
            listElem.innerHTML = `<p id="listItem">ім'я: ${elem.name}, телефон: ${elem.phone}</p>`
            phoneList.appendChild(listElem)
        }
    })
}

searchBtn.addEventListener('click', searchContact)