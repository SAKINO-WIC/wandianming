// ===== 晚点名系统配置文件 =====
// 由 Hermes 自动生成，信管2307班实名制
// 数据来源：2307名单.xlsx（隐私数据，仅本地存储）

// Supabase 项目信息
const SUPABASE_URL = 'https://jgiyahtmpvfqtgdfxxgi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnaXlhaHRtcHZmcXRnZGZ4eGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyOTEwNTIsImV4cCI6MjA5NDg2NzA1Mn0.K2XGYGccLv6rfPyuAYVYufhIy1mEpABMHf77Sz1IqZE';

// 管理员密码（改掉！）
const ADMIN_PASSWORD = 'wan123456';

// ===== 信管2307班学生名单 =====
// 已排除：王浩嘉(转专业)、涂永盛(转专业)、孙英博(退宿)、宋静宜(退宿)
// 共计 46 人
const STUDENTS = [
  // ── 男生 · 学生公寓26号楼 ──
  { name: '蔡名杰', room: '26-521' },
  { name: '曹家乐', room: '26-521' },
  { name: '曹智宣', room: '26-521' },
  { name: '狄梦豪', room: '26-521' },
  { name: '高瑞鹏', room: '26-521' },
  { name: '郭宇峰', room: '26-521' },
  { name: '缴少博', room: '26-522' },
  { name: '寇翼鹏', room: '26-522' },
  { name: '林宽',   room: '26-522' },
  { name: '刘倍源', room: '26-522' },
  { name: '刘春鹏', room: '26-522' },
  { name: '刘运来', room: '26-522' },
  { name: '吕英豪', room: '26-523' },
  { name: '皮杰',   room: '26-523' },
  { name: '万小转', room: '26-523' },
  { name: '王哲',   room: '26-524' },
  { name: '吴泓滨', room: '26-524' },
  { name: '徐昊涵', room: '26-524' },
  { name: '杨昌秀', room: '26-524' },
  { name: '杨雨非', room: '26-524' },
  { name: '张骏意', room: '26-524' },
  { name: '张天予', room: '26-525' },
  { name: '张志杰', room: '26-525' },
  { name: '赵文宇', room: '26-525' },
  // ── 女生 · 学生公寓28号楼 ──
  { name: '蔡文清', room: '28-535' },
  { name: '陈蕾',   room: '28-535' },
  { name: '陈萌',   room: '28-535' },
  { name: '程研',   room: '28-535' },
  { name: '何欣怡', room: '28-535' },
  { name: '胡亮亮', room: '28-536' },
  { name: '李雅琪', room: '28-536' },
  { name: '梁博文', room: '28-536' },
  { name: '刘瑷烨', room: '28-536' },
  { name: '刘政琪', room: '28-536' },
  { name: '马莹莹', room: '28-536' },
  { name: '潘玥彤', room: '28-537' },
  { name: '王青青', room: '28-537' },
  { name: '王睿',   room: '28-537' },
  { name: '王雨欣', room: '28-537' },
  { name: '杨羽涵', room: '28-537' },
  { name: '姚蒙娜蝶舞', room: '28-538' },
  { name: '尹润甜', room: '28-538' },
  { name: '喻忠香', room: '28-538' },
  { name: '张文静', room: '28-538' },
  { name: '周凯旋', room: '28-538' },
  { name: '朱思怡', room: '28-538' },
];

// 晚点名状态选项
const STATUS_OPTIONS = [
  { value: 'zaisushe', label: '🏠 住校' },
  { value: 'buzhusu',  label: '🚶 不住校' },
];

// 系统名称
const APP_NAME = 'TNU晚点名系统-信管2307SVIP专属定制版';

// 填写时间窗口（24小时制）
const FILL_START = '7:00';  // 早上7点开始
const FILL_END   = '21:00';  // 晚上21点截止
