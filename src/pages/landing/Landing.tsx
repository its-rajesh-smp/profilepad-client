import { TextGenerateEffect } from "@/common/components/shadcn/ui/text-generate-effect";
import { APP_ICON } from "@/common/constants/app.const";
import { motion } from "framer-motion";
import { BackgroundLines } from "./components/BackgroundLines";
import CardsContainer from "./components/CardsContainer";
import { ContainerScroll } from "./components/ContainerScroll";
import CreateProfileBtn from "./components/CreateProfileBtn";
import { FlipWords } from "./components/FlipWords";

export default function Landing() {
  const words = ["pads", "cards"];

  return (
    <div className="relative flex flex-col overflow-hidden">
      <CardsContainer />
      <BackgroundLines />

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
    </div>
  );
}
