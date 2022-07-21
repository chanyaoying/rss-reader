import StraitTimesParser from "./StraitTimesParser"
import PluginParsers from "../../classes/PluginParsers";
import HackerNewsParser from "./HackerNewsParser";

export const RSSPluginParsers = (new PluginParsers())
    .merge(StraitTimesParser)
    .merge(HackerNewsParser)