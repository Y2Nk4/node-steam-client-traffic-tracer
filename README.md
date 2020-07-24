# node-steam-traffic-tracer

### 0x01 How is this work

![how-this-work](/document/how-this-work-chart.png)

As the chart shown above, the Steam Client usually communicates with
Steam CM Server via 3 protocols, either TCP, UDP, or WebSocket(over SSL).

In a short word, everything is safe, Steam, RSA, AES are not broken,
the decryption is based on MITM and local-trusted self-signed SSL certificate.
Another example of this kind of "attack" is [Fiddler](https://www.telerik.com/fiddler).

**Nothing will be attacked unless your desktop somehow trusted a malicious certificate.**

At the beginning of this project, I think about decrypting the TCP connection,
but end up with impossible. The TCP protocol that is using between Steam Client
and the CM Server is not raw TCP connection, but encrypted by AES-256-CBC
(with HMAC_SHA1 to generate IV to prevent padding oracle attack,
for more, you can read this [article: Breaking Steam Client Cryptography](https://steamdb.info/blog/breaking-steam-client-cryptography/)).
Also, when the client and the sever exchange the encryption key, the key will
be encrypted by a built-in [RSA Public Key](https://github.com/seishun/node-steam-crypto/issues/3).
Based on this, it's hard to get encryption key to decrypt the steam traffic.

For Steam's UDP Protocol, I didn't dig much in it, so I don't know much about it,
but I believe its encryption process will properly be the same thing as the TCP
Protocol.


### 0x02 Configure the Network
This principle of this project is pretty much the same as Fiddler
(You can definitely use Fiddler to capture the Steam WebSocket traffic)

This project is acting as a MITM Proxy to capture the steam traffic.

1. Go to Internet Options
    
    You can run `inetcpl.cpl` to get into Internet Options
   
    Then go to `Connection` tab, click `LAN Setting` to input the
    proxy server address and port, which in this case should be
    `127.0.0.1` and `10068`

2. Using winhttp to forward the traffic to the http proxy
    
    (Need to be ran as Administrator)
    ```shell script
    netsh winhttp set proxy 127.0.0.1:10068 "<-loopback>"
    ```
    If you want to cancel the proxy, you can use this command to reset
    ```shell script
    netsh winhttp reset proxy
    ```

### 0x03

### 0x04 Reference
- [木亖 - 利用nodejs搭建 https 代理服务器并实现中间人攻击](https://juejin.im/post/5cce881ef265da036902a934)
- [Using Fiddler with WinHTTP](https://www.telerik.com/blogs/using-fiddler-with-winhttp)
- [Breaking Steam Client Cryptography](https://steamdb.info/blog/breaking-steam-client-cryptography/)
- [DoctorMcKay - node-steam](https://github.com/DoctorMcKay/node-steam-user)
- [SteamDatabase - Protobufs](https://github.com/SteamDatabase/Protobufs)