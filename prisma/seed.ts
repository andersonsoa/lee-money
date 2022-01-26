import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const periodData: Prisma.PeriodCreateInput[] = [
  {
    name: "Period 1",
    start_date: new Date("2022-01-01"),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of periodData) {
    const period = await prisma.period.create({
      data: p,
    });
    console.log(`Created period with id: ${period.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
