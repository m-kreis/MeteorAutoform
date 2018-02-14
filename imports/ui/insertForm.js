import './insertForm.html';

import { AutoForm } from 'meteor/aldeed:autoform';
import { TestCollection } from '../api/testCollection.js';

Template.insert_form.helpers({
 collection: () => {
     return TestCollection;
 },
});