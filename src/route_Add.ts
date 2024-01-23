//route_Add.ts
//新增任務
import { Router, Request, Response } from "express";
import { prisma } from "./index";
import taskSchema from "./schema";
import { Schema } from "inspector";
const routerAdd = Router();

routerAdd.post("/task", async (req: Request<taskSchema>, res: Response) => {
  const { id, title, description, due_date, status } = req.body;
  try {
    const numericId = parseInt(id);
    const addTask = await prisma.tasks.create({
      data: {
        id: numericId,
        title,
        description,
        due_date: new Date(due_date),
        status,
      },
    });
    //如果新增成功，把addTask渲染到saveSuccess.ejs,
    res.render("saveSuccess", { addTask });
    // res.status(201).send({ msg: "成功新增任務", addTask });
  } catch (error) {
    console.log(error);
    //如果新增失敗，把error渲染到saveFail.ejs,
    res.render("saveFail", { error });
    // res.status(500).send({ msg: "伺服器錯誤", error });
  }
});

export default routerAdd;
