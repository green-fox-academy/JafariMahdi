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
//----------------------------------------


// creat function that transfert money from one account to other
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }

function transferAmount(accounts, from, to_account, amount) {
  let senderAccount
  let reciverAccount

  // check the conditions: we have the sender and the receiver, if the sender has enough money
  for (let item of accounts) {
    if (item.accountNumber === from) {
      senderAccount = item
    }
    if (item.accountNumber === to_account) {
      reciverAccount = item
    }
  }

  if (senderAccount === undefined) {
    throw new Error('sender account not found')
  }

  if (reciverAccount === undefined) {
    throw new Error('reciver account not found')
  }

  if (senderAccount.balance < amount) {
    throw new Error('the balance is not enough');
  }

  // transfer the money
  senderAccount.balance -= amount;
  reciverAccount.balance += amount;
}
console.log(accounts)

transferAmount(accounts, 43546731, 23456311, 500.0)

console.log(accounts);



// sakhtan varible jadid hamisheh komk mikonad ta rahatar masale ro hal konid 