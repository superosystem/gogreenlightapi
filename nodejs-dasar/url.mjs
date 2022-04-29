import {URL} from "url";

const med = new URL("https://www.medium.com/gusrylmubarok");

med.host = "www.medium.com";
med.searchParams.append("status", "premium");

console.info(med.toString());
console.info(med.href);
console.info(med.protocol);
console.info(med.host);
console.info(med.pathname);
console.info(med.searchParams);
