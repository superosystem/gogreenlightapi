function samplePromise(){
    return Promise.resolve("Agus");
}

const name = await samplePromise();
console.info(name);
