import { container } from 'tsyringe';

import { UsersRepository } from '../../../modules/app/prisma/repositories/UsersRepository';
import { IUsersRepository } from '../../../modules/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);