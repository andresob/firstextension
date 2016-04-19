var Mongoose   = require('mongoose');

var ObjectId = Mongoose.Schema.Types.ObjectId;

var schema = new Mongoose.Schema({
  createdAt : { type: Number },
	updatedAt : { type: Number },

  url          : { type: String },
  ip_address   : { type: String }

});

schema.pre('save', function(next) {
  var now = new Date().getTime();

  if ( this.isModified() ) {
    this.updatedAt = now;
  }

  if ( !this.createdAt ) {
    this.createdAt = now;
  }

  next();
});

module.exports = Mongoose.model('Address', schema);
