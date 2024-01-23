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
const routerPatch = (0, express_1.Router)();
routerPatch.patch("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, due_date, status } = req.body;
    const numericId = Number(id);
    const data = {
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
        const patchTask = yield index_1.prisma.tasks.update({
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
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "伺服器錯誤", error });
    }
}));
exports.default = routerPatch;
