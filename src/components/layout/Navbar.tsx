import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-industrial-200">
            <div className="container-wide h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/images/logo.png"
                            alt="Presso Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-2xl font-display font-bold tracking-tighter text-presso">Presso</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/product" className="text-sm font-medium hover:text-presso transition-colors">Product</Link>
                    <Link href="/technology" className="text-sm font-medium hover:text-presso transition-colors">Technology</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-presso transition-colors">About</Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-presso transition-colors">Contact</Link>
                    <Link href="/login" className="text-sm font-medium hover:text-presso transition-colors">Login</Link>
                    <Button href="/contact" variant="primary">Request Pilot</Button>
                </div>
            </div>
        </nav>
    );
};
