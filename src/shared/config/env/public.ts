type PublicEnvType = {
  NEXT_PUBLIC_HOST_URL: string;
};

export const publicEnv: PublicEnvType = {
  NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL || "",
};
