import Link from "next/link";
import React from "react";

const DefaultRevenue = () => {
  return (
    <div>
      <h2>Revenue</h2>
      <Link href="/dashboard/past-revenue">Go to Past Revenue</Link>
    </div>
  );
};

export default DefaultRevenue;