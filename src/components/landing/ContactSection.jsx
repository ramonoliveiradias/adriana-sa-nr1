import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Fale conosco
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-md">
              Tire suas dúvidas ou agende uma demonstração personalizada da
              plataforma SÁ GESTÃO E DESENVOLVIMENTO HUMANO.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-400 mb-0.5">WhatsApp</div>
                  <div className="text-sm font-bold text-gray-900">(71) 98722-7278</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-400 mb-0.5">Email</div>
                  <div className="text-sm font-bold text-gray-900">contato@validanr1.com.br</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-400 mb-0.5">Localização</div>
                  <div className="text-sm font-bold text-gray-900">Salvador - BA, Brasil</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-50/80 rounded-2xl border border-gray-100 p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open("https://wa.me/5571987227278", "_blank");
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Nome</label>
                    <Input placeholder="Seu nome completo" className="rounded-xl border-gray-200 bg-white" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email</label>
                    <Input placeholder="seu@email.com" type="email" className="rounded-xl border-gray-200 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Empresa</label>
                  <Input placeholder="Nome da empresa" className="rounded-xl border-gray-200 bg-white" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Mensagem</label>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    className="rounded-xl border-gray-200 bg-white resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}