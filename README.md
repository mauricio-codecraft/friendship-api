# FriendShip

Friendship PWA with ES7 syntax, serverless-offline, linting, environment variables, and unit test support. Using [Serverless Stack](http://serverless-stack.com) guide.

Uses the [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) plugin (an extension of the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin) and the [serverless-offline](https://github.com/dherault/serverless-offline) plugin. It supports:

- **Generating optimized Lambda packages with Webpack**
- **Use ES7 syntax in your handler functions**
  - Use `import` and `export`
- **Run API Gateway locally**
  - Use `serverless offline start`
- **Support for unit tests**
  - Run `npm test` to run your tests. Jest is the testing framework adopted
  [Reference for mocking with Sinon](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Lint your code with ESLint**
- **Add environment variables for your stages**
- **No need to manage Webpack or Babel configs**

---

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)


### Demo

A demo version of this service is hosted on AWS - [`https://z6pv80ao4l.execute-api.us-east-1.amazonaws.com/dev/hello`](https://z6pv80ao4l.execute-api.us-east-1.amazonaws.com/dev/hello)


### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Install PostgreSQL](https://www.postgresql.org/download/linux/ubuntu/)

### Installation

To create a new Serverless project.

``` bash
$ git clone
```

Enter the new directory

``` bash
$ cd friendship-api
```

Install the Node.js packages

``` bash
$ npm install
```

Start PostgreSQL
``` bash
$ sudo pg_ctlcluster 12 main start
$ sudo -u postgres psql
```

Change default password:
``` bash
postgres=# ALTER USER postgres PASSWORD 'postgres';
```

### Running migrations

This api was created based sequelize migrations - ['https://www.serverless.com/plugins/serverless-sequelize-migrations']

Create migration file:
``` bash
sls --verbose  migrations create -n create-note
```

Run all migrations:
``` bash
sls --verbose  migrations up --stage dev
```

### Usage

To run a function on your local

``` bash
$ serverless invoke local --function hello
```

To run a mock of a function

``` bash
$ serverless invoke local --function charge --path mocks/note/charge.json
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

#### Running Tests

Run your tests using

``` bash
$ npm test
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

#### Environment Variables

To add environment variables to your project

1. Rename `env.example` to `.env`.
2. Add environment variables for your local stage to `.env`.
3. Uncomment `environment:` block in the `serverless.yml` and reference the environment variable as `${env:MY_ENV_VAR}`. Where `MY_ENV_VAR` is added to your `.env` file.
4. Make sure to not commit your `.env`.

#### Linting

We use [ESLint](https://eslint.org) to lint your code via the [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) plugin.

You can turn this off by adding the following to your `serverless.yml`.

``` yaml
custom:
  bundle:
    linting: false
```

To [override the default config](https://eslint.org/docs/user-guide/configuring), add a `.eslintrc.json` file. To ignore ESLint for specific files, add it to a `.eslintignore` file.

### Support

- Open a [new issue](https://github.com/AnomalyInnovations/serverless-nodejs-starter/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!

---

This repo is maintained by [Anomaly Innovations](https://anoma.ly); makers of [Seed](https://seed.run) and [Serverless Stack](https://serverless-stack.com).
