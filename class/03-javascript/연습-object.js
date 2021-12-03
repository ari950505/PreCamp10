let profile = {}
// undefined
profile = {}
// {}
profile = { 
    name : '철수',
    age : 8,
    school: '다람쥐초등학교'
}
// {name: '철수', age: 8, school: '다람쥐초등학교'}
profile.age
// 8
let age = profile.age
// undefined
age
// 8
profile.school
// '다람쥐초등학교'


const profiles = [
    { name: "철수", age: 8, school: "다람쥐초등학교" },
    { name: "영희", age: 11, school: "공룡초등학교" },
    { name: "훈이", age: 13, school: "거북이초등학교" }
]
// undefined
profiles
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 8, school: '다람쥐초등학교'}1: {name: '영희', age: 11, school: '공룡초등학교'}2: {name: '훈이', age: 13, school: '거북이초등학교'}length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
profiles.length
// 3
profiles[1]
// {name: '영희', age: 11, school: '공룡초등학교'}
profiles[2].school
// '거북이초등학교'
profiles[1].name
// '영희'



// 과일 연습

const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]
// undefined
fruits
// 0: {number: 1, title: '레드향'}1: {number: 2, title: '샤인머스켓'}2: {number: 3, title: '산청딸기'}3: {number: 4, title: '한라봉'}4: {number: 5, title: '사과'}5: {number: 6, title: '애플망고'}6: {number: 7, title: '딸기'}7: {number: 8, title: '천혜향'}8: {number: 9, title: '과일선물세트'}9: {number: 10, title: '귤'}length: 10[[Prototype]]: Array(0)
fruits.number
// undefined
fruits.title
// undefined
fruits[0].number + ' ' + fruits[0].title
'1 레드향'
fruits[1].number + ' ' + fruits[1].title
'2 샤인머스켓'
fruits[2].number + ' ' + fruits[2].title
'3 산청딸기'
fruits[3].number + ' ' + fruits[3].title
'4 한라봉'
fruits[4].number + ' ' + fruits[4].title
'5 사과'
fruits[5].number + ' ' + fruits[5].title
'6 애플망고'
fruits[6].number + ' ' + fruits[6].title
'7 딸기'
fruits[7].number + ' ' + fruits[7].title
'8 천혜향'
fruits[8].number + ' ' + fruits[8].title
'9 과일선물세트'
fruits[9].number + ' ' + fruits[9].title
'10 귤'