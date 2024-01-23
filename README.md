# Todo-list-MVC
使用 TypeScript、Express、EJS、Prisma 和 MySQL 建立的todo-list練習，伴有MVC架構與CRUD 功能

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
    npx prisma migrate dev
    ```
    

4. **執行應用程式**

    ```bash
    npm start
    ```

5. **存取應用程式**

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
