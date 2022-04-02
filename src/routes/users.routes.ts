
import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../config/upload';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

// inner modules import
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
// instances
const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

// user routes
usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  uploadAvatar.single("avatar"),
  ensureAuthenticated,
  updateUserAvatarController.handle)

export { usersRoutes };