import StraitTimesParser from "./StraitTimesParser"
import PluginParsers from "../../classes/PluginParsers";

export const RSSPluginParsers = (new PluginParsers())
    .merge(StraitTimesParser)
    // .merge(HackerNewsParser)