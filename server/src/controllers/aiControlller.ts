import { Request, Response } from 'express';
import { google } from '@ai-sdk/google';
import { createUIMessageStream, pipeUIMessageStreamToResponse, streamText } from 'ai';
import { AIBehaviour } from '../models/AiBehaviour';

export async function getAiHistory (req:Request, res:Response) {
  try {
    const { recipe } = req.params;
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