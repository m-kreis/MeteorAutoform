import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/main.js';
import '../../ui/pages/edit.js';
import '../../ui/pages/home.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.start',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/edit/:id', {
  name: 'App.edit',
  action() {
    BlazeLayout.render('App_body', { main: 'edit' });
  },
});

// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_notFound' });
//   },
// };
