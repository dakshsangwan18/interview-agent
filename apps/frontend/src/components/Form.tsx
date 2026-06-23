import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Form() {
    return <div className="h-screen w-screen flex justify-center items-center ">
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      AI Interview kickstart
    </h2>
        <div className="p-2">
          <Input placeholder="Linkedin URL" />
        </div>
        <div className="p-2">
          <Input placeholder="GitHub URL" />
        </div>
        <div className=" flex justify-center p-4">
          <Button> Start Interview</Button>
        </div>
      </div>
    </div>
}