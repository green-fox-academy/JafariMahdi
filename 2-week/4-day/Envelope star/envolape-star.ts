
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');






function draw(){

let a: number= 300;
let b : number = 600;
let c: number = 300;
let d: number=0 ;
    for(let i =0; i <= 15; i ++){
     ctx.beginPath();
     ctx.moveTo(300,a);
     ctx.lineTo(b,300);

     ctx.moveTo(c,300);
     ctx.lineTo(300,d);
     ctx.strokeStyle = 'blue';
     ctx.stroke();

     a -=15;
     b -=15;
     c +=15;
     d +=15;
     }}
     draw();

function draw2(){
    
let a: number= 300;
let b : number = 0;
let c: number = 300;
let d: number=0 ;

for(let i =0; i <= 15; i ++){

 ctx.beginPath();
 ctx.moveTo(300,a);
 ctx.lineTo(b,300);
 ctx.strokeStyle= 'red';
 ctx.stroke();
            
 ctx.moveTo(c,300);
 ctx.lineTo(300,d);
 ctx.stroke();
            
 a -=15;
 b +=15;
 c -=15;
 d +=15;
 }}
 draw2();        
 function draw3(){
    
let a: number= 300;
let b : number = 600;
let c: number = 300;
let d: number=0 ;
            
for(let i =0; i <= 15; i ++){
            
ctx.beginPath();
ctx.moveTo(a,300);
ctx.lineTo(300,b);
ctx.stroke();
                        
ctx.moveTo(300,c);
ctx.lineTo(d,300);
ctx.strokeStyle='yellow';
ctx.stroke();
                        
a -=15;
b -=15;
c +=15;
d +=15;
}}
draw3();                           

function draw4(){
    
let a: number= 300;
let b : number = 600;
let c: number = 300;
let d: number=600 ;
                        
for(let i =0; i <= 15; i ++){
                        
ctx.beginPath();
ctx.moveTo(a,300);
ctx.lineTo(300,b);
ctx.stroke();
                                    
ctx.moveTo(300,c);
ctx.lineTo(d,300);
ctx.strokeStyle='green';
ctx.stroke();
a +=15;
b -=15;
c +=15;
d -=15;
}}
draw4();     



let a: number[]=[1,2,3,4,5];

a.forEach((item)=>{
                     console.log('The value of a is: '+ item )   
                                                                })