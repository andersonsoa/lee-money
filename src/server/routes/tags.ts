import { z } from "zod";
import { prismaClient } from "../../utils/db/prisma";
import { createRouter } from "../createRouter";

export const tags = createRouter()
  .query("-get-all", {
    async resolve({ input }) {
      const tags = await prismaClient.tag.findMany();

      return tags;
    },
  })
  .query("-get-by-id", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const tag = await prismaClient.tag.findUnique({
        where: {
          id,
        },
      });

      return tag;
    },
  })
  .mutation("-create", {
    input: z.object({
      name: z.string(),
      color: z.string().nullable(),
    }),
    async resolve({ input }) {
      const { name, color } = input;

      const tag = await prismaClient.tag.create({
        data: {
          name,
          color,
        },
      });

      return tag;
    },
  })
  .mutation("-update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
      color: z.string().nullable(),
    }),
    async resolve({ input }) {
      const { id, name, color } = input;

      const tag = await prismaClient.tag.update({
        where: {
          id: id,
        },
        data: {
          id,
          name,
          color,
        },
      });

      return tag;
    },
  })
  .mutation("-delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const tag = await prismaClient.tag.delete({
        where: {
          id,
        },
      });

      return tag;
    },
  });
