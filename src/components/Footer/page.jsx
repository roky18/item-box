import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
      <aside>
        <Link href="/">
          {" "}
          <Image
            src="/assets/ItemBox logo.png"
            alt="ItemBox Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>
        <p className="font-bold">
          ItemBox Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://twitter.com/rokymax626">Twitter</Link>
          <Link href="https://linkedin.com/in/roky18">Linkedin</Link>
          <Link href="https://github.com/roky18">Github</Link>
          <Link href="https://facebook.com/rokymax626">Facebook</Link>
        </div>
      </nav>
    </footer>
  );
}
