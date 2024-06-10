import { Metadata } from "next";
import React from "react";

interface Props {
  params: { productId: string };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  return <div>{params.productId} Feature proudcts</div>;
};

export default ProductDetail;
