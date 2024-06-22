import { useSearchHistory } from "@/store/history";
import { Card } from "./Card";

const HistoryUI = () => {
  const { history_list } = useSearchHistory();

  if (!history_list?.length) return ""

  return (
    <div className="mt-14">
      <h2 className="text-lg">Last 1-5 search overview</h2>

      <div className="grid grid-cols-1 mobile:grid-cols-3 ipod:grid-cols-5 gap-5 mt-5">
        {history_list?.map((item: { name: string }) => (
          <Card key={item.name} title={item.name} element={item} />
        ))}
      </div>
    </div>
  );
};

export default HistoryUI;
