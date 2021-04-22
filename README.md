# park-bot

## Setup Instructions

Clone the repo into the desired directory

`git clone https://github.com/mattdeann/park-bot <WHATEVER-NAME>`

Move into the repo

`cd <WHATEVER-NAME>`

Install dependencies

`npm install`


## Use Instructions

### Search by Location

`./parkbot airgarage-data.json locate AZ`
will return a dataset like this:

Tempe Beach Park, Safeway, Azusa Ramen

### Find price hourly less than than example

`./parkbot airgarage-data.json find_price_hourly_lte 200`
will return a dataset like this:

Church of 8 Wheels, Tempe Beach Park, AirGarage HQ, Safeway, Walgreens, Goldilocks Pizza, The Salon, Archer Salon

### Find price hourly greater than example

`./parkbot airgarage-data.json find_price_hourly_gt 200`
will return a dataset like this:

Sweetgreen, Sandwiches n More, Azusa Ramen
