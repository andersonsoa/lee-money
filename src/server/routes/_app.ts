import superjson from "superjson";

import { createRouter } from "../createRouter";
import { tags } from "./tags";
import { payment } from "./payment";
import { spents } from "./spents";
import { cicles } from "./cicles";

export const appRouter = createRouter()
  // .transformer(superjson)
  .merge("tag", tags)
  .merge("payment", payment)
  .merge("cicle", cicles)
  .merge("spent", spents);

export type AppRouter = typeof appRouter;
