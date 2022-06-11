import { checkPortStatus } from "portscanner";

const commonPorts = [
  20, 21, 22, 23, 25, 53, 80, 110, 119, 123, 143, 161, 194, 443,
];

/*
  Request Format: 
    For Scanning Common Ports
    {
      "target_host" : "x.x.x.x"
    }
    For Scanning a specific port/s
    {
      "target_host" : "x.x.x.x",
      "target_ports": [x, y, z],
      "method": "specific"
    }
    For Scanning a range of ports
    {
      "target_host" : "x.x.x.x",
      "target_ports": [a, b],
      "method": "range"
    }
*/

export const portscanner = (req, res) => {
  const { target_host, target_ports, method } = req.body;

  const specificCheck = async (host, ports = commonPorts) => {
    const status = { closed: [], open: [] };

    const checkList = ports.map((port) => checkPortStatus(port, host));

    try {
      const portsState = await Promise.all(checkList);
      portsState.forEach((state, index) => {
        status[state].push(ports[index]);
      });
      res.json({ success: true, data: status });
    } catch (error) {
      res.json({ success: false, msg: error });
    }
  };

  switch (method.toLowerCase()) {
    case "specific":
      specificCheck(target_host, target_ports);
      break;
    case "range":
      let portsList = [];
      for (
        let i = Math.min(...target_ports);
        i <= Math.max(...target_ports);
        i++
      ) {
        portsList.push(i);
      }
      specificCheck(target_host, portsList);
      break;

    default:
      specificCheck(target_host);
      break;
  }
};
