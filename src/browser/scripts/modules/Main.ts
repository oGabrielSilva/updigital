export class Main {
  public static boot() {
    const main = document.querySelector('main') as HTMLDivElement;

    if (!main || !main.id) return;
    console.log(main);
  }
}
