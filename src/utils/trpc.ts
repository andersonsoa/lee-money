import { createReactQueryHooks, createTRPCClient } from "@trpc/react";
import { AppRouter } from "../server/routes/_app";

export const trpc = createReactQueryHooks<AppRouter>();
