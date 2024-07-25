import { LayerType } from "@/type/canvas";
import { useStorage } from "@liveblocks/react";
import { memo } from "react";
import Rectangle from "./Rectangle";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    console.log(
      {
        layer,
      },
      "Layer-Preview"
    );

    if (!layer) {
      return;
    }
    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.warn("Unknown Layer Type");
        return null;
    }
  }
);

export default LayerPreview;

LayerPreview.displayName = "LayerPreview";
