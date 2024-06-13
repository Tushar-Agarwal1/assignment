"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Allow requests from http://localhost:5173
// app.use(cors({
//   origin: 'http://localhost:5173/'
// }));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 10 * 1000,
    max: 1, // `max` instead of `limit`
    message: "Too many requests from this IP"
});
app.use("/add", limiter);
app.use(router_1.default);
app.listen(8080, () => {
    console.log("Server Connected");
});
