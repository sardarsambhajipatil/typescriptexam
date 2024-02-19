// then create a class called SaveAccount which inherits from Account class and implement lAccount interface note: each class and interface will be in a separate file and connect it using import, and for function bodies use anything like console.log("FunctionName") for example

import { Account } from './accountClass';
import { lAccount } from './interfaceAccount';

class SaveAccount extends Account implements lAccount {
    constructor(accountNumber: number, balance: number) {
        super(accountNumber, balance);
    }
    addCustomer(): void {
        console.log('addCustomer');
    }
    removeCustomer(): void {
        console.log('removeCustomer');
    }
    
}

let saveAccount = new SaveAccount(123, 1000);
console.log(saveAccount.getBalance());

saveAccount.addCustomer();
saveAccount.removeCustomer();