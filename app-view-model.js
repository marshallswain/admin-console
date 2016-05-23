import can from 'can';
import $ from 'jquery';
import 'can/map/define/';

var ApplicationViewModel = can.Map.extend({
    define: {
        '*': {
            serialize: false
        },
        page: {
            type: 'string',
            serialize: true
        },
        color: {
            type: 'string',
            serialize: true
        }
    }
});

export default ApplicationViewModel;
