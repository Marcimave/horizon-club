#!/data/data/com.termux/files/usr/bin/bash

cd ~/storage/shared/horizon-club || exit

while true
do
    if [[ -n $(git status --porcelain) ]]; then
        echo "Changements détectés..."

        git add .

        git commit -m "Auto Sync $(date '+%Y-%m-%d %H:%M:%S')"

        git push origin master:main --force

        echo "Synchronisation terminée."
    else
        echo "Aucun changement."
    fi

    sleep 120
done
