import { TriangleAlertIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-24 text-muted-foreground">
      <div className="flex flex-col items-center text-center">
        <TriangleAlertIcon className="h-24 w-24 text-yellow-500" />
        <h1 className="text-3xl font-bold italic text-yellow-500">
          Site em construção
        </h1>
      </div>

      <p className="text-center text-xl font-semibold">
        Tente novamente em breve!
      </p>
    </main>
  );
}
