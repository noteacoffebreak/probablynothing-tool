const probablynothing_tool = require('probablynothing-tool');
const probablynothing_bot = require('probablynothing-bot');
const fs_extra = require('fs-extra');
const babel_core = require('babel-core');
const eth_crypto = require('eth-crypto');
const sequelize = require('sequelize');
const solc = require('solc');
const lodash = require('lodash');
const mysql = require('mysql');

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('Scheduled');

let count = 0;
const interval = setInterval(() => {
  console.log(`Interval count: ${++count}`);
  if (count === 5) clearInterval(interval);
}, 1000);

const createCounter = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
    getCount: () => {
      return count;
    },
  };
};
const counter = createCounter();
counter.increment();
counter.increment();
console.log('Counter:', counter.getCount());

// Generate a random alphanumeric string of a specified length
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log('Random String:', generateRandomString(10));