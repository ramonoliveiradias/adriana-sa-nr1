import { motion } from "framer-motion";
import { Shield, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Alert badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">
                Sua empresa está realmente protegida contra riscos psicossociais?
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Adequação completa à NR1, NR-17 e{" "}
              <span className="text-blue-600">ISO 45003</span>{" "}
              com implementação em 24h.
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
               Mapeie e gerencie riscos psicossociais de forma estruturada e em conformidade com a legislação.
A solução da SÁ Gestão e Desenvolvimento Humano automatiza o processo de avaliação, fortalece a governança interna e oferece respaldo técnico para atender exigências legais e processos de auditoria.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-13 text-base font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all"
                onClick={() => window.open("https://wa.me/5571987227278", "_blank")}
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Agendar demonstração
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-500">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Dados protegidos LGPD</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Auditoria aprovada</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Implementação em 24h</span>
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card mockup */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/60 p-6 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">Dashboard SÁ Gestão</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Online</span>
                    </div>
                    {/* Chart mock */}
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-end gap-2 h-32">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                          />
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                        <span>Jan</span><span>Mar</span><span>Jun</span><span>Set</span><span>Dez</span>
                      </div>
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "4 pilares da metodologia", value: "Gestão estruturada de riscos psicossociais" },
                        { label: "100% foco em conformidade", value: "Alinhamento com legislação e boas práticas" },
                        { label: "Monitoramento contínuo", value: "Acompanhamento de indicadores organizacionais" },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                          <div className="text-[10px] text-gray-400 font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">LGPD Compliant</div>
                    <div className="text-[10px] text-gray-400">Dados 100% protegidos</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}