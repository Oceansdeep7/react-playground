import Image from "next/image";
import {PlaygroundProvider} from "@/app/PlaygroundContext";
import ReactPlayground from "@/app/ReactPlayground";

export default function Page() {
  return (
      <PlaygroundProvider>
          <ReactPlayground/>
      </PlaygroundProvider>
  );
}
