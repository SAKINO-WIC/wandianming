# 🌙 晚点名系统

自建班级晚点名网页，同学微信/手机打开链接即可填写。<br>
部署到 **Vercel（免费）**，数据存 **Supabase（免费）**，7×24h 在线。

## 📋 整体结构

```
晚点名/
├── index.html      # 首页（入口）
├── fill.html       # 学生填写页（选姓名+状态→提交）
├── admin.html      # 管理员看板（查看+复制汇总）
├── js/
│   └── config.js   # ⚠️ 配置文件：Supabase密钥、学生名单、密码
├── vercel.json     # Vercel 部署配置
└── supabase-schema.sql  # 数据库建表 SQL
```

## 🚀 部署步骤（约10分钟）

### 第一步：注册账号

1. **注册 GitHub** → [github.com](https://github.com/signup)（已有跳过）
2. **注册 Vercel** → [vercel.com](https://vercel.com/)（用 GitHub 登录）
3. **注册 Supabase** → [supabase.com](https://supabase.com/)（用 GitHub 登录）

### 第二步：创建数据库

1. 在 Supabase Dashboard 点 **「New project」**
2. 填项目名 `wandianming`，设置数据库密码（记住它）
3. 等一两分钟创建完成
4. 进入项目 → 左侧 **SQL Editor** → 点 **「New query」**
5. 复制 `supabase-schema.sql` 全部内容粘贴进去 → 点 **「Run」**
6. 左侧 **Project Settings → API**：
   - 复制 **Project URL**（形如 `https://xxx.supabase.co`）
   - 复制 **anon public key**

### 第三步：配置学生名单

编辑 `js/config.js`，把以下信息换成你的：

```js
const SUPABASE_URL = 'https://你的项目.supabase.co';   // ← 改
const SUPABASE_ANON_KEY = '你的anon-key';               // ← 改
const ADMIN_PASSWORD = '你自己设的密码';                  // ← 改（看板用）
const STUDENTS = [                                       // ← 改成你的同学
  { name: '张三', room: '1-101' },
  { name: '李四', room: '1-101' },
];
```

### 第四步：部署到 Vercel

1. 在 GitHub 创建一个新仓库（比如 `wandianming`）
2. 在电脑上运行以下命令：

```bash
# 进入项目文件夹
cd E:\AAA_Hermes_Shared_Workspace\晚点名

# 初始化 Git
git init
git add .
git commit -m "初始化晚点名系统"

# 关联你刚建的 GitHub 仓库（换成你的仓库地址）
git remote add origin https://github.com/你的用户名/wandianming.git
git branch -M main
git push -u origin main
```

3. 打开 [vercel.com](https://vercel.com/) → **「Add New → Project」**
4. 选择你刚推的 `wandianming` 仓库
5. **不修改任何配置**（框架自动检测为 Static）→ 点 **「Deploy」**
6. 等一两分钟，部署完成会得到一个链接：`https://wandianming.vercel.app`

### 第五步：告诉同学们

把链接发到班级群：

> 🌙 晚点名链接：https://wandianming.vercel.app/fill
> 请大家每天晚上在宿舍后填写～

## 📱 日常使用

- **同学**：在微信群里点开链接 → 选名字+状态 → 提交
- **你**：打开 `/admin` → 输入密码 → 查看谁填了谁没填 → 点「复制汇总」→ 贴给导员
- **我（Hermes）**：每天定时查数据库 → 微信推给你

## 🔧 修改名单

以后有同学转专业/换寝室，直接改 `js/config.js` 里的 `STUDENTS` 数组，重新 git push 就会自动部署更新。

## ❓ 常见问题

**Q: 同学能进管理看板吗？**
A: 看板有密码保护，只要你不把密码告诉同学就安全。

**Q: 同一个人能填多次吗？**
A: 每人每天只能提交一次，重复提交会提示「已提交」。

**Q: 数据安全吗？**
A: 数据存在 Supabase 云端，只有你知道数据库密钥（配置文件里）。

**Q: 链接能自定义成 wx.xxx.com 吗？**
A: Vercel 免费版不能自定义域名，链接就是 `xxx.vercel.app` 这种。
