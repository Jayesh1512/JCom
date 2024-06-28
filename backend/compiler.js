import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export const java = async (data) => {
  try {
    // Create Main.java file
    fs.writeFileSync("./java/Main.java", data.code);
    console.log("Main.java created");

    // Write input data into input.txt
    fs.writeFileSync("./java/input.txt", data.input);
    console.log("input.txt created");

    // Compile Main.java
    await execAsync("javac java/Main.java");
    console.log("Main.java compiled");

    // Execute the Java program with input redirection and output redirection
    await execAsync("java -cp java Main < java/input.txt > java/output.txt");
    console.log("Execution completed, check output.txt for the result");
  } catch (error) {
    console.error(error.message);

    // Write the error message to output.txt
    fs.writeFileSync("./java/output.txt", error.message, { encoding: "utf8" });
  } finally {
    // Read output.txt after execution completes or in case of error
    let output = "";
    try {
      output = fs.readFileSync("./java/output.txt", {
        encoding: "utf8",
        flag: "r",
      });
    } catch (readError) {
      console.error("Error reading output.txt:", readError.message);
    }

    // Delete all files created
    const directory = "./java";
    const files = fs.readdirSync(directory);
    for (const file of files) {
      fs.rmSync(path.join(directory, file), {
        recursive: true,
        force: true,
      });
    }
    console.log("All contents deleted");

    return output;
  }
};
