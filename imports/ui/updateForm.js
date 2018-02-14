import './updateForm.html';

import { TestCollection } from '../api/testCollection.js';

Template.update_form.onCreated(function updateFormCreated() {
  // this.doc = new ReactiveVar(null);
  // this.id = new ReactiveVar(null);
    Template.update_form.testSubHandler = this.subscribe('testSub');
    this.getId = () => FlowRouter.getParam('id');
  this.autorun(() => {
  });
});

Template.update_form.helpers({
  doc() {
    return TestCollection.findOne(Template.instance().getId());
  },
  collection() {
    return TestCollection;
  },
});