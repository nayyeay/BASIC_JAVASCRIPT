 //membuat nama dan tanggal lahir dengan math objects
 function main() {
    var year = 2005
    
    //the output
    console.log(calcCent(year));
    
}

//complete the function
function calcCent(year){
    return Math.ceil(year/100)
} 
main()