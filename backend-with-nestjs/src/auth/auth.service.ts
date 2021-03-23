import { ConfigService } from './../config/config.service';
import { Injectable } from '@nestjs/common';
import * as OktaJwtVerifier from '@okta/jwt-verifier';

@Injectable()
export class AuthService {
  private oktaVerifier: any;
  private audience: string;

  constructor(private readonly config: ConfigService) {
    this.oktaVerifier = new OktaJwtVerifier({
      issuer: config.get('OKTA_ISSUER'),
      clientId: config.get('OKTA_CLIENTID'),
    });

    this.audience = config.get('OKTA_AUDIENCE');
  }

  async validateToken(token: string) {
    const jwt = await this.oktaVerifier.verifyAccessToken(token, this.audience);
    return jwt;
  }
}
