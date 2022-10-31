function score (team1, team2){
    var a = "team 1 win!"
    var b = "team 2 win!"
    var c = "draw"
if (team1 > 2){
    return a;
}
else if (team2 > 2){
    return b;
}
else{
    return c;
}
}
console.log(score(2, 4));