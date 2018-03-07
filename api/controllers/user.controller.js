"use strict";

const mongoose = require('mongoose');
const definition = require('../schemas/user.definition.js').definition;
// const SMCrud = require('swagger-mongoose-crud');
const DBCrud = require('restified-mongo-crud');
const schema = new mongoose.Schema(definition);
const logger = global.logger;

var options = {
    logger: logger,
    collectionName: "subscription"
};

// const crudder = new SMCrud(schema,"subscription", options);
const crudder = DBCrud.init(schema, "subscription", options);

const create = (req, res) => { }
const update = (req, res) => { }
const index = (req, res) => { }
const show = (req, res) => { }
const markAsDeleted = (req, res) => { }


module.exports = {
    create: crudder.create,
    update: crudder.update,
    index: crudder.index,
    show: crudder.show,
    destroy: markAsDeleted
};
