"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Hint from "@/components/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    //@ts-ignore
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative mt-4">
      <Hint label={name} side="right" align="start" sideOffset={5}>
        <Image
          fill
          src={imageUrl}
          alt={name}
          onClick={onClick}
          className={cn(
            "w-full h-full object-cover rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
