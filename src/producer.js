const kafka = require('./kafka');

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
