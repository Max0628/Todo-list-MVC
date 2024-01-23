"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//route_Add.ts
const express_1 = require("express");
const index_1 = require("./index");
const routerGetAll = (0, express_1.Router)();
routerGetAll.get("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllTasks = yield index_1.prisma.tasks.findMany({});
        res.render("index", { getAllTasks });
        // res.status(201).send({ msg: "查詢全部任務", getAllTask });
    }
    catch (error) {
        console.log(error);
        res.status(500).render("error", { error });
        // res.status(500).send({ msg: "伺服器錯誤", error });
    }
}));
exports.default = routerGetAll;
