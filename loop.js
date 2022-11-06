function myApp() {
    const arr = [2, 3, 5, 7, 9, 0, 13, 10];
    var mapArr;
    var filterArr;
    var age = 30;

    if (age > 18) {

        console.log("Let's go for a drink");
    } else {
        console.log("Go home, you are inderaged");

    }


    filterArr = arr.filter(filter);
    console.log(filterArr);

}




function filter(item) {

    return item > 10;
}
myApp();

setTimeout(() => {
    console.log("test satetment 1");
}, 200000);

console.log("Test statement 2");