// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).
// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

class Datasource {

  constructor() {
  }

  // retrieve the data for prices from a json format which will consist of the array of prices
  const getprices = async(url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch(error) {
        console.log(error);
      }
    }
    getprices("https://static.ngnrs.io/test/prices")
      .then(data => data['data']['prices'].map(entry => new Price(entry.buy, entry.sell, entry.pair)));
}

class Price {
  constructor(buy, sell, pair) {
    this.buy = buy;
    this.sell = sell;
    this.pair = pair;
  }
  // generate a mid function which returns the middle of the corresponding buy / sell price
  mid() {
    return (this.buy + this.sell) / 200;
  }
  // generate a quote() function which returns either SGD or USD currency
  quote() {
    return this.pair.substring(this.pair.length-3, this.pair.length);
  }

}
