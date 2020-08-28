function voyageRisk (voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  result = history.length < 5 ? result +4 :result;
  result += history.filter(v => v.profit < 0).length;
  result = isInChina(voyage,history) ? result - 2 :result;
  return Math.max(result, 0);
}

function isExist(voyage){
  return voyage.zone === 'china' || voyage.zone === 'east-indies'
}

function judgeLength(voyage,history){
  return history.length > 10 || voyage.length > 12;
}

function isInChina(voyage,history){
  return voyage.zone === 'china' && hasChina(history);
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if(isExist(voyage)){
    result += 1;
  }
  if (isInChina(voyage,history)) {
    result += 3;
    result = judgeLength(voyage,history) ? result + 1:result;
    result = voyage.length > 18 ? result - 1:result;
    return result;
  }
  result = history.length > 8 ? result + 1: result;
  result = voyage.length > 14 ? result - 1: result;
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return vpf * 3 > (vr + chr * 2) ? 'A':'B'
}

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);

module.exports = {
  voyageRisk,captainHistoryRisk,voyageProfitFactor
}