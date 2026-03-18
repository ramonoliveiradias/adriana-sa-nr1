import { motion } from "framer-motion";
import { Brain, Activity, FileCheck, Lock } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Análise Inteligente de Dados",
    description:
      "Utilizamos instrumentos de avaliação digitais e modelos analíticos que permitem identificar tendências e possíveis fatores de risco psicossocial, apoiando a tomada de decisão antes que os impactos se agravem no ambiente de trabalho.",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
  },
  {
    icon: Activity,
    title: "Gestão e Monitoramento Contínuo",
    description:
      "Painel de acompanhamento com visão por área, evolução dos planos de ação, indicadores relacionados ao clima organizacional e à saúde mental, além de alertas que auxiliam na identificação de situações que exigem atenção.",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
  },
  {
    icon: FileCheck,
    title: "Segurança da Informação e Conformidade",
    description:
      "A plataforma opera em conformidade com a legislação de proteção de dados, adotando mecanismos de segurança, gestão de consentimento e políticas transparentes de privacidade para garantir a proteção das informações coletadas.",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
  },
  {
    icon: Lock,
    title: "Segurança e Integração Ágil",
    description:
      "Totalmente compatível com a LGPD, com criptografia, termos de consentimento e políticas claras de privacidade.",
    color: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Como funciona a metodologia da <span className="text-blue-600">SÁ GESTÃO E DESENVOLVIMENTO HUMANO</span>?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Nossa solução foi estruturada para apoiar as organizações na identificação, análise e gestão dos riscos psicossociais, utilizando uma metodologia organizada em quatro pilares estratégicos, que integram tecnologia, análise de dados e gestão preventiva.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-500"
            >
              <div className={`${step.bgLight} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="h-7 w-7 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              <div className="absolute top-4 right-4 text-5xl font-black text-gray-50 group-hover:text-gray-100 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}