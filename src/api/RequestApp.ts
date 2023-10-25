import { API_HEADER_KEY_LANG_NAME } from '../resources/constants/constants';

export class RequestApp {
  public static async makeRequest(method: RequestMethod, body: string, headers?: HeadersInit) {
    const h = {
      'Content-Type': 'application/json',
    };
    (h as KeyToString)[API_HEADER_KEY_LANG_NAME] = 'pt';
    const response = await fetch('/lock', {
      method,
      body,
      headers: headers ? { ...h, ...headers } : h,
    });
    if (response.status === 204 || !response.body) return { response, json: {} };
    const json = await response.json();
    return { response, json };
  }
}
