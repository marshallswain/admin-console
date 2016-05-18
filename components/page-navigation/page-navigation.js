import can from 'can';
import Component from 'can/component/';
import 'can/map/define/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';
import 'components/page-dashboard/';
import 'components/page-samplegrid1/';
import 'components/page-samplegrid2/';



can.Component.extend({
	tag: 'page-navigation',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded navigation');
			$("#menu-toggle").click(function(e) {
			        e.preventDefault();
			        $("#wrapper").toggleClass("active");
			});
		}
	}
});