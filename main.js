1//

const firstArray  = [1,2,3]
const secondArray = [4,5,6]


const union = [...firstArray, ...secondArray]
console.log(union)

//2

const testArr = [1,2,3, 0, undefined, null, NaN, ""]


const clean = (array)=>{
   return array.filter(item => item)
}

console.log(clean(testArr))


//3


const fillArray = (arrlength, value) =>{
    let arr = []
    for(let i = 0; i< +arrlength; i++){ arr.push(value)}
    return arr
}


console.log(fillArray(3, 5))



//5



const generateArray = (startPoint, endPoint)=>{
    let array = []
    for(let i = startPoint; i<=endPoint; i++){
        array.push(i)
    }
    return array
}

console.log(generateArray(5,8))