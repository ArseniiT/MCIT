

// ----------------------- Converter v1 -----------------------------

function toCel(f) {
  return ((f-32)/9) * 5;
}

function toFahr(c) {
  return (c/5)*9 + 32;
}

function converter(degWithType) {
  let posOfType = degWithType.length - 1;
  let type = degWithType[posOfType];
  let deg = degWithType.slice(0,posOfType);

  if(isNaN(deg)){
    return " | I can't convert it, use correct data | ";
  }

  if (type === 'f') {
    return toCel(deg);
  }
  if (type === 'c') {
    let c = {
      name: 1.2,
      
    }
    return toFahr(deg);
  }
}

document.write(`60C in fahrenheit equals ${toFahr(60)} <br><br>`);
document.write(`45F in celsius equals ${toCel(45)} <br><br>`);
document.write(`60C in celsius equals ${converter('60c')} <br><br>`);
document.write(`45F in celsius equals ${converter('45f')} <br><br>`);
document.write(`45F in celsius equals ${converter('45fff')} <br><br>`);


