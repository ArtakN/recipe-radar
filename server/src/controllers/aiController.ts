import { Request, Response } from 'express';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { AIBehaviour } from '../models/AiBehaviour';

export async function getAiHistory (req:Request, res:Response) {
  try {
    const { recipe } = req.params;
    //! we cant call this route without param
    // if (!recipe) return res.status(400).json('Missing Recipe');
    const result = streamText({
      model: google('gemini-2.5-flash-lite'),
      messages: [
        {role:"system", content:AIBehaviour},
        {role:"user", content:recipe}
      ]
    });

    result.pipeTextStreamToResponse(res);
  } catch (error) {
    console.error('Error getting history:', error);
    res.status(500).json({ error: 'Failed to delete favorite' });
  }
};