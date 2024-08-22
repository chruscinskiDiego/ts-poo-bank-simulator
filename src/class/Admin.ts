import { Account } from "./Account";

export class Admin extends Account{

    constructor(name:string, accountNumber: number, balance:number, status:boolean){
        super(name, accountNumber, balance, status);
        
    }

    getValue = () :void => {
        console.log(this.getBalance());
    }
}

