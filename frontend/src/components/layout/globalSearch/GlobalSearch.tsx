import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import type { SearchItem } from "../../../types/search";
import SearchDropdown from "./SearchDropdown";

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [items, setItems] = useState<SearchItem[]>([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!query.trim()) {
        setItems([]);
        return;
      }

      try {
        const data = await search(query);
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // Fungsi penangan saat item dipilih
  const handleSelect = () => {
    setFocused(false);
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
        <Search size={18} className="text-zinc-500" />
        <input
          value={query}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent outline-none placeholder:text-zinc-500"
        />
      </div>

      {focused && items.length > 0 && (
        <SearchDropdown items={items} onSelect={handleSelect} />
      )}
    </div>
  );
}