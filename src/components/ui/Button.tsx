import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    className?: string;
    icon?: LucideIcon;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    icon: Icon,
    fullWidth = false,
    type = 'button',
    disabled = false
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-presso text-white hover:bg-presso-dark shadow-md hover:shadow-lg",
        secondary: "bg-industrial-900 text-white hover:bg-industrial-800 shadow-md",
        outline: "border-2 border-presso text-presso hover:bg-presso/5",
        ghost: "text-industrial-600 hover:bg-industrial-100",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {Icon && <Icon className="mr-2 w-5 h-5" />}
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
            {Icon && <Icon className="mr-2 w-5 h-5" />}
            {children}
        </button>
    );
};
