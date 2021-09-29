#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const n = 3000;

const filePath = path.resolve(__dirname, "wafv2.ts");
let content = ``;

for (let i = 0; i < n; i++) {
  content += `
  export class Wafv2WebAclRuleStatementAndStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch${i} {}
`;
}

fs.writeFileSync(filePath, content, "utf-8");
