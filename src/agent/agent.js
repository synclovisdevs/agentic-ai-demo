/**
 * @author Anooj Krishnan
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

import { openaiClient } from '../config/openai.config.js';
import { toolsConfig } from './tools.config.js';
import { officeTools } from '../tools/office.tools.js';
import { appointmentTools } from '../tools/appointment.tools.js';

const availableTools = {
    ...officeTools,
    ...appointmentTools
};

const messages = [
    {
        role: "system",
        content: "You are a helpful assistant of Synclovis Company Office. Only use the functions you have been provided with. Also, if user asks for appointment, check the availability first and then use the appointment function."
    }
];

export async function agent(userInput, iterationCount = 0, maxIterations = 6) {
    if (iterationCount >= maxIterations) {
        return "The maximum number of iterations has been met without a suitable answer. Please try again with a more specific input.";
    }

    if (iterationCount === 0) {
        messages.push({
            role: "user",
            content: userInput,
        });
    }

    const response = await openaiClient.chat.completions.create({
        model: "gpt-4",
        messages: messages,
        tools: toolsConfig,
    });

    const { finish_reason, message } = response.choices[0];    

    if (finish_reason === "tool_calls" && message.tool_calls) {
        const functionName = message.tool_calls[0].function.name;
        const functionToCall = availableTools[functionName];
        const functionArgs = JSON.parse(message.tool_calls[0].function.arguments);
        const functionArgsArr = Object.values(functionArgs);
        // console.log("Calling function: ", functionName, " with arguments: ", functionArgsArr);
        
        const functionResponse = await functionToCall(...functionArgsArr);
    
        messages.push({
            role: "function",
            name: functionName,
            content: `The result of the last function was this: ${JSON.stringify(functionResponse)}`,
        });
            
        return agent(userInput, iterationCount + 1, maxIterations);
    }

    if (finish_reason === "stop") {
        messages.push(message);
        return message.content;
    }
} 