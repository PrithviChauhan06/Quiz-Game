import { useLocation, useNavigate } from 'react-router-dom';

export default function Review() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const answers = state?.answers ?? [];
  const total = state?.total ?? 0;
  const score = state?.score ?? 0;

  return (
    <div className="container">
      <div className="glass-card">
        <header style={{ textAlign: 'center', marginBottom: 18 }}>
          <h1 className="header-title" style={{ color: '#fff', fontSize: '1.5em', fontWeight: 700, letterSpacing: 0.5 }}>Review Answers</h1>
          <div className="subtle-text" style={{ fontWeight: 600, fontSize: '1em', color: '#e43f5a', marginTop: 6 }}>Score: <strong>{score}/{total}</strong></div>
        </header>

        <ol style={{ paddingLeft: 18, marginTop: 18 }}>
          {answers.map((a, idx) => {
            const correct = a.selectedIndex === a.correctIndex;
            return (
              <li key={idx} style={{ marginBottom: 18, background: correct ? '#1f4068' : '#e43f5a22', borderRadius: 8, padding: '12px 14px' }}>
                <div style={{ fontWeight: 600, marginBottom: 6, color: '#fff' }}>{a.question}</div>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ color: '#e8eaed' }}>Your pick: </span>
                  <span style={{ color: correct ? '#22c55e' : '#e43f5a', fontWeight: 600 }}>{a.options[a.selectedIndex]}</span>
                </div>
                <div>
                  <span style={{ color: '#e8eaed' }}>Correct answer: </span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>{a.options[a.correctIndex]}</span>
                </div>
              </li>
            );
          })}
        </ol>

        <footer className="footer-bar">
          <button onClick={() => navigate('/')} className="btn btn-outline">Go Home</button>
        </footer>
      </div>
    </div>
  );
}
