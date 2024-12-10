'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export function Logo() {
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? '/light_mode_logo.png' : '/dark_mode_logo.png';

  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-[83px] h-[83px] sm:w-[5.2rem] sm:h-[5.2rem]">
        <Image
          src={logoSrc}
          alt="SwiftX Logo"
          width={83}
          height={83}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
