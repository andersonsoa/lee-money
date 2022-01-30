import { z } from "zod";
import { prismaClient } from "../../utils/db/prisma";
import { createRouter } from "../createRouter";

export const cards = createRouter()
  .query("-get-all", {
    async resolve() {
      const cards = await prismaClient.card.findMany();

      return cards;
    },
  })
  .query("-get-by-id", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const card = await prismaClient.card.findUnique({
        where: {
          id,
        },
      });

      return card;
    },
  })
  .mutation("-create", {
    input: z.object({
      name: z.string(),
      limit: z.number(),
      color: z.string(),
    }),
    async resolve({ input }) {
      const { name, limit, color } = input;

      const card = await prismaClient.card.create({
        data: {
          name,
          limit,
          color,
        },
      });

      return card;
    },
  })
  .mutation("-update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
      limit: z.number(),
      color: z.string(),
    }),
    async resolve({ input }) {
      const { id, name, limit, color } = input;

      const card = await prismaClient.card.update({
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

      return card;
    },
  })
  .mutation("-delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const card = await prismaClient.card.delete({
        where: {
          id,
        },
      });

      return card;
    },
  });
