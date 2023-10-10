import { LockController } from './controllers/LockController';

(class Main {
  private readonly main = document.querySelector('main') as HTMLDivElement;

  public static boot() {
    const app = new Main();
    if (!app.main || !app.main.id) return;
    switch (app.main.id) {
      case 'lock':
        new LockController().boot();
        break;
    }
  }
}).boot();
