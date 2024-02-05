import { Canvas } from "./_components/canvas";

interface BoardIdPageProp {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProp) => {
  return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
