#!/usr/bin/env node parkbot
const rawData = require("./data");
const data = JSON.parse(rawData);

let args = process.argv.filter((val, index) => index >= 3);


function mapNames(mapData) {
  return mapData.map(location => location.name)
}

function returnData() {
  let result;
  // args[0] checks for what data file to access, avoids badly formatted commands
  if (args[0] === 'data.json') {
    if (args[1] === 'locate') {
      result = data.filter(location => location.address.state === args[2]);
    }
    
    if (args[1] === 'find_price_hourly_lte') {
      result = data.filter(location => location.price_hourly < args[2])
    }
    
    if (args[1] === 'find_price_hourly_gt') {
      result = data.filter(location => location.price_hourly > args[2])
    }
  }

  console.log(mapNames(result))
} 

returnData();