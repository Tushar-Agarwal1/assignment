"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const data_1 = __importDefault(require("../data"));
router.get("/feedback", (req, res) => {
    res.send({ feedbacks: data_1.default });
});
router.post("/add", (req, res) => {
    const name = req.body.name;
    const feedback = req.body.feedback;
    const comment = {
        name,
        feedback
    };
    data_1.default.push(comment);
    console.log(data_1.default);
    res.send("done");
});
exports.default = router;
