import React from "react";
import Logo from "../public/assets/img/logo.svg";
import { footer } from "../data";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="section text-white bg-primary">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14">
					<a className=" mb-6 lg:mb-0" href="#">
						<Image src={Logo} alt="" />
					</a>
					{/* social */}
					<div className=" flex gap-x-4">
						{footer.social.map((item, index) => {
							return (
								<div
									className=" w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition hover:animate-pulse"
									key={index}>
									<a href="#">{item.icon}</a>
								</div>
							);
						})}
					</div>
				</div>
				<p className=" text-center">
					&copy; FurniShop 2022 - All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
