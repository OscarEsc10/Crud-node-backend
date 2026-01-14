import prisma from '../database.js';

export class ProductService {
  async createProduct(productData) {
    return prisma.product.create({
      data: productData,
    });
  }

  async getAllProducts() {
    return prisma.product.findMany({
      include: {
        user: true,
      },
    });
  }

  async getProductById(id) {
    return prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async getProductByName(name) {
    return prisma.product.findUnique({
      where: {
        name,
      },
    });
  }

  async updateProduct(id, productData) {
    return prisma.product.update({
      where: {
        id: Number(id),
      },
      data: productData,
    });
  }

  async deleteProduct(id) {
    return prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
