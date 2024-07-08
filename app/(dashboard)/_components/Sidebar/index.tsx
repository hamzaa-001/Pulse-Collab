import NewButton from "../NewButton";
import List from "./list";
const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-900 h-screen w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
