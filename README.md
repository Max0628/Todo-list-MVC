# Todo-list-MVC

使用 TypeScript、Express、EJS、Prisma 和 MySQL 建立的 todo-list 練習，伴有 MVC 架構與 CRUD 功能

## 功能特點

### 查看所有任務 (主頁面)

- **路徑:** /task
- **方法:** GET

### 查看指定任務

- **路徑:** /task/:id
- **方法:** GET

### 新增任務

- **路徑:** /task/new
- **方法:** POST

### 編輯指定任務

- **路徑:** /task/:id/edit
- **方法:** POST

### 刪除指定任務

- **路徑:** /task/:id/delete
- **方法:** GET

## 任務屬性

每個任務均具有以下五個屬性：

1. **ID**

   - 任務唯一識別碼

2. **標題 (Title)**

   - 任務的標題

3. **描述 (Description)**

   - 任務的詳細描述

4. **截止日期 (Deadline)**

   - 任務應完成的截止日期

5. **狀態 (Status)**
   - 任務的當前狀態

## 前置作業

1. **安裝相依套件**

   ```bash
   npm install
   ```

2. **執行 Prisma 遷移**

   ```
   可以透過prisma連接上主機的docker mysql container來運行～～
   ```

   ```bash
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   ```

   ```bash
   npx prisma generate
   ```

   - 生成 Prisma 的相關程式碼。這包括資料模型的 TypeScript 定義以及 Prisma Client。

   ```bash
   npx prisma migrate dev --name init
   ```

   - 創建一個新的遷移，命名為 "init"。這個遷移包含了將資料庫結構更新到最新狀態所需的所有變更。

3. **執行應用程式**

   ```bash
   npm start
   ```

4. **存取應用程式**

## 專案結構

```plaintext
.
├── README.md
├── node_modules
├── package.json
├── src
│   ├── app.ts
│   └── ...
├── views
│   ├── tasks
│   │   └── index.ejs
│   └── ...
├── dist
├── package-lock.json
├── prisma
│   └── schema.prisma
└── tsconfig.json
```
