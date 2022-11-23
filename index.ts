import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { IComment, IData } from "./interfaces";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/api", (req: Request, res: Response) => {
    const requestBody: IData = req.body;
    console.log(requestBody)

    axios("https://test.bpium.ru/api/webrequest/request")
      .then((r) => {
        const data: IComment = r.data;
        return data;
      })
        .then((data) => res.json(data.value));
    
  if (requestBody.hook.event === "record.updated") {
    const comment = axios("https://test.bpium.ru/api/webrequest/request")
      .then((r) => {
        const data: IComment = r.data;
        return data;
      })
      .then((data) => res.json(data.value));
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
