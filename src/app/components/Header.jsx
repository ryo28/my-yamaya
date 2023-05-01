import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <div>
    <header className="w-screen flex pt-4 px-6 pb-8 fixed z-30 bg-white justify-between top-0">
      <Link href="/">
      <Image
        src="https://yu-san-chae.com/wp-content/themes/yusanchae/img/logo1.svg"
        width={160}
        height={150}
        alt="imi"
      />
      </Link>
      <div className="">menu</div>
    </header>
     

</div>
  );
}
