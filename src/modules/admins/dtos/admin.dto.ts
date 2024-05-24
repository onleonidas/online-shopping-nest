import { UserDTO } from "src/modules/users/dtos/user.dto";

export interface adminDTO {
    id: number;
    user?: UserDTO;
    createdAt: Date;
    updatedAt: Date;
}