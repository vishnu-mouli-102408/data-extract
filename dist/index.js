"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function extractData() {
    let finalAns = data_1.results.map((result) => {
        return {
            sm_order_id: result === null || result === void 0 ? void 0 : result.sm_orderid,
            externalOrderId: result === null || result === void 0 ? void 0 : result.externalOrderId,
        };
    });
    console.log(finalAns);
}
extractData();
