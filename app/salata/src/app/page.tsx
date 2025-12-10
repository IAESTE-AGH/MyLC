import HeroAnimation from "@/components/AnimatedHero";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-(--foreground)">
          Umów się z <span className="text-(--primary)">Sałatą</span>
        </h1>
        <p className="mt-4 text-lg text-(--foreground) opacity-70">
          Apka do zmawiania się ze znajomymi.
        </p>
      </div>

      <HeroAnimation />

      <div className="h-screen flex items-center justify-center bg-(--background)">
        <p className="text-(--foreground)">coś tu bedzie</p>
      </div>
    </section>
  );
}
