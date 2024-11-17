let a:number= 5;
console.log(a);
// function parameter type declaration
function printName(firstName:string|number|boolean){
    console.log(firstName);
}
printName(23        );
printName("hi")
printName(true)

// function return type declaration 
function getSum(a:number,b:number):string{
    return "" +a+b;
}

console.log(getSum(2,3));
