import type { LoaderFunctionArgs } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { authProvider } from "./auth";
import LoginPage from "./LoginPage";
import AuthenticatedPage from "./AuthenticatedPage";
import IndexPage from "./IndexPage";
import PublicPage from "./PublicPage";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: IndexPage,
  },
  {
    path: "/entrar",
    action: loginAction,
    loader: loginLoader,
    Component: LoginPage,
  },
  {
    path: "/publica",
    Component: PublicPage,
  },
  {
    path: "/autenticado",
    loader: protectedLoader,
    Component: AuthenticatedPage,
  },
  {
    path: "/sair",
    action() {
      authProvider.signOut();
      return redirect("/");
    },
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Carregando...</p>} />
  );
}

async function loginAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  if (!username) {
    return {
      error: "Você deve fornecer um nome de usuário para fazer logi",
    };
  } else if (!password) {
    return {
      error: "Você deve fornecer uma senha para fazer login",
    };
  }

  try {
    await authProvider.signIn(username, password);
  } catch (error) {
    return {
      error: "Usuário ou senha incorretos",
    };
  }

  const redirectTo = formData.get("redirectTo") as string | null;
  return redirect(redirectTo || "/");
}

async function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect("/auth");
  }

  return null;
}

function protectedLoader({ request }: LoaderFunctionArgs) {
  if (authProvider.isAuthenticated) return null;
  if (sessionStorage.getItem("username")) return null;

  const params = new URLSearchParams();
  params.set("from", new URL(request.url).pathname);
  return redirect("/entrar?" + params.toString());
}
