async function getAnswer() {
  const topic = document.getElementById("topicSelect").value;
  const responseBox = document.getElementById("responseBox");

  const prompt = `Explain the topic: ${topic}`;
  const apikey = "AIzaSyDrxowivr2QY1ksWYiawCSj1-oeBIdtQsk";
  try {
    const apiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await apiResponse.json();
    responseBox.innerHTML =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "⚠️ No response from AI.";
  } catch (error) {
    console.error("API Error:", error);
    responseBox.innerHTML = "❌ Error fetching AI response.";
  }
}
