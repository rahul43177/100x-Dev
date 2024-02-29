const deeplyNestedObject = {
    level1: {
      key1: "value1",
      level2: {
        key2: "value2",
        level3: {
          key3: "value3",
          level4: {
            key4: "value4",
            level5: {
              key5: "value5",
              level6: {
                key6: "value6",
                level7: {
                  key7: "value7"
                }
              }
            }
          }
        }
      }
    }
  };
  
function flattenObject(object) {
  for(let key in object) {
    if(typeof object[key] == 'object') {
      flattenObject(object[key])
    } else {
      console.log(object[key])
    }
  }
}

flattenObject(deeplyNestedObject)