import { invoke } from "@tauri-apps/api/tauri";

export async function _greet(name: string) {
  return await invoke<string>("greet", { name });
}
