#!/usr/bin/env bash
# Created by g7tianyi on 12/10/2017

set -e

pushd $(dirname $0) > /dev/null
SCRIPTPATH=$(pwd -P)
popd > /dev/null
SCRIPTFILE=$(basename $0)

LOGLINE="============================================================"

function log() {
  NOW=$(date '+%Y%m%d%H%M%S')
  echo ${LOGLINE}
  echo "${NOW} - $1"
  echo ${LOGLINE}
}

# ============================================================

INSTANCE_COUNT=
IMAGE_VERSION=

SERVICE="egwebconsole"

IMAGE_NAME="glamering/${SERVICE}"
DOCKER_IMAGE="uhub.service.ucloud.cn/${IMAGE_NAME}"
DOCKER_CONTAINER_NAME="egwebconsole"

# ================================================================================

function showUsage() {
    echo -e ""
    echo -e "${SCRIPTFILE} [-h] -n <InstanceCount> -v <ImageVersion>"
    echo -e ""
    echo -e "    -h : Show this message"
    echo -e "    -n : Specify instance count, e.g., 2"
    echo -e "    -v : Specify the image version of ${SERVICE}"
    echo -e ""
    echo -e "Sample Usage:"
    echo -e ""
    echo -e "    ${SCRIPTFILE} -n 2 -v 1.0"
    echo -e ""
}

function stopInstance() {
    log "Stop Instance"
    docker rm -f $(docker ps -a | grep ${DOCKER_CONTAINER_NAME} | awk '{print $1}') || /bin/true
    sleep 1
}

function startInstance() {
    log "Start Instance"
    docker rmi $(docker images | grep ${IMAGE_NAME}) || /bin/true
    docker run --name ${DOCKER_CONTAINER_NAME} -d -p 80:80 ${IMAGE_NAME}:${IMAGE_VERSION}
}

# ============================================================

while getopts  'hn:v:' ARG; do
    case "${ARG}" in
        h) showUsage; exit ;;
        n) INSTANCE_COUNT=${OPTARG} ;;
        v) IMAGE_VERSION=${OPTARG};;
    esac
done

if [ -z ${INSTANCE_COUNT} ]; then
    log "Instance count not provided. Default to 2."
    INSTANCE_COUNT=1
fi

if [ -z ${IMAGE_VERSION} ]; then
    log "Image version not provided. Default to 'latest'."
    IMAGE_VERSION="latest"
fi

stopInstance
startInstance
