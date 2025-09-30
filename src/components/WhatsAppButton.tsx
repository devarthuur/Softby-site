import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "whatsapp" | "hero" | "gradient" | "default" | "outline";
  message?: string;
}

export const WhatsAppButton = ({ 
  className, 
  variant = "whatsapp", 
  message = "Olá! Gostaria de conhecer os serviços da Softby."
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5581995183903"; // Substitua pelo número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      className={`group ${className}`}
    >
      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
      Fale conosco
    </Button>
  );
};