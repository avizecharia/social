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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const router = express_1.default.Router();
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.createNewUser(req.body);
        if (result) {
            res.json({
                err: false,
                message: "I was too lazy to change the default message",
                data: undefined,
            });
        }
        else {
            throw new Error("Cant Save New User to the file");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: err || "I was too lazy to change the default message",
            data: null,
        });
    }
}));
router.post("/follow", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.follow(req.body.acoountUserId, req.body.folloeUerId);
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
}));
// query params : ? x=y
router.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.getSearchUser(req.query.userName);
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
}));
// protected route
// query params ? type = MINE || ELSE
router.get("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.getUserById(req.query.id);
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
}));
// protected route
// query params ? type = MINE || ELSE
router.get("/followers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.getUserById(req.query.id);
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: result === null || result === void 0 ? void 0 : result.followeres,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
}));
// protected route
// query params ? type = MINE || ELSE
router.get("/following", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.getUserById(req.query.id);
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: result === null || result === void 0 ? void 0 : result.following,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
}));
exports.default = router;
