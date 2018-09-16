cls
cd LitAwardsAngular
call ng build --prod --build-optimizer
cd ..
robocopy LitAwardsAngular/dist artefacts/dist /MIR /XD
robocopy LitAwardsAngular/dist LiteraryAwardsCordova/www/dist  /MIR /XD