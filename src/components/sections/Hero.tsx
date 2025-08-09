import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background com overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 dark:from-background/90 dark:via-background/70 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-40 dark:opacity-60"></div>
      </div>

      {/* Elementos flutuantes animados */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-primary/60 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-5 h-5 bg-primary/40 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 container mx-auto px-6 text-center mt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Agência de Marketing Digital
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Transforme sua empresa
            <br />
            <span className="relative">
              presença digital
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary animate-shimmer"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Criamos estratégias de marketing digital que geram resultados reais.
            Tráfego pago, landing pages e design que convertem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <WhatsAppButton variant="hero" className="text-lg px-8 py-4" />
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/30 hover:border-primary"
            >
              Ver Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Indicador no mobile */}
          <div className="flex justify-center mt-8 mb-4 md:hidden">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador no desktop */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
