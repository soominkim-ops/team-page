export default function Home() {
  const works = [
    {
      icon: "💰",
      tag: "Compensation",
      title: "Payroll · 4대보험 · 복리후생",
      description:
        "급여 계산 및 지급, 4대보험 취득·상실·정산을 정확하게 처리합니다. 임직원 복리후생 제도를 기획하고 운영하여 만족도를 높입니다.",
    },
    {
      icon: "🎯",
      tag: "Talent",
      title: "채용 · 평가보상",
      description:
        "적합한 인재를 발굴하고 온보딩을 지원합니다. 공정한 평가 체계와 보상 제도를 설계하여 구성원의 성장과 동기부여를 이끕니다.",
    },
    {
      icon: "🌱",
      tag: "Culture",
      title: "조직문화 · 교육",
      description:
        "건강한 조직문화를 만들기 위한 프로그램을 기획하고 운영합니다. 구성원의 역량 개발을 위한 교육 과정을 설계하고 실행합니다.",
    },
  ];

  return (
    <main style={{ background: "var(--color-bg-base)", minHeight: "100vh" }}>

      {/* ── Top Navigation ─────────────────────────────── */}
      <header style={{
        background: "var(--color-bg-alt)",
        borderBottom: "1px solid var(--color-bg-input)",
        height: "50px",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 var(--space-5)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-twitch-purple)">
              <path d="M4.3 3L3 6.4v13.6h4.5V23l3.4-3h2.8L20 13.2V3H4.3zM18.5 12.4l-2.8 2.8h-2.8l-2.5 2.5v-2.5H7V4.5h11.5v7.9zM15.7 6.8v4.5h-1.5V6.8h1.5zm-3.8 0v4.5H10.4V6.8h1.5z" />
            </svg>
            <span style={{ color: "var(--color-text-base)", fontWeight: 700, fontSize: "16px" }}>
              Wyatt Corp
            </span>
          </div>

          <nav style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
            <a href="#works" className="twitch-nav-link">업무 소개</a>
            <a href="#contact" className="twitch-btn">문의하기</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "72px var(--space-5) 56px",
        textAlign: "center",
      }}>
        {/* Live badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "var(--color-bg-alt2)",
          border: "1px solid var(--color-bg-input)",
          borderRadius: "var(--radius-sm)",
          padding: "4px 10px",
          marginBottom: "var(--space-5)",
        }}>
          <span
            className="live-dot"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--color-live)",
              display: "inline-block",
            }}
          />
          <span style={{
            color: "var(--color-live)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}>
            PEOPLE&amp;CULTURE
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 700,
          color: "var(--color-text-base)",
          lineHeight: "48px",
          letterSpacing: "-0.02em",
          marginBottom: "var(--space-3)",
        }}>
          People&amp;Culture팀
        </h1>

        <p style={{
          fontSize: "16px",
          color: "var(--color-text-alt)",
          lineHeight: "24px",
          maxWidth: "520px",
          margin: "0 auto",
        }}>
          사람 중심의 문화를 만들고, 구성원이 성장할 수 있는 환경을 만들어가는 팀입니다.
        </p>
      </section>

      {/* ── Works Cards ────────────────────────────────── */}
      <section id="works" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 var(--space-5) 80px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--space-3)",
        }}>
          {works.map((work, i) => (
            <div key={i} className="twitch-card">
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--color-bg-alt2)",
                borderRadius: "var(--radius-sm)",
                padding: "2px 8px",
                marginBottom: "var(--space-3)",
              }}>
                <span style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--color-twitch-purple-light)",
                }}>
                  {work.tag}
                </span>
              </div>

              <div style={{ fontSize: "32px", marginBottom: "var(--space-2)" }}>{work.icon}</div>

              <h3 style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-text-base)",
                lineHeight: "20px",
                marginBottom: "var(--space-2)",
              }}>
                {work.title}
              </h3>

              <p style={{
                fontSize: "13px",
                color: "var(--color-text-alt)",
                lineHeight: "18px",
              }}>
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section id="contact" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 var(--space-5) 96px",
      }}>
        <div style={{
          background: "var(--color-bg-alt)",
          border: "1px solid var(--color-bg-input)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-6)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Purple glow */}
          <div style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "150px",
            background: "radial-gradient(ellipse, rgba(145,70,255,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <h2 style={{
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--color-text-base)",
            lineHeight: "32px",
            letterSpacing: "-0.01em",
            marginBottom: "var(--space-2)",
            position: "relative",
          }}>
            협업 또는 문의가 있으신가요?
          </h2>

          <p style={{
            fontSize: "13px",
            color: "var(--color-text-alt)",
            lineHeight: "18px",
            marginBottom: "var(--space-5)",
            position: "relative",
          }}>
            팀 업무와 관련된 궁금한 사항을 언제든지 보내주세요.
          </p>

          <a href="mailto:soomin.kim@wyattcorp.com" className="twitch-btn" style={{ position: "relative" }}>
            문의하기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid var(--color-bg-alt2)",
        background: "var(--color-bg-alt)",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "var(--space-4) var(--space-5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
            © 2026 Wyatt Corp. All rights reserved.
          </span>
          <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
            People&amp;Culture팀
          </span>
        </div>
      </footer>
    </main>
  );
}
