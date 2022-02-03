import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const cicleData: Prisma.CicleCreateInput[] = [
  {
    name: "Janeiro",
    start_date: new Date("2022-01-01"),
  },
  {
    name: "Fevereiro",
    start_date: new Date("2022-02-01"),
  },
];

const tagData: Prisma.TagCreateInput[] = [
  {
    name: "Alimentação",
    color: "#fa8231",
  },
  {
    name: "Lazer",
    color: "#20bf6b",
  },
  {
    name: "Transporte",
    color: "#f5365c",
  },
  {
    name: "Moradia",
    color: "#8854d0",
  },
  {
    name: "Saúde",
    color: "#2d98da",
  },
  {
    name: "Educação",
    color: "#ffc107",
  },
];

const paymentData: Prisma.PaymentCreateInput[] = [
  {
    name: "Dinheiro",
    color: "#ffa502",
  },
  {
    name: "Meliuz Anderson",
    color: "#FC427B",
    limit: 4000,
  },
  {
    name: "Meliuz Letícia",
    color: "#D6A2E8",
    limit: 4000,
  },
  {
    name: "Nubank Letícia",
    color: "#9157c1",
    limit: 3600,
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const c of cicleData) {
    const cicle = await prisma.cicle.create({
      data: c,
    });
    console.log(`Cicle ${cicle.name} created`);
  }

  for (const t of tagData) {
    const tag = await prisma.tag.create({
      data: t,
    });
    console.log(`Tag ${tag.name} created`);
  }

  for (const p of paymentData) {
    const payment = await prisma.payment.create({
      data: p,
    });
    console.log(`Payment ${payment.name} created`);
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
