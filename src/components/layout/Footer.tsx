import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-industrial-900 text-white pt-20 pb-10">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/images/logo.png"
                                    alt="Presso Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-display font-bold tracking-tighter">Presso</span>
                        </Link>
                        <p className="text-industrial-400 text-sm leading-relaxed">
                            Decarbonizing industrial MSMEs through real-time energy intelligence and retrofit IoT solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-industrial-100">Product</h4>
                        <ul className="space-y-4 text-industrial-400 text-sm">
                            <li><Link href="/product" className="hover:text-presso transition-colors">Hardware</Link></li>
                            <li><Link href="/dashboard" className="hover:text-presso transition-colors">Dashboard</Link></li>
                            <li><Link href="/technology" className="hover:text-presso transition-colors">IoT Architecture</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-industrial-100">Company</h4>
                        <ul className="space-y-4 text-industrial-400 text-sm">
                            <li><Link href="/about" className="hover:text-presso transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-presso transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-presso transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-industrial-100">Contact</h4>
                        <ul className="space-y-3 text-industrial-400 text-[11px] leading-relaxed">
                            <li className="text-industrial-200 font-bold uppercase text-[10px]">reThela Technology Pvt Ltd</li>
                            <li>CIN: U74999WB2019PTC230958</li>
                            <li>Regd. Off: 301, Shreeshyam Apartment,<br />1/16 Mirpara Road, Liluah, Howrah 711203</li>
                            <li className="pt-2">support@presso.live</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-industrial-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-industrial-500 text-xs">
                    <p>© {new Date().getFullYear()} Presso. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
