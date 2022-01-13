// // Object: key và value
//     // phân tách bằng dấu phẩy
// function sayHello(){
//     console.log("Hello")
// }

//     let obj = {
//     age : 20 ,
//     address : {
//         city : "Hanoi",
//         district : "Đống Đa",
//         country : "vietnam"
//     } ,
//     name : "MindX" ,
//     age : 21 ,
//     tags : [ "bôm","bốp"] ,
//     sayHello : sayHello,
//     1:2
// }
// console.log(obj)

// // lấy giá trị theo key
// // chỉ có thể truy cập key bằng dấu []
// console.log(obj.name)
// console.log(obj.address.city)
// console.log(obj[1])
// console.log(obj["tags"])
// obj.sayHello()
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// for(let i = 0 ; i  < Object.keys(obj).length;i++){
   
// }
// for ( let i in obj){
//     console.log(i)
//     console.log(obj[i])
// }


// /* * string , number ,boolean,null,undefined-Kiểu dữ liệu nguyên thủy
// * object-Kiểu dữ liệu tham chiếu
// */

// let x = 0
// let y = 0
// console.log(x===y)

// let bar = {}
// let foo = {}
// let baz = foo
// foo.name = "Mindx"
// console.log(baz)
// console.log(foo===bar)



// BT: Tạo một object về thông tin một nghệ sĩ tiêu biểu với các thuộc tính bao gồm: tên, tuổi,
//  giới tính, lĩnh vực, sở thích (nhiều sở thích sử dụng mảng).
// → truy cập các properties trong object vừa tạo
// → Tạo một array mới và thêm object vừa tạo vào array đó.



// let conan = {
//     name : "Conan",
//     age : 6,
//     gender : "Nam" ,
//     job : "Thám tử",
//     favour : ["Ran","Kid","bắn thuốc mê"]
// }
// console.log(Object.keys(conan))
// console.log(Object.values(conan))
// let manga = ["dragon ball","slam dunk"]
// manga.push(conan)
// console.log(manga)

// let foo = {
//     a: 'hello',
//     b: 'world',
//   };
  
//   let qux = 'hello';
  
//   function bar(argument1, argument2) {
//     argument1.a = 'hi';
//     argument2 = 'hi';
//   }
  
//   bar(foo, qux);
  
//   console.log(foo.a);
//   console.log(qux);
  
// Setup
const contacts = [
    {
      firstName: "Van",
      lastName: "Nguyen",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Pho"],
    },
    {
      firstName: "Son",
      lastName: "Trinh",
      number: "0994372684",
      likes: ["Cheese", "Donut", "Apple"],
    },
    {
        firstName: "Trong",
        lastName: "Le",
        number: "0487345643",
        likes: ["Beer", "King Crab"],
      },
      {
        firstName: "Tong",
        lastName: "Vo",
        number: "unknown",
        likes: ["Tiger", "Sword", "Wine"],
      },
    ];
    
    function lookUpProfile(name, prop) {
     for(let i = 0; i < contacts.length;i++ ){
         if( name === contacts[i].firstName){
            //  console.log(contacts[i])

            // for (const y in contacts[i]) {
            //     if( prop === y ){
            //         return contacts[i][y]
            //     }else{
            //         if (Object.keys(contacts[i]).length) {
                        
            //         }
            //         return "Không tồn tại thuộc tính trên"
            //     }
            // }
            for (let j = 0; j < Object.keys(contacts[i]).length; j++) {
                const element = Object.keys(contacts[i]);
                if (element[j] === prop) {
                    return contacts[i][prop]
                } 
                else {
                    if (j=== element.length - 1) {
                        return "Không tồn tại thông tin trên"
                    }
                }
            }
         }else {
             if (i === contacts.length - 1) {
                return "Không tồn tại thông tin trên"
             }
            //  else {
            //     continue
            //  }
         }
         
     }
    
    }
    let result = lookUpProfile("Trong", "likes")
   console.log(result)
    // if ( prop === "lastName" ){
            //     console.log("Vo")
            // }
    
    
    // lookUpProfile("Van", "likes");
    // - `lookUpProfile("Tong", "lastName")` nên trả về string `Vo`
    // - `lookUpProfile("Trong", "likes")` nên trả về array `["Beer", "King Crab"]`
    // - `lookUpProfile("Yen", "number")` nên trả về `Không tồn tại thông tin trên` bởi vì Yen 
    // không có trong Object contacts
    // - `lookUpProfile("Son", "address")` nên trả về `Không có thuộc tính trên`
          