import { Module } from '@nestjs/common';
import { MulterModule } from "@nestjs/platform-express";
import { GridFsMulterConfigService } from "./services/gridFsMulterConfig.service";
import { FileService } from "./services/file.service";
import { FileController } from "./file.controller";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  controllers: [FileController],
  providers: [
    GridFsMulterConfigService,
    FileService,
  ],
  imports: [
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService
    }),
  ],
  exports: []
})

export class FileModule { }
