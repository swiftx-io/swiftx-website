'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export function Logo() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/dark_mode_logo.png' : '/light_mode_logo.png';

  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-16 h-16">
        <Image
          src={logoSrc}
          alt="SwiftX Logo"
          width={64}
          height={64}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
