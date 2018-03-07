const mongoose = require('mongoose');

const definition = {
    '_id': {
        'type': 'String',
        'default': new mongoose.Types.ObjectId()
    },
    'name': {
        'type': 'String'
    }
};
module.exports.definition = definition;