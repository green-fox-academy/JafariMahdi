'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(accountN: number) {
    let result: any[] = [];                    // make list for push all the information for call it easily
    accounts.forEach(value => {
        if (accountN === value.accountNumber) {
            result.push(value.clientName);
            result.push(value.balance);
            console.log(result);
        }
    });
} getNameAndBalance(43546731);
console.log('-----------------------------------');


let errorMessage: string = '404 - account not found';

function transferAmount(accounts: any[], fromAccountNumber, toAccountNumber, amount): any {

    if (!(accounts.indexOf(toAccountNumber) || accounts.indexOf(fromAccountNumber))) {
        return errorMessage;
    }
    for (let i: number = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber == fromAccountNumber) {
            accounts[i].balance -= amount;

        }
        else if (accounts[i].accountNumber == toAccountNumber) {
            accounts[i].balance += amount;
        }
    }
}

transferAmount(accounts, 43546731, 23456311, 500.0);

console.log(accounts);

