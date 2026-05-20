const cache = new Map();
const hitBuffer = new Map();

const getFromCache = (short_code) => {
    const result = cache.get(short_code) || null;
    if(result){
        hitBuffer.set(short_code, (hitBuffer.get(short_code) || 0)+ 1);
    }
    return result;
};


