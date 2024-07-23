"use client";

import { Loader } from "lucide-react";
import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";

const CanvasLoading = () => {
  return (
    <main className="h-screen w-full bg-neutral-100 relative touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
};

export default CanvasLoading;
