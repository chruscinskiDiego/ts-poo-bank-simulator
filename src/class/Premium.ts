import { Account } from "./Account";

export class Premium extends Account{

    constructor(name:string, accountNumber:number, balance:number, status:boolean){
        super(name,accountNumber, balance, status);
    } 

    deposit = (value:number) :void => {


        try{

            const currentBalance = this.getBalance();
            
            this.setBalance(currentBalance + (value + 10));

            console.log(`Valor R$ ${value} com acréscimo de R$ 10 foi adicionado com sucesso! | Total: R$ ${this.getBalance()}`);
        
        }
        catch{

            console.log(`Erro ao adicionar o valor!`);

            throw new Error();

        }

    }
}