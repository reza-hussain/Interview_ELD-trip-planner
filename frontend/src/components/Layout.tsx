import { Truck } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full p-2 flex justify-start items-center border-b border-gray-300 gap-3">
        <span className="p-2 bg-orange-600 rounded-lg">
          <Truck className="size-4" />
        </span>
        <span>ELD Trip Planner</span>
      </div>

      <div className="w-full grow bg-gray-100">{children}</div>
    </div>
  );
};

export default Layout;
