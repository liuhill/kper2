'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/**
*@hillock
*index
**/
exports.renderIndex = function(req, res) {
  res.render('modules/photowall/server/views/index', {
		user: null
	});
};

/**
 * Create a Photowall
 */
exports.create = function(req, res) {

};

/**
 * Show the current Photowall
 */
exports.read = function(req, res) {

};

/**
 * Update a Photowall
 */
exports.update = function(req, res) {

};

/**
 * Delete an Photowall
 */
exports.delete = function(req, res) {

};

/**
 * List of Photowalls
 */
exports.list = function(req, res) {

};
