export default function AuthPage() {
  return (
    <main className="h-screen bg-">
      <h1>DashApp</h1>
      <h3>Acesse sua conta</h3>
      <form action="">
        <label htmlFor="">
          <input type="email" />
        </label>
        <label htmlFor="">
          <input type="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
      <p>Projetado e desenvolvido por Breno Flaubert</p>
    </main>
  );
}
