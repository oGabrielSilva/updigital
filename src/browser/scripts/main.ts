import { LockController } from './controllers/LockController';
import { StringService } from './services/StringService';
import { Service } from './services/base/Service';

(class Main {
  private readonly main = document.querySelector('main') as HTMLDivElement;
  private readonly services: Array<Service> = [new StringService()];

  public static boot() {
    const app = new Main();
    app.services.forEach(service => service.boot());
    if (!app.main || !app.main.id) return;

    switch (app.main.id) {
      case 'lock':
        new LockController().boot();
        break;
    }
  }
}).boot();
