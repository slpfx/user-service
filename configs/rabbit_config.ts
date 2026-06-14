import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const user_config: ClientProviderOptions = {
  name: 'USER_SERVICE',
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'user_queue',
    queueOptions: {
      durable: true,
    },
  },
};
