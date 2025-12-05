// Business Information
export const BUSINESS_INFO = {
  name: "Barbearia Bigode",
  phone: "11999999999",
  phoneFormatted: "(11) 99999-9999",
  whatsapp: "5511999999999",
  email: "contato@barbeariabigode.com.br",
  address: "Rua das Barbearias, 123 - Centro, São Paulo - SP",
  addressShort: "Rua das Barbearias, 123\nCentro - São Paulo, SP",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Barbearia+Bigode+São+Paulo",
  instagram: "https://instagram.com/barbeariabigode",
  facebook: "https://facebook.com/barbeariabigode",
};

// WhatsApp message templates
export const getWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

export const WHATSAPP_MESSAGES = {
  default: "Olá! Gostaria de mais informações sobre a Barbearia Bigode.",
  booking: "Olá! Gostaria de agendar um horário na Barbearia Bigode.",
};
