import { Link } from "react-router-dom";

export default function PublicPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-3xl font-mono text-purple-500">
        Qualquer um consegue ler isso, mesmo se não estiver autenticado
      </h1>
      <Link
        className="border-2 border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-all active:opacity-80  py-2 px-4"
        to="/"
      >
        Voltar
      </Link>
    </main>
  );
}
