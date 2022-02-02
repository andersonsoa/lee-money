import { createRouter } from "../createRouter";
import { tags } from "./tags";
import { periods } from "./periods";
import { payment } from "./payment";
import { spents } from "./spents";

export const appRouter = createRouter()
  .merge("tag", tags)
  .merge("payment", payment)
  .merge("period", periods)
  .merge("spent", spents);

export type AppRouter = typeof appRouter;
