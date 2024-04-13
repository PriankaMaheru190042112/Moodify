
# Moodify

Moodify is a web application built using React JS, Express JS, and Tailwind CSS. It leverages the OpenAI API, specifically GPT-4, to provide music recommendations based on user input regarding their mood and choice of music.


## Features

- User Input: Users can input their current mood and select their genre and activity.
- AI Music Suggestion: The application utilizes the OpenAI API to generate music suggestions tailored to the user's mood and musical preferences.



## Installation
Frontend:
Install my-project with npm

```bash
  cd my-project
  npm install 
  npm start
```

BackEnd:
For Backend we used Express JS framework 

Express JS
```bash
  cd my_project
  npm init -y
  npm install express
  node server.js
```


## API Reference

```http
  GET /api/music
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `OPENAI_API_KEY` | `string` | **Required**. Your API key |





