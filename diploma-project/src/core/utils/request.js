export const request = async (url = "") => {
  const baseUrl = "https://diplooma-server.vercel.app";
  try {
    const result = await fetch(`${baseUrl}${url}`);

    return result.json();
  } catch (e) {
    console.error(e);
  }
};
