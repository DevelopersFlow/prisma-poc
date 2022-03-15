import { users } from '@prisma/client';
import { injectable, inject } from 'tsyringe';

import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<users[]> {
    const users = await this.usersRepository.find();

    return users;
  }
}

export { ListUsersService };
