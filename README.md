# GitHub GraphQL JS
> Starter template for querying GitHub's GQL API using Node


Built using:

- Node
- graphql.js https://github.com/octokit/graphql.js
    > GitHub GraphQL API client for browsers and Node


## Installation

```sh
$ make install
```

## Configuration

Create a dotfile:

```sh
$ cp .env.template .env
```

Generate a GitHub dev token and put it in file.


## Usage

```sh
$ make run
```


## How to use tokens

GitHub GQL queries require an  **API** token, unlike the REST API which does not.

Avoid using the **browser** to do your GQL queries - you'll risk exposing your token to others on the internet.

Rather run your logic using **Node** on a server or in a serverless function (AWS Lambda or [Netlify Functions][]).

[Netlify Functions]: https://michaelcurrin.github.io/dev-resources/resources/ci-cd/netlify/functions.html


## Related

- https://github.com/MichaelCurrin/github-gql-go
- https://github.com/MichaelCurrin/github-reporting-py


## License 

MIT
