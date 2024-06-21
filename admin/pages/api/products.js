import { mongooseConnect } from "@/lib/moongose";
import { Product } from "@/models/Product";

export default function handler(req, res) {
  mongooseConnect()
    .then(() => {
      const { method } = req;

      if (method === "POST") {
        const { title, description, price } = req.body;

        Product.create({ title, description, price })
          .then((product) => {
            res.status(201).json(product);
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      } else {
        res.status(405).json({ error: "Method not allowed" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
