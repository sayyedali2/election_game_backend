import { Injectable, ExecutionContext, CanActivate, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtService: JwtService){}

    async canActivate(context: ExecutionContext):Promise<boolean> {
        const cxt = GqlExecutionContext.create(context)
        const request = cxt.getContext().req;

        const authHeader = request.headers.authorization

        if(!authHeader) throw new UnauthorizedException("authHeader not found!!, Access deined");

        const [type, token] = authHeader.split(' ')

        try {
            const payload = await this.jwtService.verifyAsync(token,{
                secret:process.env.JWT_SECRET
            })
            request.user = payload
        } catch (error) {
            throw new UnauthorizedException('Token galat hai ya expire ho chuka hai!');
        }
        return true;
    }
}