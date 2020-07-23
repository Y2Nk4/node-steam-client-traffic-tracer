## Self-Signed Certificate for SSL decryption

There is a certificate comes with this project when you download it, 
If you don't want further development, you properly can just trust 
the `service.crt`

## To generate your own CA cert and service cert

To generate ur own certificate, you need to install `Openssl` first.

For Windows, you can install this one: [Openssl for Windows](https://slproweb.com/products/Win32OpenSSL.html)

1. To generate certificate and private key for CA
    ```shell script
    openssl req -new -x509 -extensions v3_ca -days 36500 -newkey rsa:2048 -keyout .\ca\ca.key -sha256 -out .\ca\cacert.pem -config .\san.cnf -nodes
    ```
    This command will generate a new CA certificate in `./ca/cacert.pem` and also its private key
    in `./ca/ca.key`

2. Then, we now are able to generate `private.key` and `service.csr`
    ```shell script
    openssl req -new -out service.csr -newkey rsa:2048 -keyout private.key -config .\san.cnf -nodes
    ```
   
3. To sign this cert by the CA cert we generated previously.
    ```shell script
    openssl x509 -req -extensions v3_req -days 3650 -sha256 -in service.csr -CA .\ca\cacert.pem -CAkey .\ca\ca.key -CAcreateserial -out service.crt -extfile san.cnf
    ```

Now, this cert is signed by the CA now, but it won't work
**UNTIL you trust the CA in your computer**



-EOF-