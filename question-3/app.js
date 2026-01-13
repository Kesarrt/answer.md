// app.js
import os from 'os';
import { writeFile, readFile, appendFile, unlink } from 'fs/promises';
import { join } from 'path';

// Helper function to run the tasks
async function main() {
    try {
        console.log("--- PART A: OS Module ---");
        
        // 1. Print Free Memory (in bytes)
        console.log(`Free Memory: ${os.freemem()} bytes`);
        
        // 2. Print Total Number of CPU Cores
        console.log(`Total CPU Cores: ${os.cpus().length}`);

        console.log("\n--- PART B: File System Operations ---");

        // 1. Create data.txt with content "Hello World"
        await writeFile('data.txt', 'Hello World');
        console.log("✔ Created data.txt");

        // 2. Create Readme.md with content "## This is first line in Readme"
        await writeFile('Readme.md', '## This is first line in Readme');
        console.log("✔ Created Readme.md");

        // 3. Read data.txt and print content
        const dataContent = await readFile('data.txt', 'utf-8');
        console.log(`\n📄 Content of data.txt: "${dataContent}"`);

        // 4. Append text to data.txt on a new line
        // We add '\n' to ensure it goes to the next line
        await appendFile('data.txt', '\nThis is second line');
        console.log("✔ Appended text to data.txt");

        // 5. Delete Readme.md
        await unlink('Readme.md');
        console.log("✔ Deleted Readme.md");

        console.log("\n✅ All operations completed successfully!");

    } catch (error) {
        console.error("❌ An error occurred:", error.message);
    }
}

// Execute the function
main();