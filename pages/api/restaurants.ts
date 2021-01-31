import { NextApiRequest, NextApiResponse } from 'next';
import Data from './discovery_page.json';

const getRestaurants = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
      const restaurants = Data.sections as any;
      res.status(200).json(restaurants)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
  
  export default getRestaurants