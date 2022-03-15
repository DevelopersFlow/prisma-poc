import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUsersService } from '../../../services/ListUsersService';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsersService = container.resolve(ListUsersService);

    const users = await listUsersService.execute();

    return response.status(200).json(users);
  }

  // public async create(request: Request, response: Response): Promise<Response> {
  //   const {
  //     name,
  //     email,
  //     phone,
  //     user_role_id,
  //     password,
  //     password_confirmation,
  //     groups_ids,
  //     projects_ids,
  //     cost,
  //     from,
  //     to,
  //   } = request.body;

  //   const createUserService = container.resolve(CreateUserService);

  //   const user = await createUserService.execute({
  //     name,
  //     email,
  //     phone,
  //     user_role_id: Number(user_role_id),
  //     password,
  //     password_confirmation,
  //     groups_ids,
  //     projects_ids,
  //   });

  //   const createUserHourCostService = container.resolve(CreateUserCostService);

  //   await createUserHourCostService.execute({
  //     user_id: Number(user.id),
  //     user_responsible_id: id,
  //     cost,
  //     from,
  //     to,
  //   });

  //   return response.status(201).json(classToClass(user));
  // }

  // public async show(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const showUserService = container.resolve(ShowUserService);

  //   const user = await showUserService.execute({ id: Number(id) });

  //   return response.status(200).json(classToClass(user));
  // }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;
  //   const {
  //     name,
  //     email,
  //     phone,
  //     user_role_id,
  //     groups_ids,
  //     projects_ids,
  //     enabled,
  //   } = request.body;

  //   const updateUserService = container.resolve(UpdateUserService);

  //   const user = await updateUserService.execute({
  //     id: Number(id),
  //     name,
  //     email,
  //     phone,
  //     user_role_id: Number(user_role_id),
  //     groups_ids: groups_ids || [],
  //     projects_ids: projects_ids || [],
  //     enabled,
  //   });

  //   return response.status(200).json(classToClass(user));
  // }

  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const deleteUserService = container.resolve(DeleteUserService);

  //   await deleteUserService.execute({ id: Number(id) });

  //   return response.status(204).send();
  // }
}

export { UsersController };
