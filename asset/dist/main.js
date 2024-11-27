"use strict";
const Name = document.getElementById('name');
// console.log(Name);
const lastname = document.getElementById('lname');
// console.log(lastname);
const email = document.querySelector('#email');
// console.log(email);
const age = document.querySelector('#Age');
// console.log(age);
const signUpBtn = document.querySelector('.signup>button');
// console.log(signUpBtn);
const h2 = document.querySelector('h2');
const pass = document.querySelector('#password');
const signUpForm = document.querySelector('.signup');
// console.log(signUpForm);
const logIngForm = document.querySelector('.login');
// console.log(logIngForm);
/////////////////////////////////////////change Forms//////////////////////////////////////
const signUpA = document.querySelector('.signup>p>a');
// console.log(signUpA);
const logInA = document.querySelector('.login>p>a');
// console.log(logInA);
const inp = document.querySelectorAll('input');
// console.log(inp);
logInA === null || logInA === void 0 ? void 0 : logInA.addEventListener('click', () => {
    logIngForm.classList.add('go');
    signUpForm.classList.add('come');
});
signUpA.addEventListener('click', () => {
    logIngForm.classList.remove('go');
    signUpForm.classList.remove('come');
});
////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////url//////////////////////////////////////
const url = new URL('https://673fa428a9bc276ec4b93059.mockapi.io/signupform/');
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
const loginBtn = document.querySelector('.login>button');
const invalid = document.querySelector('.invalid');
signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.addEventListener('click', () => {
    //    console.log(signUpBtn);
    if (Name.value != '' && lastname.value != '' && email.value != '' && age.value != '' && pass.value != '') {
        // alert('ok')
        const form = {
            name: Name.value,
            lastname: lastname.value,
            email: email.value,
            age: age.value,
            date: h2.innerHTML,
            password: pass.value,
        };
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
            h3.innerHTML = `Signup successful!!`;
            h3.style.color = 'green';
            signUpForm.appendChild(h3);
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
//////////////////////////////////////login//////////////////////////////////
loginBtn.addEventListener('click', () => {
    const url = new URL('https://673fa428a9bc276ec4b93059.mockapi.io/signupform/');
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
        let users = tasks.find((val) => inp[0].value == val.email && inp[1].value == val.password);
        if (users) {
            const wellcome = document.querySelector('.wellcome');
            console.log(wellcome);
            wellcome.innerHTML = `
        <h5>wellcome: ${users.name}</h5>
        <i class="bi bi-clipboard-check"></i>
        `;
            if (invalid) {
                invalid.innerHTML = '';
            }
            setTimeout(() => {
                const userWlc = document.querySelector('.userwlc');
                userWlc === null || userWlc === void 0 ? void 0 : userWlc.classList.add('userlogined');
                const Nav = document.createElement('nav');
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

                `;
                const SettingDelete = Nav.querySelector('i:nth-of-type(2)');
                console.log(SettingDelete);
                userWlc === null || userWlc === void 0 ? void 0 : userWlc.appendChild(Nav);
                const setting = Nav.querySelector('ul>li:nth-of-type(2)');
                // console.log(setting);
                // console.log(users.id);
                setting === null || setting === void 0 ? void 0 : setting.addEventListener('click', () => {
                    // console.log(users.id);
                    // console.log(users.password);
                    const settingDiv = document.querySelector('.setting');
                    settingDiv.classList.add('set');
                    // const setEdDiv=document.createElement('article')
                    // setEdDiv.innerHTML=`
                    // <h4>change name</h4>
                    // <input type="text">
                    // <h4>change password</h4>
                    //   <input type="text">
                    // `
                    // settingDiv.appendChild(div)
                    const settingDivChangeName = settingDiv.querySelector('input:nth-of-type(1)');
                    const settingDivChangePassword = settingDiv.querySelector('input:nth-of-type(2)');
                    const updatedName = (settingDivChangeName === null || settingDivChangeName === void 0 ? void 0 : settingDivChangeName.value) || users.name;
                    const updatedPassword = (settingDivChangePassword === null || settingDivChangePassword === void 0 ? void 0 : settingDivChangePassword.value) || users.password;
                    // console.log(settingDivChangeName);
                    console.log(updatedName);
                    console.log(updatedPassword);
                    const changeConfirm = settingDiv.querySelector('button:nth-of-type(1)');
                    changeConfirm === null || changeConfirm === void 0 ? void 0 : changeConfirm.addEventListener('click', () => {
                        const updatedName = (settingDivChangeName === null || settingDivChangeName === void 0 ? void 0 : settingDivChangeName.value) || users.name;
                        const updatedPassword = (settingDivChangePassword === null || settingDivChangePassword === void 0 ? void 0 : settingDivChangePassword.value) || users.password;
                        fetch(`https://673fa428a9bc276ec4b93059.mockapi.io/signupform/` + users.id, {
                            method: 'PUT',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({
                                name: updatedName,
                                password: updatedPassword,
                            }),
                        })
                            .then((res) => {
                            if (res.ok)
                                return res.json();
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
                    });
                    const setCancel = settingDiv.querySelector('button:nth-of-type(2)');
                    console.log(setCancel);
                    setCancel.addEventListener('click', () => {
                        settingDiv.classList.remove('set');
                    });
                });
                //////////////////////////////////////////////////delet///////////////////////////////////////////////
                SettingDelete === null || SettingDelete === void 0 ? void 0 : SettingDelete.addEventListener('click', () => {
                    const deleteDiv = document.querySelector('.delete');
                    console.log(deleteDiv);
                    if (deleteDiv) {
                        deleteDiv.innerHTML = `
                                <p>Are you sure?</p>
                                <button>yes</button>
                                <button>no</button>
                                `;
                        deleteDiv.classList.add('divdelete');
                    }
                    const no = deleteDiv === null || deleteDiv === void 0 ? void 0 : deleteDiv.querySelector('button:nth-of-type(2)');
                    no === null || no === void 0 ? void 0 : no.addEventListener('click', () => {
                        deleteDiv === null || deleteDiv === void 0 ? void 0 : deleteDiv.classList.remove('divdelete');
                    });
                    const yes = deleteDiv === null || deleteDiv === void 0 ? void 0 : deleteDiv.querySelector('button:nth-of-type(1)');
                    yes === null || yes === void 0 ? void 0 : yes.addEventListener('click', () => {
                        fetch(`https://673fa428a9bc276ec4b93059.mockapi.io/signupform/` + users.id, {
                            method: 'DELETE',
                        }).then(res => {
                            if (res.ok) {
                                return res.json();
                            }
                            // handle error
                        }).then(task => {
                            // Do something with deleted task
                            location.reload();
                        }).catch(error => {
                            // handle error
                        });
                    });
                });
                const userWlcLogout = document.querySelector('.userwlc>Nav>i');
                userWlcLogout === null || userWlcLogout === void 0 ? void 0 : userWlcLogout.addEventListener('click', () => {
                    userWlc === null || userWlc === void 0 ? void 0 : userWlc.classList.remove('userlogined');
                    wellcome.innerHTML = '';
                    location.reload();
                });
                console.log(users);
            }, 1500);
        }
        else if (inp[0].value == 'Admin' && inp[1].value == 'Admin') {
            window.location.href = 'https://alikhazaeii.github.io/adminPanel-secound-part-/';
        }
        else {
            console.log(invalid);
            if (invalid) {
                invalid.innerHTML = `
                <h5>email or password invalid</h5>
                `;
            }
        }
    }).catch(error => {
        // handle error
    });
});
// window.location.href=('https://alikhazaeii.github.io/adminPanel-secound-part-/')
// mockapi returns first 10 tasks that are not completed
const AdminPanel = document.querySelector('.adminpanel');
const innerAdmin = document.createElement('span');
innerAdmin.innerHTML = `
<h6>AdminPAanel Email & Password</h6>
<p>Email: Admin</p>
<p>password: Admin</p>
`;
AdminPanel === null || AdminPanel === void 0 ? void 0 : AdminPanel.appendChild(innerAdmin);
