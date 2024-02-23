const data = {
  code: 42,
  items: [
    {
      id: 1,
      name: 'foo'
    },
    {
      id: 2,
      name: 'bar'
    }
  ]
};

const flatObject = (object) => {
  const flatArray = [];

  const flatten = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        flatten(obj[key]);
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach(item => flatten(item));
      } else {
        flatArray.push(obj[key]);
      }
    }
  };

  flatten(object);
  return flatArray;
};


console.log(flatObject(data)); // Output: [42, 1, 'foo', 2, 'bar']

