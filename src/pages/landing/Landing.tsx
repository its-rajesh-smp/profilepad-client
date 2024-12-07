import { TextGenerateEffect } from "@/common/components/shadcn/ui/text-generate-effect";
import { APP_ICON } from "@/common/constants/app.const";
import { motion } from "framer-motion";
import CardsContainer from "./components/CardsContainer";
import { ContainerScroll } from "./components/ContainerScroll";
import CreateProfileBtn from "./components/CreateProfileBtn";
import { FlipWords } from "./components/FlipWords";
import { SpotlightEffect } from "./components/SpotlightEffect";

export default function Landing() {
  const words = ["pads", "cards"];

  return (
    <div className="relative flex flex-col overflow-hidden">
      <CardsContainer />
      {/* ProfilePad */}
      <ContainerScroll
        titleComponent={
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-20 flex flex-col items-center justify-center"
            >
              <img className="h-16 w-16" src={APP_ICON} />
              <TextGenerateEffect
                duration={3}
                className="mt-3 text-3xl font-bold"
                words={"ProfilePad"}
              />
              <CreateProfileBtn />
            </motion.div>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Create your profile <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                with <FlipWords words={words} />
              </span>
            </h1>
          </div>
        }
      >
        <iframe
          // src="https://www.itsrajesh.online/rajesh"
          className="mx-auto h-full w-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      {/* PadLand */}
      <section className="flex h-screen flex-col gap-6 p-6 pt-0">
        <div className="mb-4 flex justify-center p-5">
          <p className="text-4xl font-bold">padLand</p>
        </div>
        <div className="flex h-full w-full flex-col gap-5 lg:flex-row">
          {/* Left side */}
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
            className="relative flex h-full w-full flex-col items-center justify-center rounded-3xl bg-zinc-800 text-center text-white lg:text-left"
          >
            <SpotlightEffect className="left-0 top-0" fill="white" />
            <h2 className="text-3xl font-thin lg:text-4xl">Connect</h2>
            <p className="text-4xl lg:text-6xl">
              on <span>padLand</span>
            </p>
            <h1 className="text-5xl lg:text-7xl">
              A 2D <span className="font-bold text-blue-500">Metaverse</span>
            </h1>
          </div>
          {/* Right side */}
          <div className="h-full w-full rounded-3xl bg-blue-500">
            sdfsdfsdfsdfsf
          </div>
        </div>
      </section>
    </div>
  );
}
