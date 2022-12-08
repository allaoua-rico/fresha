import React, { useState } from "react";
import H2Wrapper from "../assets/Wrappers/H2Wrapper";
import ReviewsList from "./ReviewsList";
import { Link } from "react-router-dom";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import ReviewLeftCard from "./ReviewLeftCard";
import { BsShieldFillCheck } from "react-icons/bs";
import WhiteButtonWrapper from "../assets/Wrappers/WhiteButtonWrapper";

export default function Reviews() {
  const [rating, setRating] = useState(4.7);
  const [feedback, setFeedback] = useState("Great");
  const [totalRatings, setTotalRatings] = useState(261);

  return (
    <div className="">
      <H2Wrapper>Reviews</H2Wrapper>
      <div className="flex ">
        <div className="hidden md:flex flex-1 mr-10">
          <div className="w-full flex flex-col">
            <ReviewLeftCard
              rating={rating}
              feedback={feedback}
              totalRatings={totalRatings}
            />
            <div className="w-full flex bg-secondaryBg p-5 mt-6 rounded-lg">
              <div className="mr-4 mt-1">
                <BsShieldFillCheck className="w-6 h-6 fill-[#39b374]" />
              </div>
              <div>
                <h4 className="font-semibold">Reviews you can trust</h4>
                <p>
                  All our ratings are from genuine customers, following verified
                  visits
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 md:pl-10 md:py-0 md:flex flex-col w-1/2 lg:w-3/5">
          <ReviewsList reviews={reviews} />
          <div className="w-full ">
            <Link style={{ display: "inline-block" }} to="/reviews">
              <div className="md:hidden">
                <LinkWrapper> See all {totalRatings} reviews</LinkWrapper>
              </div>
              <div className="hidden md:flex ">
                <WhiteButtonWrapper>
                  See all {totalRatings} reviews
                </WhiteButtonWrapper>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const reviews = [
  { name: "Renad A.", date: "May 14, 2022", rating: 5 },
  { name: "Sawsan H.", date: "May 14, 2022", rating: 5 },
  {
    name: "Asma Almousa A.",
    date: "May 14, 2022",
    rating: 5,
    comment:
      "سموره الأموره  شكرا ع تنسيقك الجميل للمواعيد. و الستف الموظفات كلهم رائعين 🥰",
  },
  { name: "Nora A.", date: "May 14, 2022", rating: 5 },
];
