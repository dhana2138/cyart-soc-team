# 🔐 SOC Analyst Lab – Wazuh SIEM + Threat Detection

## 📌 Title

Security Operations Center (SOC) Lab using Wazuh SIEM for Threat Detection and Incident Response

---

## 📖 Introduction

This project demonstrates a hands-on SOC (Security Operations Center) workflow using **Wazuh SIEM** deployed on Ubuntu Virtual Machine. The objective is to simulate real-world security monitoring, detect suspicious activities, analyze logs, and perform incident response actions.

The lab includes:

* Log analysis
* Threat intelligence lookup
* Alert triage
* Evidence collection
* Incident response

---

## 🛠️ Tools & Technologies Used

* Ubuntu (VirtualBox VM)
* Kali Linux (Attacker Simulation)
* Wazuh SIEM
* VirusTotal (Threat Intelligence)
* Linux Commands (netstat, sha256sum)
* Excel / Google Sheets

---

## ⚙️ Lab Setup

### Step 1: Virtual Machine Setup

* Installed Ubuntu on VirtualBox
* Allocated 4GB RAM and 25GB storage
* Configured network (NAT)

### Step 2: Install Wazuh

```bash
sudo apt update
sudo apt install curl -y
curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh
sudo bash wazuh-install.sh -a -i
```

---

## 📊 Step 1: Advanced Log Analysis

### 📌 Description

Analyzed authentication logs to identify suspicious login attempts and network activity.

### 📋 Table

| Timestamp           | Event ID | Source IP     | Destination IP | Notes                    |
| ------------------- | -------- | ------------- | -------------- | ------------------------ |
| 2026-03-27 10:15:23 | 4625     | 192.168.1.100 | 8.8.8.8        | Failed login + DNS query |
| 2026-03-27 10:16:10 | 4625     | 192.168.1.100 | 8.8.4.4        | Repeated failed login    |
| 2026-03-27 10:18:45 | 4625     | 192.168.1.100 | 1.1.1.1        | Brute-force suspected    |
| 2026-03-27 10:20:02 | 4624     | 192.168.1.100 | 8.8.8.8        | Successful login         |

### 📝 Findings

* Multiple failed login attempts detected
* Possible brute-force attack
* Suspicious outbound DNS traffic observed

---

## 🌐 Step 2: Threat Intelligence

### 📌 Description

Analyzed IP reputation using VirusTotal.

### 📋 Table

| Alert ID | IP            | Reputation | Notes                       |
| -------- | ------------- | ---------- | --------------------------- |
| 003      | 192.168.1.100 | Malicious  | Linked to C2                |
| 004      | 192.168.1.100 | Suspicious | Brute-force attempts        |
| 005      | 192.168.1.100 | Malicious  | Threat intelligence flagged |

### 📝 Findings

* IP is flagged as malicious
* Associated with Command & Control (C2) activity

---

## 🚨 Step 3: Alert Triage

### 📌 Description

Prioritized alerts based on severity.

### 📋 Table

| Alert ID | Description             | IP            | Priority | Status        |
| -------- | ----------------------- | ------------- | -------- | ------------- |
| 004      | PowerShell Execution    | 192.168.1.101 | High     | Open          |
| 005      | Multiple Failed Logins  | 192.168.1.100 | High     | Open          |
| 006      | Suspicious Network Conn | 192.168.1.102 | Medium   | Investigating |
| 007      | Unauthorized Access     | 192.168.1.103 | High     | Open          |

### 📝 Findings

* High-priority alerts require immediate action
* Suspicious execution activity detected

---

## 🧾 Step 4: Evidence Collection

### 📌 Command Used

```bash
sudo netstat -antp > evidence.txt
sha256sum evidence.txt
```

### 📌 Description

* Captured active network connections
* Generated SHA256 hash for integrity verification

### 📝 Findings

* Active connections identified
* Evidence preserved with hash

---

## 🔥 Step 5: Incident Response

### 📌 Actions Taken

```bash
sudo ufw deny from 192.168.1.101
```

* Blocked malicious IP
* Investigated suspicious processes
* Monitored system for further activity

### 📝 Findings

* Threat successfully contained
* System secured

---

## 📸 Screenshots

Include the following screenshots in your repository:

* Wazuh Dashboard
* Wazuh Events Page
* Terminal Logs (Failed login attempts)
* Evidence collection command output
* Nessus / Security tool output (optional)

---

## 📂 Repository Structure

```
SOC-Project/
│
├── README.md
├── report/
│   └── SOC_Report.docx
│
├── screenshots/
│   ├── log_analysis.png
│   ├── wazuh_dashboard.png
│   ├── wazuh_events.png
│   ├── nessus_status.png
│   ├── evidence_collection.png
│
├── tables/
│   ├── log_analysis.csv
│   ├── threat_intel.csv
│   ├── alert_triage.csv
│
└── evidence/
    ├── evidence.txt
    ├── evidence_hash.txt

## 📌 Conclusion

This project demonstrates practical SOC analyst skills including:

* Log analysis
* Threat detection
* Incident response
* Evidence handling

The lab successfully identified suspicious activity, analyzed threats, and implemented mitigation steps, simulating real-world SOC operations.

---

## 🚀 Future Improvements

* Integrate real-time alerting
* Add automated response scripts
* Use cloud-based SIEM tools
* Expand attack simulations

---

## 👨‍💻 Author

Dhanavelan
SOC Analyst Intern (Learner)

---
