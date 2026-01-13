import prisma from '../database.js';

export const userService = {
  // Create a new user
  async createUser(userData) {
    return await prisma.user.create({
      data: userData,
    });
  },

  // Get all users
  async getAllUsers() {
    return await prisma.user.findMany({
      include: {
        products: true,
      },
    });
  },

  // Get user by ID
  async getUserById(id) {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: {
        products: true,
      },
    });
  },

  // Get user by email
  async getUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  // Update user
  async updateUser(id, userData) {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data: userData,
    });
  },

  // Delete user
  async deleteUser(id) {
    return await prisma.user.delete({
      where: { id: parseInt(id) },
    });
  },
};
