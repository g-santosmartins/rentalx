
import { Router } from 'express';

import multer from 'multer';

// inner modules import
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

// instances
const usersRoutes = Router();

const upload = multer({
  dest: "avatar",
})

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

// user routes
usersRoutes.post('/', createUserController.handle);

usersRoutes.patch('/avatar', upload.single("file"), updateUserAvatarController.handle)

// usersRoutes.patch(
//   '/avatar',
//   ensureAuthenticated,
//   uploadAvatar.single('avatar'),
//   updateUserAvatarController.handle,
// );

export { usersRoutes };