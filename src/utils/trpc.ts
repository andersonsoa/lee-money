import { createReactQueryHooks } from "@trpc/react";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "../server/routes/_app";

export const trpc = createReactQueryHooks<AppRouter>();

export type inferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"],
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;
