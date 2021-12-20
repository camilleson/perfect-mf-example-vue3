# module-federation-vue3-demo

## develoment step

- create 4 vue3 default projects with Vue Cli
- update modules versions in all projects:

```
"@vue/cli-plugin-babel": "5.0.0-rc.1",
"@vue/cli-plugin-eslint": "5.0.0-rc.1",
"@vue/cli-service": "5.0.0-rc.1",
"eslint": "^7.0.0",
```

- create `vue.config.js`in all projects
- call https://fakestoreapi.com/ (thanks to them)
- add ` "module-federation-plugin": "^0.7.0"` and `yarn`
- add module federation confi in `vue.config.js`
- boostrap `main.js`in main app

## Setup

- instal: `yarn`
- dev mode: `yarn start`
- build: `yarn build`
- serve dist: `yarn serve`
