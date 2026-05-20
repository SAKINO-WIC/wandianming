-- ===== 晚点名系统 · Supabase 建表 + 权限配置 =====
-- 1. 创建晚点名记录表（可重复执行，不会覆盖数据）
CREATE TABLE IF NOT EXISTS checkins (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  name TEXT NOT NULL,
  room TEXT NOT NULL,
  status TEXT NOT NULL,
  note TEXT DEFAULT ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 允许同一天每个人只能提交一次
CREATE UNIQUE INDEX IF NOT EXISTS idx_checkins_date_name ON checkins (date, name);

-- 2. 给 anon 角色访问权限
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON public.checkins TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;

-- 3. 启用 Row Level Security
ALTER TABLE checkins ENABLE ROW LEVEL SECURITY;

-- 4. 删除旧策略（如果有）
DROP POLICY IF EXISTS \"允许匿名提交\" ON checkins;
DROP POLICY IF EXISTS \"允许查询当天记录\" ON checkins;

-- 5. 创建新策略
CREATE POLICY \"允许匿名提交\" ON checkins
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY \"允许查询当天记录\" ON checkins
  FOR SELECT
  TO anon
  USING (true);
