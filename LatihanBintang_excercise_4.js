//segitiga 1
var s = "";
for(var i = 5; i > 0; i--){
    for (var j = 0; j < i; j++){
        s += "*";
    }
    s += "\n";
}
console.log(s);

//bintang segitiga 2
var s = "";

for(var i = 0; i < 5; i++){
    for(var j = 0; j <= i; j++){
        s += "*";
    }
    s += "\n";
}
console.log(s);


// miring
// i
let a = 5;
let star = "";
for (let b = 1; b <= a; b++) {
  
  for (let j = 0; j < a - b; j++) {
    star += " ";
  }
  
  for (let k = 0; k < b; k++) {
    star += "*";
  }
  star += "\n";
}

for (let b = 0; b < a; b++) {
  
  for (let k = 0; k < a - b; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

// love
var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
  for (let j = 1; j < n - i; j += 2) {
    str += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  for (let j = 1; j < n - i + 1; j++) {
    str += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}

for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

// u
let x = 10; 
let string = "";

for(let i = 1; i < x; i++) { 
  for(let j = 0; j < x; j++) { 
    if(i === 0 || i === x - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === x - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }

  string += "\n";
}

console.log(string);