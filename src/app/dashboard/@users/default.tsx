import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <Link href="/dashboard/past-user">Go to Past User</Link>
    </div>
  );
};

export default Users;
