import { createEffect, createSignal } from "solid-js";
import { WebviewWindow } from "@tauri-apps/api/window";

export function TogglePinned() {
  const [pinned, setPinned] = createSignal(false);

  let webview: WebviewWindow | null = null;
  const setWindowPinned = async (pinned: boolean) => {
    webview = await WebviewWindow.getFocusedWindow();
    if (webview) {
      webview.setAlwaysOnTop(pinned);
    }
  };
  createEffect(() => {
    setWindowPinned(pinned());
  });

  return (
    <div class="flex items-center justify-center">
      <label class="swap">
        <input
          type="checkbox"
          checked={pinned()}
          onChange={(e) => setPinned(e.currentTarget.checked)}
        />
        <svg
          class="swap-off fill-current opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="grey"
            d="M7 2h10v2H7zM5 6V4h2v2zm0 8H3V6h2zm2 2H5v-2h2zm2 2H7v-2h2zm2 2H9v-2h2zm2 0v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm0-8h2v8h-2zm0 0V4h-2v2zm-5 2h-4v4h4z"
          />
        </svg>
        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M16.735 2.835a2 2 0 0 0-2.615-.186l-2.913 2.185a9 9 0 0 1-4.127 1.71l-2.177.31c-.73.105-1.265.891-.913 1.662c.331.723 1.385 2.629 4.36 5.72l-4.178 4.178a1 1 0 1 0 1.414 1.414l4.178-4.178c3.091 2.975 4.997 4.029 5.72 4.36c.77.352 1.557-.183 1.661-.913l.311-2.177a9 9 0 0 1 1.71-4.127L21.35 9.88a2 2 0 0 0-.186-2.615zM15.32 4.25l4.43 4.43l-2.184 2.914a11 11 0 0 0-2.09 5.044l-.143 1.001c-.98-.624-2.603-1.837-4.869-4.103C8.2 11.27 6.986 9.648 6.362 8.668l1-.143a11 11 0 0 0 5.045-2.09z"
            />
          </g>
        </svg>
      </label>
    </div>
  );
}