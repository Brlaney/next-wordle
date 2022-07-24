import type { NextApiRequest, NextApiResponse } from 'next';
import { words } from '@/lib/data/words';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(words)
};
