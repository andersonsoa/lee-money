import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prismaClient } from "../../utils/db/prisma";
import { createRouter } from "../createRouter";

export const cicles = createRouter()
  .query("-get-all", {
    async resolve() {
      const cicles = await prismaClient.cicle.findMany();

      return cicles;
    },
  })
  .query("-get-all-select", {
    async resolve() {
      const cicles = await prismaClient.cicle.findMany({
        select: {
          id: true,
          name: true,
          start_date: true,
          end_date: true,
        },
        orderBy: {
          start_date: "asc",
        },
        where: {
          end_date: {},
        },
      });

      return cicles.map((cicle) => ({
        label: cicle.name,
        value: cicle.id,
      }));
    },
  })
  .query("-get-by-id", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const cicle = await prismaClient.cicle.findUnique({
        where: {
          id,
        },
      });

      return cicle;
    },
  })
  .mutation("-create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input }) {
      const { name } = input;

      const card = await prismaClient.cicle.create({
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

      const cicle = await prismaClient.cicle.update({
        where: {
          id: id,
        },
        data: {
          id,
          name,
        },
      });

      return cicle;
    },
  })
  .mutation("-delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const spents = await prismaClient.spent.findMany({
        where: {
          cicle_id: id,
        },
      });

      if (spents.length > 0) {
        throw new TRPCError({
          message: "Este Ciclo está vinculado a algum gasto",
          code: "NOT_FOUND",
        });
      }

      const cicle = await prismaClient.cicle.delete({
        where: {
          id,
        },
      });

      return cicle;
    },
  });
