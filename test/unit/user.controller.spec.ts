import { Test } from '@nestjs/testing'
import { UserController } from "src/user.controller";

describe("Call user controller should returns user created!", () => {
    let controller: UserController;

    beforeEach(async() => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UserController]
        }).compile()

        controller = moduleRef.get<UserController>(UserController);
    })

    test('should 200 and return correct value',async () => {
        let controller: UserController;

        let userData = {
            name: "Pedro",
            email: "pedroseverino@msn.com",
            password: "password"
        }

        let request = await controller.createUser(userData);

        expect(request).toBe(userData);
    })
})