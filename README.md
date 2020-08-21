# node-steam-traffic-tracer

### 0x01 How is this work

![Screnshot](/document/screenshot.png)

![how-this-work](/document/how-this-work-chart.png)

As the chart shown above, the Steam Client usually communicates with
Steam CM Server via 3 protocols, either TCP, UDP, or WebSocket(over SSL).

In a short word, **everything is safe, Steam, RSA, AES are not broken**,
the decryption is based on MITM and local-trusted self-signed SSL certificate.
Another example of this kind of "attack" is [Fiddler](https://www.telerik.com/fiddler).

**Nothing will be attacked unless your desktop somehow trusted a malicious certificate. (Except this [situation](#0x04-how-to-prevent))**

At the beginning of this project, I think about decrypting the TCP connection,
but end up with impossible. The TCP protocol that is using between Steam Client
and the CM Server is not raw TCP connection, but encrypted by AES-256-CBC
(with HMAC_SHA1 to generate IV to prevent padding oracle attack,
for more, you can read this [article: Breaking Steam Client Cryptography](https://steamdb.info/blog/breaking-steam-client-cryptography/)).
Also, when the client and the sever exchange the encryption key for every session, 
the key will be encrypted by a built-in [RSA Public Key](https://github.com/seishun/node-steam-crypto/issues/3).
Based on this, it's hard to get encryption key to decrypt the steam traffic.
I think the available way to decrypt the TCP Protocol is to hook the Steam
Client to get the AES key once the client starts. Since I don't know much about
hooking and c#/c++/c, I can't do much with it. If you are interested in it, you
might try to do it on this way. 

For Steam's UDP Protocol, I didn't dig much in it, so I don't know much about it,
but I believe its encryption process will properly be the same thing as the TCP
Protocol.

So I focused on the WebSocket Protocol. At first when I was capturing the traffics
by Wireshark, I thought it was same as the TCP Protocol, but over TLS encryption.
Then when I saw the handshake process, I suddenly realized it's HTTPS handshake!
And that must be the WebSocket over SSL. Plus in DoctorMcKay's [steam-user](https://github.com/DoctorMcKay/node-steam-user)
project, I saw WebSocket was included, that corroborated my guess.

Since WebSocket over SSL is established over an HTTPS connection, it's much easier
to decrypt(or called hijack) the HTTPS traffic than decrypt Steam's TCP Protocol Traffic.

Since Fiddler supports capturing the WebSocket Traffic, you can achieve the whole thing
I am doing here inside Fiddler. But most of steam's traffic is encoded by ProtoBuf, it hard
to read the Binary data directly in Fiddler. So in this project, I made a Parser to decode
the traffic between Steam Client and the Server.

To achieve that, we need to make the Client to trust the certificate provided by our
MITM server. That's why we need to self-sign and trust the certificate for the domain.
I captured the domain of the CM server by Fiddler, which are `*.cm.steampowered.com`, so I
need to self-sign a wildcard cert for all the CM domains.

The certificate-related documents are in [here](https://github.com/Y2Nk4/node-steam-client-traffic-tracer/tree/master/cert).

Besides the certificate, we also need a HTTP Proxy, and a MITM server. The role of the 
HTTP Proxy is to forward Steam Client's traffic to our MITM server, making the Steam Client
consider our MITM server is the official Steam CM server.

With the help of the HTTP Proxy, the Steam Client will establish a connection with our
MITM server. Then the HTTPS Protocol get involved, the client will verify the server's
certificate and exchange the encryption key. If everything is correct, the HTTPS connection
between the Steam Client and our MITM server will establish, then according to WebSocket 
Protocol, Steam Client will send a `upgrade` request to upgrade our connection into WebSocket connection.

Once the WebSocket connection is established, our MITM will also establish a WebSocket connection
with the Steam CM Server. When we receive the message from the client, we will get the raw data, which
we are capable to read and decode. Also, we will send the data to Steam CM Server via the WS connection
between the MITM and the Steam CM Server. Vice versa.

**It's a textbook- HTTPS MITM attack, but over WebSocket**

### 0x02 Run
Install the dependences: 
```shell script
npm install
```
Start the Server
```shell script
node app.js
```

Once the script runs, it will create 3 servers.
- HTTP Proxy Server (Port: 10068)
- MITM Server (Port: 10070)
- A HTTP Server for visualize the Traffic (Port: 8050)

Then Open `http://localhost:8050` in your browser, open your Steam Client,
you will be able to see the decoded traffic between your Steam Client and CM Server.

***Not Capturing Data?***

In my test, the Steam Client will pick the protocol randomly in either TCP, UDP, or WebSocket.
**Don't Start Steam with the launch option `-tcp`** because it will force Steam to use TCP
protocol.

And as far as I know, there is no launch option to force Steam to use WebSocket Protocol. 
So, if the Steam Client is not using WebSocket, you might just restart the Steam Client for
several times until it's using WS.

**A Not Confirmed Tip here**: Using `-tcp` first, then restart the Client without `-tcp`, it will
make a higher chance for Steam Client to choose WS.

### 0x03 Configure the Network
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

Then theoretically, it will work as the screenshot show below.

![Screnshot](/document/screenshot.png)

### 0x04 How to Prevent?
This attack is based on the local-trusted self-signed certificate. 
While I was revising this article, I realized this kind of attack could be 
used in a public device(such as the devices in the libraries, cafes, or Internet Cafes) 
where the devices are potentially installed malicious certificates and MITM services.

So I add this part for you to know how you can prevent this kind of attack on a 
public device.

#### Force Steam Client to use TCP connection
[How to force Steam use TCP connection](https://support.steampowered.com/kb_article.php?ref=5623-QOSV-5250)

By adding `tcp` launch option to Steam when you are trying to launch it, Steam will be
forced to use TCP connection rather than UDP or WebSockets.

As I said in the Part 1, when the Steam Client is using TCP connection, the client and the sever 
exchange the encryption key for every session, the key will be encrypted by a built-in [RSA Public Key](https://github.com/seishun/node-steam-crypto/issues/3).
Based on this, it's hard to get encryption key to decrypt the steam traffic.

### 0x05 Reference
- [木亖 - 利用nodejs搭建 https 代理服务器并实现中间人攻击](https://juejin.im/post/5cce881ef265da036902a934)
- [Using Fiddler with WinHTTP](https://www.telerik.com/blogs/using-fiddler-with-winhttp)
- [Breaking Steam Client Cryptography](https://steamdb.info/blog/breaking-steam-client-cryptography/)
- [DoctorMcKay - node-steam](https://github.com/DoctorMcKay/node-steam-user)
- [SteamDatabase - Protobufs](https://github.com/SteamDatabase/Protobufs)
