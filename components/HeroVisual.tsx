import { BarChart3, CodeXml, Settings, UserRound } from "lucide-react";
export function HeroVisual() {
  return (
    <div
      className="hero-visual"
      aria-label="Futuristic web development interface illustration"
      role="img"
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="browser-panel">
        <div className="browser-top">
          <i />
          <i />
          <i />
        </div>
        <div className="code-window">
          <CodeXml />
          <span className="code-lines">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
      <div className="float-card user-card">
        <UserRound />
      </div>
      <div className="float-card chart-card">
        <BarChart3 />
      </div>
      <div className="float-card settings-card">
        <Settings />
      </div>
      <div className="float-card data-card">
        <span />
        <span />
        <span />
        <span />
      </div>
      {[...Array(10)].map((_, i) => (
        <i key={i} className={`particle p-${i + 1}`} />
      ))}
    </div>
  );
}
