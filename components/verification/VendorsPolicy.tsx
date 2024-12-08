import React from "react";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
import Header from "./Header";
import { StepComponentProps } from "react-step-builder";

function VendorsPolicy(props: StepComponentProps) {
  const router = useRouter();
  return (
    <>
      <Header title="vendor's policy" num="1" />
      <article className="tw-bg-white-100 tw-border tw-border-white-300 tw-p-6">
        <p className="tw-text-[0.7rem] tw-text-error tw-font-normal tw-italic tw-mb-5">
          Please note this policy is subject to change by time so we will always
          update you every new change.
        </p>

        <p className="tw-mb-3">
          Kwekmarket is a marketplace where you can sell your products, vintage
          items, and craft supplies directly to buyers within the city you have
          your shop. We may not be able to process your long distant deals for
          now but we hope to make them happen with your partnership. We want to
          make sure that you and your buyers have a positive experience on
          kwekmarket. Please read on to find out more about your rights, as well
          as what is expected of you, as a vendor.
        </p>

        <div className="tw-mb-3">
          <p className="tw-mb-3 tw-font-bold tw-text-gray-kwek300">
            1. What can I sell as a vendor?{" "}
          </p>

          <p>
            kwekmarket is a newly evolved marketplace here to give you the bet
            experience you may have wanted. Buyers come here to purchase items
            that they have found on your registered shop with us. These sound
            unique in the sense that you can always share your link with every
            of your new and old customers so as to be able to see your old and
            new arrivals. Everything listed for sale on kwekmarket may be
            handmade, vintage, a craft supply, any products that is not
            violating any of our policies. Handmade items are items that are
            made and/or designed by you, the vendor.
            <br />
            <br />
            All handmade items are made or designed by you. You are using your
            own photographs—not stock photos, artistic renderings, or photos
            used by other sellers or sites. However always ensure you make your
            products well presentable whenever you want to list them on the shop
            page on the platform to attract customers. We have ensured a 24/7
            monitoring of every customers review on your profile in other to
            maintain transparency in the platform. All listings are available
            for purchase at a set price.
          </p>
        </div>

        <div className="tw-mb-3">
          <p className="tw-mb-3 tw-font-bold tw-text-gray-kwek300">
            2.What Can&apos;t be Sold on kwekmarket{" "}
          </p>

          <p>
            {" "}
            Even if they otherwise meet our marketplace criteria, prohibited
            items, services, and items that violate our intellectual property
            policies are not allowed to be sold on kwekmarket Keep in mind that
            users may flag listings that appear to violate our policies for our
            quick review. We will remove any listings that violate our policies.
            Note that listing fees are non-refundable. We may also suspend or
            terminate your account for any violations. You’ll still be on the
            hook to pay any outstanding fees on your account. You can find more
            information in our Bill and payment policy.
          </p>
        </div>

        <div className="tw-mb-3">
          <p className="tw-mb-3 tw-font-bold tw-text-gray-kwek300">
            3.Be honestly transparent
          </p>

          <p>
            {" "}
            On kwekmarket, we value transparency. Transparency means that you
            are honestly loyal and accurately represent yourself, your items,
            and your business.{" "}
          </p>
        </div>

        <div className="tw-mb-3">
          <p className="tw-mb-3 tw-font-bold tw-text-gray-kwek300">
            By selling on kwekmarket, you agree that you will:
          </p>

          <div>
            <p>1. Provide honest, accurate information in your profile</p>
            <p>2. Honor your shops policy at all time. </p>
            <p>
              3. Accurately represent your items in listings and listing
              photograph
            </p>
            <p>
              4. Respect the intellectual property of others. If you feel
              someone has violated your intellectual property rights, you can
              report directly to kwekmarketmall support team through mail or
              visiting our nearest office close to you
            </p>
            <p>
              5. Do not engage in fee avoidance when you are required to pay any{" "}
            </p>
            <p>
              6. Do not create duplicate shops or take any other action (such as
              manipulating clicks, carts or sales) maybe for your greedy purpose
              of manipulating search or circumventing kwekmarketmall&apos;s policies.{" "}
            </p>
            <p>
              7. You must be price friendly, remember you want to always make
              sales.{" "}
            </p>
          </div>
        </div>

        <div className="tw-mt-4 tw-flex tw-justify-end">
          <Button
            buttonStyle={
              "tw-p-3 tw-bg-green-success tw-text-white-100 tw-rounded-sm tw-text-xs"
            }
            text={"I agree to vendor's policy"}
            cmd={props.next}
          />
        </div>
      </article>
    </>
  );
}

export default VendorsPolicy;
