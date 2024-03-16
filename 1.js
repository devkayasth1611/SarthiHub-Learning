//1
const pi = 3.14159;
console.log("The value of PI is : "+pi);
//Showing Error beacuse pi is const variable. so, it is not change the value
pi = 2.14159;
console.log("The value PI is : "+pi);

// function dk(pi)
// {
//     pi = 2.14;
//     console.log("The value of PI is : "+pi);
// }
// dk();


//2
for(let i = 1;i <= 10;i++)
{
    console.log("Hello world!!");
}
// It is showing error because we can't declare the variable outside the loop
console.log(i);

// 3
function addNumbers(a,b)
{
    return console.log(a+b);
}
addNumbers(5,10);

function subtractNumbers(a,b)
{
    return console.log(a-b);
}
subtractNumbers(10,5);

//4
function calculate(a,b,cal) {
    console.log("Perform Calculate : ");
    cal(a,b);
}

function addNumbers(x,y) 
{
    console.log("The Sum is : "+(x+y));
    console.log("The Sub is : "+(x-y));
}
calculate(15,10,addNumbers);

//5
let cart = ['Soap','Shampoo','Oil','Body lotion'];
console.log(cart);

cart.push('Face Wash');
console.log(cart);
cart.pop();
console.log(cart);

