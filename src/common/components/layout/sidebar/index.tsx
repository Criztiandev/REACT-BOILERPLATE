import { ChevronDown, ChevronUp } from "lucide-react";
import { Button, ButtonProps } from "../../ui/button";
import { PropsWithChildren, ReactNode, useState } from "react";
import { cn } from "@/common/lib/utils";

interface Props extends PropsWithChildren {}
const SideBar = ({ children }: Props) => {
  return (
    <aside className="pt-20 absolute top-0  w-72  p-4 space-y-2 h-screen border-r border-stone-200">
      {children}
    </aside>
  );
};

interface SideBarItemProps extends ButtonProps {
  label: string;
  isSelected?: boolean;
  icon?: ReactNode;
  dir?: "left" | "right";
}

export const SideBarItem = ({
  icon,
  dir = "left",
  isSelected,
  label,
  ...props
}: SideBarItemProps) => {
  return (
    <Button
      className={cn(
        `space-x-3 w-full justify-start pl-3  hover:bg-stone-300 hover:cursor-pointer active:bg-stone-300 
          ${isSelected && "bg-stone-200"}
          dark:bg-stone-700 dark:hover:bg-stone-700 dark:active:bg-stone-800`,
        props.className
      )}
      size="lg"
      variant={"ghost"}
      style={{ opacity: isSelected ? 1 : 0.5 }}
    >
      {dir === "left" && icon && icon}
      <span className="">{label}</span>
      {dir === "right" && icon && icon}
    </Button>
  );
};

interface SideBarMenuItemProps extends SideBarItemProps {
  options: SideBarItemProps[];
}

export const SideBarMenuItem = ({
  icon,
  label,
  dir = "left",
  options,
}: SideBarMenuItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive((prev) => !prev);

  if (options.length <= 0) throw new Error("Options should be greater than 1");

  return (
    <>
      <Button
        className="space-x-3 w-full justify-between pl-4"
        size="lg"
        variant="ghost"
        style={{ opacity: isActive ? 1 : 0.5 }}
        onClick={toggleMenu}
      >
        <SideBarItem label={label} icon={icon} dir={dir} />

        {isActive ? <ChevronUp /> : <ChevronDown />}
      </Button>
      {options.length > 0 && isActive && (
        <div className="ml-3">
          {options.map((props) => (
            <SideBarItem {...props} />
          ))}
        </div>
      )}
    </>
  );
};

export default SideBar;
