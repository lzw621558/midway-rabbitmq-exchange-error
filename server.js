// server.js
const { Bootstrap } = require('@midwayjs/bootstrap');
const { Framework } = require('@midwayjs/rabbitmq');
Bootstrap.load(
  new Framework().configure({
    // url: {
    //   hostname: '192.168.0.135',
    //   port: '5672',
    // },
    url: 'amqp://192.168.0.135:5672',
    exchanges: [
      {
        name: 'sam/event', // 消息推送交换机
        type: 'fanout',
        options: {
          durable: false,
        },
      },
    ],
  })
).run();
