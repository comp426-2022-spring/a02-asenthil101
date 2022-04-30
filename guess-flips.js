import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2));
const callArg = args["call"] || null;

if (callArg == null || callArg != "heads" && callArg != "tails") {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
} else {
    console.log(flipACoin(callArg));
}