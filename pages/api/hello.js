export default (req, res) => {
  if (req.method === 'POST') {
    res.status(201).json({ text: 'Access with POST method' });
  } else {
    const { id } = req.query;
    res.status(200).json({ text: id ? `Hello ${id}` : 'Hello' });
  }
};
