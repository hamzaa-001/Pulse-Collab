import Room from "@/components/Room";
import Canvas from "./_components/Canvas";
import CanvasLoading from "./_components/CanvasLoading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <div>
      <Room roomId={params.boardId} fallback={<CanvasLoading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
