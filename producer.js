const { Kafka } = require('kafkajs');
const brokers = require('./brokers');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: brokers,
});

const producer = kafka.producer();

const messages = [
  {
    value: 'Some values',
  },
];

const run = async () => {
  await producer.connect();

  const response = await producer.send({
    topic: 'topic-orders',
    messages: messages,
  });

  console.log(response);

  await producer.disconnect();
};

run();
