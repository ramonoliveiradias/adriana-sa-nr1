import { motion } from "framer-motion";
import { Building2, Stethoscope, Handshake, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    icon: Building2,
    title: "Soluções para Empresas e Recursos Humanos",
    subtitle: "Gestão eficiente de riscos psicossociais dentro da organização",
    description:
      "Departamentos de RH podem utilizar a plataforma para acompanhar indicadores, identificar fatores de risco e manter a empresa alinhada às exigências da NR-01 e às boas práticas internacionais de saúde mental no trabalho, como a ISO 45003.",
    features: [
      "Painel executivo com indicadores estratégicos",
      "Relatórios automáticos para auditorias e análises internas",
      "Integração com sistemas de gestão de pessoas",
      "Monitoramento contínuo de conformidade e riscos",
    ],
    cta: "Implementar na empresa",
    accent: "emerald",
  },
  {
    icon: Stethoscope,
    title: "Soluções para Clínicas de Medicina Ocupacional",
    subtitle: "Mais eficiência na avaliação psicossocial e na gestão de pacientes corporativos",
    description:
      "Clínicas e profissionais de saúde ocupacional podem utilizar a plataforma para realizar avaliações psicossociais com maior organização e padronização técnica.",
    features: [
      "Protocolos estruturados para avaliações psicossociais",
      "Emissão e armazenamento de laudos técnicos",
      "Gestão de múltiplos clientes corporativos",
      "Histórico organizado de avaliações e atendimentos",
    ],
    cta: "Conhecer a solução para clínicas",
    accent: "sky",
  },
  {
    icon: Handshake,
    title: "Soluções para Consultorias em SST e Parceiros",
    subtitle: "Amplie seus serviços com uma plataforma digital especializada",
    description:
      "Consultorias em segurança e saúde no trabalho podem utilizar a SÁ GESTÃO para oferecer aos seus clientes uma solução moderna de gestão de riscos psicossociais.\nAlém de otimizar processos internos, a plataforma permite personalização e integração com outras ferramentas utilizadas pela consultoria.",
    features: [
      "Plataforma com possibilidade de personalização (white-label)",
      "API para integração com outros sistemas",
      "Suporte técnico especializado",
      "Modelo de parceria com oportunidades comerciais",
    ],
    cta: "Tornar-se parceiro",
    accent: "violet",
  },
];

const accentMap = {
  emerald: { bg: "bg-blue-50", text: "text-blue-600", btn: "bg-blue-600 hover:bg-blue-700", check: "text-blue-500" },
  sky: { bg: "bg-sky-50", text: "text-sky-600", btn: "bg-sky-600 hover:bg-sky-700", check: "text-sky-500" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", btn: "bg-violet-600 hover:bg-violet-700", check: "text-violet-500" },
};

export default function ForWhoSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Soluções da <span className="text-blue-600">Sá Gestão e Desenvolvimento Humano</span> para cada perfil de cliente
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A Sá Gestão e Desenvolvimento Humano foi desenvolvida para apoiar organizações e profissionais que atuam com gestão de pessoas, saúde ocupacional e segurança do trabalho, oferecendo ferramentas digitais para avaliação, monitoramento e gestão de riscos psicossociais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((p, i) => {
            const colors = accentMap[p.accent];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500 flex flex-col"
              >
                <div className={`${colors.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
                  <p.icon className={`h-7 w-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-xs font-medium text-gray-400 mb-3">{p.subtitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{p.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${colors.check}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`${colors.btn} text-white rounded-full w-full`}
                  onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {p.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}