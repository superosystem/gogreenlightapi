function samplePromise(){
    return Promise.resolve("Agus");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();
