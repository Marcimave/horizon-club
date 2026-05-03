#!/data/data/com.termux/files/usr/bin/bash

cd ~/horizon-club || exit

while true; do
  echo "🔄 Sync Git en cours..."

  git add .
  git commit -m "Auto sync $(date)" || echo "Rien à commit"

  git push origin main

  echo "⏳ Pause 2 minutes..."
  sleep 120
done
