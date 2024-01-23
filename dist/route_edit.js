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
//route_edit.ts
const express_1 = require("express");
const index_1 = require("./index");
const editTask = (0, express_1.Router)();
editTask.get("/edit/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const numericId = parseInt(id);
    try {
        const findUpdate = yield index_1.prisma.tasks.findFirst({
            where: { id: numericId },
        });
        res.render("edit_task", { findUpdate });
    }
    catch (error) {
        res.render("error", { error });
    }
}));
exports.default = editTask;
