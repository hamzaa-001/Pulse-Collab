"use client";

import useSelectionBound from "@/hooks/useSelectionBound";
import { LayerType, Side, XYWH } from "@/type/canvas";
import { useSelf, useStorage } from "@liveblocks/react";
import { memo } from "react";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    const soleLayerId = useSelf((me) =>
      me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );

    const isShowingHandle = useStorage(
      (root) =>
        soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
    );

    const bounds = useSelectionBound();
    if (!bounds) {
      return null;
    }
    return (
      <>
        <rect
          className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
          style={{ transform: `translate(${bounds.x}px, ${bounds.y}px)` }}
          x={0}
          y={0}
          width={bounds.width}
          height={bounds.height}
        />
        {isShowingHandle && (
          <>
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top + Side.Left, bounds);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top, bounds);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top + Side.Right, bounds);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Right, bounds);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Right + Side.Bottom, bounds);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom, bounds);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Left, bounds);
              }}
            />
          </>
        )}
      </>
    );
  }
);

export default SelectionBox;

SelectionBox.displayName = "SelectionBox";
