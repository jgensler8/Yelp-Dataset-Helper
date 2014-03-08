var mongoose = require('mongoose');

var businessSchema = new mongoose.Schema(
{
  "business_id": String,
  "name": String,
  "neighborhoods": [String],
  "full_address": String,
  "city": String,
  "state": String,
  "latitude": Number,
  "longitude": Number,
  "stars": Number,
  "review_count": Number,
  "categories": [String],
  "open": Boolean,
  "hours": {
      "Monday": {
          "open": String,
          "close": String
      },
      "Tuesday": {
          "open": String,
          "close": String
      },
      "Wednesday": {
          "open": String,
          "close": String
      },
      "Thursday": {
          "open": String,
          "close": String
      },
      "Friday": {
          "open": String,
          "close": String
      },
      "Saturday": {
          "open": String,
          "close": String
      },
      "Sunday": {
          "open": String,
          "close": String
      }
  }
});
/*
    "attributes": {
        (attribute_name): (attribute_value),
    }
*/

var reviewSchema = new mongoose.Schema(
{
  "business_id": String,
  "user_id": String,
  "stars": Number,
  "text": String,
  "date": Date
});
 /* 
    "votes": {(vote type): (count)}
  */


var business = mongoose.model('business', businessSchema);
var review = mongoose.model('review', reviewSchema);

module.exports = {
  "business": business,
  "review": review
}
