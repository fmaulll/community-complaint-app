import Image from "next/image";
import Input from "./components/input";
import Island from "../public/images/island.png";

export default function Home() {
  return (
    <main className="flex h-screen items-center relative bg-[#f0f0f0]">
      <Image
        className="w-[1000px] absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={Island}
        alt="island"
      />
      <div className="bg-white relative ml-16 w-[450px] h-[500px] shadow-xl rounded-lg px-8 py-4 flex justify-between flex-col z-10">
        <div>
          <Input label="Email" icon={null} type="email" />
          <Input label="Password" icon={null} type="password" />
        </div>
      </div>
    </main>
  );
}
