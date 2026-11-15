const fs = require('fs');
const repos = ['zero-harm-ai-safety-system', 'Bike-Without-Number-Plate', 'Bluestock', 'Predict-Restaurant-Ratings', 'Heart-Disease-Machine-Learing', 'Pre-chain-snatching'];

async function fetchReadmes() {
  const result = {};
  for(const repo of repos) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/iakash2701/${repo}/main/README.md`);
      if(res.ok) {
        result[repo] = await res.text();
      } else {
        const res2 = await fetch(`https://raw.githubusercontent.com/iakash2701/${repo}/master/README.md`);
        result[repo] = res2.ok ? await res2.text() : 'No README found';
      }
    } catch(e) { 
      result[repo] = e.toString(); 
    }
  }
  fs.writeFileSync('readmes.json', JSON.stringify(result, null, 2));
}

fetchReadmes();
