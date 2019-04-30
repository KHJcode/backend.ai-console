{
  "secret": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",

  "manager":{
    "protocol": "http",
    "listen_ip": "0.0.0.0",
    "port": 8001,
    "baseURL": "http://192.168.153.80:8001",
    "cert": {
      "key": "/etc/privkey.pem",
      "cert": "/etc/cert.pem",
      "ca": "/etc/chain.pem"
    }
  },

  "proxy": {
    "protocol": "http",
    "port_range": [10000, 10100],
    "listen_ip": "127.0.0.1",
    "host": "127.0.0.1",
    "cert": {
      "key": "/etc/privkey.pem",
      "cert": "/etc/cert.pem",
      "ca": "/etc/chain.pem"
    },
    "failback_url": ""
  }
}