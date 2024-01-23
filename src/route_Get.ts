//route_Add.ts
import { Router, Request, Response } from "express";
import { prisma } from "./index";
import { Schema } from "inspector";
const routerGet = Router();

//進入新增任務頁面，網站入口點
routerGet.get("/task/new", (req: Request, res: Response) => {
  try {
    res.render("newTask");
  } catch (error) {
    res.render("error", { error });
  }
});

//單獨查詢任務
routerGet.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numericId = parseInt(id);
    const getTask = await prisma.tasks.findFirst({
      where: { id: numericId },
    });

    if (!getTask) {
      res.status(404).render("error", { error: "找不到此任務" });
      return;
    }
    res.render("taskPage", { getTask });
    // res.status(201).send({ msg: "查詢此任務", getTask });
  } catch (error) {
    console.log(error);
    // res.status(500).send({ msg: "伺服器錯誤", error });
    res.status(500).render("error", { error });
  }
});

//編輯資料
//先到達已經填入表格資料
routerGet.get("/task/:id/edit", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numericId = parseInt(id);

    const getTask = await prisma.tasks.findFirst({
      where: { id: numericId },
    });

    if (!getTask) {
      res.status(404).render("error", { error: "找不到此任務" });
      return;
    }
    res.render("editTask", { getTask });
  } catch (error) {
    console.log(error);
    res.status(500).render("error", { error });
  }
});

//刪除資料
//先到達已經填入表格資料
routerGet.get("/task/:id/delete", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numericId = parseInt(id);

    const getTask = await prisma.tasks.findFirst({
      where: { id: numericId },
    });

    if (!getTask) {
      res.status(404).render("error", { error: "找不到此任務" });
      return;
    }
    res.render("deleteSuccess", { getTask });
  } catch (error) {
    console.log(error);
    res.status(500).render("error", { error });
  }
});

export default routerGet;
