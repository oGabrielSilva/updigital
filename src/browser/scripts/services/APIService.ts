import { Service } from './base/Service';

import { API_HEADER_KEY_LANG_NAME } from '../../../resources/constants/constants';

export class APIService extends Service {
  public boot(): void {}

  public async request(body: string, headers?: HeadersInit) {
    const h = {
      'Content-Type': 'application/json',
    };
    (h as KeyToString)[API_HEADER_KEY_LANG_NAME] = 'pt';
    const response = await fetch('/lock', {
      method: 'post',
      body,
      headers: headers ? { ...h, ...headers } : h,
    });

    const json = await response.json();
    return { response, json };
  }
}
