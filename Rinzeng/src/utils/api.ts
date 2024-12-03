import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateWordExample(word: string): Promise<string> {
  try {
    // If API key is not available, return a default example
    if (!API_KEY) {
      return `The ${word.toLowerCase()} butterfly flew through the garden.`;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `Generate a simple, child-friendly example sentence using the word "${word}".`
      }],
      temperature: 0.7,
      max_tokens: 50
    });

    return response.choices[0].message.content || 'Example not available.';
  } catch (error) {
    console.error('Error generating word example:', error);
    // Fallback response if API call fails
    return `The ${word.toLowerCase()} butterfly flew through the garden.`;
  }
}

export async function analyzeWriting(story: string): Promise<string> {
  try {
    // If API key is not available, return encouraging feedback
    if (!API_KEY) {
      return "Great job writing! Your story shows creativity and imagination. Keep practicing!";
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a supportive writing teacher for children with autism. Provide encouraging, specific feedback that highlights strengths and gently suggests improvements."
      }, {
        role: "user",
        content: `Please analyze this story and provide feedback: "${story}"`
      }],
      temperature: 0.7,
      max_tokens: 150
    });

    return response.choices[0].message.content || 'Great work! Keep writing and expressing yourself.';
  } catch (error) {
    console.error('Error analyzing writing:', error);
    // Fallback response if API call fails
    return "Great job writing! Your story shows creativity and imagination. Keep practicing!";
  }
}