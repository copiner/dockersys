### cookie

HTTP Cookie（也叫Web Cookie或浏览器Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie使基于无状态的HTTP协议记录稳定的状态信息成为了可能。

Cookie主要用于以下三个方面：

1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）

2. 个性化设置（如用户自定义设置、主题等）

3. 浏览器行为跟踪（如跟踪分析用户行为等）

Cookie曾一度用于客户端数据的存储，因当时并没有其它合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，Cookie渐渐被淘汰。由于服务器指定Cookie后，浏览器的每次请求都会携带Cookie数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器API已经允许开发者直接将数据存储到本地，如使用 Web storage API （本地存储和会话存储）或 IndexedDB 。

#### 创建Cookie
当服务器收到HTTP请求时，服务器可以在响应头里面添加一个Set-Cookie选项。浏览器收到响应后通常会保存下Cookie，之后对该服务器每一次请求中都通过Cookie请求头部将Cookie信息发送给服务器。另外，Cookie的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。

```javascript
response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
```

其中比较重要的属性：

1. name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字一样
2. Expires： 过期时间（秒），在设置的某个时间点后该 Cookie 就会失效，如 expires=Wednesday, 09-Nov-99 23:12:40 GMT
3. maxAge： 最大失效时间（毫秒），设置在多少后失效
4. secure： 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效
5. Path： 表示 cookie 影响到的路，如 path=/。如果路径不能匹配时，浏览器则不发送这个Cookie
6. httpOnly：是微软对COOKIE做的扩展。如果在COOKIE中设置了“httpOnly”属性，则通过程序（JS脚本、applet等）将无法读取到COOKIE信息，防止XSS攻击产生
### session


session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。

客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了。

如果说Cookie机制是通过检查客户身上的“通行证”来确定客户身份的话，那么session机制就是通过检查服务器上的“客户明细表”来确认客户身份。

session相当于程序在服务器上建立的一份客户档案，客户来访的时候只需要查询客户档案表就可以了。

两者的区别：

1. cookie数据存放在客户的浏览器上，session数据放在服务器上。
2. cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗 考虑到安全应当使用session。
3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面，应当使用COOKIE。
4. 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
5. 所以建议：将登陆信息等重要信息存放为session、其他信息如果需要保留，可以放在cookie中
