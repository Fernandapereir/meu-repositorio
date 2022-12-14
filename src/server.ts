import "reflect-metadata"; 

import { Express } from "express";

import express = require("express");

let app: Express = express();

app.listen(3000, () => console.log("serve is running"));