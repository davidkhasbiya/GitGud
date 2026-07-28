import { BookOpen, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { SearchItem } from "../../../types/search";

interface Props {
  item: SearchItem;
  onSelect: () => void; // Tambahkan prop ini
}

export default function SearchItemCard({ item, onSelect }: Props) {
  const navigate = useNavigate();

  const Icon = item.type === "practice" ? BookOpen : LayoutDashboard;

  const handleSelect = () => {
    navigate(item.url);
    onSelect();
  };

  return (
    <button
      onMouseDown={(e) => {
        // Mencegah input onBlur terpanggil sebelum navigasi selesai
        e.preventDefault();
        handleSelect();
      }}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-zinc-800"
    >
      <Icon size={18} className="text-violet-400" />
      <div>
        <p className="font-medium">{item.title}</p>
        <p className="text-xs text-zinc-500">{item.description}</p>
      </div>
    </button>
  );
}