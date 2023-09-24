import { Server } from './app/Server';

class Startup {
  public static main(): EmptySuccessStatus {
    Server.create().boot();
  }
}

export default (() => Startup.main)()() as void;
