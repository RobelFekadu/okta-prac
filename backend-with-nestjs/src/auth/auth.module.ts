import { ConfigModule } from './../config/config.module';
import { Module } from '@nestjs/common';
import { HttpStrategy } from './http.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigModule],
  providers: [HttpStrategy, AuthService],
})
export class AuthModule {}
