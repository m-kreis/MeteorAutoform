import './list.html'

import { TestCollection } from '../api/testCollection.js';

Template.list.onCreated(function listCreated() {
	this.autorun(() => {
		Template.body.testSubHandler = this.subscribe('testSub');
	});
});

Template.list.helpers({
	tests: () => {
		if (Template.body.testSubHandler.ready()){
			return TestCollection.find({});
		}
	},
});