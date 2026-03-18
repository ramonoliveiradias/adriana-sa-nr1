import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona a avaliação de riscos psicossociais?",
    a: "A avaliação é realizada por meio de questionários e análises de indicadores de saúde mental, com base nas diretrizes da NR-17 e ISO 45003.",
  },
  {
    q: "Quanto tempo leva para implementar o sistema?",
    a: "Nossa implementação é entregue em até 24h, com suporte para ajustes iniciais e definição de indicadores-chave.",
  },
  {
    q: "Posso usar em qualquer porte de empresa?",
    a: "Sim. O sistema se adapta a empresas de todos os tamanhos, desde pequenas equipes até grandes corporações.",
  },
  {
    q: "Como essa solução ajuda na auditoria e conformidade?",
    a: "Geramos registros de evidências, trilhas de auditoria e relatórios alinhados à legislação para facilitar a conformidade e as auditorias.",
  },
  {
    q: "Os dados são protegidos conforme a LGPD?",
    a: "Sim. Todos os dados são armazenados com criptografia e políticas de acesso que garantem a conformidade com a LGPD.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 px-5 bg-card">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-gold-gradient">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
