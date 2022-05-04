// Creating object using object literals:
let myCar={
    name:"Aulto",
    speed:180,
    run:function(){
        console.log("car is running");
        return "Ok";
    }
};
console.log(myCar);

// Creating object using constructors:
// Details is a constructor which contains 2 properties: name and age. this keyword refers to the properties inside a constructor.
function details(name,age){
    this.detailsName=name,
    this.detailsAge=age
};
// Created a new object armyMan with the details constructor. This new object inherited all the properties of the constructor.
let armyMan=new details("Jhon",34);
console.log(armyMan);