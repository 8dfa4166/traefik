import express, { Request, Response } from "express";
import { ExpressAuth } from "@auth/express";
import Keycloak from "@auth/express/providers/keycloak";

const app = express();
const port = 3000;

app.set("trust proxy", true);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/auth/*", ExpressAuth({ providers: [Keycloak] }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
