var Item   = require('../models/item');
var validator = require('validator');
var dns = require('dns');
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()
        , PNF = require('google-libphonenumber').PhoneNumberFormat;
var callingCountries = require('country-data').callingCountries;
var lookup = require('country-data').lookup;
/*
  Method: GET

  Returns:
    If item is going to be saved or not
*/
module.exports.check = function (req, res) {

  var data = {};
  var query = req.query.q;
  if (validator.isURL(query)) {
    console.log('faca requisicao');
    dns.resolve(query, (err, addresses) => {
      console.log('addresses:', addresses);
      data = {url: query, ip_address: addresses};
    });
  }
  else if (validator.isNumeric(query.replace(/\D/g,''))) {
    var tel = phoneUtil.parse('+' + query.replace(/\D/g,''));
    var code = phoneUtil.format(tel, PNF.INTERNATIONAL).split(' ')[0];
    var country_name = lookup.countries({countryCallingCodes: code});
    console.log(country_name);
    console.log(code);
    data = {phone: phoneUtil.format(tel, PNF.INTERNATIONAL), country_name: country_name};
  }
  else {
    console.log('do nothing');
  }

  // var item = new Item(data);
  // item.save();

};


/*
  Method: GET

  Returns:
    If item is going to be saved or not
*/
module.exports.list = function (req, res) {
  res.send('history page!');
  Item.find();
};
