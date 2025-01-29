import ImageKit from "imagekit";
const imagekit = new ImageKit({
  publicKey: "public_Ryhaj7Jmxl6DKc74wnx7V5evOyI=",
  privateKey: "private_eJ4EjkR88csehxVwOp38TGdD5Rk=",
  urlEndpoint: "https://ik.imagekit.io/mafhi",
});

async function getList(path) {
  try {
    const response = await imagekit.listFiles({
      path: path,
      sort: "ASC_NAME",
    });
    const simplifiedList = response.map((item) => ({
      url: item.url,
      thumbnail: item.thumbnail,
    }));
    return simplifiedList;
  } catch (error) {
    console.log(error);
  }
}

export { getList };
