'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export function Logo() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-12 h-12">
        <Image
          src={logoSrc}
          alt="SwiftX Logo"
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
