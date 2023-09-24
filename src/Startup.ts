import { Server } from './app/Server';

(class Startup {
  public static main(): EmptySuccessStatus {
    Server.create().boot();
  }
}).main() as void;
