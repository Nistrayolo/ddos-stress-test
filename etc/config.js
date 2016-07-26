/*
 * DDoS Stress
 * https://github.com/mlazarov/ddos-stress
 *
 * Copyright (c) 2015, Martin Lazarov
 * Licensed under the MIT license.
 */

var config = {};

// Master server host and port
config.server = process.env.NODE_APP_HOST || 'localhost';
config.port = process.env.NODE_APP_PORT || 5004;

console.log(config);
/**
 * Expose `config`
*/
module.exports = config;
