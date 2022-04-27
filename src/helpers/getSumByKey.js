const getSumByKey = (arr, key) =>
  arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0);

export default getSumByKey;
