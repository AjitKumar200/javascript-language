// const num  = [1,2,3,4,5];
// for ( const count of num){
//     if( count == 3){
//        break;
//     }
//     console.log(count);
// }
// let arr = "Ajit kumar yadav"
// for ( const space of arr){
//     if (space == " "){
//         break;
//     }
//      console.log(space);
//     // console.log(`each character is ${space}`);
// }

// +++++++++ Map datatype ++++++++++++

// const datatype =  new Map();
// datatype.set('IN',"India");
// datatype.set('Us',"United states");
// datatype.set('En',"England");
// // console.log(datatype)
// // for ( const key of datatype){
// //     console.log( key )
// // }
// for ( const [key, value] of datatype){
//         // console.log( key , ":-" , value )
// }

// // ++++++++++++++++++++++ for loop ++++++++++++++++++
// const myObject = {
//         js : "javascript",
//         cpp : "c++",
//         c:    "c",
//         rb : "ruby",
//         py : "python",
//         java : "java"

// }
// for (const object in  myObject){
// //      console.log(object);

// //  console.log(`${object} is for ${myObject[object]}`);
// }

// // ++++++++++++++++ special cases +++++++++++++++++

// const languages = ["Ajit ", "java","python","c++","c"]
// // languages.forEach(function(name) {
// //   console.log(name);
// // })

// languages.forEach( (item) => {
// //  console.log(item);
// })

// ++++++++++ array k andar object +++++++++++

const mycoding = [
        {
                languageName : "javascript",
                languageFileName : "js"
        },
        {
                languageName : "java",
                languageFileName : "java"
        }, 
        {
                 languageName : "python",
                 languageFileName : "py"
        }
]

mycoding.forEach( (items) =>{
        console.log(items.languageName);
})