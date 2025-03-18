/**
 * @author Anooj Krishnan   
 * @description This is the main file for the Synclovis AI Assistant.
 * It provides a command-line interface for interacting with the AI assistant.
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

import readline from 'readline';
import { agent } from './agent/agent.js';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}


async function main() {
    console.log("Welcome to Synclovis AI Assistant! (Type 'exit' to quit)\n");
    
    while (true) {
        const userInput = await askQuestion("\nHow can I help you? ");
        
        if (userInput.toLowerCase() === 'exit') {
            console.log("\nThank you for using Synclovis AI Assistant. Goodbye!");
            rl.close();
            break;
        }

        try {
            const response = await agent(userInput);
            console.log("\nAssistant:", response);
        } catch (error) {
            console.error("\nError:", error.message);
        }
    }
}


main().catch(error => {
    console.error("Fatal error:", error);
    rl.close();
}); 