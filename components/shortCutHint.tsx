'use client';

export default function ShortcutHint() {
  return (
    <div className="hidden md:flex items-center gap-3 text-sm text-gray-400 select-none">
      <div className="flex items-center gap-2 animate-pulse">
        <span className="px-2 py-1 rounded bg-[#3a3a3a] text-gray-200 text-xs font-medium">
          ctrl
        </span>

        <span className="text-gray-500">+</span>

        <span className="px-2 py-1 rounded bg-[#3a3a3a] text-gray-200 text-xs font-medium">
          enter
        </span>
      </div>

      <span className="text-gray-400">to start</span>
    </div>
  );
}
