import prisma from "../../database.js"
import { AppError } from "../../../utils/AppError.js"
import * as Password from "../../../utils/password.js"
import bcrypt from "bcrypt";

export class UserService {
  async createUser(userData) {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    })

    if (existingUser) {
      throw new AppError("Email already in use", 409)
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    return prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    })
  }

  async getAllUsers() {
    return prisma.user.findMany({
      include: {
        products: true,
      },
    })
  }

  async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { products: true },
    })

    if (!user) {
      throw new AppError("User not found", 404)
    }

    return user
  }

  async getUserByEmail(email) {
    return prisma.user.findUnique({
      where: { email },
    })
  }

  async updateUser(id, userData) {
    await this.getUserById(id) // existence check

    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10)
    }

    return prisma.user.update({
      where: { id: Number(id) },
      data: userData,
    })
  }

  async deleteUser(id) {
    await this.getUserById(id)

    return prisma.user.delete({
      where: { id: Number(id) },
    })
  }
}
const userService = new UserService();
export default userService;
