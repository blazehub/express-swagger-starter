var definition = {
    "_id": {
        "type": "String",
        "default": null
    },
    "name": {
        "type": "String"
    },
    "key": {
        "type": "String",
        "unique": true
    },
    "host": {
        "type": "String"
    },
    "api": {
        "type": "String",
        "required": true
    },
    "method": {
        "type": "String"
    },
    "filter": {
        "type": "String"
    },
    "select": {
        "type": "String"
    },
    "mode": {
        "type": "String"
    },
    "targetUrl": {
        "type": "String"
    },
    "type": {
        "type": "String"
    }
};
module.exports.definition=definition;