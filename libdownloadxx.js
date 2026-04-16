export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  res.status(200).json({
    "download": "https://raw.githubusercontent.com/SKYFFXZ/mod-libs/main/libcubanmods.so"
  });
}
