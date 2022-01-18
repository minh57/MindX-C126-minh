// /* scope phạm vi
//  phạm vi mà biến đó khả dụng

// */
// if(true){
//   let x = 1;
//   console.log(x)
// }
// // console.log(x) khi cs ở đây thì sẽ ko cs đc vì ko cùng 1 scope


// /* function:hàm
//  Hàm là 1 đơn vị code,thực thi nhiệm vụ
//  có khả năng tái sử dụng cao
// return : Kết quả trả về , tái sử dụng để tiếp tục tính toán
// sau return thì các dòng lệnh sau sẽ ko đc thực thi
//  */

// // khai báo
// function sayHello(){
//     console.log("hello bro")
// }
// // thực thi
// sayHello()


// // Tính diện tích tam giác
// // function tên biến    biến truyền vào khi thực thi function
//                 // |           |
//                 // |           |
//                 // |           |
// function getTriangleArea( d , h){
//     const area = (d * h) / 2
//     console.log(`Diện tích: ${area}`)
//     return area
// }

// getTriangleArea( 10 ,5 )
// getTriangleArea( 7 , 8)


// function sumTriangleArea(d1,h1,d2,h2){
//     let area1 = getTriangleArea(d1 ,h1)
//     console.log("area1",area1)
//     let area2 = getTriangleArea(d2 , h2)
//     console.log("area2",area2)
//     console.log("Tổng",area1 + area2)
// }
// sumTriangleArea( 5,10,12,14)
// // mảng đa chiều
// let arr = [0,1,2,3,4]
// console.log(arr)
// console.log(arr[3])

// // arr.push(6)      
// // // thêm phần tử vào array
// // arr.splice(1)
// // xóa phần tử nào đó
// // let arr2 = arr.splice( 2 , 2 )
// // console.log(arr2)
// arr.splice( 2 , 0 , 5 )
// console.log(arr)
function giaSpham(x,y){
    const giaSau = x - ( x*(y/100) )
    console.log(giaSau)
}
giaSpham(100,5)