import can from 'can';
import Component from 'can/component/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';

import 'components/page-samplegrid11/';

can.Component.extend({
	tag: 'page-samplegrid1',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded sample grid 1');
			this.viewModel.fetchData();
		}
	}
});