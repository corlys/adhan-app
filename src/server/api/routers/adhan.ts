import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "@/env.mjs";
import type { CityApi, AdhanAPIResponse } from "@/types";

export const adhanRouter = createTRPCRouter({
  getAdhanByCity: publicProcedure
    .input(z.object({ city: z.string() }))
    .query(async ({ input }) => {
      const cityAPI = await axios.get<CityApi>(
        `https://api.api-ninjas.com/v1/city?name=${input.city}`,
        {
          headers: {
            "X-Api-Key": env.API_KEY_NINJA,
          },
        }
      );

      if (!cityAPI.data?.[0]) return null;

      const city = cityAPI.data[0];

      const {
        data: {
          data: { timings },
        },
      } = await axios.get<AdhanAPIResponse>(
        `https://api.aladhan.com/v1/timingsByCity?city=${city.name}&country=${city.country}&method=2`
      );

      const prayerTimes = [
        { name: "Fajr", time: timings.Fajr } as const,
        { name: "Dhuhur", time: timings.Dhuhr } as const,
        { name: "Asr", time: timings.Asr } as const,
        { name: "Maghrib", time: timings.Maghrib } as const,
        { name: "Isha", time: timings.Isha } as const,
      ];

      return {
        prayerTimes,
      };
    }),
});
