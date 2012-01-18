// Example

var recursive = function () {
   console.log("It has been one second!");
   setTimeout(recursive,1000);
    }
recursive();