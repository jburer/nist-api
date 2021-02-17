# NIST - Data over Documentation

NIST has a great set of documents that really does establish an incredible foundation
for Security and Privacy. The problem is consuming that documentation and making it
applicable to an enterprise is a herculean task.

This is my attempt to address a bit of that.

For more info on this effort check out my blog: <a href="http://jburer.wordpress.com" target="_blank">http://jburer.wordpress.com</a>

## The API

This is the API that makes what I consider the fundemental data in those documents available programatically.

It can be used with a corresponding app for presentation of that data, which is here:
<a href="https://github.com/jburer/nistapp" target="_blank">https://github.com/jburer/nistapp</a>.

Current build only has FIPS 200. I will add more data as I tackle the various docs.

## Architecture

This API is built with JSON server and does what APIs do and just makes the data available.

<img src="./images/nistapi.gif" alt="nistapi">

It is designed to be run inside a Docker container, but can be run as a node app as well.

## Docker setup

Clone the repository and move to the nistapi directory.

```
docker build -t <whatever>/nistapi .
docker run -d -p 3000:3000 --name nistapi <whatever>/nistapi
```

This will make the app available on

```
http://localhost:3000
```

You can point it to any port of course, but the corresponding app is hardcoded to look for 3000.
