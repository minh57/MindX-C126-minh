// bài tập 1
let x = parseFloat(prompt("Hãy nhập biến thứ nhất"))
let y = parseFloat(prompt("Hãy nhập biến thứ hai"))
let result;
let dau = prompt("Hãy nhập phép tính")
if( dau == "+" ){
alert(`${x} + ${y} = ${x+y}`)
}else if ( dau == "-" ){
    alert( `${x} - ${y} = ${x-y}` ) 
}else if( dau == "*" ){
    alert( `${x} * ${y} = ${x * y}` )
}else {
    alert( `${x} / ${y} = ${x/y}` )
}


// bài tập 2
let n = parseFloat(prompt("Hãy nhập só"))
if ( n == 1 || n == 0 ){
    alert("Đây không phải là số nguyên tố")
}else if(n==2){
    alert("Đây là số nguyên tố")
}else {
    for(let i = 2;i<n;i++){
        if( n%i == 0 )
       { alert(`${n} không là số nguyên tố`)
         break}
         else{
alert(`${n} là số nguyên tố`)
break
}

}
}
