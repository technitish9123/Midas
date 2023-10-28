"use client";
import { Red } from "@/public";
import Image, { StaticImageData } from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Sui, Uni, Eth, Coindcx, Router, Rock, Sudoku, Pacman } from "@/public";
interface CardProps {
  title: string;
  desc: string;
  linkGleam: string;
  imageHere: StaticImageData;
  points: string;
}

const Card: React.FC<CardProps> = ({
  title,
  desc,
  linkGleam,
  imageHere,
  points,
}) => {
  const router = useRouter();
  return (
    <div className="bg-secondary-DarkForest text-center h-[50vh] w-[20vw] flex flex-col justify-start items-center rounded-3xl p-8  ">
      <div className="text-3xl text-primary-LightSKY flex items-center justify-center gap-x-8">
        <Image
          className="inline-block rounded-full ring-2 ring-white"
          src={imageHere}
          width={100}
          height={100}
          alt=""
        />
        <div mt-3>{title}</div>
      </div>
      <div className="text-left mt-5 text-primary-LightSKY">{desc}</div>
      <div>
        <button
          onClick={() => {
            window.open(linkGleam, "_blank");
          }}
          className="rounded-xl text-secondary-BLACKWOOD bg-primary-LIGHTSUNFLOWER font-bold text-lg px-8 flex justify-center mt-8"
        >
          Participate
        </button>
        <div className="flex w-full text-left ml-9 mt-5 flex-justify-center items-center text-primary-LightSKY">
          {points}
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 pt-60">
      <p className="flex w-full items-center justify-center text-5xl font-extrabold text-secondary-DarkSky pb-16">
        Boost your chances for an exclusive drop <br /> Complete any of the
        tasks below!
      </p>
      {/* Cards for Gleam campaign */}
      <div className="flex flex-row flex-wrap gap-x-6 gap-y-14">
        <Card
          title={"CoinDCX"}
          desc={
            "Share your love for CoinDCX on Twitter and increase your odds of getting better drops"
          }
          linkGleam={
            "https://twitter.com/intent/tweet?text=Show your love for @coindcx #unfold2023 %20world"
          }
          imageHere={Coindcx}
          points={"Points: 100"}
        />
        <Card
          title={"Ethereum"}
          desc={
            "Share your love for Ethereum on Twitter and increase your odds of getting better drops"
          }
          linkGleam={
            "https://twitter.com/intent/tweet?text=Show your love for @ethereum %20world"
          }
          imageHere={Eth}
          points={"Points: 100"}
        />
        <Card
          title={"UniSwap"}
          desc={
            "Share your love for UniSwap on Twitter and increase your odds of getting better drops"
          }
          linkGleam={
            "https://twitter.com/intent/tweet?text=Show your love for @uniswap %20world"
          }
          imageHere={Uni}
          points={"Points: 100"}
        />
        <Card
          title={"Router"}
          desc={
            "Share your love for Router on Twitter and increase your odds of getting better drops"
          }
          linkGleam={
            "https://twitter.com/intent/tweet?text=Show your love for @router #unfold2023 %20world"
          }
          imageHere={Router}
          points={"Points: 100"}
        />
        <Card
          title={"Sui Chain"}
          desc={
            "Share your love for Sui Chain on Twitter and increase your odds of getting better drops"
          }
          linkGleam={
            "https://twitter.com/intent/tweet?text=Show your love for @sui #unfold2023 %20world"
          }
          imageHere={Sui}
          points={"Points: 100"}
        />
        <Card
          title={"Rock Paper Scissor"}
          desc={
            "Play this game and get a high score to increase your odds of getting better drops"
          }
          linkGleam={
            "https://www.online-stopwatch.com/chance-games/rock-paper-scissors/"
          }
          imageHere={Rock}
          points={"Points: 100"}
        />
        <Card
          title={"Sudoku"}
          desc={
            "Play this game and get a high score to increase your odds of getting better drops"
          }
          linkGleam={"https://sudoku.com/"}
          imageHere={Sudoku}
          points={"Points: 100"}
        />
        <Card
          title={"Pacman"}
          desc={
            "Play this game and get a high score to increase your odds of getting better drops"
          }
          linkGleam={"https://pacman.live/"}
          imageHere={Pacman}
          points={"Points: 100"}
        />
      </div>
    </main>
  );
}
