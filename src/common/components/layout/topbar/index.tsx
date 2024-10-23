import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Button } from "@/common/components/ui/button";
import { XStack } from "@/common/components/ui/stack";

import { Menu } from "lucide-react";
import { PropsWithChildren } from "react";

const Topbar = ({ children }: PropsWithChildren) => {
  return (
    <header className="relative z-10 w-full flex justify-between items-center px-4 py-2 ">
      <XStack className="space-x-2 items-center">
        <Button size="icon" variant="ghost">
          <Menu size={18} />
        </Button>
        <div className="text-lg font-bold">Logo</div>
      </XStack>

      <nav className="flex space-x-2 ">
        <div className="mx-4 space-x-2">{children}</div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

export default Topbar;
