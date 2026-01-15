import userService from "./userService.js";

export class UserController {
    async createUser(req, res, next) {
        console.log(req.body)
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json({
                status: 'success',
                data: user
            });
        } catch (err) {
            return next(err);
        }
    }

    async listUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            res.json({
                status: 'success',
                results: users.length,
                data: users
            });
        } catch (err) {
            return next(err);
        }
    }

    async getUser(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.json({
                status: 'success',
                data: user
            });
        } catch (err) {
            return next(err);
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await userService.updateUser(
                req.params.id,
                req.body
            );
            res.json({
                status: 'success',
                data: user
            });
        } catch (err) {
            return next(err)
        }
    }

    async deleteUser(req, res, next) {
        try {
            await userService.deleteUser(req.params.id);
            res.status(200).json({
                status: 'success',
                message: 'User deleted successfully'
            });
        } catch (err) {
            return next(err);
        }
    }
}

const userController = new UserController();
export default userController;