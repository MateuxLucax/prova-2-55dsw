import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

export default function LoginForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/ ";

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("username") != null;

  const actionData = useActionData() as { error: string } | undefined;

  return (
    <Form className="flex flex-col gap-4 font-mono" method="post" replace>
      <input type="hidden" name="redirectTo" value={from} />
      <h1 className="font-bold text-3xl my-8">Entrar</h1>
      <section className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="username">
          Usuário
        </label>
        <input
          className="border-2 border-purple-500 py-1 px-2"
          type="text"
          id="username"
          name="username"
          required
        />
      </section>
      <section className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="password">
          Senha
        </label>
        <input
          className="border-2 border-purple-500 py-1 px-2"
          type="password"
          id="password"
          name="password"
          required
        />
      </section>
      <button
        className="font-black bg-purple-500 px-16 py-2 text-white transition-all hover:opacity-80 active:opacity-70"
        type="submit"
        disabled={isLoggingIn}
      >
        {isLoggingIn ? "Entrando..." : "Entrar"}
      </button>
      {actionData && actionData.error ? (
        <p style={{ color: "red" }}>{actionData.error}</p>
      ) : null}
    </Form>
  );
}
