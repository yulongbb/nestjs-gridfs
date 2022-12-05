import { Injectable } from '@nestjs/common';
import { MulterModuleOptions } from '@nestjs/platform-express';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoConfig from '../../config/config.db';

@Injectable()
export class GridFsMulterConfigService {
  gridFsStorage = new GridFsStorage({
    url: mongoConfig.chat.connection,
    file: (req, file) => {
      return new Promise((resolve) => {
        const filename = file.originalname.trim();
        const fileInfo = {
          filename,
        };
        resolve(fileInfo);
      });
    },
  });

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: this.gridFsStorage,
    };
  }
}
