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
const routerDelete = (0, express_1.Router)();
routerDelete.delete("/task/:id/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const numericId = parseInt(id);
        const getTask = yield index_1.prisma.tasks.delete({
            where: {
                id: numericId,
            },
        });
        res.render("deleteSuccess", { getTask });
    }
    catch (error) {
        console.log(error);
        res.render("error", { error });
    }
}));
exports.default = routerDelete;
