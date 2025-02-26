export const getFullURL = (url: string) => {
  return `${process.env.CMS_URL}${url}`;
};
