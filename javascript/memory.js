// primitive datatype use stack memory that directly store the value in memory
//non-primitive datatype uses heap memory that store the value by references in memory
let myname = "Ajit kumar"
let Anothername= myname;

Anothername="jamuna"
console.log(myname);
console.log(Anothername)
console.log(myname===Anothername);


let myinfo={
    name:"Ajit",
    age:21

}
console.log(myinfo.name)
let mybio = myinfo
 mybio.name="sujeet"

console.log(myinfo.name)
console.log(mybio.name)