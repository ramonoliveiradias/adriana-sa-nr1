export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}