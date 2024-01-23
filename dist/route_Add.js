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
//新增任務
const express_1 = require("express");
const index_1 = require("./index");
const routerAdd = (0, express_1.Router)();
routerAdd.post("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, description, due_date, status } = req.body;
    try {
        const numericId = parseInt(id);
        const addTask = yield index_1.prisma.tasks.create({
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
    }
    catch (error) {
        console.log(error);
        //如果新增失敗，把error渲染到saveFail.ejs,
        res.render("saveFail", { error });
        // res.status(500).send({ msg: "伺服器錯誤", error });
    }
}));
exports.default = routerAdd;
