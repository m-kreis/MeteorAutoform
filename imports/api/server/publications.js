import { TestCollection } from '../testCollection.js';

Meteor.publish('testSub', function allUsers() {
  return TestCollection.find({}, {
  	fields: {
  		_id: 1,
  		firstName: 1,
  		lastName: 1,
  	}
  });
});
