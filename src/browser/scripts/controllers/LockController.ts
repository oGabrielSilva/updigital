import { RequestApp } from '../../../api/RequestApp';
import { CSSInputError } from '../../../resources/constants/constants';
import { Controller } from './base/Controller';

export class LockController extends Controller {
  private readonly form = document.querySelector('form')!;
  private readonly registerInput = this.form.querySelector<HTMLInputElement>('[type="text"]')!;
  private readonly passwordInput = this.form.querySelector<HTMLInputElement>('[type="password"]')!;
  private readonly checkInput = this.form.querySelector<HTMLInputElement>('[type="checkbox"]')!;
  private readonly regex = /\d{8}/;

  public boot() {
    this.form.addEventListener('submit', async e => {
      e.preventDefault();
      const register = this.registerInput.value;
      const password = this.passwordInput.value;
      const checked = this.checkInput.checked;

      const regIsValid = this.regex.test(register) && register.length === 8;
      const passIsValid = password.length >= 8;
      if (!regIsValid) {
        this.registerInput.focus();
        this.registerInput.classList.add(CSSInputError);
        return;
      } else this.registerInput.classList.remove(CSSInputError);
      if (!passIsValid) {
        this.passwordInput.focus();
        this.passwordInput.classList.add(CSSInputError);
        return;
      } else this.passwordInput.classList.remove(CSSInputError);

      const body = JSON.stringify({
        register,
        password,
        keepUnlocked: checked,
      });

      const res = await RequestApp.makeRequest('/api/lock', 'POST', body);
      console.log(res);
    });
  }
}
