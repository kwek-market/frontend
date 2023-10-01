import React, { useEffect } from "react";

import { AdminLayout } from "@/layouts";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/dashboard");
  }, []);

  return <AdminLayout>Admin</AdminLayout>;
};

export default Admin;
