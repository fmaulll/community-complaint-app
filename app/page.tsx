import Image from "next/image";
import Input from "./components/input";

export default function Home() {
  return (
    <main className="flex h-screen items-center">
      <div className="w-[500px] h-[600px] shadow-xl rounded-lg px-8 py-4">
        <Input icon={null} type="password" />
      </div>
    </main>
  );
}
