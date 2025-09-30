import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(81) 99518-3903",
    action: "tel:+5581995183903"
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "softbyagencia@gmail.com",
    action: "mailto:softbyagencia@gmail.com"
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Recife, PE",
    action: null
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg-Sex: 9h às 18h",                                            
    action: null
  }
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de e-mail
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos digitais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informações de contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            
            <div className="pt-6">
              <WhatsAppButton variant="hero" className="w-full text-lg py-4" />
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:shadow-glow-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:shadow-glow-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:shadow-glow-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="transition-all duration-300 focus:shadow-glow-primary/20"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full text-lg py-4"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};