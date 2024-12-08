import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <Image
          src="/logo.png"
          alt="SwiftX Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <span className="text-xl font-bold">SwiftX</span>
    </Link>
  );
}
