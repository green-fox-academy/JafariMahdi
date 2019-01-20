
//    *
//   ***
//  *****
// *******

let number: number= 4 ;
let star: string ='*';
let space: string= '';

// in the first line we make loop for the sapce 


for( let i = 0;i < number ; i++ ) {
        for ( let j = 1; j < 4 - i ;j++ ){
                space += '$';
            }
            if (i == 0){
                star += ''
            }else{
                star +='**'
            }
            
       console.log(space,star);
       space ='';
       
    } //console.log(space,star);

