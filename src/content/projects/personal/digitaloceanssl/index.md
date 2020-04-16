---
title: "@Digital Ocean SSL conf Play Framework (Production)"
lede: "A configuration to generate SSL in a production Play App"
date: "2019"
order: 1
publish: true
lang: "Shell"
---


Creating a .jks file to import to your Play configuration:

Follow the commands:
```js

$sudo openssl req -x509 -nodes -days 665 -newkey rsa:2048 -keyout /etc/ssl/private/playt-selfsigned.key -out /etc/ssl/certs/play-selfsigned.crt

Country Name (2 letter code) [AU]:<Country Code>
State or Province Name (full name) [Some-State]:< State>
Locality Name (eg, city) []: <City>
Organization Name (eg, company) [Internet Widgits Pty Ltd]: <Company>
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:<Your public IP>
Email Address []: <admin@domain.com>

$sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
openssl req -new -newkey rsa:2048 -nodes -keyout /etc/ssl/private/playt-selfsigned.key -out ~/serverKeys/domain.csr

```
Then you need to copy the content of domain.csr to your host domain e.g: goDaddy, wait for they approval and 
download the files and move them to your host to ~/serverKeys/provider.

Rename the download file -> alphanumeric.crt to yourdomain.crt, and do the following commands:

```js
$ openssl pkcs12 -export -in provider/yourdomain.crt -inkey /etc/ssl/private/playt-selfsigned.key -certfile provider/yourdomain.crt -name "mytomcat" -out mykeystore.p12

$ keytool -importkeystore -srckeystore mykeystore.p12 -srcstoretype pkcs12 -destkeystore keystore.jks -deststoretype JKS
$ keytool -importkeystore -srckeystore keystore.jks -destkeystore keystore.jks -deststoretype pkcs12

```

Then you will have the "keystore.jks" file ready to be imported in your production conf file of your Play app.


```js
play.server.https.keyStore.path = "~/serverKeys/keystore.jks"
play.server.https.keyStore.type = "JKS"
play.server.https.keyStore.password = "<yourpassword>"

```