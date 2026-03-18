import { motion } from "framer-motion";
import { Clock, ShieldCheck, Headphones, MapPin } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "Avaliações mais rápidas e seguras",
    description:
      "A plataforma automatiza processos de avaliação psicossocial, reduzindo drasticamente o tempo necessário para coleta e análise de dados.\nAlém disso, todo o processo preserva o anonimato e a confidencialidade das informações dos colaboradores.",
    highlight: "ATÉ 99%",
    highlightLabel: "de redução no tempo de avaliação",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade com a legislação",
    description:
      "O sistema foi desenvolvido para auxiliar empresas no atendimento às exigências legais relacionadas à saúde mental e riscos psicossociais no trabalho, incluindo normas como a NR-01 e a ISO 45003.\nA plataforma também facilita o acompanhamento das exigências da Portaria MTE nº 1.419/2024 e da Lei nº 14.831/2024, disponibilizando relatórios organizados e prontos para auditorias.",
    highlight: "100%",
    highlightLabel: "em conformidade",
  },
  {
    icon: Headphones,
    title: "Canal confidencial de escuta",
    description:
      "A solução inclui um canal seguro para que colaboradores registrem situações, sugestões ou preocupações relacionadas ao ambiente de trabalho.\nEssas informações são tratadas de forma sigilosa e contribuem para a geração de indicadores importantes sobre o clima e os riscos psicossociais da organização.",
    highlight: "Disponível 24 horas por dia",
    highlightLabel: "todos os dias da semana.",
  },
  {
    icon: MapPin,
    title: "Análise por setor e ambiente de trabalho",
    description:
      "A plataforma permite identificar fatores de risco psicossocial considerando setores, funções e grupos homogêneos de exposição (GHE).\nPara isso, utiliza referências metodológicas como a HSE Management Standards Indicator Tool, reconhecida internacionalmente para avaliação de fatores psicossociais no trabalho.",
    highlight: "HSE-IT",
    highlightLabel: "metodologia",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Por que utilizar o sistema da <span className="text-blue-600">Sá Gestão e Desenvolvimento Humano</span>?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Centenas de organizações já utilizam nossa plataforma para gerenciar riscos psicossociais de forma moderna, segura e em conformidade com a legislação. Com tecnologia e automação, ajudamos empresas a transformar dados em decisões estratégicas.
          </p>

          <h1>Quem pode utilizar a plataforma?</h1>
          <h1>Nossa solução atende diferentes áreas e tipos de organizações, como:</h1>
        </motion.div>

        {/* Target segments chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {[
            "Clínicas de Medicina do Trabalho",
            "Escritórios de advocacia e profissionais da área jurídica",
            "Consultorias de Saúde e Segurança do Trabalho (SST)",
            "Escritórios Contábeis",
            "Condomínios e administradoras",
            "Empresas e consultorias de Recursos Humanos",
            "Organizações de pequeno, médio e grande porte",
          ].map((seg) => (
            <span
              key={seg}
              className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-600 [&>span:first-child]:text-blue-500"
            >
              <span className="text-blue-500">✔</span> {seg}
            </span>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-500 group"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-2">
                    <span className="text-2xl font-black text-blue-600">{item.highlight}</span>
                    <span className="text-xs font-medium text-blue-700">{item.highlightLabel}</span>
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