#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const n = 600;

const filePath = path.resolve(__dirname, "wafv2.ts");
let content = `const cdktf = {} as any;`;

for (let i = 0; i < n; i++) {
  content += `
  export interface Wafv2WebAclRuleStatementAndStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch${i} {
    /**
    * all_query_arguments block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly all: string;
    /**
    * body block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: string;
    /**
    * method block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: string;
    /**
    * query_string block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: string;
    /**
    * single_header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: string;
    /**
    * single_query_argument block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: string;
    /**
    * uri_path block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: string;
  }
  
  export function wafv2WebAclRuleStatementAndStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform${i}(struct?: Wafv2WebAclRuleStatementAndStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch${i}): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      
    }
  }
  
  export interface Wafv2WebAclRuleStatementAndStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation${i} {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
  }
  
  export function wafv2WebAclRuleStatementAndStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform${i}(struct?: Wafv2WebAclRuleStatementAndStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation${i}): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {

    }
  }
`;
}

fs.writeFileSync(filePath, content, "utf-8");
