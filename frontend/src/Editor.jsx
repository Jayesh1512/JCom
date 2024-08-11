import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import axios from "axios";

const IDEditor = (props) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  axios.defaults.withCredentials = true;

  let defaultCode;
  if(props.language == 'java'){
    defaultCode = 
    `class Main{
      public static void main(String []args){
        System.out.println("My First Java Program.");
      }
}`
  }
  const [code, setCode] = useState(defaultCode);

  const handleRunCode = async () => {
    try {
      const response = await axios.post("https://jcom.onrender.com/compile", {
        code,
        input,
        lang: props.language || "java",
      });
      console.log(response);
      setOutput(response.data);
    } catch (error) {
      console.error("Error running code:", error);
      setOutput("Error running code");
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="max-md:flex-col flex flex-row gap-2">
          {/* code editor */}
          <span className="w-full">
            <Editor
              height="80vh"
              language={props.language || "java"} // Assuming a default language if props.language is not provided
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value)}
              options={{
                fontSize: 18,
              }}
              className="border-2 px-4 py-4 border-gray-500/20 rounded"
            />
            <button className="bg-green-500 rounded px-3 py-1 mt-1 navbar" onClick={handleRunCode}>
              Compile
            </button>
          </span>
          <div className="w-2/3 flex flex-col gap-2">
            <div className="border-2 rounded flex flex-col border-gray-500/20 h-1/2">
              <p className="text-white px-10 py-2 navbar">Input</p>
              <textarea
                name=""
                id=""
                placeholder="Enter Input"
                className="mx-4 mb-2 placeholder-gray-500/75 text-white bg-transparent resize-none h-full p-4"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            <div className="border-2 rounded flex flex-col border-gray-500/20 h-1/2">
              <p className="text-white px-10 py-2 navbar">Output</p>
              <textarea
                name=""
                id=""
                className="mx-4 mb-2 text-white bg-transparent resize-none h-full p-4"
                value={output}
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDEditor;
