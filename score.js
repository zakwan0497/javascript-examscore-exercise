
const markah = [80, 99, 57, 40, 88, 39]

// kirakan purata
// pseudocode
// tambah semua, bahagi dengan bilangan

let hasilTambahSemua = 0
markah.forEach((nombor) => {
    hasilTambahSemua = hasilTambahSemua + nombor
    console.log(hasilTambahSemua)
})

console.log('total ' , hasilTambahSemua)
console.log('bilangan data ' , markah.length)
console.log('purata' , hasilTambahSemua / markah.length)


// dapakan markah tertinggi
// sort dulu, dapatkan tertinggi
// return value last

console.log('susunan asal ' , markah)
markah.sort()
console.log('sorted ' , markah)
// console.log('markah tertinggi ', markah[5])
console.log('markah tertinggi ', markah[markah.length - 1])    // minus 1 sebab array start from 0  (0 ~ 5)


// sort in ascending order
console.log('susunan asal ' , markah)
markah.sort((a,b) => a-b)                   // default
console.log('sorted ascending' , markah)
console.log('markah tertinggi ', markah[markah.length - 1])

// sort in descending order
console.log('susunan asal ' , markah)
markah.sort((a,b) => b-a)
console.log('sorted descending' , markah)
console.log('markah tertinggi ', markah[markah.length - 1])



// dapatkan gred

// A = 80 --> 100
// B = 70 --> 79
// C = 40 --> 69
// F = less than 40

// generate new array wth grade

// cara A (if else)
// console.log('markah asal ' , markah)
// const grade = markah.map((nombor) => {
//     if (nombor >= 80){
//         return 'A'
//     } else if (nombor >= 70 && nombor <= 79){
//         return 'B'
//     } else if (nombor >= 40 && nombor <= 69){
//         return 'C'
//     } else //if (nombor <= 40)
//     {
//         return 'F'
//     }
// })
// console.log('grade ' , grade)

// cara B (switch)
let grade = []
markah.forEach(nombor => {
    switch (true) {             // switch range statement

        case nombor >= 80:
            grade.push('A')
            break;

        case nombor >= 70 && nombor <= 79:
            grade.push('B')
            break;

        case nombor >= 40 && nombor <= 69:
            grade.push('C')
            break;
        
        default:
            grade.push('F')
            break;
    }
});
console.log('grade' , grade)


// Higher order function
// ...
//     map ==> untuk create new array. Return new array
// forEach ==> just loop sahaja. Tak generate new array / return anything