# riff Sample: Node Square

A sample JavaScript function that multiplies a number by itself, returning the squared value.

## Deployment

1.  Install riff.

    These instructions assume riff v0.2.0 or later. See riff's [Getting Started](https://projectriff.io/docs/getting-started/) guide. Skip if you already have riff running.

2.  Create the function.

    This assumes that the default namespace was initialized with credentials for your `DOCKER_ID` on [Docker Hub](https://docs.docker.com/docker-hub/).

    ```bash
    riff function create square \
    --git-repo https://github.com/projectriff-samples/node-square  \
    --artifact square.js \
    --image $DOCKER_ID/square \
    --verbose
    ```

4.  Invoke the function.

    ```bash
    riff service invoke square --text -- -w '\n' -d 7
    ```

    Result:

    ```txt
    curl http://localhost:31380/ -H 'Host: square.default.example.com' -H 'Content-Type: text/plain' -w '\n' -d 7
    49
    ```

    Change the number 7 to another number to see its square.
