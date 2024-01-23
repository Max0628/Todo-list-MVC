"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
//index.ts 主目錄
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
const method_override_1 = __importDefault(require("method-override"));
//引入各個route
const route_Add_1 = __importDefault(require("./route_Add"));
const route_GetAll_1 = __importDefault(require("./route_GetAll"));
const route_Get_1 = __importDefault(require("./route_Get"));
const route_Delete_1 = __importDefault(require("./route_Delete"));
const route_Put_1 = __importDefault(require("./route_Put"));
const route_Patch_1 = __importDefault(require("./route_Patch"));
// import addNewTask from "./route_newTask";
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, method_override_1.default)("_method"));
app.use(route_GetAll_1.default);
app.use(route_Get_1.default);
app.use(route_Add_1.default);
app.use(route_Delete_1.default);
app.use(route_Put_1.default);
app.use(route_Patch_1.default);
// app.use(addNewTask);
app.listen(3000, () => {
    console.log("伺服器正在監聽port3000");
});
