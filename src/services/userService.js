import prisma from '../database.js';

export class UserService {
  async createUser(userData) {
    return prisma.user.create({
      data: userData,
    });
  }

  async getAllUsers() {
    return prisma.user.findMany({
      include: {
        products: true,
      },
    });
  }

  async getUserById(id) {
    return prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        products: true,
      },
    });
  }

  async getUserByEmail(email) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async updateUser(id, userData) {
    return prisma.user.update({
      where: { id: Number(id) },
      data: userData,
    });
  }

  async deleteUser(id) {
    return prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
