//route_Add.ts
import { Router, Request, Response } from "express";
import { prisma } from "./index";
import { Schema } from "inspector";
const routerGetAll = Router();

routerGetAll.get("/task", async (req: Request, res: Response) => {
  try {
    const getAllTasks = await prisma.tasks.findMany({});
    res.render("index", { getAllTasks });
    // res.status(201).send({ msg: "查詢全部任務", getAllTask });
  } catch (error) {
    console.log(error);
    res.status(500).render("error", { error });
    // res.status(500).send({ msg: "伺服器錯誤", error });
  }
});

export default routerGetAll;
