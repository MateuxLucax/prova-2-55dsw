import { Link } from "react-router-dom";
import NumberList from "./NumberList";

export default function IndexPage() {
  return (
    <main className="h-screen flex flex-col font-mono max-w-lg ">
      <h1 className="text-3xl font-bold py-8">Prova 2</h1>

      <NumberList />

      <ul className="mt-4 flex flex-col gap-4">
        <li className="flex">
          <Link
            className="border-2 border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-all active:opacity-80  py-2 px-4 w-full"
            to="publica"
          >
            Página pública
          </Link>
        </li>
        <li className="flex">
          <Link
            className="border-2 border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-all active:opacity-80  py-2 px-4 w-full"
            to="autenticado"
          >
            Página para usuários autenticados
          </Link>
        </li>
      </ul>
    </main>
  );
}
