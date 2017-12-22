#!/bin/sh

set -e

SOURCE_DIR=/opt/glamering/egwebconsole

cd ${SOURCE_DIR}
npm install
npm run build

