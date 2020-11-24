import downloadImg from "./downloadImg";
import getPeople from "./getPeople";
import {postHeader} from "./postHeader";

export const apiMap = new Map();

apiMap.set("/getPeople",getPeople)
apiMap.set("/downloadImg",downloadImg)
apiMap.set("/postHeader",postHeader)
