import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prismaClient } from "../../utils/db/prisma";
import { createRouter } from "../createRouter";

export const spents = createRouter()
  .query("-get-all", {
    input: z.object({
      period_id: z.string(),
    }),
    async resolve({ input }) {
      const { period_id } = input;
      const spents = await prismaClient.spent.findMany({
        where: {
          period_id,
        },

        include: {
          tags: true,
          payment: true,
        },
      });

      return spents;
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
      period_id: z.string(),
      title: z.string(),
      amount: z.number(),
      payment_id: z.string(),
      tag_id: z.string().nullish(),
    }),
    async resolve({ input }) {
      const { title, amount, payment_id, tag_id, period_id } = input;

      if (!payment_id) {
        throw new TRPCError({
          message: "payment_id is required",
          code: "BAD_REQUEST",
        });
      }

      const spent = await prismaClient.spent.create({
        data: {
          title,
          amount,
          payment_id,
          tag_id,
          period_id,
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
