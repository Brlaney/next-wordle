import type { NextApiRequest, NextApiResponse } from 'next';
import { words } from '@/lib/data/words';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };

  const theIndex = parseInt(id) - 1;
  if (theIndex > 0 && theIndex < 660) {
    res.status(200).json(words.at(parseInt(id) - 1));
  } else {
    res.status(400);

    return "Specified index is not within range."
  }
};
