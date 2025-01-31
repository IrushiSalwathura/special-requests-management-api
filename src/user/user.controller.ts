import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDTO } from './dto/login-dto';
import { UserDTO } from './dto/user-dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('login')
    async login(@Body() request: LoginDTO) :Promise<UserDTO> {
        return await this.userService.login(request);
    }

}
