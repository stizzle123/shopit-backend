import { Admin, Role, Product, Gender, Status, Brand } from '@prisma/client';

export class AdminClass implements Admin {
  id: string;
  email: string;
  name: string | null;
  isAdmin: boolean;
  active: boolean;
  validateToken: string | null;
  role: Role;
  username: string | null;
  createdAt: Date;
  updatedAt: Date;
  avatar: string | null;
}

export class ProductClass implements Product {
  id: string;
  name: string;
  description: string;
  price: number;
  newPrice: number | null;
  isDiscounted: boolean;
  discount: number | null;
  image: string;
  quantity: number;
  createdById: string;
  brandId: string;
  categoryId: string;
  gender: Gender | null;
  createdAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  sizes: string[];
  status: Status;
}

export class BrandClass implements Brand {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  logo: string | null;
}
