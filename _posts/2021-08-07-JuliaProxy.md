---
layout:      article
title:       Julia Proxy Settings
excerpt:     Julia Proxy
tags:
  - Git
  - Julia
modify_date: 2021-08-07
---

<!--more-->

To use julia with proxy, we need to set the `git proxy` instead of only changing `$http_proxy` in the shell file `*shrc` or the julia startup file `$HOME/.julia/config/startup.jl`.

And specifically, when you are using the proxy offered by shadowsocks on a Mac, set the proxy in `$HOME/.gitconfig` like:

```shell
[http "https://github.com"]
	proxy = http://127.0.0.1:1087/
[https "https://github.com"]
	proxy = http://127.0.0.1:1087/
```

The format of `socks5h://127.0.0.1:1086/` and `http://127.0.0.1:1087` won't work in Julia.
