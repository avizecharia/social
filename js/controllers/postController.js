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
const postService_1 = __importDefault(require("../services/postService"));
const router = express_1.default.Router();
//get all posts
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield postService_1.default.getAllPosts();
        console.log(posts);
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: posts,
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
//create new post
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postService_1.default.createNewPost(req.body);
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
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
}));
//query params: ?title=x
router.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: undefined,
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
//get post by id
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postService_1.default.getPostById(req.params.id);
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
//
router.patch("/like/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postService_1.default.addLikeToPost(req.params.id);
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
exports.default = router;
