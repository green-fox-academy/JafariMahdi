'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];
// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(input) {
  for (let person of accounts) {
    if (input === person.accountNumber) {
      return [person.clientName, person.balance]
    }
  }
}

console.log(getNameAndBalance(11234543));
console.log('----------------------');



// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.



function transferAmount(accounts, from, to_account, amount) {
  let sender
  let resiver
  for (let account of accounts) {
    if (account.accountNumber === from) { sender = account }
    if (account.accountNumber === to_account) { resiver = account }
  }
  if (sender === undefined) { throw new Error('from Account number is wrong') }
  if (resiver === undefined) { throw new Error('to_Account number is wrong') }

  sender.balance -= amount;
  resiver.balance += amount;
}
console.log(accounts);

transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);



//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
