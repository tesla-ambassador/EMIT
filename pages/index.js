import { Inter } from "next/font/google";
import HeroHome from "@/components/herosections/HeroHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex flex-col items-center min-h-screen`}>
      <HeroHome />
    </div>
  );
}
