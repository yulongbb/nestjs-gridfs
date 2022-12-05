import * as dotEnv from 'dotenv';

dotEnv.config();

export default {
  chat: {
    connection:
      process.env.MONGO_URL,
  },
};
