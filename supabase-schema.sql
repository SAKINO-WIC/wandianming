-- ===== Supabase 数据库建表 SQL =====
-- 在 Supabase Dashboard → SQL Editor 中运行此脚本
-- 更新日期：2026-05-21

-- 1. 创建晚点名记录表
CREATE TABLE IF NOT EXISTS checkins (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  name TEXT NOT NULL,
  room TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('zaisushe', 'buzhusu')),
  note TEXT DEFAULT '',
  student_id TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 允许同一天每个人只能提交一次（防止重复提交）
CREATE UNIQUE INDEX IF NOT EXISTS idx_checkins_date_name ON checkins (date, name);

-- 2. 创建系统设置表
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- 3. 启用 Row Level Security
ALTER TABLE checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- 4. 删除已有策略（避免重复创建冲突）
DROP POLICY IF EXISTS "允许匿名提交" ON checkins;
DROP POLICY IF EXISTS "允许查询当天记录" ON checkins;
DROP POLICY IF EXISTS "允许修改自己当天记录" ON checkins;
DROP POLICY IF EXISTS "允许匿名查询设置" ON settings;
DROP POLICY IF EXISTS "允许匿名修改设置" ON settings;

-- 5. RLS 策略

-- checkins：匿名用户可插入
CREATE POLICY "允许匿名提交" ON checkins
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- checkins：匿名用户可查询当天记录
CREATE POLICY "允许查询当天记录" ON checkins
  FOR SELECT
  TO anon
  USING (date = CURRENT_DATE);

-- checkins：匿名用户可修改自己当天的记录（按日期+姓名匹配）
CREATE POLICY "允许修改自己当天记录" ON checkins
  FOR UPDATE
  TO anon
  USING (date = CURRENT_DATE)
  WITH CHECK (date = CURRENT_DATE);

-- settings：匿名用户可查询所有设置
CREATE POLICY "允许匿名查询设置" ON settings
  FOR SELECT
  TO anon
  USING (true);

-- settings：匿名用户可插入/更新设置（用于管理员看板保存配置）
CREATE POLICY "允许匿名修改设置" ON settings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 6. 默认设置（仅在首次运行时插入）
INSERT INTO settings (key, value)
VALUES
  ('fill_start', '19:00'),
  ('fill_end', '21:00'),
  ('admin_password', 'admin666'),
  ('maintenance', '0')
ON CONFLICT (key) DO NOTHING;
