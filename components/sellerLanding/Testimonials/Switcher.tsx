import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Switcher = function ({ slides }) {
	const [current, setCurrent] = useState(0);
	const slide = slides.length;

	const prevSlide = () => {
		setCurrent(current === 0 ? slide - 1 : current - 1);
	};

	const nextSlide = () => {
		setCurrent(current === slide - 1 ? 0 : current + 1);
	};

	// loop the carousel continously
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 20000);
		return () => clearInterval(interval);
	}, [current]);

	return (
		<div className="">
			{slides.map((file, index) => (
				<div
					key={index}
					className={`${index === current ? "slide active" : "slide"}`}
				>
					{index === current && file.element}
				</div>
			))}
			<div className="tw-absolute tw-right-[10%] tw-bottom-[5%] md:tw-bottom-[10%] tw-flex">
				<span onClick={prevSlide}>
					<MdArrowBackIosNew className="tw-text-2xl tw-mr-5" />
				</span>{" "}
				<span onClick={nextSlide}>
					<MdArrowForwardIos className="tw-text-2xl" />
				</span>
			</div>
		</div>
	);
};

export default Switcher;
