import Card from "@/components/card";
import Link from "next/link";

export default function DefaultNotification() {
  return (
    <Card>
      <h1>Notification</h1> <br />
      <Link href={"/complex-dashboard/archived"}>Go to Archived</Link>
    </Card>
  );
}
