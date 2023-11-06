import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authorizationHeader = req.headers.authorization;

      if (!authorizationHeader) {
        throw new UnauthorizedException({ message: 'unauthorized' });
      }

      const [bearer, token] = authorizationHeader.split(' ');

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'unauthorized' });
      }

      const decodedToken = this.jwtService.verify(token);
      req.userId = decodedToken.id; // Перевірте, як саме зберігається `userId` у вашому токені

      return true;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException({ message: 'unauthorized' });
    }
  }

}