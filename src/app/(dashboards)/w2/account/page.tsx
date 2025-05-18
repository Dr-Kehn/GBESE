"use client";
import {
	IUserResponse,
	useLazyGetCurrentUserQuery,
} from "@/redux/services/slices/UserSlice";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function AccountPage() {
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

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text);
		toast.success(`${text} copied!`);
	};

	const accountOptions = [
		{ href: "/w2/account/profile", icon: "user.svg", label: "View Profile" },
		{
			href: "/w2/account/reports",
			icon: "statement.svg",
			label: "Statement & Reports",
		},
		{ href: "/w2/account/security", icon: "security.svg", label: "Security" },
		{ href: "/w2/account/saved-cards", icon: "card.svg", label: "Saved Cards" },
		{ href: "/w2/account/faqs", icon: "faq.svg", label: "FAQs" },
		{ href: "/w2/account/legal", icon: "legal.svg", label: "Legal" },
		{
			href: "/w2/account/credit-score",
			icon: "credit-score.svg",
			label: "Gbese Credit Scores",
		},
		{ href: "/w2/account/help", icon: "help.svg", label: "Get Help" },
	];

	return (
		<>
			<div className="p-4 md:p-8 max-w-5xl mx-auto">
				{/* Profile Section */}
				<h2 className="text-center mt-10 mb-6 font-bold">Account</h2>
				<div className="flex justify-center items-center gap-4 mb-8">
					<div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
						{user?.username ? user.username[0].toUpperCase() : "?"}
					</div>
					<div>
						<h2 className="text-sm font-bold">{user?.username}</h2>
						<div className="flex flex-col items-start text-sm text-gray-500 gap-3">
							<button className="flex items-center gap-1">
								<Image
									onClick={() => handleCopy(user!.email)}
									src="/copy.svg"
									alt="Copy"
									width={14}
									height={14}
									className="cursor-pointer"
								/>
								<span>{user?.email}</span>
							</button>
							<button className="flex items-center gap-1">
								<Image
									onClick={() => handleCopy(user!.userId)}
									src="/copy.svg"
									alt="Copy"
									width={14}
									height={14}
									className=" cursor-pointer"
								/>
								<span>{user?.userId}</span>
							</button>
						</div>
					</div>
				</div>

				{/* Card Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{accountOptions.map(({ href, icon, label }) => (
						<Link
							key={label}
							href={href}
							className="flex items-center justify-between p-4 border rounded-xl shadow-sm border-none hover:bg-gray-50"
						>
							<div className="flex items-center gap-3">
								<Image src={`/${icon}`} alt={label} width={20} height={20} />
								<span className="font-bold text-sm text-blue-700">{label}</span>
							</div>
							<Image src="/arrow-right.svg" alt=">" width={16} height={16} />
						</Link>
					))}
				</div>

				{/* Sign Out */}
				<div className="flex justify-end mt-6">
					<Link href="/">
						<button className="flex items-center justify-between gap-3 border border-red-500 text-red-600 px-4 py-2 rounded-xl hover:bg-red-50">
							<div className="flex items-center gap-2">
								<Image
									src="/sign-out.svg"
									alt="Logout"
									width={16}
									height={16}
								/>
								<span className="text-sm font-bold">Sign Out</span>
							</div>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
