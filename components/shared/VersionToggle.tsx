'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function VersionToggle() {
  const pathname = usePathname();
  const isInteractive = pathname?.startsWith('/interactive');

  if (isInteractive) {
    return (
      <Link
        href="/plain"
        className="bg-green-400 text-black px-4 py-2 rounded-md hover:opacity-80 transition-opacity font-mono"
      >
        Plain
      </Link>
    );
  }

  return (
    <Link
      href="/interactive"
      className="bg-foreground text-background px-4 py-2 rounded-md hover:opacity-80 transition-opacity"
    >
      Interactive
    </Link>
  );
}