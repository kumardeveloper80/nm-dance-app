import shopModel from "../models/shop.js"

export const addShop = async (req, res) => {
  const { title, isPurchased = false } = req.body;
  const data = await shopModel.create({
    title: title,
    productImage: req.files['productImage'][0].path,
    cardImage: req.files['cardImage'][0].path
  })
  res.send(data)
}

export const getShop = async (req, res) => {
  try {
    // Fetch all products from the database
    const data = await shopModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}