require("dotenv").config();

const generateCode = (value) => {
  let output = "";
  value = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("");

  let merge = value + process.env.SECRET_GENERATE;
  let length = merge.length;
  //abcphongtro123
  for (let i = 0; i < 3; i++) {
    const index =
      i === 2
        ? Math.floor(merge.length / 2 + length / 2)
        : Math.floor(merge.length / 2);
    output += merge.charAt(index);
    length = index;
  }
  return `${output}`;
};

export default generateCode;
