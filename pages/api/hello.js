import dbConnect from "../../utils/dbConnect";

dbConnect();

//eslint-disable-next-line
export default async (req, res) => {
  res.json({ test: "test" });
};
