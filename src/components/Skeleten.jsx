import React from "react";

import { Skeleton } from "primereact/skeleton";

function Skeleten() {
  return (
    <div>
      <Skeleton className="mb-2"></Skeleton>
      <Skeleton width="10rem" className="mb-2"></Skeleton>
      <Skeleton width="5rem" className="mb-2"></Skeleton>
      <Skeleton height="2rem" className="mb-2"></Skeleton>
      <Skeleton width="10rem" height="4rem"></Skeleton>
    </div>
  );
}

export default Skeleten;
