'use strict';
console.log('learn how to create object in javascript, with object litral');
let car = { brand: 'ford', color: 'red' };
car.__proto__.color = 'green';
console.log('car');
console.log(car);
car.milage = 15;
console.log('car');
console.log(car);
console.log('car.__proto__');
console.log(car.__proto__);

console.log('learn how to create object in javascript, with new keyword');
function house() {
  this.location = 'newark';
  this.area = '1200 sqft';
  this.bedroom = '2';
};
let house1 = new house();
house1.constructor.prototype.color = 'green';
house1.__proto__.bath = '4';
console.log('house1');
console.log(house1);
console.log('house1.constructor');
console.log(house1.constructor);
console.log('house1.__proto__');
console.log(house1.__proto__);
console.log('house');
console.log(house.prototype);


console.log('learn how to create object in javascript, with class');
class Tree {
  constructor() {
    this.location = 'utha';
    this.height = '12';
  }
};
let tree1 = new Tree();
tree1.constructor.prototype.color = 'yellow';
tree1.__proto__.fruit = 'mango';
console.log('tree1');
console.log(tree1);
console.log('tree1.constructor');
console.log(tree1.constructor);
console.log('tree1.__proto__');
console.log(tree1.__proto__);


console.log('enumerate over cat property');
for (let propertyName in car) {
  console.log('propertyName = ' + propertyName + '  propertyValue = ' + car[propertyName]);
}
console.log('print property attribute, object car, property brand:');
console.log(Object.getOwnPropertyDescriptor(car, 'brand'));
console.log('change attribute for a  property in car type with writable as false');
Object.defineProperty(car, 'type', {
  value: { seater: 4, build: 'sedan' },
  writable: false,
  enumerable: true,
  configurable: true
});
console.log('print property attribute, object car, property type:');
console.log(Object.getOwnPropertyDescriptor(car, 'type'));
try {
  car.type = { test: 'test' };
} catch (err) {
  console.log('tried changing value of car type');
  console.log('car.type = {test: "test"};');
  console.log('got exception: ' + err);
}
console.log('tried changing value of car type inside property seater: ');
console.log('car.type.seater = 6; no exception thrown');
car.type.seater = 6;
console.log('print property attribute, object car, property type:');
console.log(Object.getOwnPropertyDescriptor(car, 'type'));
console.log('to prevent internal property change for a non writable property , freez the property type');
Object.freeze(car.type);
try {
  car.type.seater = 7;
} catch (err) {
  console.log('tried changing value of car type internal property');
  console.log('car.type.seater = 7;');
  console.log('got exception: ' + err);
}
for (let propertyName in car) {
  console.log('propertyName: ' + propertyName + ' propertyValue: ' + car[propertyName]);
}
console.log(JSON.stringify(car));
Object.defineProperty(car, 'type', { enumerable: false });
console.log('print property attribute, object car, property type:');
console.log(Object.getOwnPropertyDescriptor(car, 'type'));
console.log('make type property enumarable attribute as false, property will not enumerate and JSON.stringfy will not return property value.');
try {
  for (let propertyName in car) {
    console.log('propertyName: ' + propertyName + ' propertyValue: ' + car[propertyName]);
  }
  console.log(JSON.stringify(car));
} catch (err2) {
  console.log('tried enumerating the non enumerable property');
  console.log('got exception: ' + err2);
  console.log(Object.getOwnPropertyDescriptor(car, 'type'));
  console.log('make type property enumarable attribute as false');
}
console.log('print property attribute, object car, property type:');
console.log(Object.getOwnPropertyDescriptor(car, 'type'));
console.log('create property in car tested, as not configurable: property cannot be changed for enurable and configurable now but waritable property of property can be changed');
Object.defineProperty(car, 'tested', { configurable: false });
console.log('print property attribute, object car, property tested:');
console.log(Object.getOwnPropertyDescriptor(car, 'tested'));
try {
  Object.defineProperty(car, 'tested', { configurable: true });
} catch (err1) {
  console.log('tried changing configurable on tested, got exception: ' + err1);
}
try {
  Object.defineProperty(car, 'tested', { enumerable: true });
} catch (err3) {
  console.log('tried changing configurable on tested, got exception: ' + err3);
}
try {
  delete (car.tested);
} catch (err4) {
  console.log('tried deleting not configurable property tested, got exception: ' + err4);
}
console.log('print property attribute, object car, property tested:');
console.log(Object.getOwnPropertyDescriptor(car, 'tested'));
try {
  Object.defineProperty(car, 'tested', { writable: true });
  car.tested = true;
  console.log('print property attribute, object car, property tested after changing writable property:');
} catch (err5) {
  console.log('tried changing writable on tested, got exception: ' + err5);
}
console.log(Object.getOwnPropertyDescriptor(car, 'tested'));
console.log('created property with getter and setter');
Object.defineProperty(car, 'name', {
  get: function () {
    return car.brand + car.color;
  },
  set: function (nameStr) {
    let testarray = nameStr.split(' ');
    car.brand = testarray[0];
    car.color = testarray[1];
  }
})
car.name = 'tesla yellow';
for (let propertyName in car) {
  console.log('propertyName: ' + propertyName + ' propertyValue: ' + car[propertyName]);
}

console.log('if property has writable true and configurable writable can be changed to false later but then its cannot be changed');
console.log(Object.defineProperty(car, 'no', { configurable: false, writable: true, enumerable: true, value: 'no' }));
console.log(Object.getOwnPropertyDescriptor(car, 'no'));
console.log(Object.defineProperty(car, 'no', { writable: false }));
console.log(Object.getOwnPropertyDescriptor(car, 'no'));
try {
  console.log(Object.defineProperty(car, 'no', { enumerable: false }));
} catch (err8) {
  console.log('tried changing enumerable on no, got exception: ' + err8);
}
try {
  console.log(Object.defineProperty(car, 'no', { writable: true }));
} catch (err9) {
  console.log('tried changing writable on no, got exception: ' + err9);
}
console.log(Object.getOwnPropertyDescriptor(car, 'no'));
car.yes = 'yes';
console.log(Object.getOwnPropertyDescriptor(car, 'yes'));
try {
  console.log(Object.defineProperty(car, 'yes', { configurable: false }));
} catch (err10) {
  console.log('tried changing configurable on yes to false, got exception: ' + err10);
}
console.log(Object.getOwnPropertyDescriptor(car, 'yes'));
try {
  console.log(Object.defineProperty(car, 'yes', { configurable: true }));
} catch (err10) {
  console.log('tried changing configurable on yes to ture, got exception: ' + err10);
}
console.log(Object.getOwnPropertyDescriptor(car, 'yes'));
car.yes = 'yes changed';
console.log(Object.getOwnPropertyDescriptor(car, 'yes'));

console.log('*******************************prototypal inheritance*********************************');
class Animal {
  constructor(voiceStr) {
    this.voice = voiceStr;
  }
  speak() {
    console.log('animal speak: ' + this.voice);
  }
};

class Cat extends Animal {
  constructor(voiceStr, nameStr) {
    super(voiceStr);
    this.name = nameStr;
  }
};

let cat = new Cat('meow', 'fluffy');
cat.speak();
cat.__proto__.speak();
console.log(cat);
console.log(cat.__proto__);
console.log(cat.__proto__.__proto__);
console.log(cat.__proto__.__proto__.__proto__);
console.log(cat.__proto__.__proto__.__proto__.__proto__);