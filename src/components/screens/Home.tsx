import { GithubIcon } from "lucide-react";
import { UrlForm } from "../form/url-form";
import { ModeToggle } from "../mode-toggle";
import { Table } from "../table/Table";

export const Home = () => {
  return (
    <div className="flex flex-col container max-w-3xl max-h-screen  ">
      <div className="flex items-center text-center justify-between">
        <h2 className="text-2xl font-bold">🅉🄻🅂</h2>
        <ModeToggle />
      </div>

      <div className="flex flex-1 gap-8 md:gap-16 flex-col items-center justify-center min-h-[85vh] w-full md:my-4">
        <UrlForm />
        <Table />
      </div>
      <div className="flex justify-center gap-4 text-center">
        <p>Made with ❤️ by Emanuel Gómez.</p>{" "}
        <a
          href="https://github.com/cajereta"
          target="_blank"
          aria-label="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
