"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";

const EmptyBoard = () => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created Successfully");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="./note.svg" width={150} height={150} alt="No Board Found" />
      <h2 className="text-2xl font-semibold mt-2">No Board Found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div>
        <Button disabled={pending} size="lg" className="mt-2" onClick={onClick}>
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
