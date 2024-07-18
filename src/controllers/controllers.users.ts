import {BodyResquestLogin, BodyResponseLogin} from "../models/auth.model"


export class ControllerUsers {
    public domain: string;
    constructor(domain: string) {
        this.domain = domain;
    }
    async login(email:HTMLInputElement, password:HTMLInputElement): Promise<BodyResponseLogin>{
        const userData:BodyResquestLogin={
            email: email.value,
            password: password.value
        }
        const headers: Record<string, string> = {
            'accept':'*/*',
            'Content-Type': 'application/json'
        }
        const requestOptions: RequestInit = {
            method: 'POST', //metodo de Login
            headers: headers,
            body: JSON.stringify(userData),
        }
        const response:Response= await fetch(`${this.domain}api/v1//auth/login`, requestOptions);
        
        if (!response.ok) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error(`Error: ${response.status}${response.statusText}`);
        }
        const responseBodyLogin:BodyResponseLogin = await response.json();
        return responseBodyLogin;
    }
}