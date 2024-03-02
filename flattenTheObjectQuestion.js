// const deeplyNestedObject = {
//     level1: {
//       key1: "value1",
//       level2: {
//         key2: "value2",
//         level3: {
//           key3: "value3",
//           level4: {
//             key4: "value4",
//             level5: {
//               key5: "value5",
//               level6: {
//                 key6: "value6",
//                 level7: {
//                   key7: "value7"
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   };
  
// function flattenObject(object) {
//   for(let key in object) {
//     if(typeof object[key] == 'object') {
//       flattenObject(object[key])
//     } else {
//       console.log(object[key])
//     }
//   }
// }

// flattenObject(deeplyNestedObject)


const arr= [1,2,[3,4,[5,6,7,[8,9]]],[10,11],13]


function flatArray(arr) {
    let flatArr = []
    for(let val of arr) {
        if(typeof val == 'object' ) {
            flatArr = flatArr.concat(flatArray(val))
        }else{
            flatArr.push(val)
        }
    }
    return  flatArr

}




console.log(flatArray(arr))



const fA = (array) => {
  return array.reduce((acc, current) => {
    if (Array.isArray(current)) {
      return acc.concat(fA(current));
    }
    return acc.concat(current);
  }, []);
};

const flattenArray = (array) => {
    return array.reduce((acc , current)=> {
        if(Array.isArray(current)) {
            return acc.concat(flatArray(current))
        } else {
            return acc.concat(current)
        }
    },[])
}

console.log(flattenArray)