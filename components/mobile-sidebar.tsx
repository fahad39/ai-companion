import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideBar } from "@/components/sidebar";
import { Menu } from "lucide-react";

interface MovileSideBarProps {
  isPro: boolean;
}
const MobileSideBar = ({ isPro }: MovileSideBarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-secondary pt-10 w-32">
        <SideBar isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
