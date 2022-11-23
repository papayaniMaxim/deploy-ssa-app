import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { IData } from "./interfaces";
import getComment from "./getComment";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/api", (req: Request, res: Response) => {
  const data: IData = req.body;
    if (data && data.hook.event === "record.before.updated") {
      getComment().then(data => res.json(data))
  }
  //   res.json(data.hook.event);
  //   res.end();
});

app.get("/api", (req: Request, res: Response) => {
  console.log("get");
  res.json({ max: "max" });
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});

// fetch("http://localhost:8000/api", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8",
//   },
//   body: JSON.stringify({
//   "timestamp" : "1459500623", // время события
//   "hook" : {
//     "id" : "2", // номер вебхука в системе
//     "event" : "record.before.updated", // тип события
//     "sequenceId" : 84 // порядковый номер сообщения
//    },
//    "payload" : {
//      "catalogId" : "5", // каталог с изменениям
//      "recordId" : "199", // запись с изменениям
//      "values" : { // список измененных полей и значений в формате API Бипиума
//        "2" : "Текст",
//        "3" : null,
//        "4" : ["1"],
//        "5" : [ {"id":"1", "title":"admin"} ],
//        "6" : "2016-04-01T08:49:15.920Z",
//        "9" : [ {"contact":"+7-987-654-32-10", "comment":"Сотовый"} ]
//      },
//      "prevValues" : {
//        // предыдущие значения записи
//      }
//   },
//   "user" : { "id" : "1" } // идентификатор сотрудника
// }),
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));
