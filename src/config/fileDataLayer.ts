import fs from "fs/promises";

export const getFileData = async <T>(resurce: string): Promise<T[] | void> => {
  try {
    const strData: string = await fs.readFile(
      `${__dirname}/../../data/${resurce}.json`,
      "utf-8"
    );
    const parstData: T[] = JSON.parse(strData);
    return parstData;
  } catch (err) {
    console.log(err);
  }
};

export const saveFileData = async <T>(
  resurce: string,
  data: T[]
): Promise<boolean> => {
  try {
    const stringifyData: string = JSON.stringify(data,null,2);
    await fs.writeFile(
      `${__dirname}/../../data/${resurce}.json`,
      stringifyData,
      {
        encoding: "utf-8",
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
