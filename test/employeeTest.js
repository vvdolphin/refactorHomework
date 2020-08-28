const test = require('ava');
const {Employee,toString} = require('../src/employee');

const e = require('express');

test('test1 return Zoe (engineer)', t =>{
    var employee = new Employee('Zoe','engineer');
    var result = employee.toString();
    t.is('Zoe (engineer)',result)
});

test('test2 return ', t=>{
    try{
        new Employee('Zoe','teacher');
        t.fail();
    }catch(e){
        t.is(e.message,'Employee cannot be of type teacher');
    }
});

test('test3 return Zoe (manager)', t =>{
    var employee = new Employee('Zoe','manager');
    var result = employee.toString();
    t.is('Zoe (manager)',result);
});

test('test4 return Zoe (salesman)', t =>{
    var employee = new Employee('Zoe','salesman');
    var result = employee.toString();
    t.is('Zoe (salesman)',result);
});

