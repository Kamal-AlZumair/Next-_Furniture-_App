import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { newInStore } from "../data";
import Image from "next/image";

const NewItemsSlider = () => {
	return (
		<Swiper
			grabCursor={true}
			breakpoints={{
				320: { slidesPerView: 2, spaceBetween: 18 },
				320: { slidesPerView: 3, spaceBetween: 20 },
			}}>
			{newInStore.products.map((product, index) => (
				<SwiperSlide className="max-w-[265px]" key={index}>
					<div className=" relative">
						<Image src={product.image} alt="" />
						<div className=" absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize">
							{product.name}
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default NewItemsSlider;
