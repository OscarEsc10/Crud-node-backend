import prisma from '../database.js';

export const productService = {
  // Create a new product
  async createProduct(productData) {
    return await prisma.product.create({
      data: productData,
      include: {
        user: true,
      },
    });
  },

  // Get all products
  async getAllProducts() {
    return await prisma.product.findMany({
      include: {
        user: true,
      },
    });
  },

  // Get product by ID
  async getProductById(id) {
    return await prisma.product.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: true,
      },
    });
  },

  // Get products by user ID
  async getProductsByUserId(userId) {
    return await prisma.product.findMany({
      where: { userId: parseInt(userId) },
      include: {
        user: true,
      },
    });
  },

  // Update product
  async updateProduct(id, productData) {
    return await prisma.product.update({
      where: { id: parseInt(id) },
      data: productData,
      include: {
        user: true,
      },
    });
  },

  // Delete product
  async deleteProduct(id) {
    return await prisma.product.delete({
      where: { id: parseInt(id) },
    });
  },
};
