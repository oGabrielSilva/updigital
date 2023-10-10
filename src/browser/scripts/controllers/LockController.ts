import { Controller } from './base/Controller';

export class LockController extends Controller {
  private readonly form = document.querySelector('form')!;
  private readonly registerInput = this.form.querySelector<HTMLInputElement>('[type="text"]')!;
  private readonly passwordInput = this.form.querySelector<HTMLInputElement>('[type="password"]')!;
  private readonly checkInput = this.form.querySelector<HTMLInputElement>('[type="checkbox"]')!;

  public boot() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const register = this.registerInput.value;
      const password = this.passwordInput.value;
      const checked = this.checkInput.checked;
    });
  }
}
