import { Anton } from "next/font/google";
import Gateway from "@/components/Gateway";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return <Gateway displayFont={anton.className} />;
}
