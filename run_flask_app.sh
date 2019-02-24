echo Installing react dependencies and running build
cd ./client

yarn install
yarn build

echo Copy react build to flask
cd ..

cp -rv ./client/build/static ./server
echo static copied

cp -v ./client/build/*.{js,json,html} ./server/templates
echo template copied

echo Prepering virtual environment and installing flask dependencies for python
cd ./server

python -m venv venv
echo "export FLASK_APP=app.py" >> ./venv/Scripts/activate
source ./venv/Scripts/activate
pip install -r requirements.txt

flask run
