'use client'

import { Configuration, OpenAIApi } from "openai";
import { config } from "../config";

const configuration = new Configuration({
    apiKey: config.openAPIKey
});

const openai = new OpenAIApi(configuration)

export default openai;