const numbertToType = (type) => {
  switch (type) {
    case 1:
      return 'Small';
    case 2:
      return 'Medium';
    case 3:
      return 'Large';
    default:
      return 'Small';
  }
};

export default numbertToType;
