# Port-Scanner

The port scanner tool will provide you with information regarding valid methods of connecting to a network. Scan your network for open ports and determine if those open ports need to be closed to provide more network security and less vulnerabilities.

## How to use

Request Format:
For Scanning Common Ports

```JSON
    {
      "target_host" : "x.x.x.x"
    }
```

    For Scanning a specific port/s

```JSON
    {
      "target_host" : "x.x.x.x",
      "target_ports": [x, y, z],
      "method": "specific"
    }
```

    For Scanning a range of ports

```JSON
    {
      "target_host" : "x.x.x.x",
      "target_ports": [a, b],
      "method": "range"
    }
```
