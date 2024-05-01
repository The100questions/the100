export const load = async (event) => {
    const response = await event.fetch("/api/get-questions-list");
    const data = await response.json()
    return {
        questions: data
    };
};