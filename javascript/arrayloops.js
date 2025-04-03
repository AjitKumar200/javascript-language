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

const datatype =  new Map();
datatype.set('IN',"India");
datatype.set('Us',"United states");
datatype.set('En',"England");
// console.log(datatype)
// for ( const key of datatype){
//     console.log( key )
// }
for ( const [key, value] of datatype){
        console.log( key , ":-" , value )
}