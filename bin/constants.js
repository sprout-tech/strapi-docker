'use strict';

const ORG = 'sprouttech';
const REPO = 'strapi/strapi';
const BASE_IMAGE_NAME = `${ORG}/base`;
const STRAPI_IMAGE_NAME = `${ORG}/strapi`;
const NODE_VERSIONS = [16];
const LATEST_NODE_VERSION = 16;

module.exports = {
  ORG,
  REPO,
  BASE_IMAGE_NAME,
  STRAPI_IMAGE_NAME,
  NODE_VERSIONS,
  LATEST_NODE_VERSION,
};
