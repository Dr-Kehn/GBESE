"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { IUserResponse, useLazyGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";

export default function TopNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const [user, setUser] = useState<IUserResponse | null>(null);
	const [triggerGetUser] = useLazyGetCurrentUserQuery();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const local = localStorage.getItem("currentUser");
				if (local) {
					const parsedUser: IUserResponse = JSON.parse(local);
					setUser(parsedUser);
				} else {
					const fetched = await triggerGetUser().unwrap();
					setUser(fetched);
					localStorage.setItem("currentUser", JSON.stringify(fetched));
				}
			} catch (error) {
				console.error("Failed to fetch user:", error);
			}
		};

		fetchUser();
	}, [triggerGetUser]);

	// Check window size on mount and resize
	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initial check
		checkScreenSize();

		// Add event listener
		window.addEventListener("resize", checkScreenSize);

		// Clean up
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	// Add event listener for closing menu
	useEffect(() => {
		const headerElement = document.querySelector("header");

		const handleCloseMenu = () => {
			setIsMenuOpen(false);
		};

		if (headerElement) {
			headerElement.addEventListener("closeMenu", handleCloseMenu);

			return () => {
				headerElement.removeEventListener("closeMenu", handleCloseMenu);
			};
		}
	}, []);

	return (
		<header className="w-full flex items-center justify-between px-4 md:px-6 py-4 bg-white shadow-sm border-b-2 relative">
			{/* Logo */}
			<div className="flex items-center space-x-2">
				<Image src="/image/Logo.png" alt="Gbese Logo" width={70} height={35} />
			</div>

			{/* Mobile Menu Button */}
			<button
				className="md:hidden flex items-center"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				aria-label="Toggle menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
					/>
				</svg>
			</button>

			{/* Navigation Links - Desktop */}
			<nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
				<NavItem
					href="/w2/dashboard"
					label="Home"
					icon="/Home.svg"
					iconActive="/Home-active.svg"
				/>
				<NavItem
					href="/w2/send"
					label="Send"
					icon="/send.svg"
					iconActive="/send-active.svg"
				/>
				<NavItem
					href="/w2/pay"
					label="Pay"
					icon="/pay.svg"
					iconActive="/pay-active.svg"
				/>
				<NavItem
					href="/w2/card"
					label="Card"
					icon="/card.svg"
					iconActive="/card-active.svg"
				/>
				<NavItem
					href="/w2/marketplace"
					label="Marketplace"
					icon="/marketplace.svg"
					iconActive="/marketplace-active.svg"
				/>
				<NavItem
					href="/w2/notification"
					label=""
					icon="/notification.svg"
					iconActive="/notification-active.svg"
				/>
			</nav>

			{/* Account - Desktop */}
			<Link
				href="/w2/account"
				className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-blue-600"
			>
				<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
					{user?.username ? user.username[0].toUpperCase() : "?"}
				</div>
				<span>Account</span>
			</Link>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
					<div className="flex flex-col py-2">
						<MobileNavItem
							href="/w2/dashboard"
							label="Home"
							icon="/Home.svg"
							iconActive="/Home-active.svg"
						/>
						<MobileNavItem
							href="/w2/send"
							label="Send"
							icon="/send.svg"
							iconActive="/send-active.svg"
						/>
						<MobileNavItem
							href="/w2/pay"
							label="Pay"
							icon="/pay.svg"
							iconActive="/pay-active.svg"
						/>
						<MobileNavItem
							href="/w2/card"
							label="Card"
							icon="/card.svg"
							iconActive="/card-active.svg"
						/>
						<MobileNavItem
							href="/w2/marketplace"
							label="Marketplace"
							icon="/marketplace.svg"
							iconActive="/marketplace-active.svg"
						/>
						<MobileNavItem
							href="/w2/notification"
							label="Notifications"
							icon="/notification.svg"
							iconActive="/notification-active.svg"
						/>
						<MobileNavItem
							href="/w2/account"
							label="Account"
							icon="/account-image.png"
							iconActive="/account-image.png"
							isAccount={true}
              user={user}
						/>
					</div>
				</div>
			)}
		</header>
	);
}

function NavItem({ href, label, icon, iconActive }: any) {
	const pathname = usePathname();
	const isActive = pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={cn(
				"flex items-center space-x-1 text-sm font-medium",
				isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"
			)}
		>
			<Image
				src={isActive ? iconActive : icon}
				alt={label || "nav-icon"}
				width={20}
				height={20}
			/>
			{label && <span>{label}</span>}
		</Link>
	);
}

interface MobileNavItemProps {
	href: string;
	label: string;
	icon: string;
	iconActive: string;
	user?: IUserResponse | null;
  isAccount?: boolean;
}

function MobileNavItem({
	href,
	label,
	icon,
	iconActive,
  user,
	isAccount,
}: MobileNavItemProps) {
	const pathname = usePathname();
	const isActive = pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={cn(
				"flex items-center space-x-3 px-4 py-3 text-sm font-medium",
				isActive ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:bg-gray-50"
			)}
			onClick={(e) => {
				// Get the setIsMenuOpen from parent component
				const parentHeader = e.currentTarget.closest("header");
				if (parentHeader) {
					const event = new CustomEvent("closeMenu");
					parentHeader.dispatchEvent(event);
				}
			}}
		>
			{isAccount ? (
				<div className={cn("w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold", 
          isActive? "text-white bg-blue-600" : "text-white bg-gray-400")}>
					{user?.username ? user.username[0].toUpperCase() : "?"}
				</div>
			) : (
				<Image
					src={isActive ? iconActive : icon}
					alt={label || "nav-icon"}
					width={20}
					height={20}
				/>
			)}
			<span>{label}</span>
		</Link>
	);
}
