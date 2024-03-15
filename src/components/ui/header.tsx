import Link from "next/link";
import NavigationComponent from "./navigation";

export default function Header() {
  return (
    <div className="h-[55px]">
      <h1 className="float-left">
        <Link
          href="/"
          className="w-[248px] h-[21px] indent-[-9999px] block bg-[url('/assets/logo.png')] bg-no-repeat mt-8"
        >
          Museu Nacional
        </Link>
      </h1>
      <nav>
        <NavigationComponent />
      </nav>
    </div>
  );
}
