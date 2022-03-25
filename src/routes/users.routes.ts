
import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
// const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

// usersRoutes.patch(
//   '/avatar',
//   ensureAuthenticated,
//   uploadAvatar.single('avatar'),
//   updateUserAvatarController.handle,
// );

export { usersRoutes };