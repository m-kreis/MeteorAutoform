// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
// import { AutoForm } from 'meteor/aldeed:autoform';

// import { TestCollection } from '../import/api/testCollection.js';

import './main.html';

// Template.body.onCreated(function mainCreated() {
//   this.doc = new ReactiveVar(null);
// 	this.id = new ReactiveVar(null);
//   this.autorun(() => {
//     Template.body.testSubHandler = this.subscribe('testSub');
//   });
// });

// Template.body.helpers({
// 	tests: () => {
// 		if (Template.body.testSubHandler.ready()){
// 			return TestCollection.find({});
// 		}
// 	},
// 	collection: () => {
// 		return TestCollection;
// 	},
//   doc() {
//     return Template.instance().doc.get();
//   },
//   userId() {
//     return Template.instance().id;
//   },
// });

// Template.body.events({
// 	'click #edit'(e, instance){
//     var id = $(e.currentTarget).data('id');
//     instance.id.set(id);
// 		instance.doc.set(TestCollection.findOne(id));
// 	}
// });

// AutoForm.hooks({
//   updateForm: {
//     onSubmit: function(insertDoc, updateDoc, currentDoc) {
//       Meteor.call('update', insertDoc._id, insertDoc.firstName, insertDoc.lastName, (error) => {
//         if (error){
//           console.log('has error', error)
//           // this.done(error);
//         } else {
//           console.log('no error');
//           // this.done();
//         }
//       });

//       this.done(null, false);
//     }
//   }
// });