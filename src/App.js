import AttackGraph from "./components/AttackGraph";

function App() {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1440px", padding: "24px", fontFamily: "Inter, system-ui, sans-serif", background: "#f8fafc" }}>
      <header style={{ marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "32px", color: "#0f172a" }}>Attack Path Intelligence Console</h1>
          <p style={{ marginTop: "8px", color: "#475569" }}>
            Team 4 focuses on translating suspicious events, vulnerabilities, and identities into an interactive attack path map for SOC analysis.
          </p>
        </div>
      </header>
      <AttackGraph />
    </div>
  );
}

export default App;
