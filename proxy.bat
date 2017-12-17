@echo off
set PROXY=http://genproxy:8080
npm config set https-proxy http://genproxy:8080
npm config set proxy http://genproxy:8080
set HTTP_PROXY=http://genproxy:8080
set HTTPS_PROXY=http://genproxy:8080