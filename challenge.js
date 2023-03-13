const decodeVariations = (S) => {
  const checkNode = (index) => {
    const num = parseInt(S.substr(index, 2));
    if(num === NaN || S.charAt(index) === '0') {
      return 0;
    } else if(index === S.length - 1) {
      return 1;
    } else if(num === 10 || num === 20) {
      return index === S.length - 3 ? 1 : checkNode(index + 2);
    } else if((num > 10 && num < 20) || (num > 20 && num < 27)) {
      return checkNode(index + 1) + (index === S.length - 2 ? 1 : checkNode(index + 2));
    } else {
      return checkNode(index + 1);
    }
  }

  return checkNode(0);
};

test = decodeVariations('1270');

console.log(test);