import { Config } from "@remotion/cli/config";

Config.setEntryPoint("./src/index.js");
Config.setVideoImageFormat("jpeg");
Config.setCodec("h264");
Config.setCrf(18);
