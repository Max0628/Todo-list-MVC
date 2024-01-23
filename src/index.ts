//index.ts 主目錄
import express from "express";
const app = express();
import { PrismaClient, tasks } from "@prisma/client";
const prisma = new PrismaClient();
import methodOverride from "method-override";

//引入各個route
import routerAdd from "./route_Add";
import routerGetAll from "./route_GetAll";
import routerGet from "./route_Get";
import routerDelete from "./route_Delete";
import routerPut from "./route_Put";
import routerPatch from "./route_Patch";
// import addNewTask from "./route_newTask";

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(routerGetAll);
app.use(routerGet);
app.use(routerAdd);
app.use(routerDelete);
app.use(routerPut);
app.use(routerPatch);
// app.use(addNewTask);

app.listen(3000, () => {
  console.log("伺服器正在監聽port3000");
});

//導出primsa client, prisma model(task)
export { prisma, tasks };
