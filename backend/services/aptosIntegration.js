// Transfer between users
const aptos = require("@aptos-labs/ts-sdk");
const txn = await aptos.transaction.build.simple({
  sender: alice.accountAddress,
  data: {
    function: "0x1::coin::transfer",
    typeArguments: [APTOS_COIN],
    functionArguments: [bob.accountAddress, TRANSFER_AMOUNT],
  },
});
console.log("\n=== Transfer transaction ===\n");
const committedTxn = await aptos.signAndSubmitTransaction({
  signer: alice,
  transaction: txn,
});
await aptos.waitForTransaction({ transactionHash: committedTxn.hash });
console.log(`Committed transaction: ${committedTxn.hash}`);
