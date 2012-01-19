// Example: Using splice

// assumes a print function is defined
var myFish = ["angel", "clown", "mandarin", "surgeon"];
print("myFish: " + myFish);

var removed = myFish.splice(2, 0, "drum");
print("After adding 1, " + myFish);
print("removed is: " + removed);

removed = myFish.splice(3, 1);
print("After removing 1, " + myFish);
print("removed is: " + removed);

removed = myFish.splice(2, 1, "trumpet");
print("After replacing 1, " + myFish);
print("removed is: " + removed);

removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
print("After replacing 2, " + myFish);
print("removed is: " + removed);