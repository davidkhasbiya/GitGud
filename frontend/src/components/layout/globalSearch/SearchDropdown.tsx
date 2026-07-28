import SearchGroup from "./SearchGroup";
import type { SearchItem } from "../../../types/search";

interface Props {
  items: SearchItem[];
  onSelect: () => void; // Tambahkan prop ini
}

export default function SearchDropdown({ items, onSelect }: Props) {
  return (
    <div className="absolute left-0 right-0 top-16 z-50 rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-2xl">
      <SearchGroup
        title="Practice"
        items={items.filter((x) => x.type === "practice")}
        onSelect={onSelect}
      />
      <SearchGroup
        title="Pages"
        items={items.filter((x) => x.type === "page")}
        onSelect={onSelect}
      />
    </div>
  );
}