import crypto from 'crypto';

interface AuthTokenPayload {
  register: string;
  createdAt: number;
  keepUnlocked: boolean;
}

export class AuthService {
  private readonly AES_KEY = process.env.AES_KEY || '1@3.@huranus00@@ODV1K8.#746Qdevp';
  private readonly IV_LENGTH = 16;

  public encryptData(data: string): string {
    const iv = crypto.randomBytes(this.IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(this.AES_KEY), iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex').concat(encrypted);
  }

  public decryptData(encryptedData: string): string {
    const iv = Buffer.from(encryptedData.slice(0, this.IV_LENGTH * 2), 'hex');
    const encryptedText = encryptedData.slice(this.IV_LENGTH * 2);
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(this.AES_KEY), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  public generateToken(register: string, keepUnlocked: boolean) {
    const createdAt = Date.now();

    const payload = {
      register,
      createdAt,
      keepUnlocked,
    };

    const payloadString = JSON.stringify(payload);
    const encryptedPayload = this.encryptData(payloadString);

    return { token: `${encryptedPayload}.${payloadString}`, keepUnlocked };
  }

  public verifyAuthToken(token: string): AuthTokenPayload | null {
    try {
      const [encryptedPayload] = token.split('.');
      const payloadString = token.substring(encryptedPayload.length + 1);
      if (!encryptedPayload || !payloadString) return null;
      const decryptedPayload = this.decryptData(encryptedPayload);
      const payload = JSON.parse(decryptedPayload) as AuthTokenPayload;
      if (payloadString !== JSON.stringify(payload)) return null;
      return payload;
    } catch (error) {
      return null;
    }
  }
}
