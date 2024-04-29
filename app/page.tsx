import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-5">
      <div className="flex flex-col justify-center">
        <Input placeholder="input box"/>
        <Button>submit</Button>
      </div>
      <div>
        <ul className="p-5">
          <li>esfsfsf</li>
          <li>esfsef</li>
          <li>sefesf</li>
        </ul>
      </div>
    </main>
  );
}
