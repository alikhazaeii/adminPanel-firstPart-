const Name: HTMLInputElement = document.getElementById('name') as HTMLInputElement
// console.log(Name);

const lastname: HTMLInputElement = document.getElementById('lname') as HTMLInputElement
// console.log(lastname);


const email: HTMLInputElement = document.querySelector('#email') as HTMLInputElement;
// console.log(email);
const age: HTMLInputElement = document.querySelector('#Age') as HTMLInputElement;
// console.log(age);

const signUpBtn = document.querySelector('.signup>button')
// console.log(signUpBtn);

const h2: HTMLElement = document.querySelector('h2') as HTMLElement

const pass: HTMLInputElement = document.querySelector('#password') as HTMLInputElement


const signUpForm: HTMLElement = document.querySelector('.signup') as HTMLElement
// console.log(signUpForm);

const logIngForm: HTMLElement = document.querySelector('.login') as HTMLElement
// console.log(logIngForm);

/////////////////////////////////////////change Forms//////////////////////////////////////
const signUpA: HTMLElement = document.querySelector('.signup>p>a') as HTMLElement
// console.log(signUpA);

const logInA: HTMLElement = document.querySelector('.login>p>a') as HTMLElement
// console.log(logInA);

const inp = document.querySelectorAll('input')
// console.log(inp);


logInA?.addEventListener('click', () => {
    logIngForm.classList.add('go')
    signUpForm.classList.add('come')
})

signUpA.addEventListener('click', () => {
    logIngForm.classList.remove('go')
    signUpForm.classList.remove('come')
})
////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////url//////////////////////////////////////
const url = new URL('https://673fa428a9bc276ec4b93059.mockapi.io/signupform/')



if (h2) {
    setInterval(() => {
        const day = new Date().getDay()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        const secound = new Date().getSeconds()
        const min = new Date().getMinutes()
        const hour: number = new Date().getHours()
        let date = `${year}/${day}/${month}   ${hour}:${min}:${secound}`

        if (secound < 10) {
            date = `${year}/${day}/${month}   ${hour}:${min}:${'0' + secound}`
        }
        if (min < 10) {
            date = `${year}/${day}/${month}   ${hour}:${'0' + min}:${secound}`
        }
        if (hour < 10) {
            date = `${year}/${day}/${month}   ${'0' + hour}:${min}:${secound}`
        }


        h2.innerHTML = date
    }, 1000);


}
interface form {
    name: string;
    lastname: string;
    email: string;
    age: string;
    date: string;
    password: string;

}
const div: HTMLElement = document.querySelector('div') as HTMLElement
const h3: HTMLElement = document.createElement('h3')
const loginBtn: HTMLElement = document.querySelector('.login>button') as HTMLElement
const invalid = document.querySelector('.invalid')

signUpBtn?.addEventListener('click', () => {
    //    console.log(signUpBtn);


    if (Name.value != '' && lastname.value != '' && email.value != '' && age.value != '' && pass.value != '') {
        // alert('ok')
        const form: form = {

            name: Name.value,
            lastname: lastname.value,
            email: email.value,
            age: age.value,
            date: h2.innerHTML,
            password: pass.value,
        }


        fetch(url, {
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

            // console.log(loginBtn);

            h3.innerHTML = `Signup successful!!`
            h3.style.color = 'green'
            signUpForm.appendChild(h3)



        }).catch(error => {
            // handle error
            alert('not added!!!')
        })

    } else {
        h3.innerHTML = 'please fill the inputs!!';
        h3.style.color = 'red'
    }



})


//////////////////////////////////////login//////////////////////////////////



loginBtn.addEventListener('click', () => {
    const url = new URL('https://673fa428a9bc276ec4b93059.mockapi.io/signupform/')

    url.searchParams.append('email', email.value); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false
    url.searchParams.append('password', pass.value); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false&page=1



    fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(tasks => {




        /////////////////////////////////////////user login///////////////////////////////////////////////////////


        let users = tasks.find((val: any) =>
            inp[0].value == val.email && inp[1].value == val.password
        )


        if (users) {
            const wellcome: HTMLElement = document.querySelector('.wellcome') as HTMLElement
            console.log(wellcome);
            wellcome.innerHTML = `
        <h5>wellcome: ${users.name}</h5>
        <i class="bi bi-clipboard-check"></i>
        `
            if (invalid) {
                invalid.innerHTML = ''
            }

            setTimeout(() => {
                const userWlc = document.querySelector('.userwlc')

                userWlc?.classList.add('userlogined')
                const Nav = document.createElement('nav')
                Nav.innerHTML = `
                <i class="bi bi-twitter-x" title="logOut"></i> 
                <img src="asset/img/avatar.png" alt="">
                <p>Hi, ${users.name} </p>
                <ul>
                <li>dashbord</li>
                <li>setting</li>
                <li>calender</li>
                <li>tickets</li>
                <li>contacts</li>
                </ul>
                <i class="bi bi-trash3-fill" id="delete"></i>

                `

                const SettingDelete = Nav.querySelector('i:nth-of-type(2)')
                console.log(SettingDelete);

                userWlc?.appendChild(Nav)

                const setting = Nav.querySelector('ul>li:nth-of-type(2)')
                // console.log(setting);
                // console.log(users.id);


                setting?.addEventListener('click', () => {
                    // console.log(users.id);
                    // console.log(users.password);
                    const settingDiv: HTMLElement = document.querySelector('.setting') as HTMLElement
                    settingDiv.classList.add('set')
                    // const setEdDiv=document.createElement('article')
                    // setEdDiv.innerHTML=`
                    // <h4>change name</h4>
                    // <input type="text">
                    // <h4>change password</h4>
                    //   <input type="text">

                    // `
                    // settingDiv.appendChild(div)
                    const settingDivChangeName = settingDiv.querySelector('input:nth-of-type(1)') as HTMLInputElement
                    const settingDivChangePassword = settingDiv.querySelector('input:nth-of-type(2)') as HTMLInputElement

                    const updatedName = settingDivChangeName?.value || users.name;
                    const updatedPassword = settingDivChangePassword?.value || users.password;
                    // console.log(settingDivChangeName);
                    console.log(updatedName);
                    console.log(updatedPassword);


                    const changeConfirm = settingDiv.querySelector('button:nth-of-type(1)')





                    changeConfirm?.addEventListener('click', () => {

                        const updatedName = settingDivChangeName?.value || users.name;
                        const updatedPassword = settingDivChangePassword?.value || users.password;

                        fetch(`https://673fa428a9bc276ec4b93059.mockapi.io/signupform/` + users.id, {
                            method: 'PUT',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({
                                name: updatedName,
                                password: updatedPassword,
                            }),
                        })
                            .then((res) => {
                                if (res.ok) return res.json();
                                throw new Error('Failed to update user');
                            })
                            .then((updatedUser) => {
                                alert('Edit completed successfully!');
                                console.log('Updated User:', updatedUser);
                                location.reload();

                            })
                            .catch((error) => {
                                console.error('Error updating user:', error);
                                alert('Update failed.');
                            });

                    })



                    const setCancel = settingDiv.querySelector('button:nth-of-type(2)') as HTMLButtonElement
                    console.log(setCancel);
                    setCancel.addEventListener('click', () => {
                        settingDiv.classList.remove('set')
                    })

                })


                //////////////////////////////////////////////////delet///////////////////////////////////////////////


                SettingDelete?.addEventListener('click', () => {
                    const deleteDiv = document.querySelector('.delete')
                    console.log(deleteDiv);
                    if (deleteDiv) {
                        deleteDiv.innerHTML = `
                                <p>Are you sure?</p>
                                <button>yes</button>
                                <button>no</button>
                                `
                        deleteDiv.classList.add('divdelete')
                    }
                    const no = deleteDiv?.querySelector('button:nth-of-type(2)')
                    no?.addEventListener('click', () => {
                        deleteDiv?.classList.remove('divdelete')
                    })

                    const yes = deleteDiv?.querySelector('button:nth-of-type(1)')
                    yes?.addEventListener('click', () => {
                        fetch(`https://673fa428a9bc276ec4b93059.mockapi.io/signupform/` + users.id, {
                            method: 'DELETE',
                        }).then(res => {
                            if (res.ok) {
                                return res.json();
                            }
                            // handle error
                        }).then(task => {
                            // Do something with deleted task
                            location.reload()
                        }).catch(error => {
                            // handle error
                        })
                    })


                })





                const userWlcLogout = document.querySelector('.userwlc>Nav>i')

                userWlcLogout?.addEventListener('click', () => {
                    userWlc?.classList.remove('userlogined')
                    wellcome.innerHTML = ''
                    location.reload()
                })
                console.log(users);


            }, 1500);



        }

        else if (inp[0].value == 'Admin' && inp[1].value == 'Admin') {
            window.location.href = 'https://alikhazaeii.github.io/adminPanel-secound-part-/';
        } else {
            console.log(invalid);

            if (invalid) {
                invalid.innerHTML = `
                <h5>email or password invalid</h5>
                `

            }



        }



    }).catch(error => {
        // handle error
    })
})


// window.location.href=('https://alikhazaeii.github.io/adminPanel-secound-part-/')

// mockapi returns first 10 tasks that are not completed



const AdminPanel = document.querySelector('.adminpanel')
const innerAdmin = document.createElement('span')
innerAdmin.innerHTML = `
<h6>AdminPAanel Email & Password</h6>
<p>Email: Admin</p>
<p>password: Admin</p>
`
AdminPanel?.appendChild(innerAdmin)



