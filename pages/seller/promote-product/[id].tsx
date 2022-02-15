import React from "react";
import PromoteHeader from "@/shared/PromoteHeader/PromoteHeader";
import PromoteProduct from "@/components/promoteProduct/PromoteProduct";
import { useRouter } from "next/router";
import Load from "@/components/Loader/Loader";

const Promote = function () {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <PromoteHeader>
      {id ? <PromoteProduct id={id} /> : <Load />}
    </PromoteHeader>
  );
};

export default Promote;
