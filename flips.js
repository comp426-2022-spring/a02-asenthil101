import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args["number"]
const number = args.number || 1;
var flipList = []
flipList = coinFlips(number);
console.log(flipList);
console.log(countFlips(flipList));