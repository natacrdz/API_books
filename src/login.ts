import {ControllerUsers} from './controllers/controllers.users.js';

const URL_USERS: string = "http://190.147.64.47:5155"
const form = document.querySelector("form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", async(e: Event) => {
    e.preventDefault();
    const crudUsers = new ControllerUsers(URL_USERS);
    const respuesta = await crudUsers.login(email,password);

    const token: string | null = respuesta.data.token;

    if(token){
        localStorage.setItem('authToken', token);
        window.location.href = "books.html";
        console.log("Login successful");
        
    }else{
        console.log("Login failed")
    }
    form.reset();
});



  
