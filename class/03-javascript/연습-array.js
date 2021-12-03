// console array 연습

const classmates = ['철수','영희','훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[2]
'훈이'
classmates[3]
// undefined
classmates.includes('훈이')
// true
classmates.includes('코드')
// false
classmates.push('코드')
// 4
classmates
// (4) ['철수', '영희', '훈이', '코드']
classmates.includes('코드')
// true
classmates.pop('코드')
// '코드'
classmates.pop()
// '훈이'
classmates.push('훈이')
// 3
classmates
// (3) ['철수', '영희', '훈이']
classmates.length
// 3