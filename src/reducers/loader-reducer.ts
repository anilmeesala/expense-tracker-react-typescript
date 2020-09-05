import {LOADER_END, LOADER_START} from "../actions/loader-constants";

const loaderReducer = (requestCount:number=0,action:any) => {
    switch (action.type) {
        case LOADER_START:
            return requestCount=requestCount+1;
        case LOADER_END:
            return requestCount=requestCount-1;
        default:
            return requestCount;
    }
};

export default loaderReducer;

