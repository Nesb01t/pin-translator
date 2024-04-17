import { createSignal } from "solid-js";
import { _greet } from "./invoke/greet";
import { translate } from "./api/translate";
import { TogglePinned } from "./components/toggle-pinned";

function App() {
  // const [greetMsg, setGreetMsg] = createSignal("");
  const [text, setText] = createSignal<string>("Try it");
  const [textAfterTranslated, setTextAfterTranslated] = createSignal<string>(
    "Click the pin for the first translate.",
  );

  // async function greet() {
  //   setGreetMsg(await _greet(name()));
  // }

  const trans = async () => {
    const ans = await translate(text());
    setTextAfterTranslated(ans);
  };
  return (
    <div class="px-6 py-4 rounded flex flex-col gap-2 w-[270px]">
      <div class="flex items-center gap-2">
        <TogglePinned />
        <div class="text font-semibold opacity-80">Pin-Translator</div>
        <div class="text-xs opacity-30">by nesb01t</div>
      </div>

      <div class="flex items-center gap-2 mx-[-4px]">
        <label class="input input-sm input-bordered flex items-center gap-2 w-full">
          <input
            type="text"
            class="grow"
            placeholder="Search"
            value={text()}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70 cursor-pointer"
            onClick={trans}
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div class="flex items-center text-sm opacity-80">
        {textAfterTranslated()}
      </div>
    </div>
  );
}

export default App;
