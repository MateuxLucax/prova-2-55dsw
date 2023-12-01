# Prova 2

Crie um projeto usando React com Javascript ou Typescript, contendo os seguintes itens:

#### 1. Crie um componente React que renderize um botão com o texto "Clique aqui". (1 ponto)

O componente está localizado em `src/ClickMeButton.tsx`.

#### 2. Crie um componente React que renderize uma lista de números. A lista deve ser atualizada quando o usuário clicar no botão criado na questão anterior. (1 ponto)

O componente está localizado em `src/NumberList.tsx`

#### 3. Crie um componente React que renderize um formulário de login. O formulário deve ter os campos de e-mail e senha. (1,5 pontos)

O compontente está localizado em `src/LoginForm.tsx`

#### 4. Crie um roteamento que inclua pelo menos duas páginas diferentes.

A descrição do roteamento utilizando [react-router-dom](https://reactrouter.com) está localizada em `src/App.tsx`

#### 5. Integre um framework de estilização (Bootstrap, por exemplo) com sua aplicação React. (2 pontos)

O framework integrado foi o [tailwindcss](https://tailwindcss.com/), e suas configurações podem ser vistas em `tailwind.config.js`

#### 6. Implemente uma rota de navegação autenticada em React. Ou seja, crie um fluxo em que o usuário só pode acessar determinada rota se estiver autenticado. As credenciais do usuário obitdas pelo formulário de logni podem ser verificadas diretamente com strings pre-definindas no código como usuário "admin" e senha "1234" para autenticar o usuário. (3 pontos)

A aplicação tem 5 rotas.

- `/` - Raiz da aplicação, com a lista de números e botão "clique aqui". (Qualquer um pode acessar).
- `/entrar` - Formulário para autenticação. (Qualquer um pode acessar).
- `/sair` - Remove a autenticação do usuário e redireciona para `/`. (Qualquer um pode acessar).
- `/publica` - Página disponível para todos os usuários. (Qualquer um pode acessar).
- `/autenticado` - Página disponível apenas para usuários autenticados.
