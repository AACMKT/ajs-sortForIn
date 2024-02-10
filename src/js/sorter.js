export default function orderByProps(obj, prop) {
  const sortedByProp = [];
  const sortedByAlphabet = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (prop.includes(key)) {
        sortedByProp.push([key, obj[key]]);
      } else {
        sortedByAlphabet.push([key, obj[key]]);
      }
    }
  }
  sortedByAlphabet.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  const result = [];
  const sortedArray = [...sortedByProp, ...sortedByAlphabet];
  sortedArray.forEach((attr) => result.push({ key: attr[0], value: attr[1] }));
  return result;
}
