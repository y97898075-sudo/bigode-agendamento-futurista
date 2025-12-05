import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Scissors, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const barbers = [
  { id: "carlos", name: "Carlos Silva", role: "Master Barber" },
  { id: "rafael", name: "Rafael Santos", role: "Senior Barber" },
  { id: "andre", name: "André Lima", role: "Barber Artist" },
];

const services = [
  { id: "tradicional", name: "Corte Tradicional", price: 45, duration: "30 min" },
  { id: "premium", name: "Corte Premium", price: 75, duration: "45 min" },
  { id: "barba", name: "Barba Completa", price: 40, duration: "30 min" },
  { id: "combo", name: "Combo VIP", price: 120, duration: "1h 30min" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
];

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!selectedBarber || !selectedService || !selectedDate || !selectedTime || !clientName || !clientPhone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const barber = barbers.find(b => b.id === selectedBarber);
    const service = services.find(s => s.id === selectedService);
    
    toast({
      title: "Agendamento Confirmado! ✅",
      description: `${service?.name} com ${barber?.name} em ${selectedDate} às ${selectedTime}`,
    });

    // Reset and close
    setStep(1);
    setSelectedBarber("");
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setClientName("");
    setClientPhone("");
    setIsSubmitting(false);
    onClose();
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedBarber("");
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setClientName("");
    setClientPhone("");
    onClose();
  };

  // Generate next 7 days
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) { // Skip Sundays
        days.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' }),
        });
      }
    }
    return days;
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={resetAndClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg gradient-card rounded-2xl neon-border overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-bold text-foreground">Agendar Horário</h2>
                <p className="text-sm text-muted-foreground">Passo {step} de 3</p>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-muted">
              <motion.div
                className="h-full gradient-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* Step 1: Select Barber & Service */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Barber Selection */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                      <User className="w-4 h-4 text-primary" />
                      Escolha o Barbeiro
                    </label>
                    <div className="grid gap-3">
                      {barbers.map((barber) => (
                        <button
                          key={barber.id}
                          onClick={() => setSelectedBarber(barber.id)}
                          className={`p-4 rounded-xl text-left transition-all duration-300 ${
                            selectedBarber === barber.id
                              ? "gradient-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          <div className="font-semibold">{barber.name}</div>
                          <div className={`text-sm ${selectedBarber === barber.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            {barber.role}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                      <Scissors className="w-4 h-4 text-primary" />
                      Escolha o Serviço
                    </label>
                    <div className="grid gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-xl text-left transition-all duration-300 ${
                            selectedService === service.id
                              ? "gradient-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-semibold">{service.name}</div>
                              <div className={`text-sm ${selectedService === service.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                {service.duration}
                              </div>
                            </div>
                            <div className="font-bold">R$ {service.price}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Select Date & Time */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Date Selection */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      Escolha a Data
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {getNextDays().map((day) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDate(day.value)}
                          className={`p-3 rounded-xl text-center text-sm transition-all duration-300 ${
                            selectedDate === day.value
                              ? "gradient-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                      <Clock className="w-4 h-4 text-primary" />
                      Escolha o Horário
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl text-center text-sm transition-all duration-300 ${
                            selectedTime === time
                              ? "gradient-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Client Info */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Digite seu nome completo"
                      className="w-full p-4 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full p-4 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Summary */}
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                    <h4 className="font-semibold text-foreground mb-2">Resumo do Agendamento</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><span className="text-primary">Barbeiro:</span> {barbers.find(b => b.id === selectedBarber)?.name}</p>
                      <p><span className="text-primary">Serviço:</span> {selectedServiceData?.name}</p>
                      <p><span className="text-primary">Data:</span> {selectedDate && new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR')}</p>
                      <p><span className="text-primary">Horário:</span> {selectedTime}</p>
                      <p className="text-lg font-bold text-primary mt-2">Total: R$ {selectedServiceData?.price}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border flex gap-3">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                >
                  Voltar
                </Button>
              )}
              {step < 3 ? (
                <Button
                  variant="hero"
                  onClick={() => setStep(step + 1)}
                  disabled={step === 1 && (!selectedBarber || !selectedService)}
                  className="flex-1"
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  variant="hero"
                  onClick={handleSubmit}
                  disabled={!clientName || !clientPhone || isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Confirmando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Confirmar Agendamento
                    </span>
                  )}
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
