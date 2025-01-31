import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO } from './dto/login-dto';
import { UserDTO } from './dto/user-dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async login(request: LoginDTO): Promise<UserDTO> {
        const user = await this.userModel.findOne({ email: request.email });
        if (!user) {
            throw new UnauthorizedException("Invalid email or password");
        }
        const isPasswordValid = user.password === request.password;
        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid email or password");
        }
        const userDTO = new UserDTO();
        userDTO.name = user.name;
        userDTO.role = user.role;
        userDTO.userId = user._id.toString();
    
        console.log("User authenticated:", userDTO);
        return userDTO;
    }
}
