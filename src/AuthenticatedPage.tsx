import { Form } from "react-router-dom";

export default function AuthenticatedPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-3xl font-mono text-purple-500">
        Você só consegue ler isso se estiver autenticado!
      </h1>
      <Form method="post" action="/sair">
        <button
          className="border-2 border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-all active:opacity-80  py-2 px-4"
          type="submit"
        >
          Sair
        </button>
      </Form>
    </main>
  );
}
