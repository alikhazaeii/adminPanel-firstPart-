"use strict";
const Name = document.getElementById('name');
console.log(Name);
const lastname = document.getElementById('lname');
console.log(lastname);
const emali = document.querySelector('#email');
console.log(emali);
const age = document.querySelector('#Age');
console.log(age);
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
if (h2) {
    setInterval(() => {
        const day = new Date().getDay();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const secound = new Date().getSeconds();
        const min = new Date().getMinutes();
        const hour = new Date().getHours();
        let date = `${year}/${day}/${month}   ${hour}:${min}:${secound}`;
        if (secound < 10) {
            date = `${year}/${day}/${month}   ${hour}:${min}:${'0' + secound}`;
        }
        if (min < 10) {
            date = `${year}/${day}/${month}   ${hour}:${'0' + min}:${secound}`;
        }
        if (hour < 10) {
            date = `${year}/${day}/${month}   ${'0' + hour}:${min}:${secound}`;
        }
        h2.innerHTML = date;
    }, 1000);
}
const div = document.querySelector('div');
const h3 = document.createElement('h3');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    if (Name.value != '' && lastname.value != '' && emali.value != '' && age.value != '') {
        const form = {
            name: Name.value,
            lastname: lastname.value,
            email: emali.value,
            age: age.value,
            date: h2.innerHTML
        };
        fetch('https://673fa428a9bc276ec4b93059.mockapi.io/signupform', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(form)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
            h3.innerHTML = `Signup successful!!`;
            h3.style.color = 'green';
            div.appendChild(h3);
        }).catch(error => {
            // handle error
            alert('not added!!!');
        });
    }
    else {
        h3.innerHTML = 'please fill the inputs!!';
        h3.style.color = 'red';
    }
});
