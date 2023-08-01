import { Controller, Post } from "@nestjs/common";

@Controller('/users')
export class UserController {
    
    @Post()
    async createUser(userData) {
        return userData;
    }
}