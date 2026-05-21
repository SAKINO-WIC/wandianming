// ===== 晚点名系统配置文件 =====
// 由 Hermes 自动生成，信管2307班实名制

const SUPABASE_URL = 'https://jgiyahtmpvfqtgdfxxgi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnaXlhaHRtcHZmcXRnZGZ4eGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyOTEwNTIsImV4cCI6MjA5NDg2NzA1Mn0.K2XGYGccLv6rfPyuAYVYufhIy1mEpABMHf77Sz1IqZE';
const ADMIN_PASSWORD = 'wan123456';

// 学生名单（含学号 sid）
const STUDENTS = [
  { name: '蔡名杰', sid: '2330130273', room: '26-521' },
  { name: '曹家乐', sid: '2330130274', room: '26-521' },
  { name: '曹智宣', sid: '2330130275', room: '26-521' },
  { name: '狄梦豪', sid: '2330130276', room: '26-521' },
  { name: '高瑞鹏', sid: '2330130277', room: '26-521' },
  { name: '郭宇峰', sid: '2330130278', room: '26-521' },
  { name: '缴少博', sid: '2330130279', room: '26-522' },
  { name: '寇翼鹏', sid: '2330130280', room: '26-522' },
  { name: '林宽',   sid: '2330130281', room: '26-522' },
  { name: '刘倍源', sid: '2330130282', room: '26-522' },
  { name: '刘春鹏', sid: '2330130283', room: '26-522' },
  { name: '刘运来', sid: '2330130284', room: '26-522' },
  { name: '吕英豪', sid: '2330130285', room: '26-523' },
  { name: '皮杰',   sid: '2330130286', room: '26-523' },
  { name: '万小转', sid: '2330130289', room: '26-523' },
  { name: '王哲',   sid: '2330130291', room: '26-524' },
  { name: '吴泓滨', sid: '2330130292', room: '26-524' },
  { name: '徐昊涵', sid: '2330130293', room: '26-524' },
  { name: '杨昌秀', sid: '2330130294', room: '26-524' },
  { name: '杨雨非', sid: '2330130295', room: '26-524' },
  { name: '张骏意', sid: '2330130296', room: '26-524' },
  { name: '张天予', sid: '2330130297', room: '26-525' },
  { name: '张志杰', sid: '2330130298', room: '26-525' },
  { name: '赵文宇', sid: '2330130299', room: '26-525' },
  { name: '蔡文清', sid: '2330130300', room: '28-535' },
  { name: '陈蕾',   sid: '2330130301', room: '28-535' },
  { name: '陈萌',   sid: '2330130302', room: '28-535' },
  { name: '程研',   sid: '2330130303', room: '28-535' },
  { name: '何欣怡', sid: '2330130304', room: '28-535' },
  { name: '胡亮亮', sid: '2330130305', room: '28-536' },
  { name: '李雅琪', sid: '2330130306', room: '28-536' },
  { name: '梁博文', sid: '2330130307', room: '28-536' },
  { name: '刘瑷烨', sid: '2330130308', room: '28-536' },
  { name: '刘政琪', sid: '2330130309', room: '28-536' },
  { name: '马莹莹', sid: '2330130310', room: '28-536' },
  { name: '潘玥彤', sid: '2330130311', room: '28-537' },
  { name: '王青青', sid: '2330130313', room: '28-537' },
  { name: '王睿',   sid: '2330130314', room: '28-537' },
  { name: '王雨欣', sid: '2330130315', room: '28-537' },
  { name: '杨羽涵', sid: '2330130316', room: '28-537' },
  { name: '姚蒙娜蝶舞', sid: '2330130317', room: '28-538' },
  { name: '尹润甜', sid: '2330130318', room: '28-538' },
  { name: '喻忠香', sid: '2330130319', room: '28-538' },
  { name: '张文静', sid: '2330130320', room: '28-538' },
  { name: '周凯旋', sid: '2330130321', room: '28-538' },
  { name: '朱思怡', sid: '2330130322', room: '28-538' },
];

const STATUS_OPTIONS = [
  { value: 'zaisushe', label: '🏠 住校' },
  { value: 'buzhusu',  label: '🚶 不住校' },
];

const APP_NAME = '晚点名系统';
