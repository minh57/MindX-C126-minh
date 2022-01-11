// bài tập 1
function checkAge(age){
if( age < 18 || age ==18  ){
   (age === 18) ? console.log("Bạn đã đủ tuổi đi tù") : console.log("Bạn còn là trẻ con") 
}else if ( age > 18 && age < 60 ) {
    console.log("Bạn là thanh niên")
}else {
    console.log("Bạn đã già")
}
}
checkAge(18)
checkAge(12)
checkAge(19)
checkAge(70)


// bài tập 2
function min( a , b ){
   if ( a < b ){
       console.log("Min là a")
    }else if( a>b || a==b){
        ( a > b ) ? console.log("Min là b") : console.log("a=b Min là a hoặc b")
    }
}

// bài tập 3
let admin = prompt( "xin chào bạn vui lòng nhập nơi bạn muốn đến" )
    if( admin === ""){
    alert( "Cancelled")
} else if( admin === "admin"){
    let password = prompt("Hãy nhập mật khẩu");
if( password === ""){
    alert("Đã hủy")
}else if ( password === "cafedev"){
    alert("Chào mừng ")
}else {
    alert("Mật khẩu sai")
}
}else{
    alert("Tôi không biết bạn")
}




