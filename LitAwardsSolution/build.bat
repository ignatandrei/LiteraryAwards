cls
cd LitAwardsAngular
rem call ng build --prod --build-optimizer --base-href=/LiteraryAwards/
call ng build --prod --build-optimizer 
node node_modules\angular-cli-ghpages\bin\angular-cli-ghpages

cd ..
robocopy LitAwardsAngular/dist artefacts/dist /MIR /XD
robocopy LitAwardsAngular/dist LiteraryAwardsCordova/www/dist  /MIR /XD
pause
exit