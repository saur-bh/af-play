import { config } from 'dotenv';
import { testConfig } from './testConfig'; // Import your testConfig

// Load environment variables from .env file
config();

async function globalSetup(): Promise<void> {
    // Get the environment variable for the base URL and environment
    const ENV = process.env.ENV || 'qa'; // Default to 'qa' if not provided
    const BASE_URL = process.env.BASE_URL; // New variable for base URL

    // Validate the environment variable
    if (![`qa`, `prod`, `qaApi`, `prodApi`].includes(ENV)) {
        console.log(`Please provide a correct environment value. Defaulting to 'qa'.`);
    }

    // If BASE_URL is not provided, use the one from testConfig based on ENV
    const baseURL = BASE_URL || testConfig[ENV];
    console.log(`Base URL set to: ${baseURL}`);

    // You can set the base URL in a global variable or directly in the config
    // For example, you can set it in a global variable if needed
    // global.baseURL = baseURL; // Uncomment if you want to use it globally
}

export default globalSetup;