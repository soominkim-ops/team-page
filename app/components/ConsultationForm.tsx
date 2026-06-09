"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "오류가 발생했습니다.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--color-bg-input)",
    border: "2px solid transparent",
    borderRadius: "var(--radius-md)",
    color: "var(--color-text-base)",
    fontSize: "13px",
    padding: "8px 12px",
    outline: "none",
    transition: "border-color var(--transition-fast)",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--color-text-alt)",
    marginBottom: "6px",
  };

  if (status === "success") {
    return (
      <div style={{
        background: "var(--color-bg-alt)",
        border: "1px solid var(--color-success)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-6)",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "32px", marginBottom: "var(--space-3)" }}>✅</div>
        <p style={{ color: "var(--color-success)", fontWeight: 600, fontSize: "14px", marginBottom: "var(--space-2)" }}>
          상담 신청이 완료되었습니다!
        </p>
        <p style={{ color: "var(--color-text-alt)", fontSize: "13px", marginBottom: "var(--space-4)" }}>
          빠른 시일 내에 연락드리겠습니다.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="twitch-btn"
          style={{ cursor: "pointer", border: "none" }}
        >
          새 상담 신청하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)", marginBottom: "var(--space-3)" }}>
        <div>
          <label style={labelStyle}>이름 *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            required
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = "var(--color-twitch-purple)")}
            onBlur={e => (e.currentTarget.style.borderColor = "transparent")}
          />
        </div>
        <div>
          <label style={labelStyle}>이메일 *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = "var(--color-twitch-purple)")}
            onBlur={e => (e.currentTarget.style.borderColor = "transparent")}
          />
        </div>
      </div>

      <div style={{ marginBottom: "var(--space-4)" }}>
        <label style={labelStyle}>상담 내용 *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="궁금한 사항이나 상담 내용을 자유롭게 작성해주세요."
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical", lineHeight: "18px" }}
          onFocus={e => (e.currentTarget.style.borderColor = "var(--color-twitch-purple)")}
          onBlur={e => (e.currentTarget.style.borderColor = "transparent")}
        />
      </div>

      {status === "error" && (
        <p style={{
          color: "var(--color-live)",
          fontSize: "12px",
          marginBottom: "var(--space-3)",
          padding: "8px 12px",
          background: "rgba(235,4,0,0.1)",
          borderRadius: "var(--radius-sm)",
        }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="twitch-btn"
        style={{
          cursor: status === "loading" ? "not-allowed" : "pointer",
          border: "none",
          opacity: status === "loading" ? 0.7 : 1,
          width: "100%",
          justifyContent: "center",
          height: "38px",
          fontSize: "14px",
        }}
      >
        {status === "loading" ? "전송 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}
