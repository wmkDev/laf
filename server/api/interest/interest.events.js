/**
 * Interest model events
 */

'use strict';

import {EventEmitter} from 'events';
var Interest = require('./interest.model');
var InterestEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
InterestEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Interest.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    InterestEvents.emit(event + ':' + doc._id, doc);
    InterestEvents.emit(event, doc);
  }
}

export default InterestEvents;
