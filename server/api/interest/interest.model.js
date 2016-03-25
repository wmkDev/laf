'use strict';

import mongoose from 'mongoose';

var InterestSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Interest', InterestSchema);
