cp -rv ./client/build/static ./server
echo static copied

cp -v ./client/build/*.{js,json,html} ./server/templates
echo template copied