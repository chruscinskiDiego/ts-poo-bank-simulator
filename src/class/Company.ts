import {Account} from './Account';

export class Company extends Account {

    constructor(name:string, accountNumber:number, balance:number, status:boolean){
        super(name,accountNumber, balance, status);
    } 

    getLoan = (value:number) :void => {

        if(this.getStatus() === true){
            
            try{

                const currentBalance = this.getBalance();

                this.setBalance(currentBalance + value);

                console.log(`Empréstimo no valor de R$ ${value} realizado com sucesso!`);
                
            }
            catch{

                console.log(`Não foi possível realizar o empréstimo!`);
                throw new Error;

            }
        }
        else{

            console.log(`Sua conta está desativada`);
            
        }
        

    }

    deposit = (value: number) => {
        console.log("Alterado em Company "+ value);
    }

}