import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prismaClient } from "../../utils/db/prisma";
import { createRouter } from "../createRouter";

export const spents = createRouter()
  .query("-get-all", {
    input: z.object({
      cicle_id: z.string(),
      page: z.number().optional().default(1),
      limit: z.number().optional().default(10),
    }),
    async resolve({ input }) {
      const { cicle_id, page, limit } = input;

      const spents = await prismaClient.spent.findMany({
        skip: (page - 1) * limit,
        take: limit,

        where: {
          cicle_id,
        },

        include: {
          tags: true,
          payment: true,
        },

        orderBy: {
          created_at: "desc",
        },
      });

      const total = await prismaClient.spent.count({
        where: {
          cicle_id,
        },
      });

      return { spents, total };
    },
  })
  .query("-get-all-amount", {
    async resolve({ input }) {
      const totalSpent = await prismaClient.spent.findMany({
        select: {
          amount: true,
        },
      });

      return totalSpent;
    },
  })
  .query("-get-by-id", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;

      const spent = await prismaClient.spent.findUnique({
        where: {
          id,
        },
      });

      return spent;
    },
  })
  .mutation("-create", {
    input: z.object({
      cicle_id: z.string(),
      title: z.string(),
      amount: z.number(),
      payment_id: z.string(),
      tag_id: z.string().nullish(),
    }),
    async resolve({ input }) {
      const { title, amount, payment_id, tag_id, cicle_id } = input;

      if (!payment_id) {
        throw new TRPCError({
          message: "payment_id is required",
          code: "BAD_REQUEST",
        });
      }

      const cicle = await prismaClient.cicle.findUnique({
        where: {
          id: cicle_id,
        },
      });

      if (!cicle) {
        throw new TRPCError({
          message: "Ciclo n??o encontrado",
          code: "NOT_FOUND",
        });
      }

      if (cicle.end_date) {
        throw new TRPCError({
          message: "Ciclo j?? finalizado",
          code: "BAD_REQUEST",
        });
      }

      const spent = await prismaClient.spent.create({
        data: {
          title,
          amount,
          payment_id,
          tag_id,
          cicle_id,
        },
      });

      return spent;
    },
  })
  .mutation("-update", {
    input: z.object({
      id: z.string(),
      title: z.string(),
      amount: z.number(),
      payment_id: z.string(),
      tag_id: z.string().nullable(),
    }),
    async resolve({ input }) {
      const { id, title, amount, payment_id, tag_id } = input;

      const spent = await prismaClient.spent.update({
        where: {
          id: id,
        },
        data: {
          title,
          amount,
          payment_id,
          tag_id,
        },
      });

      return spent;
    },
  })
  .mutation("-delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;
      const spent = await prismaClient.spent.delete({
        where: {
          id,
        },
      });

      return spent;
    },
  });
