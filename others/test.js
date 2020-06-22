export let name = 'lch'
export function getName() {
    console.log('hello js.')
}


const arr = [1, [2, 3, 4], 5, [6, [8]]];

function myFlat(arr) {
    let result = [];
    for (const item of arr) {
        // item instanceof Array ? result = result.concat(myFlat(item)) : result.push(item)
        result = result.concat(item instanceof Array ? myFlatTwo(item) : item)
    }
    return result
}

myFlat(arr)

function myFlatTwo(arr) {
    return arr.reduce((prev, cur) => {
        // return prev.concat(cur instanceof Array ? myFlatTwo(cur) : cur)
        return cur instanceof Array ? prev.concat(myFlatTwo(cur)) : prev.concat(cur)
    }, [])
}

myFlatTwo(arr)

while(arr.some())