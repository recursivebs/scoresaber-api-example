import fetch from 'node-fetch'
fetch('https://scoresaber.com/api/player/76561198845827102/scores?page=1&limit=100&ranked=true')
    .then(res => res.json())
    .then(console.log)
