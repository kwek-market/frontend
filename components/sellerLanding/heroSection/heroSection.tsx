import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import image
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Styles from "./heroSection.module.scss";
import Button from "@/components/buttons/Button";
import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";

const heroSection = () => {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);
	const dispatch = useDispatch();
	const { user, seller } = useSelector((state: RootState) => state);

	return (
		<div className={Styles.hero}>
			<div className="tw-flex tw-justify-between tw-px-5 md:tw-px-20">
				<Link href="/">
					<a>
						<img src="/svg/kweklogo.svg" />
					</a>
				</Link>
				<div className="md:tw-flex tw-justify-center tw-items-center tw-hidden">
					<Link href="/sell">
						<a className={Styles.sell}>
							<span className="tw-mr-3 lg:tw-mr-5">Marketplace</span>
						</a>
					</Link>
					<Link href="/">
						<a className={Styles.sell}>
							<span className="tw-mr-3 lg:tw-mr-5">Pricing</span>
						</a>
					</Link>
					<Link href="/">
						<a className={Styles.sell}>
							<span className="tw-mr-3 lg:tw-mr-5">Buy on kwek</span>
						</a>
					</Link>
					{!user.user.isSeller ? (
						<Button
							buttonStyle="tw-p-3 tw-text-white-100 tw-rounded-md tw-bg-red-kwek100"
							text="Register now"
							cmd={() => router.push("/sell/create-account")}
						/>
					) : (
						<Link href="/seller/profile">
							<a className={Styles.sell}>
								<span className="tw-mr-3 lg:tw-mr-5">Account</span>
							</a>
						</Link>
					)}
				</div>
				<i
					className="fas fa-bars fa-2x tw-text-black-stock tw-block md:tw-hidden"
					onClick={() => setShowMenu(true)}
				/>
				{showMenu && (
					<div className="tw-fixed tw-top-0 tw-right-0 tw-bottom-0 tw-z-30 tw-bg-white-light tw-w-7/12">
						<div className="tw-flex tw-flex-col tw-justify-around tw-items-center tw-h-full tw-py-4 md:tw-hidden">
							<i
								className="fas fa-times fa-2x tw-text-black-stock tw-block md:tw-hidden"
								onClick={() => setShowMenu(false)}
							/>
							<Link href="/sell">
								<a className={Styles.sell}>
									<span className="tw-mr-3 lg:tw-mr-5 active:tw-text-red-kwek-100 active:tw-border active:tw-border-bottom">
										Marketplace
									</span>
								</a>
							</Link>
							<Link href="/">
								<a className={Styles.sell}>
									<span className="tw-mr-3 lg:tw-mr-5">Pricing</span>
								</a>
							</Link>
							<Link href="/">
								<a className={Styles.sell}>
									<span className="tw-mr-3 lg:tw-mr-5">Buy on kwek</span>
								</a>
							</Link>
							{!user.user.isSeller ? (
								<Button
									buttonStyle="tw-p-3 tw-text-white-100 tw-rounded-md tw-bg-red-kwek100"
									text="Register now"
									cmd={() => router.push("/sell/create-account")}
								/>
							) : (
								<Link href="/seller/profile">
									<a className={Styles.sell}>
										<span className="tw-mr-3 lg:tw-mr-5">Account</span>
									</a>
								</Link>
							)}
						</div>
					</div>
				)}
			</div>
			<div className={Styles.hero_split}>
				<div className={Styles.hero_textContent}>
					<h1 className="tw-text-3xl tw-w-[90%] tw-mx-auto md:tw-w-[100%] md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-text-gray-kwek200 tw-text-center md:tw-text-left">
						Make Money & Grow your Business Online
					</h1>
					<p className="tw-text-base md:tw-text-xl  tw-text-black-stock tw-font-light tw-text-center md:tw-text-left tw-mt-3 tw-mb-5">
						Reach millions of buyers in every state in Nigeria easily, get your
						store on KwekMarket today!
					</p>
					{!user.user.isSeller && (
						<button
							className="btn bg-primary tw-p-4  tw-font-medium tw-w-9/12 tw-mx-auto tw-my-10 md:tw-w-auto md:tw-m-0 tw-text-sm sm:tw-text-base tw-truncate"
							onClick={() => router.push("/sell/create-account")}
						>
							Start your free trial{" "}
							<i className="fas fa-long-arrow-alt-right fa-2x tw-ml-2" />
						</button>
					)}
				</div>

				<div className="md:tw-ml-36 lg:tw-ml-52 tw-relative">
					<div className="md:tw-block tw-hidden">
						<Image
							className={`circle-image `}
							src="/images/smiling-people.png"
							width="350"
							height="350"
						/>
					</div>
					<div className="tw-absolute lg:tw-right-0 md:tw-block tw-hidden">
						<img
							src="/images/flower-girl.png"
							className="circle-image md:tw-w-20 lg:tw-w-32"
						/>
						{/* <Image
              className={`circle-image ${Styles.hero_image2}`}
              src="/images/flower-girl.png"
              width="110"
              height="110"
            /> */}
					</div>
				</div>
			</div>
			{/* <svg viewBox="0 0 1440 285">
				<path
					fill="#fff"
					fillOpacity="1"
					d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				/>
			</svg> */}

			<div className="tw-hidden md:tw-block">
				<img src="/svg/waves.svg" />
			</div>

			<div className="tw-block md:tw-hidden tw-w-[100%]">
				<img src="/svg/wavesMobile.svg" />
			</div>
		</div>
	);
};

export default heroSection;
