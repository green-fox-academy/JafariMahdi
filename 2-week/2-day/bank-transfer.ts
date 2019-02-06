'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(x) {
    accounts.forEach(value => {
        if (value.accountNumber === x) {

            let out: any[] = [];                    // make free varible for push the other information there and then call easily
            out.push(value.clientName);
            out.push(value.balance);                  // push into the new varible

            console.log(out)
        }
    });
} getNameAndBalance(11234543);



// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transfers(account, from_account, to_account, amount) {
    account.forEach(function (value) {

        if (value.accountNumber === from_account) {
            value.balance -= amount;
            return ()
        }
        if (value.accountNumber === to_account) {
            value.balance += amount;
        }

        console.log(account, from_account, to_account, amount);
        
        else {
            console.log("404 - account not found");
        }
    })
}

transfers(accounts, 43546731, 23456311, 500.0);
console.log(accounts);










// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
/*
export = {
  getNameAndBalance,
  transferAmount,
  accounts
};  */
