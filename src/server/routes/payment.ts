import { z } from "zod";
import { prismaClient } from "../../utils/db/prisma";
import { createRouter } from "../createRouter";

export const payment = createRouter()
  .query("-get-all", {
    async resolve() {
      const payments = await prismaClient.payment.findMany();

      return payments;
    },
  })
  .query("-get-by-id", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const payment = await prismaClient.payment.findUnique({
        where: {
          id,
        },
      });

      return payment;
    },
  })
  .mutation("-create", {
    input: z.object({
      name: z.string(),
      limit: z.number().nullable(),
      color: z.string(),
    }),
    async resolve({ input }) {
      const { name, limit, color } = input;

      const payment = await prismaClient.payment.create({
        data: {
          name,
          limit,
          color,
        },
      });

      return payment;
    },
  })
  .mutation("-update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
      limit: z.number().nullable(),
      color: z.string(),
    }),
    async resolve({ input }) {
      const { id, name, limit, color } = input;

      const payment = await prismaClient.payment.update({
        where: {
          id: id,
        },
        data: {
          id,
          name,
          limit,
          color,
        },
      });

      return payment;
    },
  })
  .mutation("-delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const payment = await prismaClient.payment.delete({
        where: {
          id,
        },
      });

      return payment;
    },
  });
