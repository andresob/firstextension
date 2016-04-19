var Item             = require('../models/item');
var callingCountries = require('country-data').callingCountries;
var dns              = require('dns');
var validator        = require('validator');
var lookup           = require('country-data').lookup;
var phoneUtil        = require('google-libphonenumber').PhoneNumberUtil.getInstance();
PNF                  = require('google-libphonenumber').PhoneNumberFormat;


module.exports.check = function (req, res) {

  var query = req.query.q;

  //verify if selection is a valid URL
  if (validator.isURL(query)) {

      dns.resolve(query, (err, addresses) => {
		      //save item to database
      	  var item = new Item({url: query, ip_address: addresses});
      	  item.save();
      });

  }

  //verify if selection is a valid international phone number
  else if (validator.isNumeric(query.replace(/\D/g,''))) {

      var names = [];
      var phone_number = phoneUtil.parse('+' + query.replace(/\D/g,''));
      var calling_code = phoneUtil.format(phone_number, PNF.INTERNATIONAL).split(' ')[0];
      var selected_countries = lookup.countries({countryCallingCodes: calling_code});

      //more then one contry can use the same calling code
      for (var i = 0; i < selected_countries.length; i++) {
          names.push(selected_countries[i].name);
      }

      //save item to database
      var item = new Item({phone: phoneUtil.format(phone_number, PNF.INTERNATIONAL), contries_name: names});
      item.save();
  }

  //if string doesn't match just return
  res.send('ok');

};


module.exports.list = function (req, res) {
  res.send('history page!');
  Item.find();
};
