import Link from "next/link";
import GameCollection from "./game/page";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h2>helo world</h2>

      <Link href="/game">Game</Link>
      <br />
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
