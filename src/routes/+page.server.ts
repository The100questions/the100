export const load = async (event) => {
  const response = await event.fetch("/api/get-questions-list");
  if (response.status === 200) {
    const data = await response.json();
    return {
      questions: data,
    };
  }
};
