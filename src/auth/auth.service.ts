import { UserService } from '@/user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const userDB = await this.userService.findByUsername(username);
    if (userDB && (await bcrypt.compare(password, userDB.password))) {
      const { password, ...result } = userDB;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user._doc.username, id: user._doc._id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
