interface AuthProvider {
  isAuthenticated: boolean;
  username: null | string;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
}

export const authProvider: AuthProvider = {
  isAuthenticated: false,
  username: null,
  async signIn(username: string, password: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (username !== "admin" || password !== "1234") {
      throw new Error("Usuário ou senha inválidos");
    }

    authProvider.isAuthenticated = true;
    authProvider.username = username;
    sessionStorage.setItem("username", username);
  },

  signOut() {
    sessionStorage.removeItem("username");
    authProvider.isAuthenticated = false;
    authProvider.username = null;
    console.log("signOut");
  },
};
