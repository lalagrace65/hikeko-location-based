import { mongooseConnect } from '@/lib/mongoose';
import { Trails } from '@/models';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await mongooseConnect();
      const trails = await Trails.find({});  // Fetch trails from your database
      res.status(200).json(trails);  // Send a JSON response
    } catch (error) {
      console.error('Error fetching trails:', error);
      res.status(500).json({ message: 'Internal Server Error' });  // Send error as JSON
    }
  } else {
    // Handle invalid HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
