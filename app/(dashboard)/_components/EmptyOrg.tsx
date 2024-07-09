"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="./empty-org.svg"
        height={150}
        width={150}
        alt="Empty Organization"
      />
      <h2 className="font-semibold text-2xl mt-2">
        Welcome to Pulse Collaboration
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create your first organization to get started
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="mt-2">
            Create Organization
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[380px]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmptyOrg;
