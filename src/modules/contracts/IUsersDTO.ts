import { users } from "@prisma/client";

/**
 * MODEL user
 */
export type IUser = users;

/**
 * Method: POST
 * Create user
 */
export type ICreateUser = Omit<
  IUser,
  | 'id'
  | 'created_at'
  | 'updated_at'
  | 'deleted_at'
>;

/**
 * Method: GET
 * SHOW User
 */
export type IShowUser = Pick<IUpdateUser, 'id'>;

/**
 * Method: PUT
 * Update User
 */
export interface IUpdateUser extends ICreateUser {
  id: number;
}

/**
 * Method: PATCH
 * Update user
 */
export type IPartialUpdateUser = Partial<IUpdateUser>;

/**
 * DELETE user
 */
export type IDeleteUser = Pick<IUpdateUser, 'id'>;
