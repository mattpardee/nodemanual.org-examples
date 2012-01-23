// Example: Using splice

var myFish = ["angel", "clown", "mandarin", "surgeon"];
console.log("myFish: " + myFish);

var removed = myFish.splice(2, 0, "drum");
console.log("After adding 1, " + myFish);
console.log("removed is: " + removed);

removed = myFish.splice(3, 1);
console.log("After removing 1, " + myFish);
console.log("removed is: " + removed);

removed = myFish.splice(2, 1, "trumpet");
console.log("After replacing 1, " + myFish);
console.log("removed is: " + removed);

removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
console.log("After replacing 2, " + myFish);
console.log("removed is: " + removed);