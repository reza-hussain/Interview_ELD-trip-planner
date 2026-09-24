import Input from "@/components/Input";
import { Crosshair } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start p-4">
      <div className="w-full flex flex-col justify-start items-start">
        <h1 className="text-2xl font-bold">Plan a trip</h1>
        <p className="text-sm">
          Route and cycle hours in, breaks and daily logs out.
        </p>
      </div>

      <div className="w-full flex flex-col justify-start items-start">
        <Input
          label="Current Location"
          Icon={Crosshair}
          id="current-location"
          type="string"
        />
      </div>
    </div>
  );
}
