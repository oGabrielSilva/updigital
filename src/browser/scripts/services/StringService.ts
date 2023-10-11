import { KeyToString, Service } from './base/Service';
import { br } from '../../../resources/i18n/br';

export class StringService extends Service {
  private readonly dataString = document.querySelectorAll<HTMLDivElement>('[data-string]');
  private readonly dataPlaceholder =
    document.querySelectorAll<HTMLInputElement>('[data-placeholder]');

  public boot(): void {
    this.dataString.forEach(
      element => (element.textContent = (br as KeyToString)[element.dataset.string!])
    );
    this.dataPlaceholder.forEach(element => {
      element.placeholder = (br as KeyToString)[element.dataset.placeholder!];
    });
  }
}
