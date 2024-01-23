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
const routerPut = (0, express_1.Router)();
routerPut.put("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, due_date, status } = req.body;
    try {
        const numericId = Number(id);
        const putTask = yield index_1.prisma.tasks.update({
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
    }
    catch (error) {
        console.log(error);
        res.render("error", { error });
        // res.status(500).send({ msg: "伺服器錯誤", error });
    }
}));
exports.default = routerPut;
