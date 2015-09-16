//Conditional Logic

var kidHeight = 52;
var minHeight = 48;
var parentHeight = 45;

//if child is old enough print to console "You can ride!"
//if kid is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");

}else if(kidHeight > parentHeight){
    console.log("You can ride with a parent");
} else {
    //you can ride with a parent
    console.log("Sorry kiddo");
}