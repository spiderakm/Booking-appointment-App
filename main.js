// const u1 = document.querySelector('.items')


// u1.children[1].innerText = 'ashok'
// u1.lastElementChild.innerHTML = '<h1>ashok</h1>'
// const btn = document.querySelector('.btn')

// btn.style.background = 'red';
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('body').classList.add('bd-dark');
//     document.querySelector('.items').lastElementChild = 'hello';
// })
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput === '') {
        msg.classList.add('error')
        msg.innerHTML = 'enter all field'
        setTimeout(() => msg.remove(),3000)
    } else {
        //store the value in local storage
        const name = e.target.name.value;
        const email = e.target.email.value;

        const obj = {name:name,
        email:email}



        localStorage.setItem(obj.email,stringify(obj))
        
        // localStorage.setItem('Name',name);
        // localStorage.setItem('Email',email);
        //get the value from local storage and save into form

        const getobj = JSON.parse(localStorage.getItem(obj.email))





        const li =  document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }

}


// // Local storage
// localStorage.setItem('name','ashok')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')


// //session storage
// sessionStorage.setItem('name','ashok')
// sessionStorage.setItem('name','kumar')

// //cookies
// document.cookie = 'name=ashok; expires=' + new Date(2024,1,1).toUTCString()
// document.cookie = 'lastname=kumar; expires=' + new Date(2024,1,1).toUTCString()
// console.log(document.cookie)