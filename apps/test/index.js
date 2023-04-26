import qs from 'qs'

let str = qs.stringify({a: [1, 2, 3]}, {arrayFormat: 'brackets'})
let str2 = qs.stringify({a: [1, 2, 3]})

let str3 = qs.parse(str)
let str4 = qs.parse(str2)
debugger
