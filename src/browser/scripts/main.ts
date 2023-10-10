(class Main {
  private readonly main = document.querySelector('main') as HTMLDivElement;

  public static boot() {
    const app = new Main();
    if (!app.main || !app.main.id) return;
    console.log(app.main);
  }
}).boot();
