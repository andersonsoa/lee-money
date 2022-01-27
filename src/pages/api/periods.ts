// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaClient } from "../../lib/db/prisma";

type Data = {
  periods: any[];
};

type Error = {
  error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const periods = await prismaClient.period.findMany();

        res.status(200).json({ periods });
      } catch (e) {
        res.status(500).json({ error: "Error fetching posts" });
      }

      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
