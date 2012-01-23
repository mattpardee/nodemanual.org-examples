// Example: Using slice

// Using slice, create newCar from myCar.
var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
var newCar = myCar.slice(0, 2);

// Print the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log("myCar = " + JSON.stringify(myCar));
console.log("newCar = " + JSON.stringify(newCar));
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is " + myHonda.color);

// Print the color of myHonda referenced from both arrays.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);