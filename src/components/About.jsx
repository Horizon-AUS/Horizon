import { Camera, Clapperboard, Shirt, Store } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who?</h3>

            <p className="text-muted-foreground">
              We’re a small, creative business based in Australia, made up of a
              diverse group of personalities united by a shared vision to build
              something meaningful and express our creativity along the way. Our
              core focus is Photography, Apparel, and Film, but we’re always
              open to exploring new{" "}
              <span className="text-primary font-bold">Horizons</span>. At the
              heart of what we do is a desire to bring a fresh perspective to
              business, deliver high-quality work, and make sure our clients not
              only love the results but enjoy the journey with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Horizon Shop</h4>
                  <p className="text-muted-foreground">Coming Soon...</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Horizon Photography</h4>
                  <p className="text-muted-foreground">Coming Soon...</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clapperboard className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Horizon Cinematic</h4>
                  <p className="text-muted-foreground">Coming Soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
