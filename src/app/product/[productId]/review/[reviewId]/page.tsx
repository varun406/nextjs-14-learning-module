"use client";
import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  // if (Math.floor(Math.random() * 2) === 1) {
  //   throw new Error("Error while loading review!");
  // }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} product {params.productId}
    </div>
  );
};

export default ReviewDetail;
