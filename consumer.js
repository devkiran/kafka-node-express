const { Kafka } = require('kafkajs');
const brokers = require('./brokers');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: brokers,
});

const consumer = kafka.consumer({ groupId: 'group-1' });

const run = async () => {
  await consumer.connect();

  await consumer.subscribe({ topic: 'topic-orders', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message);
    },
  });
};

run();
