import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const main = async () => {
  const days = await prisma.dayPreset.findMany();
  console.log(days);

  const day = await prisma.dayPreset.findUnique({ where: { id: 1 } });
  console.log(day);
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
