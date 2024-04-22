## Mindcloud Step

Our website provides a simple yet powerful tool for creating and visualizing the steps section of your pipeline. With just a few pieces of information, you can input key information into a JSON file and instantly see it displayed on your screen.
Made with [Next.js](https://nextjs.org/)

### Install

```bash
npm install
```

### Usage

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Recommendation

Use _node_ version: v21.5

> To make sure that everything is running as expected before merging to the main branch this project has .github/workflows/pull_request_check.yml. So whenever opening a pull request from a branch to the main branch, the pipeline will run.

> The code will not deploy automatically to the GitHub pages after merging to the main branch, it's necessary to create a tag and push it to the origin. It needs to be release/\*, for example release/v1.0.0. For more information check .github/workflows/nextjs.yml
