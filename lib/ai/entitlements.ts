import type { UserType } from "@/app/(auth)/auth";

type Entitlements = {
  maxMessagesTotal: number;
};

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  guest: {
    maxMessagesTotal: 20,
  },
  regular: {
    maxMessagesTotal: 20,
  },
};
