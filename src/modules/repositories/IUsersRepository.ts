import { users } from "@prisma/client";

import { ICreateUser } from "../contracts/IUsersDTO";

export interface IUsersRepository {
  create(data: users): Promise<users>;
  find(): Promise<users[]>;
  findById(id: number): Promise<users | null>;
  delete(id: number): Promise<void>;
}
