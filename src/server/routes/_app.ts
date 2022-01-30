import { createRouter } from "../createRouter";
import { tags } from "./tags";
import { cards } from "./cards";
import { periods } from "./periods";

export const appRouter = createRouter().merge("tag", tags).merge("card", cards).merge("period", periods);

export type AppRouter = typeof appRouter;
