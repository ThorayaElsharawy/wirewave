import { Link } from '@tanstack/react-router';
import { useRef, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';

type UserAccountBtnProps = {
    handleLogout: () => void
}

export default function UserAccountBtn({ handleLogout }: UserAccountBtnProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null); // To hold the timeout ID

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setIsMenuOpen(false);
        }, 200);
    };

    return (
        <div className="relative z-20 inline-block"
        >
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='text-slate-100 font-bold text-sm transition-colors hover:text-yellow-300 flex 
                items-center gap-2 duration-300'
            >
                <FaUserAlt className='text-lg' />
                <span className='hidden sm:inline-block'>My account</span>
            </button>
            {isMenuOpen && (
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute mt-3 -ml-20 sm:-ml-6 py-2 w-36 md:w-40 text-sm bg-white border rounded shadow-lg"
                >
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        My account
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Settings
                    </Link>
                    <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-start">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
