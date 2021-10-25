import { graphql } from "@octokit/graphql";

const REPO_QUERY = `
  {
    repository(owner: "octokit", name: "graphql.js") {
      issues(last: 3) {
        nodes {
          title
        }
      }
    }
  }
`

const GH_TOKEN = process.env.GH_TOKEN
if (!GH_TOKEN) {
  throw new Error('GH_TOKEN must be defined')
}

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${GH_TOKEN}`,
  },
});

const { repository } = await graphqlWithAuth(REPO_QUERY);

console.log(JSON.stringify(repository, null, 4))
