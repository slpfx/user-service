import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { user_config } from 'configs/rabbit_config';

@Module({
  imports: [ClientsModule.register([user_config])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
