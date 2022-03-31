'use strict';

/**
 *  john controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::john.john');
