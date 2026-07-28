import SearchItemCard from "./SearchItem";
import type { SearchItem } from "../../../types/search";

interface Props {
  title: string;
  items: SearchItem[];
  onSelect: () => void; // Tambahkan prop ini
}

export default function SearchGroup({ title, items, onSelect }: Props) {
  if (items.length === 0) return null;

  return (
    <div>
      <p className="px-3 py-2 text-xs uppercase text-zinc-500">{title}</p>
      {items.map((item) => (
        <SearchItemCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
}