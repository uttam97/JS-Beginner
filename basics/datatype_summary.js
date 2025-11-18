// # Primitive
// 7 types : String, Number, boolean, Null (standalone value), undefined, Symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')

// both are not same as symbol will return unique value


// # Non Primitive (reference)

// Array, Objects, Function

const hero = ["shak","nagr","doga"]

let myobj = {
    name :"uttam",
    age : 18
}

const func = function()
{
    console.log("Uttam")
}
