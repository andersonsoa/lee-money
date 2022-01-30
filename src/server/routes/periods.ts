import { z } from "zod";
import { prismaClient } from "../../utils/db/prisma";
import { createRouter } from "../createRouter";

export const periods = createRouter()
  .query("-get-all", {
    async resolve() {
      const periods = await prismaClient.period.findMany();

      return periods;
    },
  })
  .query("-get-by-id", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const period = await prismaClient.period.findUnique({
        where: {
          id,
        },
      });

      return period;
    },
  })
  .mutation("-create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input }) {
      const { name } = input;

      const card = await prismaClient.period.create({
        data: {
          name,
          start_date: new Date(),
        },
      });

      return card;
    },
  })
  .mutation("-update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
    }),
    async resolve({ input }) {
      const { id, name } = input;

      const period = await prismaClient.period.update({
        where: {
          id: id,
        },
        data: {
          id,
          name,
        },
      });

      return period;
    },
  })
  .mutation("-delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const period = await prismaClient.period.delete({
        where: {
          id,
        },
      });

      return period;
    },
  });
