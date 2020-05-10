var event = require('events')

// var eventEmitter = new event.EventEmitter()

// eventEmitter.on("Clicked",()=>[
//     console.log("Event is clicked")
// ])
// eventEmitter.emit("Clicked")  //Whenever We emit with same "Clicked" word then that event is trigger and anything inside that emitter will work

// // Again trigger with different event
// eventEmitter.on("Clicked2",()=>[
//     console.log("Event2 is clicked")
// ])
// eventEmitter.emit("Clicked2")  //Whenever We emit with same "Clicked2" word then that event is trigger and anything inside that emitter will work

// // We can also pass some args. to emitter
// eventEmitter.on("Clicked3",(arg)=>[
//     console.log( arg + " Event3 is clicked")
// ])
// eventEmitter.emit("Clicked3",'Argument Passing')  //We can pass any no. of arg

// Inheritance Using util
var util = require('util')

var Student = function() {          //Making a class which wants to inherit 
    this.name = "saksham"
}
util.inherits(Student , event.EventEmitter)    //this funct take 2 arg | 1 class which wnts to inhert, 2 Parent Class 

var max = new Student()    //Creating object of student class

max.on('scored',(val)=>{                    //now this obj can call any function or inherited class
    console.log(val + " agrument")
})

max.emit('scored',"hello")