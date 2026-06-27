import "../styles/globals.css";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Form } from "./components/Form";
import { useState } from "react";
import { Interview } from "./components/Interview";
import { Result } from "./components/Result";
import { Toaster } from "sonner";

export function App() {
  const [page, setPage] = useState<"form" | "interview" | "results">("form");

  return (
    <div>
      {page == "form" && <Form />}
      {page == "interview" && <Interview />}
      {page == "results" && <Result />}
      <Toaster position="bottom-right"/>
    </div>
  );
}

export default App;
