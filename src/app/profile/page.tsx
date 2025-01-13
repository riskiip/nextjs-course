import Admin from "./admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile'
}

export default function Profile() {
  return (
    <div>
      <h1>Ini halaman profile</h1>
      <Admin name="rizki"></Admin>
    </div>
  );
}
