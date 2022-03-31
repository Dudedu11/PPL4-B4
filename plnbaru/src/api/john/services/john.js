'use strict';

/**
 * john service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::john.john');
