import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

import { Mongo } from 'meteor/mongo';

export const TestCollection = new Mongo.Collection('testCollection');

// Deny all client-side updates since we will be using methods to manage this collection
TestCollection.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

TestCollection.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
    autoform: {
      hidden: true,
    }
  },
  firstName: {
    // type: Number,
    type: String,
    max: 100,
    optional: true,
    label: "First Name",
    autoform: {
      type: 'text'
    }
  },
  lastName: {
    type: String,
    max: 100,
    optional: true,
    label: "Last Name",
  },
}, { tracker: Tracker, clean:{trimStrings: false, removeEmptyStrings: false} });

TestCollection.attachSchema(TestCollection.schema);