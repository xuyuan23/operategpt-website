# operategpt-website

Website of [OperateGPT](http://operategpt.cn).

## How to develop
- The default service starts on port `3000`, visit `localhost:3000`
```commandline

# clone current project firstly!
# install docusaurus dependencies, generate node_modules folder.
sudo yarn install

# build project, generate .docusaurus folder.
sudo npm run build 

# launch project.
npm run serve
```


- If you want to specify the port to 3001, you can launch as follows.
```commandline
npm start -- --port 3001
```
