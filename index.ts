import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { IData } from "./interfaces";
import getComment from "./getComment";
import data from "./data";
import {
  createStorageRecord,
  getAllOrderRecords,
  getAllStorageRecords,
  getOrderRecord,
  orderCatalogId,
  updateOrderRecord,
} from "./services/bpiumService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/api", (req: Request, res: Response) => {
  const data: IData = req.body;
  const event = data.hook.event;
  if (
    data &&
    data.payload.catalogId === orderCatalogId &&
    event === "record.updated"
  ) {
    getComment().then((comment) =>
      updateOrderRecord(
        data.payload.catalogId,
        data.payload.recordId,
        JSON.stringify(data) //change to comment
      ).then(() => {
        res.status(200);
        res.end();
      })
    );
  }
  if (
    data &&
    data.payload.catalogId === orderCatalogId &&
    event === "record.created"
  ) {
    const comment = data.payload.values["3"];
    const catalogId = data.payload.catalogId;
    const recordId = data.payload.recordId;
    createStorageRecord(catalogId, recordId, comment).then(() => {
        res.status(200);
        res.end();
      });
  }
});

app.get("/api", (req: Request, res: Response) => {
  console.log("get");
  res.json({ max: "max" });
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});

