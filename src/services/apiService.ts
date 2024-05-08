import { toast } from "svelte-sonner";

const updateLanguageApi = async (lang: string) => {
  try {
    const response = await fetch(`/api/set-language?lang=${lang}`);
    const data = await response.json();
    if (data.status !== 200) throw new Error();

    toast.success(data.message);
  } catch {
    toast.error("failed to update the language");
  }
};
const apiService = {
  updateLanguageApi,
};
export default apiService;
