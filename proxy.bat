@echo off
set PROXY=http://genproxy:8080
git config --global http.proxy %PROXY%
npm config set https-proxy %PROXY%
npm config set proxy %PROXY%
set HTTP_PROXY=%PROXY%
set HTTPS_PROXY=%PROXY%