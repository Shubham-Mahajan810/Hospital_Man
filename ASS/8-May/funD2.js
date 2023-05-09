//1. Try all assignments done in class
// 2. Write a class Product with properties prodectName, productCost and
// prodDesc and showProdDetails function
// a. Use "class" syntax . Create objects and call showProdDetails
// b. In another file create same class using function constructor syntax
// create objects and call showProdDetails
// c. In another file create a JSON object with above properites and function
// Call the showProdDetails


// class book{
//     constructor(bin,cost){
//         this.bookName=bin
//         this.bookCost=cost
//     }
// }
// let obj=new book("learning react",300)
// console.log(obj)



// function pen(penColor,penCost){
//   this.pColor=penColor
//   this.pCost=penCost
// }
// let obj=new pen("Black",250)
// console.log(obj)

let book=[]
book.push(new book("bk1",250))
book.push(new book("bk2",300))
book.push(new book("bk3",350))
console.log(book)

let total=0
for(b of books)
{
    total= total + b.bookCost
}

console.log(total)

for(x in obj)
{
    console.log(x,"=",obj[x])
}