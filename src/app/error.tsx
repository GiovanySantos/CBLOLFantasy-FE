'use client'; // Error components must be Client Components
import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold flex flex-col text-center">
        <span>Ihh deu ruim em alguma coisa guerreiro!</span>
        <span>Tenta resetar clicando no botão aí</span>
      </h2>
      <button
        onClick={reset}
        className="p-4 bg-slate-500 rounded-sm font-bold text-xl hover:bg-slate-600 transition-colors duration-300 ease-in-out"
      >
        Botão de resetar :)
      </button>
    </div>
  );
}
