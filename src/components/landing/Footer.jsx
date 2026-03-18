export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-base font-black text-white tracking-tight leading-tight">SÁ GESTÃO E</span>
              <span className="text-base font-black text-blue-400 tracking-tight leading-tight">DESENVOLVIMENTO HUMANO</span>
            </div>
            <p className="text-sm leading-relaxed">
              Plataforma líder em gestão de riscos psicossociais com adequação
              completa à NR1, NR-17 e ISO 45003.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Plataforma</h4>
            <ul className="space-y-2.5">
              {["Como funciona", "Diferenciais", "Depoimentos", "Planos"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Segmentos</h4>
            <ul className="space-y-2.5">
              {["Empresas & RH", "Clínicas Ocupacionais", "Consultorias de SST", "Escritórios Contábeis"].map((l) => (
                <li key={l}>
                  <span className="text-sm">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Termos de Uso", "Política de Privacidade", "Política de Cookies", "LGPD"].map((l) => (
                <li key={l}>
                  <span className="text-sm hover:text-white cursor-pointer transition-colors">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© 2025 SÁ GESTÃO E DESENVOLVIMENTO HUMANO. Todos os direitos reservados.</p>
          <p className="text-xs">
            Feito com dedicação para a segurança do trabalhador brasileiro.
          </p>
        </div>
      </div>
    </footer>
  );
}