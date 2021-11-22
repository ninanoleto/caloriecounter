import { PrismaClient } from "@prisma/client";

export class PrismaContext {
  private static _instance?: PrismaClient;

  static get = (): PrismaClient => {
    if (PrismaContext._instance == undefined) {
      PrismaContext._instance = new PrismaClient();
    }

    return PrismaContext._instance;
  };
}
