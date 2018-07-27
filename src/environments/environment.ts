// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCQzfOBVdkxzjnVJSDt0Vl7HhYeL4rPIUw',
    authDomain: 'fitness-tracker-e2ec7.firebaseapp.com',
    databaseURL: 'https://fitness-tracker-e2ec7.firebaseio.com',
    projectId: 'fitness-tracker-e2ec7',
    storageBucket: 'fitness-tracker-e2ec7.appspot.com',
    messagingSenderId: '376473228551'
  }
};
