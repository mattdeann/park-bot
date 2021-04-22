#!/usr/bin/env node parkbot
const rawData = require("./data");
const data = JSON.parse(rawData);

let variables = [];

function getArgs() {
  variables = process.argv.filter((val, index) => index >= 2);
}

getArgs();

// console.log(variable);

// when the server receives a command, set up cases for each command

function mapNames(mapData) {
  return mapData.map(location => location.name)
}

function returnData() {
  let result;

  if (variables[1] === 'locate') {
    result = data.filter(location => location.address.state === variables[2]);
  }

  if (variables[1] === 'find_price_hourly_lte') {
    result = data.filter(location => location.price_hourly < variables[2])
  }

  if (variables[1] === 'find_price_hourly_gt') {
    result = data.filter(location => location.price_hourly > variables[2])
  }

  console.log(mapNames(result))
} 

returnData();