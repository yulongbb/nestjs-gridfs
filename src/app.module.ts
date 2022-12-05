import { Module } from '@nestjs/common';
import { FileModule } from './gridFS/file.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from './config/config.db';


@Module({
  imports:
    [
     FileModule,
     MongooseModule.forRoot(mongoConfig.chat.connection)
    ],
})
export class AppModule {}
