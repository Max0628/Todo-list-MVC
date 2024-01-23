//route_Add.ts
import { Router, Request, Response } from "express";
import { prisma } from "./index";
import taskSchema from "./schema";
import { Schema } from "inspector";
const routerPut = Router();

routerPut.put("/task/:id", async (req: Request<taskSchema>, res: Response) => {
  const { id } = req.params;
  const { title, description, due_date, status } = req.body;

  try {
    const numericId = Number(id);
    const putTask = await prisma.tasks.update({
      where: {
        id: numericId,
      },
      data: {
        id: numericId,
        title,
        description,
        due_date: new Date(),
        status,
      },
    });
    res.render("updateSuccess", { putTask });
    // res.status(201).send({ msg: "成功更新此任務全部欄位", putTask });
  } catch (error) {
    console.log(error);
    res.render("error", { error });
    // res.status(500).send({ msg: "伺服器錯誤", error });
  }
});

export default routerPut;
