const { Kafka } = require('kafkajs');
const brokers = require('./brokers');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: brokers,
});

module.exports = kafka;
