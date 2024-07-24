"use client";

import { useOthers, useSelf } from "@liveblocks/react";

import UserAvatar from "./userAvatar";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { connectionIdColor } from "@/lib/utils";

const MAX_SHOWN_USER = 1;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USER;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USER).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "A"}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            borderColor={connectionIdColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser?.info?.name} (You)`}
            fallback={currentUser?.info?.name?.[0] || "A"}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USER} more`}
            fallback={`+${users.length - MAX_SHOWN_USER}`}
          />
        )}
      </div>
    </div>
  );
};

export default Participants;

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
