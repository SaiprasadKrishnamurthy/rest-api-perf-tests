#!/bin/sh
set -e
export _ARGS="${JVM_OPTS}"
echo "Using JVM Opts ${_ARGS}"
java ${_ARGS} -jar -Djava.security.egd=file:/dev/./urandom -jar app.jar
exec "$@"