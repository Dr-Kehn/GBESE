// w2/send/withdraw/review-details/page.tsx
import dynamic from "next/dynamic";

const ReviewDetails = dynamic(() => import("../../../../../components/client/ReviewDetails"), {
  ssr: false,
});

export default function ReviewPage() {
  return <ReviewDetails />;
}
