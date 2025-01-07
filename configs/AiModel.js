const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "aplication/json",
  };
  
 
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic for each scene and give me result in JSON format with imagePrompt and ContentText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"videoScenes\": [\n    {\n      \"sceneNumber\": 1,\n      \"duration\": 5,\n      \"imagePrompt\": \"A realistic, wide shot of a bustling port in Alexandria, Egypt, around 200 BC. Ancient ships with large sails are docked, people in togas are unloading goods, and the Pharos lighthouse looms majestically in the background, reflecting the golden light of sunset. The atmosphere is vibrant and detailed with realistic depiction of architectural details and bustling street life.\",\n      \"contentText\": \"Around 200 BC, Alexandria was a thriving hub of trade and knowledge, its famous lighthouse a beacon of progress.\"\n    },\n    {\n      \"sceneNumber\": 2,\n      \"duration\": 5,\n      \"imagePrompt\": \"A realistic close-up of a scroll being unrolled in a dimly lit library. The text on the scroll is ancient Greek. A scholar in a simple robe is carefully reading, with spectacles perched on his nose. The scene is bathed in warm light from an oil lamp, highlighting the texture of the papyrus and the scholar’s wrinkled skin. Bookshelves filled with scrolls are subtly blurred in the background.\",\n      \"contentText\": \"Inside the great Library of Alexandria, scholars like Eratosthenes measured the Earth's circumference using simple tools.\"\n    },\n   {\n      \"sceneNumber\": 3,\n      \"duration\": 5,\n      \"imagePrompt\": \"A realistic depiction of Eratosthenes, an elderly man with a slightly receding hairline, wearing a simple tunic, standing in an open courtyard. He’s holding a stick, gazing towards the sun casting a long shadow. The courtyard is made of aged stone and has a sundial nearby. The sky is a clear blue, and the shadows are sharp, creating depth in the image. The overall lighting is bright and warm.\",\n      \"contentText\": \"He used the angle of the sun's shadows in different cities to calculate this incredible measurement.\"\n    },\n     {\n      \"sceneNumber\": 4,\n      \"duration\": 5,\n       \"imagePrompt\": \"A realistic, animated visualization of the Earth, showing a line measuring the circumference based on Eratosthenes’ calculations. The line is illustrated in gold, wrapping around the globe. The Earth is partially illuminated, with the sun visible in the distance. The continents are detailed, and the perspective is from space, showing the planet in its entirety with the curvature well defined.\",\n       \"contentText\": \"His result was astonishingly close to the actual circumference of the Earth - an amazing feat for his time.\"\n    },\n    {\n      \"sceneNumber\": 5,\n      \"duration\": 10,\n      \"imagePrompt\": \"A realistic scene showing the modern world, highlighting the interconnectedness with world map in the background with various travel methods flying ships, trains, cars. The scene is bright, colourful and filled with movement, symbolizing the global nature of modern society. The focus is on demonstrating how a foundational concept like earth’s measure laid path for the modern world and technologies.\",\n      \"contentText\": \"Today, we rely on this knowledge for GPS and travel – a testament to Eratosthenes's brilliant observation and calculations in the ancient world. His legacy lives on!\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
  