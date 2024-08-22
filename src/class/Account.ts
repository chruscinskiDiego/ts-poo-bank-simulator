export abstract class Account {
    
    private readonly name: string;
    private readonly accountNumber: number;
    private balance:number;
    private status:boolean;

    constructor(name:string, accountNumber:number, balance:number, status:boolean){
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
    }

    //getters and setters

    getName = ():string => {
        
        return this.name;
    }

    getAccountNumber = () :number => {
        return this.accountNumber;
    }

    setBalance = (balance:number) :void => {
        this.balance = balance;
    }

    getBalance = () :number =>{
        return this.balance;
    }

    setStatus = (status:boolean) :void => {
        this.status = status
    }

    getStatus = () :boolean => {
        return this.status;
    }
    

    //methods
    deposit = (value:number) :void => {


        try{

            this.balance += value;

            console.log(`Valor R$ ${value} adicionado com sucesso! | Total: R$ ${this.balance}`);
        
        }
        catch{

            console.log(`Erro ao adicionar o valor!`);

            throw new Error();

        }

    }

    withdraw = (value:number) :void => {

        if(this.status === true && this.balance >= value){

            try{

                this.balance -= value;
    
                console.log(`Valor R$ ${value} sacado com sucesso! | Total: R$ ${this.balance}`);
            
            }
            catch{
    
                console.log(`Erro ao sacar o valor!`);
               
                throw new Error();
            }

        }
        else{

            console.log(`Sua conta se encontra desativada ou o valor de ${value} é superior ao seu saldo!`);

        }

        
    }
}