//  bài tập 1
let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  }
//  in ra các key của các thuộc tính
console.log(Object.keys(person))
// in ra các values của các thuộc tính
console.log(Object.values(person))
// in ra cả 2 dưới dạng array
console.log(Object.entries(person))

// bài tập 2
let obj = {
    b: 2,
    a: 1,
    c: 3,
  }
let arr = Object.keys(obj)
let arr2 = arr.map(arr=>arr.toUpperCase())
console.log(arr2)


// bài tập 3
let myFamily = {
  quantity: 4,
  member: ["Dad", "Mom", "Me", "Daughter"],
	location: "Vietnam",
}
let family = Object.create(myFamily)
console.log(myFamily.isPrototypeOf(family))

// bài tập 4
let obj2 = {
  foo: { x: "hello", y: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
}
// obj2.bar[3].xyz = 606
// console.log(obj2)

obj2.bar.splice(3,1,606)
console.log(obj2)