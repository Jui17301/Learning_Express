"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const port = 3000
// parsers
// app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// app.post('/',(req:Request,res:Response)=>{
// console.log(req.body);
// res.send("Got data");
// })
exports.default = app;
