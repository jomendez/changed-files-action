
# Install, Build, Lint, Test, and Package

Make sure to do the following before checking in any code changes.

```bash
$ yarn
$ yarn all
```

# Test
```bash
yarn test
```

# Access tocken for private repos

example of workflow yml file

```
jobs:

  test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:        
          # Private repo action
          repository: jomendez/changed-files-action-private  # private repo within the same organization
          ref: master 
          token: ${{ secrets.MY_ACCESS_TOKEN }} # `MY_ACCESS_TOKEN` is a secret that contains your PAT to clone that private repo
      - name: Run the private action
        uses: ./
```
# How to create a Personal Access Token (PAT)

[https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

[https://stackoverflow.com/questions/57685065/how-to-set-secrets-in-github-actions](https://stackoverflow.com/questions/57685065/how-to-set-secrets-in-github-actions)