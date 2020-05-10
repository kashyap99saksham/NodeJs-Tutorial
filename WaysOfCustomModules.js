// first way of exporting function
// exports.sayHello = ()=>{
//     return "Hello"
// }

// second way of exporting functions are:
// module.exports={
//     sayHello: function()
//     {
//         return "Hello"
//     },
//     sayHII: function()
//     {
//         return "HIIIII"
//     }    
// }

// Third Way of Exporting Module
var myfunc = {
    sayHello: function()
    {
        return "Hello"
    },
    sayHII: function()
    {
        return "HIIIII"
    }    
}
module.exports = myfunc

