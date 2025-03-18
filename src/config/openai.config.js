/**
 * @author Anooj Krishnan
 * @description This is the OpenAI configuration for the Synclovis AI Assistant.
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export const openaiClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
}); 