-- ===== Supabase 数据库建表 SQL =====
-- 在 Supabase Dashboard → SQL Editor 中运行此脚本

-- 1. 创建晚点名记录表
CREATE TABLE checkins (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  name TEXT NOT NULL,
  room TEXT NOT NULL,
  status TEXT NOT NULL,
  note TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 允许同一天每个人只能提交一次（防止重复提交）
CREATE UNIQUE INDEX idx_checkins_date_name ON checkins (date, name);

-- 2. 启用 Row Level Security
ALTER TABLE checkins ENABLE ROW LEVEL SECURITY;

-- 3. 允许所有人插入（匿名用户也能填表）
CREATE POLICY "允许匿名提交" ON checkins
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. 允许所有人查询（但只能查当天的简略信息，用于前端验证是否已填）
CREATE POLICY "允许查询当天记录" ON checkins
  FOR SELECT
  TO anon
  USING (date = CURRENT_DATE);
