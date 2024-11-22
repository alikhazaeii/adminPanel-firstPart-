const Name:HTMLInputElement= document.getElementById('name') as HTMLInputElement
console.log(Name);

const lastname:HTMLInputElement= document.getElementById('lname') as HTMLInputElement
console.log(lastname);


const emali: HTMLInputElement = document.querySelector('#email') as HTMLInputElement;
console.log(emali);
const age: HTMLInputElement = document.querySelector('#Age') as HTMLInputElement;
console.log(age);

const btn = document.querySelector('button')
const h2: HTMLElement = document.querySelector('h2') as HTMLElement


if (h2) {
   setInterval(() => {
    const day = new Date().getDay()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const secound = new Date().getSeconds()
    const min = new Date().getMinutes()
    
    const hour = new Date().getHours()
    let date = `${year}/${day}/${month}   ${hour}:${min}:${secound}`
    if( secound<10){
        date = `${year}/${day}/${month}   ${hour}:${min}:${'0'+secound}`
    }
    if(min<10){
        date = `${year}/${day}/${month}   ${hour}:${'0'+min}:${secound}`
    }
    h2.innerHTML = date
   }, 1000);


}
interface form {
    name: string;
    lastname: string;
    email: string;
    age: string;
    date:string;
}
const div : HTMLElement = document.querySelector('div') as HTMLElement
const h3 : HTMLElement = document.createElement('h3') 
btn?.addEventListener('click', () => {
       
    if (Name.value != '' && lastname.value != '' && emali.value != '' && age.value != '') {
        const form: form = {
            name: Name.value,
            lastname: lastname.value,
            email: emali.value,
            age: age.value,
            date:h2.innerHTML
        }
        

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
           
            h3.innerHTML=`Signup successful!!`
            h3.style.color='green'
            div.appendChild(h3)
        }).catch(error => {
            // handle error
            alert('not added!!!')
        })
      
    } else{
        h3.innerHTML='please fill the inputs!!';
        h3.style.color='red'
    }
       
       
    
})



