import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A VALIDA NR1 revolucionou nossa gestão de riscos psicossociais. Conseguimos reduzir em 85% o tempo gasto com avaliações e ainda aumentamos significativamente nossa conformidade.",
    name: "Ana Carolina Silva",
    role: "Gerente de RH",
    company: "TechCorp Industrial",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote:
      "Como médico ocupacional, posso afirmar que a plataforma é tecnicamente impecável. Os relatórios são detalhados, auditáveis e seguem rigorosamente as normas técnicas.",
    name: "Dr. Roberto Mendes",
    role: "Médico do Trabalho",
    company: "Clínica OcupaSaúde+",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote:
      "Oferecemos a VALIDA NR1 como solução white-label para nossos clientes. A ferramenta é robusta, intuitiva e nossos clientes ficam impressionados com a qualidade dos relatórios.",
    name: "Marcela Santos",
    role: "Consultora em SST",
    company: "Santos & Associados",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Mais de 500 empresas já transformaram sua gestão de riscos
            psicossociais com nossa plataforma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-gray-50/80 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:shadow-gray-100/60 transition-all duration-500 flex flex-col"
            >
              <Quote className="h-8 w-8 text-blue-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/70">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}