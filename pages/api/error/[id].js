// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const {id: code} = req.params;  
    res.status(code || 200).end();
  }
  