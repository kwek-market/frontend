// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { userFetcher } from "@/helpers";
import { CATEGORIES } from "@/store/category/categories.queries";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = "";
  const variables = "";
  try {
    const data = await userFetcher(CATEGORIES);
    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: err.message });
  }
  res.status(200).json({ name: "John Doe" });
};
