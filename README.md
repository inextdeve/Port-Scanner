# Port Scanner API

The port scanner API will provide you with information regarding valid methods of connecting to a network. Scan your network for open ports and determine if those open ports need to be closed to provide more network security and less vulnerabilities.

## How to use

Request Format:
```JSON
    {"Field": "Value"}
```
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
      "target_ports": ["x", "y", "z"],
      "method": "specific"
    }
```

    For Scanning a range of ports

```JSON
    {
      "target_host" : "x.x.x.x",
      "target_ports": ["a", "b"],
      "method": "range"
    }
```

- "target_host": Is the IP Address
- "target_ports": Is the ports that you want to scan it (Open or not)
- "method": Is the type of the port scanning 'Specific' for scaning just the specified ports, 'range' for scanning a range of ports ["a", "b"]

If you don't specifiy the method of scanning or the target ports the api must return a scannig of common ports 
[
  20, 21, 22, 23, 25, 53, 80, 110, 119, 123, 143, 161, 194, 443,
];
