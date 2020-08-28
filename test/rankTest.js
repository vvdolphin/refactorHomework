
const test = require('ava');
const {voyageRisk,captainHistoryRisk,voyageProfitFactor} = require('../src/rank')

test('test1 return 1', t =>{
    const voyage ={
      'length':2,
      'zone':'Japan'
    };
    const number = voyageRisk(voyage);
    t.is(1, number);
})

test('test2 return 3', t =>{
  const voyage ={
    'length':5,
    'zone':'Japan'
  };
  const number = voyageRisk(voyage);
  t.is(3, number);
})

test('test3 return 4', t =>{
  const voyage ={
    'length':9,
    'zone':'Japan'
  };
  const number = voyageRisk(voyage);
  t.is(4, number);
})


test('test4 return 8', t =>{
  const voyage ={
    'length':9,
    'zone':'china'
  };
  const number = voyageRisk(voyage);
  t.is(8, number);
});


test('test5 return 5 in captainHistoryRisk ', t =>{
  const voyage ={
      'length':3,
      'zone':'J'
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
  ];

  const number = captainHistoryRisk(voyageRisk,history);
  t.is(5,number);
});

test('test6  return 1 in captainHistoryRisk ', t =>{
  const voyage ={
      'length':8,
      'zone':'J'
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'sfe',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const number = captainHistoryRisk(voyageRisk,history);
  t.is(1,number);
});

test('test7  return 2 in captainHistoryRisk ', t =>{
  const voyage ={
      'length':8,
      'zone':'J'
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'sfe',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const number = captainHistoryRisk(voyageRisk,history);
  t.is(2,number);
});


test('test8  return 6 in captainHistoryRisk ', t =>{
  const voyage ={
      length:8,
      zone:'china'
  };
  const history = [
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
  ];

  const number = captainHistoryRisk(voyageRisk,history);
  t.is(6,number);
});


test('test9 return 6 in voyageProfitFactor  ', t =>{
  const voyage ={
    length:8,
    zone:'china'
  };
  const history = [
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
  ];

  const number = voyageProfitFactor(voyage,history);
  t.is(6,number);

})


test('test10 return 2 in voyageProfitFactor  ', t =>{
  const voyage ={
    length:8,
    zone:'sf'
  };
  const history = [
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
  ];

  const number = voyageProfitFactor(voyage,history);
  t.is(2,number);

})

test('test11 return 7 in voyageProfitFactor  ', t =>{
  const voyage ={
    length:8,
    zone:'china'
  };
  const history = [
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -5,
    },
    {
      zone: 'china',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -5,
    },{
      zone: 'china',
      profit: 15,
    },
  ];

  const number = voyageProfitFactor(voyage,history);
  t.is(7,number);

})

test('test12 return 1 in voyageProfitFactor  ', t =>{
  const voyage ={
    length:18,
    zone:'sfes'
  };
  const history = [
    {
      zone: 'china',
      profit: -5,
    },
    {
      zone: 'china',
      profit: 15,
    },
   
  ];

  const number = voyageProfitFactor(voyage,history);
  t.is(1,number);
});

test('test13 return 2 in voyageProfitFactor  ', t =>{
  const voyage ={
    length:18,
    zone:'east-indies'
  };
  const history = [
    {
      zone: 'china',
      profit: -5,
    },
    {
      zone: 'china',
      profit: 15,
    },
   
  ];

  const number = voyageProfitFactor(voyage,history);
  t.is(2,number);
});





