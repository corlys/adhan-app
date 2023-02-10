import { type NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Head from "next/head";

import { api } from "@/utils/api";
import { CityForm } from "@/types";

const Home: NextPage = () => {
  const [cityName, setCityName] = useState<string>("");

  const { register, handleSubmit } = useForm<CityForm>({
    defaultValues: {
      city: "",
    },
  });

  const onSubmit: SubmitHandler<CityForm> = (data) => {
    console.log(data);
    setCityName(data.city);
  };

  const timings = api.adhan.getAdhanByCity.useQuery(
    {
      city: cityName,
    },
    {
      enabled: !!cityName,
    }
  );

  return (
    <>
      <Head>
        <title>Adhan App</title>
        <meta name="description" content="Adhan app created using create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Next <span className="text-[hsl(280,100%,70%)]">Adhan</span> App
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              placeholder="put city name here"
              className="rounded-full border-2 bg-gray-100 p-4"
              type={"text"}
              {...register("city")}
            />
            <button
              onClick={handleSubmit(onSubmit)}
              className="rounded-full border-2 border-purple-400 p-4 text-white hover:bg-purple-500 w-3/4"
            >
              Search
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {timings.data &&
              timings.data.prayerTimes.map((i) => {
                return (
                  <>
                    <div
                      key={i.name}
                      className="flex flex-col items-center gap-4 rounded border-2 border-blue-600 p-8"
                    >
                      <div className="font-bold text-blue-200">{i.name}</div>
                      <div className="font-semibold text-blue-900">
                        {i.time}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
