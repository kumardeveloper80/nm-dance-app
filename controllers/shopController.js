import shopModel from "../models/shop.js"

export const shop = async (req, res) => {
  const { title, isPurchased } = req.body;
  const data = await shopModel.create({
    title: title,
    isPurchased: JSON.parse(isPurchased),
    productImage: req.files['productImage'][0].path,
    cardImage: req.files['cardImage'][0].path
  })
  res.send(data)
}