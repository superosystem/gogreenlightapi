import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Agus\n");
writer.write("Syahril\n");
writer.write("Mubarok\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});
