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
const routerGet = (0, express_1.Router)();
//進入新增任務頁面，網站入口點
routerGet.get("/task/new", (req, res) => {
    try {
        res.render("newTask");
    }
    catch (error) {
        res.render("error", { error });
    }
});
//單獨查詢任務
routerGet.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const numericId = parseInt(id);
        const getTask = yield index_1.prisma.tasks.findFirst({
            where: { id: numericId },
        });
        if (!getTask) {
            res.status(404).render("error", { error: "找不到此任務" });
            return;
        }
        res.render("taskPage", { getTask });
        // res.status(201).send({ msg: "查詢此任務", getTask });
    }
    catch (error) {
        console.log(error);
        // res.status(500).send({ msg: "伺服器錯誤", error });
        res.status(500).render("error", { error });
    }
}));
//編輯資料
//先到達已經填入表格資料
routerGet.get("/task/:id/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const numericId = parseInt(id);
        const getTask = yield index_1.prisma.tasks.findFirst({
            where: { id: numericId },
        });
        if (!getTask) {
            res.status(404).render("error", { error: "找不到此任務" });
            return;
        }
        res.render("editTask", { getTask });
    }
    catch (error) {
        console.log(error);
        res.status(500).render("error", { error });
    }
}));
//刪除資料
//先到達已經填入表格資料
routerGet.get("/task/:id/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const numericId = parseInt(id);
        const getTask = yield index_1.prisma.tasks.findFirst({
            where: { id: numericId },
        });
        if (!getTask) {
            res.status(404).render("error", { error: "找不到此任務" });
            return;
        }
        res.render("deleteSuccess", { getTask });
    }
    catch (error) {
        console.log(error);
        res.status(500).render("error", { error });
    }
}));
exports.default = routerGet;
