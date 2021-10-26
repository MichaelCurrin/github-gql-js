# GitHub GraphQL JS
> Starter template for querying GitHub's GQL API using Node

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/github-gql-js?include_prereleases=&sort=semver&color=blue)](https://github.com/MichaelCurrin/github-gql-js/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with Node.js](https://img.shields.io/badge/Node.js->=12-blue?logo=node.js&logoColor=white)](https://nodejs.org)
[![Package - @octokit/graphql](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/github-gql-js/@octokit/graphql?color=blue)](https://www.npmjs.com/package/@octokit/graphql)


## About

This repo demonstrates how to query GitHub's GraphQL API using Node.

The `graphql` NPM package is used. The content is based on the documentation here:

- [octokit/graphql.js](https://github.com/octokit/graphql.js)
    > GitHub GraphQL API client for browsers and Node

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/MichaelCurrin/github-gql-js/generate)
    
</div>


## Installation

Clone this repo.

```sh
$ git clone git@github.com:MichaelCurrin/github-gql-js.git
$ cd github-gql-js
```

Install Node.js.

Install NPM packages:

```sh
$ npm install
```


## Configuration

Create a GitHub API token with appropriate permissions

- https://github.com/settings/tokens

Copy the token value. Keep this **secret** and out of version control.

Create a dotfile based on the template. This config file will be ignored by Git.

```sh
$ cp .env.template .env
```

Paste your token in the file.


## Usage

```sh
$ make run
```


## GitHub APIS and tokens

GitHub GQL queries require an  **API** token, unlike the REST API which does not.

Avoid using the **browser** to do your GQL queries - you'll risk exposing your token to others on the internet.

Rather run your logic using **Node** on a server or in a serverless function (AWS Lambda or [Netlify Functions][]).

[Netlify Functions]: https://michaelcurrin.github.io/dev-resources/resources/ci-cd/netlify/functions.html


## Related

- https://github.com/MichaelCurrin/github-gql-go
- https://github.com/MichaelCurrin/github-reporting-py


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
