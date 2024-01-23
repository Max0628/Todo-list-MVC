//route_Add.ts
import { Router, Request, Response } from "express";
import { prisma } from "./index";
import taskSchema from "./schema";
import { Schema } from "inspector";
const routerPatch = Router();

routerPatch.patch(
  "/task/:id",
  async (req: Request<taskSchema>, res: Response) => {
    const { id } = req.params;
    const { title, description, due_date, status } = req.body;
    const numericId = Number(id);
    const data: taskSchema = {
      id,
      title,
      description,
      due_date,
      status,
    };
    try {
      if (req.body.name) {
        data.title = title;
      }
      if (req.body.description) {
        data.description = description;
      }
      if (req.body.due_date) {
        data.due_date = due_date;
      }
      if (req.body.status) {
        data.status = status;
      }

      const patchTask = await prisma.tasks.update({
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
      res.status(201).send({ msg: "成功更新此任務部分欄位", patchTask });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "伺服器錯誤", error });
    }
  }
);

export default routerPatch;
