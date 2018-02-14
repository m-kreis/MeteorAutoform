import {check} from 'meteor/check';
import { TestCollection } from './testCollection.js';

Meteor.methods({
  'update'(_id, firstName, lastName) {
    check(_id, String);
    check(firstName, String);
    check(lastName, String);

    return TestCollection.update(_id, {
      $set: { lastName: lastName, firstName: firstName, }
    });
  },
});
