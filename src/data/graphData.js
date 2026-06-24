const elements = [
  {
    data: {
      id: "Server1",
      label: "Server1",
      type: "Asset",
      risk: "Critical",
      ip: "192.168.1.10",
      vulnerabilities: ["CVE-2024-21762", "CVE-2023-12345"]
    }
  },
  {
    data: {
      id: "Server2",
      label: "Server2",
      type: "Asset",
      risk: "High",
      ip: "192.168.1.11",
      vulnerabilities: ["CVE-2024-21762"]
    }
  },
  {
    data: {
      id: "UserA",
      label: "UserA",
      type: "User",
      risk: "Low",
      ip: "192.168.1.100",
      vulnerabilities: []
    }
  },
  {
    data: {
      id: "UserB",
      label: "UserB",
      type: "User",
      risk: "Medium",
      ip: "192.168.1.101",
      vulnerabilities: []
    }
  },
  {
    data: {
      id: "CVE-2024-21762",
      label: "CVE-2024-21762",
      type: "Vulnerability",
      risk: "Critical",
      ip: "",
      vulnerabilities: []
    }
  },
  {
    data: {
      id: "APT28",
      label: "APT28",
      type: "Threat Actor",
      risk: "High",
      ip: "",
      vulnerabilities: []
    }
  },
  {
    data: {
      source: "UserA",
      target: "Server1",
      label: "LOGS_IN_TO"
    }
  },
  {
    data: {
      source: "UserB",
      target: "Server2",
      label: "LOGS_IN_TO"
    }
  },
  {
    data: {
      source: "CVE-2024-21762",
      target: "Server1",
      label: "AFFECTS"
    }
  },
  {
    data: {
      source: "APT28",
      target: "Server1",
      label: "ATTACKS"
    }
  },
  {
    data: {
      source: "Server1",
      target: "Server2",
      label: "COMMUNICATES_WITH"
    }
  }
];

export default elements;
