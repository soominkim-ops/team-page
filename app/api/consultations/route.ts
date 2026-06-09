import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

// 테이블이 없으면 자동 생성
async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS consultations (
      id        SERIAL PRIMARY KEY,
      name      VARCHAR(100) NOT NULL,
      email     VARCHAR(200) NOT NULL,
      message   TEXT         NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "이름, 이메일, 내용을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식을 입력해주세요." },
        { status: 400 }
      );
    }

    await ensureTable();

    const result = await sql`
      INSERT INTO consultations (name, email, message)
      VALUES (${name.trim()}, ${email.trim()}, ${message.trim()})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      { success: true, id: result.rows[0].id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[consultations POST]", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureTable();
    const result = await sql`
      SELECT id, name, email, message, created_at
      FROM consultations
      ORDER BY created_at DESC
    `;
    return NextResponse.json({ consultations: result.rows });
  } catch (err) {
    console.error("[consultations GET]", err);
    return NextResponse.json({ error: "조회 실패" }, { status: 500 });
  }
}
