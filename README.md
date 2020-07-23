# node-steam-traffic-tracer

### 0x01 How is this work

![how-this-work](/document/how-this-work-chart.png)

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

- [DoctorMcKay - node-steam](https://github.com/DoctorMcKay/node-steam-user)

- [SteamDatabase - Protobufs](https://github.com/SteamDatabase/Protobufs)