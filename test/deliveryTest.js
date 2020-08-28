const test = require('ava');
const {deliveryDate} = require('../src/delivery')

const anOrder ={
    'deliveryState':'',
    placedOn: {}
};
anOrder.placedOn.plusDays = function (number) {
    return number;
};

test('test1 MA true', t=>{
    anOrder.deliveryState ='MA';
    let number = deliveryDate(anOrder,true);
    t.is(2,number);
});

test('test2 CT true', t=>{
    anOrder.deliveryState ='CT';
    let number = deliveryDate(anOrder,true);
    t.is(2,number);
});

test('test3 NY true', t=>{
    anOrder.deliveryState ='NY';
    let number = deliveryDate(anOrder,true);
    t.is(3,number);
});

test('test4 NH true', t=>{
    anOrder.deliveryState ='NH';
    let number = deliveryDate(anOrder,true);
    t.is(3,number);
});


test('test5 TT true', t=>{
    anOrder.deliveryState ='TT';
    let number = deliveryDate(anOrder,true);
    t.is(4,number);
});

test('test6 CT false', t=>{
    anOrder.deliveryState ='CT';
    let number = deliveryDate(anOrder,false);
    t.is(4,number);
});

test('test7 MA false', t=>{
    anOrder.deliveryState ='MA';
    let number = deliveryDate(anOrder,false);
    t.is(4,number);
});

test('test8 NY false', t=>{
    anOrder.deliveryState ='NY';
    let number = deliveryDate(anOrder,false);
    t.is(4,number);
});

test('test9 ME false', t=>{
    anOrder.deliveryState ='ME';
    let number = deliveryDate(anOrder,false);
    t.is(5,number);
});

test('test10 NH false', t=>{
    anOrder.deliveryState ='NH';
    let number = deliveryDate(anOrder,false);
    t.is(5,number);
});


test('test11 TT false', t=>{
    anOrder.deliveryState ='TT';
    let number = deliveryDate(anOrder,false);
    t.is(6,number);
});






