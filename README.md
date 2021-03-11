# client

## Project setup

```
npm install
```

## Set google api key in src/main.js: line 11

```
// src/main.js
Vue.use(GmapVue, {
	load: {
		key: <google api key>,
		libraries: "places",
		installComponents: true,
	},
});
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
