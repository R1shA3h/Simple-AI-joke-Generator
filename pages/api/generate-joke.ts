import Anthropic from '@anthropic-ai/sdk';

export default async function (req, res) {
  console.log(req.body)
  try {
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_KEY
    });

    const answer = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [
        {"role": "user", "content": reviewPrompt(req.body.topic)}
      ]
    });
    res.status(200).json({ result: answer.content[0].text });
  }
  catch (e) {
    console.log(e)
    res.status(503).json({});
  }
}

function reviewPrompt(jokeTopic) {
  return `Topic: Breakfast
  Write one joke on the given topic:
  Topic: ${jokeTopic}`;
}







