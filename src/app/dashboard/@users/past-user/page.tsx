import Link from "next/link";
import React from "react";

const PastUser = () => {
  return (
    <div>
      <h2>Past user</h2>
      <Link href="/dashboard">Current User</Link>
    </div>
  );
};

export default PastUser;
