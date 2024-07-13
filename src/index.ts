import { results } from "./data";

function extractData() {
  let finalAns = results.map((result) => {
    return {
      sm_order_id: result?.sm_orderid,
      externalOrderId: result?.externalOrderId,
    };
  });
  console.log(finalAns);
}

extractData();
