import { Admin } from "./class/Admin";
import { Company } from "./class/Company";
import { Premium } from "./class/Premium";

const companyAccountTrue:Company = new Company('Verdadeiro', 10, 10, true);
const companyAccountFalse:Company = new Company('Farso', 10, 10, false);

const adminAccountTrue:Admin = new Admin('Diego', 111, 100, true);

const adminAccountFalse:Admin = new Admin('Milena', 100, 100, false);

const premiumAccount = new Premium('Diegoo', 2020, 150, true);


console.log("Testes com ADMIN ACCOUNT:")
adminAccountTrue.deposit(100);
adminAccountTrue.withdraw(200);

console.log("- / - / - / - / -");

adminAccountFalse.deposit(100);
adminAccountFalse.withdraw(100);


console.log("\n");


console.log("Testes com COMPANY ACCOUNT:");

companyAccountTrue.getLoan(1000);


console.log("- / - / - / - / -");


companyAccountFalse.getLoan(1000);


console.log("- / - / - / - / -");

premiumAccount.deposit(100);
