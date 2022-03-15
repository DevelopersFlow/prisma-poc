import { users } from "@prisma/client";

import { prismaClient } from "../../../../config/prisma";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  public async create(data: users): Promise<users> {
    const user = await prismaClient.jarvis.users.create({ data });

    return user;
  }

  public async find(): Promise<users[]> {
    const foundedUsers = await prismaClient.jarvis.users.findMany({
      include: {
        projects_users: {
          include: { project: true },
          where: {
            project_id: 1,
          },
        },
      },
      where: { projects_users: { some: { project_id: 1 } } },
    });

    return foundedUsers;
  }

  public async findById(id: number): Promise<users | null> {
    const foundedUser = await prismaClient.jarvis.users.findFirst({ where: { id } });

    return foundedUser;
  }

  public async delete(id: number): Promise<void> {
    await prismaClient.jarvis.users.delete({ where: { id } });
  }
}

export { UsersRepository };
