import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    badge: "🔰 ADESÃO FLEXÍVEL",
    period: "MENSAL",
    pricePerUnit: "1,25",
    totalLabel: "Total: R$ 499,00",
    totalSub: "à vista",
    evaluations: "400 avaliações/mês",
    featured: false,
  },
  {
    badge: "🔥 MAIS ESCOLHIDO",
    period: "TRIMESTRAL",
    pricePerUnit: "1,12",
    totalLabel: "Total: R$ 1.350,00",
    totalSub: "ou 3x de R$ 450,00",
    evaluations: "1.200 avaliações/trimestre",
    featured: true,
  },
  {
    badge: "💼 MAIS ECONOMIA",
    period: "SEMESTRAL",
    pricePerUnit: "0,80",
    totalLabel: "Total: R$ 2.790,00",
    totalSub: "ou 6x de R$ 465,00",
    evaluations: "3.500 avaliações/semestre",
    featured: false,
  },
  {
    badge: "🌟 MÁXIMA ECONOMIA",
    period: "ANUAL",
    pricePerUnit: "0,27",
    totalLabel: "Total: R$ 4.200,00",
    totalSub: "ou 12x de R$ 350,00",
    evaluations: "15.000 avaliações/ano",
    featured: false,
  },
];

const included = [
  "Até 9.999 empresas",
  "Até 9.999 colaboradores",
  "Suporte incluso",
];

export default function PricingSection() {
  return (
    <section id="planos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Escolha seu plano ideal
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Pagamento seguro via Mercado Pago. Comece agora e escale conforme sua
            necessidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-500 hover:shadow-xl ${
                plan.featured
                  ? "border-blue-300 bg-blue-50/30 shadow-lg shadow-blue-100/60 ring-2 ring-blue-200"
                  : "border-gray-100 bg-white hover:shadow-gray-100/80"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Melhor custo
                </div>
              )}

              <div className="text-xs font-bold text-gray-400 mb-1">{plan.badge}</div>
              <div className="text-sm font-bold text-gray-900 mb-4">{plan.period}</div>

              <div className="mb-1">
                <span className="text-xs text-gray-400">R$ </span>
                <span className="text-4xl font-black text-gray-900">{plan.pricePerUnit}</span>
              </div>
              <div className="text-xs text-gray-400 mb-4">por avaliação unitária</div>

              <div className="bg-gray-50 rounded-xl p-3 mb-4">
                <div className="text-sm font-bold text-blue-600">{plan.evaluations}</div>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="text-center mb-3">
                <div className="text-sm font-bold text-gray-900">{plan.totalLabel}</div>
                <div className="text-xs text-gray-400">{plan.totalSub}</div>
              </div>

              <Button
                className={`w-full rounded-full font-semibold ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Assinar Agora
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}