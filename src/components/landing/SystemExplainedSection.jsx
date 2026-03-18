import { motion } from "framer-motion";
import {
  ClipboardList,
  BarChart2,
  FileText,
  Users,
  Bell,
  ShieldCheck,
  Settings,
  MessageSquare,
} from "lucide-react";

const modules = [
  {
    icon: ClipboardList,
    title: "Avaliação Psicossocial Digital",
    description:
      "A plataforma permite a aplicação de questionários digitais adaptativos enviados aos colaboradores de forma confidencial.\nAs respostas são coletadas e analisadas automaticamente pelo sistema, gerando um panorama estruturado dos fatores de risco psicossocial presentes na organização, alinhado às diretrizes da NR-01, NR-17 e da ISO 45003.",
    color: "bg-violet-50",
    textColor: "text-violet-600",
  },
  {
    icon: BarChart2,
    title: "Painel de acompanhamento e indicadores",
    description:
      "O sistema disponibiliza um painel centralizado com indicadores relacionados à saúde mental organizacional, clima de trabalho e exposição a riscos psicossociais.\nCom ele, gestores podem visualizar dados por setor ou grupo de exposição (GHE), acompanhar mudanças ao longo do tempo e identificar possíveis pontos de atenção antes que se tornem problemas organizacionais.",
    color: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: FileText,
    title: "Relatórios técnicos e documentação",
    description:
      "A plataforma gera automaticamente relatórios técnicos e documentos que podem apoiar processos de auditoria e fiscalização.\nTodos os registros ficam armazenados em um histórico organizado, facilitando a apresentação de informações quando necessário em avaliações internas ou em processos conduzidos por órgãos como o Ministério do Trabalho e Emprego ou outras autoridades competentes.",
    color: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Gestão de múltiplas empresas e usuários",
    description:
      "A SÁ Gestão permite administrar diferentes empresas dentro de um mesmo ambiente de trabalho.\nCada organização possui um espaço próprio dentro da plataforma, com suas configurações e dados específicos. Esse modelo é especialmente útil para consultorias, clínicas de saúde ocupacional e equipes de RH que atendem várias unidades ou clientes.",
    color: "bg-teal-50",
    textColor: "text-teal-600",
  },
  {
    icon: Bell,
    title: "Planos de ação e alertas inteligentes",
    description:
      "Com base nos riscos identificados nas avaliações, o sistema auxilia na criação de planos de ação voltados à melhoria do ambiente de trabalho.\nQuando indicadores críticos são detectados, a plataforma pode emitir alertas para os responsáveis, permitindo que as equipes adotem medidas preventivas e acompanhem a evolução das ações implementadas.",
    color: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    icon: MessageSquare,
    title: "Canal confidencial de escuta",
    description:
      "A plataforma também disponibiliza um canal seguro para que colaboradores possam registrar preocupações, sugestões ou situações relacionadas ao ambiente de trabalho.\nEssas informações são tratadas de forma confidencial e contribuem para a geração de indicadores que auxiliam na identificação de riscos psicossociais sem expor os envolvidos.",
    color: "bg-pink-50",
    textColor: "text-pink-600",
  },
  {
    icon: ShieldCheck,
    title: "Proteção de dados e conformidade",
    description:
      "O tratamento das informações segue os princípios estabelecidos pela Lei Geral de Proteção de Dados Pessoais (LGPD), garantindo segurança e privacidade no armazenamento e processamento das informações.\nOs dados são protegidos por mecanismos de segurança e utilizados apenas para as finalidades necessárias à gestão e análise organizacional.",
    color: "bg-sky-50",
    textColor: "text-sky-600",
  },
  {
    icon: Settings,
    title: "Plataforma personalizável para parceiros",
    description:
      "Consultorias e empresas parceiras podem utilizar a plataforma com personalização de identidade visual.\nÉ possível adaptar elementos como logotipo, cores e domínio, permitindo que a solução seja apresentada com a marca da própria organização, mantendo uma experiência profissional e alinhada ao ambiente corporativo.",
    color: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
];

export default function SystemExplainedSection() {
  return (
    <section id="sistema" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            Conheça a Plataforma
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Uma plataforma completa para gestão de riscos psicossociais
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A SÁ Gestão e Desenvolvimento Humano concentra em um único sistema todas as funcionalidades necessárias para acompanhar, analisar e documentar a gestão de riscos psicossociais nas organizações. Da coleta de dados à geração de relatórios técnicos, a plataforma apoia empresas e profissionais em todas as etapas do processo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-400 group"
            >
              <div className={`${mod.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <mod.icon className={`h-6 w-6 ${mod.textColor}`} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                {mod.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}