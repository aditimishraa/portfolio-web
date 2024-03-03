import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center borber-0">
      <div className="w-2/3">
        <Navbar />
      </div>
      <hr className="w-2/3 border-0 h-0.5 opacity-35 bg-gray-600" />
      <div className="w-2/3">
        <Content />
      </div>
    </div>
  );
}
