"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const links = [
  {name: 'Register', href: '/register'},
  {name: 'Login', href: '/login'}
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <section>
      <div>
        {links.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{link.name}</Link>
          )
        })}
      </div>
    </section>
  );
}
