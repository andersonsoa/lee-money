import { createRouter } from "../createRouter";
import { tags } from "./tags";
import { periods } from "./periods";
import { payment } from "./payment";

export const appRouter = createRouter().merge("tag", tags).merge("payment", payment).merge("period", periods);

export type AppRouter = typeof appRouter;
