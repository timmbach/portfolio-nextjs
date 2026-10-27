import Link from "next/link";
import { Clock } from "./Clock";

function Footer() {
  return (
    <footer className="relative mx-auto pb-12 md:pb-0 lg:pb-0 xl:pb-0 max-w-303 bg-zinc-950 border-t border-zinc-800 text-zinc-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-20 py-5">
        <Link href={"/contact"}>
          <div className="text-lg cursor-pointer">Reach out &rarr;</div>
        </Link>
        <Clock />
      </div>
    </footer>
  );
}

export default Footer;
