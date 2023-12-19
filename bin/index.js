#! /usr/bin/env node

const path = require("path");
const fs = require("fs");
const child = require("child_process");

const CWD = process.cwd();
const dir = fs.readdirSync(CWD);

// file io
if (dir.includes("components")) {
    console.error("components directory already exists.");
} else {
    fs.mkdirSync(path.resolve(CWD, "components"));
    console.log("components directory created successfully.");
}

const initialDir = fs.readdirSync(
    path.join(CWD, "node_modules", "ui-lib-tester", "components")
);

initialDir.forEach((file) => {
    let content = fs.readFileSync(
        path.resolve("node_modules", "ui-lib-tester", "components", file),
        "utf-8"
    );
    fs.writeFileSync(path.resolve(CWD, "components", file), content);
});

process.exit(0);
