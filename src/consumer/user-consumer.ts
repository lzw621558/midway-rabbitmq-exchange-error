import {
  Provide,
  Consumer,
  MSListenerType,
  // RabbitMQListener,
  Inject,
} from '@midwayjs/decorator';
import { IMidwayRabbitMQContext } from '@midwayjs/rabbitmq';
// import { ConsumeMessage } from 'amqplib';

@Provide()
@Consumer(MSListenerType.RABBITMQ)
export class UserConsumer {
  @Inject()
  ctx: IMidwayRabbitMQContext;

  // @RabbitMQListener('amq_6a45xvj4h2u6pue6a2auimpzqu', {
  //   exchange: 'samevent',
  //   // queueName: 'amq_j5rhpblc7izx74bgj5gfytynmm',
  //   durable: false,
  //   exclusive: true,
  //   consumeOptions: {
  //     exclusive: true,
  //   },
  // })
  // async gotData(msg: ConsumeMessage) {
  //   try {
  //     console.log('=======');
  //     console.log(msg.content.toString());
  //     this.ctx.channel.ack(msg);
  //   } catch (e) {
  //     console.log('error+++++++++++++++++');
  //     console.log(e);
  //   }
  // }
}
