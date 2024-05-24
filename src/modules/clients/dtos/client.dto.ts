import { UserDTO } from "src/modules/users/dtos/user.dto";

export interface ClientDTO {
    id: number;
    userId: string;
    addressId: string;
    createdAt: Date;
    updatedAt: Date;
}