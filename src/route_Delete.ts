//route_Add.ts
import { Router, Request, Response } from "express";
import { prisma } from "./index";
import taskSchema from "./schema";
import { Schema } from "inspector";
const routerDelete = Router();

routerDelete.delete(
  "/task/:id",
  async (req: Request<taskSchema>, res: Response) => {
    const { id } = req.params;

    try {
      const numericId = Number(id);
      const getTask = await prisma.tasks.delete({
        where: {
          id: numericId,
        },
      });
      console.log(id, typeof id);
      res.render("deleteSuccess", { getTask });
    } catch (error) {
      console.log(error);
      res.render("error", { error });
    }
  }
);

export default routerDelete;
