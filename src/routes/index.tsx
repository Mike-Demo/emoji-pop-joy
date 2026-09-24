import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emoji Roll — Random Emoji Generator" },
      {
        name: "description",
        content: "Tap the button to roll a random emoji. A tiny, playful emoji picker.",
      },
      { property: "og:title", content: "Emoji Roll — Random Emoji Generator" },
      {
        property: "og:description",
        content: "Tap the button to roll a random emoji. A tiny, playful emoji picker.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMOJIS = [
  "😀","😎","🤖","🐙","🦊","🐸","🌮","🍕","🚀","🌈",
  "🔥","🌙","⭐","🍉","🐳","🦖","🎧","🧁","🪐","🍄",
] as const;

function Index() {
  const [emoji, setEmoji] = useState<string>("🎲");
  const [spin, setSpin] = useState<number>(0);

  const roll = (): void => {
    const next = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    setEmoji(next ?? "🎲");
    setSpin((n) => n + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-6">
      <h1 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Random Emoji
      </h1>

      <div
        key={spin}
        className="flex size-40 animate-in zoom-in-50 items-center justify-center rounded-3xl border bg-card text-7xl shadow-sm duration-300 sm:size-48 sm:text-8xl"
        aria-live="polite"
      >
        {emoji}
      </div>

      <Button size="lg" onClick={roll} className="rounded-full px-8">
        Give me an emoji
      </Button>
    </main>
  );
}
