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
    accounts.forEach(element => {
        if (element.accountNumber === x) {

            let out: any[] = [];                    // make free varible for push the other information there and then call easily
            out.push(element.clientName);
            out.push(element.balance);                  // push into the new varible

            console.log(out)
        }
    });
}       getNameAndBalance(11234543);



// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transfers(a,b,c,d){
    a.forEach(element=>{
        let out: any= 0;
        if((element.accountNumber === b) && (element.accountNumber === c )){
            out.push(element.accountNumber);
            //c += b.push(element.accountNumber);
        //  console.log(d);
            console.log('from',b ,'ámount',out , 'to', c);
        }  else {
            console.log( "404 - account not found");
            
        }
    })
}
console.log(transfers(accounts,43546731,23456311,12345));
 








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
