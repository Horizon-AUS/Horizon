import { ArrowDown } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Welcome </span>
            <span className="opacity-0 animate-fade-in-delay-1"> To </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Horizon{" "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            We are a <span className="font-bold text-primary">FILM</span> studio
            based out of Australia, who also specialise in{" "}
            <span className="font-bold text-primary">PHOTOGRAPHY</span>.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Our Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
