export const request = async (url = "") => {
  //  const baseUrl = "https://diplooma-server.vercel.app/";
  // const baseUrl = "http://localhost:3000/";

  try {
    const result = await fetch(url);

    return result.json();
  } catch (e) {
    console.error(e);
  }
};
