const PUBLIC_KEY = 'VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g'
const PRIVATE_KEY = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR";
export const createAsignature = (date: string) => {
  const dataAsignature = `${PRIVATE_KEY},${PUBLIC_KEY},${date}`
  const hash = CryptoJS.SHA256(dataAsignature);
  return hash.toString(CryptoJS.enc.Hex);
}