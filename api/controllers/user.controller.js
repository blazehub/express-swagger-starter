"use strict";

const mongoose = require("mongoose");
const definition = require("../schemas/user.definition.js").definition;
const SMCrud = require("swagger-mongoose-crud");
const schema = new mongoose.Schema(definition);
const logger = global.logger;

var options = {
    logger:logger,
    collectionName:"subscription"
};
var crudder = new SMCrud(schema,"subscription", options);
module.exports = {
    create:crudder.create,
    index:crudder.index,
    show:crudder.show,
    destroy:crudder.markAsDeleted,
    update:crudder.update
};
    