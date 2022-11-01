//lesson 24.1
// var orang = {
//     nama: "nayla" , usia: 17, warnaFav: "pink", tinggiBadan: 160, beratBadan: 55
// }
// console.log(orang.nama)


//lesson 25.1
// var course = {name : "menjahit", chapter : 1}
// console.log(course.name.length)

//lesson 26.1
//instance of object / (new)

/*
function person (name, age, color){
this.name = name;
this.age = age;
this.favColor= color;
}

var p1 = new person("john", 37, "red")
var p2 = new person("jordi", 27, "pink")
console.log(p1.name)
console.log(p2.age)

*/

//lesson 27.1
function makan(status,food){
    this.status = status;
    this.food = food;
    this.changestatus = function(status){
        this.status=status
    }
}

var p1 = new makan('berdoa', 'mie');
p1.changestatus('sedang')
console.log(p1.status+" makan "+p1.food)
