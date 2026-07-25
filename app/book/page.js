"import { Suspense } from "react";
import BookClient from "./BookClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookClient />
    </Suspense>
  );
}
