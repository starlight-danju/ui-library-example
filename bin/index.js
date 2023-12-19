#! /usr/bin/env node

const path = require("path");
const fs = require("fs");

const CWD = process.cwd();

const dir = fs.readdirSync(CWD);

if (dir.includes("components")) {
    console.error("components directory already exists.");
    process.exit(1);
} else {
    fs.mkdirSync(path.resolve(CWD, "components"));
    console.log("components directory created successfully.");
}

process.exit(0);
