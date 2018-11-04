# riff Sample: Node Square

A sample function that multiplies a number by itself, returning the squared value.

## Deployment

1. Install Knative using riff cli, if you don't have it running already. See [Getting Started](https://projectriff.io/docs/getting-started/) for detailed steps.

2. create the function definition

    Use the riff cli to create the function by pointing to this git repo. Since there are multiple files in the directory, we need to tell `riff` which file to use as the entry point. Knative will build a docker image
    from this repo. Ensure that you are logged in to your container registry and provide the appropriate path.

   ```bash
   riff function create node square \
      --git-repo https://github.com/projectriff-samples/node-square  \
      --artifact package.json \
      --image $DOCKER_ID/square \
      --wait
   ```

3. Invoke the function

   ```bash
   riff service invoke square --text -- -w '\n' -d 8
   ```

   Will result in:

   ```txt
   curl 35.185.210.221/ -H 'Host: square.fn.example.com' -H 'Content-Type: text/plain' -w '\n' -d 8
   64
   ```

   Change the number 8 to another number to see its square.
