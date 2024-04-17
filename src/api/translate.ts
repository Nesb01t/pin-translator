import axios from "axios";

export async function translate(text: string): Promise<string> {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=zh-CN&q=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(url);
    const translatedText = response.data[0][0][0];
    return translatedText;
  } catch (error) {
    console.error("Translation failed:", error);
    throw error;
  }
}
