import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios"; // Import Axios
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const MonacoEditor = () => {
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("// Start coding here...");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleRunCode = async () => {
    try {
      const response = await axios.post("http://localhost:8000/compile", {
        code,
        input,
        lang: language,
      });
      console.log(response);
      setOutput(response.data);
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-lg-8 mb-3">
          <div className="d-flex justify-content-between mb-2 bg-dark rounded p-2">
            <div className="col-12 col-md-4">
              <label className="visually-hidden" htmlFor="inlineFormSelectPref">
                Preference
              </label>
              <select
                className="form-select"
                id="inlineFormSelectPref"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="java" default>Java</option>
                <option value="javascript">JavaScript</option>
                <option value="cpp">Cpp</option>
                <option value="python">Python</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                id="run"
                className="btn btn-success"
                onClick={handleRunCode}
              >
                <i className="bi bi-play-fill">Compile</i>
              </button>
            </div>
          </div>
          <Editor
            height="500px"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />
        </div>
        <div className="col-lg-4 d-flex flex-column rounded bg-dark p-3">
          <div className="flex-grow-1 mb-3">
            <label htmlFor="Input" className="text-light mb-2">
              Input
            </label>
            <textarea
              id="input"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex-grow-1">
            <label htmlFor="Output" className="text-light mb-2">
              Output
            </label>
            <textarea
              id="output"
              className="form-control"
              value={output}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonacoEditor;
