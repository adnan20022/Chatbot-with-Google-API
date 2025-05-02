function getAnswer(topic) {
    const answers = {
      html: "HTML stands for HyperText Markup Language. It's used to structure web content.",
      css: "CSS is used to style the HTML elements visually (colors, layout, fonts).",
      js: "JavaScript makes web pages interactive (like popups, sliders, forms, etc).",
      python: "Python is a powerful, beginner-friendly programming language used in many areas.",
      ai: "AI stands for Artificial Intelligence. It enables machines to mimic human intelligence."
    };
  
    const responseBox = document.getElementById('responseBox');
    responseBox.innerHTML = answers[topic] || "❌ Unknown topic selected.";
  }
  