import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AuthPage() {
  return (
    <main className="h-screen bg-slate-800">
      <h1>DashApp</h1>
      <h3>Acesse sua conta</h3>

      <form action="" className="flex flex-col gap-3">
        <label htmlFor="">
          <Input
            placeholder="email"
            type="email"
            className="w-72 bg-slate-300"
          />
        </label>
        <label htmlFor="">
          <Input
            placeholder="senha"
            type="password"
            className="w-72 bg-slate-300"
          />
        </label>
        <Button className="w-72 h-12 bg-violet-500 hover:bg-violet-700">
          Entrar
        </Button>
      </form>

      <p>Projetado e desenvolvido por Breno Flaubert</p>
    </main>
  );
}
