export const getFullURL = (url: string) => {
  return url ? `${process.env.CMS_URL}${url}` : "";
};
