# 🔐 SOC Adversary Emulation & Incident Response Lab

## 📌 Overview

This project demonstrates a complete Security Operations Center (SOC) workflow including attack simulation, detection, analysis, response, and reporting. The lab simulates a real-world cyber attack using Metasploit and analyzes it using Wazuh SIEM.

---

## 🎯 Objectives

* Perform adversary emulation using Metasploit
* Detect attacks using Wazuh SIEM
* Conduct threat hunting and alert triage
* Implement SOAR playbook simulation
* Perform root cause analysis (RCA)
* Measure SOC metrics (MTTD & MTTR)
* Generate incident report

---

## 🛠️ Tools Used

* Kali Linux
* Metasploitable2
* Wazuh SIEM
* Metasploit Framework
* VirusTotal

---

## ⚔️ Attack Simulation

* Exploit Used: **Samba usermap_script**
* Technique: **MITRE ATT&CK T1210 (Exploitation of Remote Services)**
* Result: Successful reverse shell session established

---

## 🔍 Detection & Analysis

* Logs monitored using Wazuh
* Detected suspicious activities:

  * Failed login attempts
  * Unauthorized access behavior
* Threat hunting performed on authentication logs

---

## 🤖 SOAR Playbook

Steps:

1. Detect phishing alert
2. Extract IP
3. Check IP reputation (VirusTotal)
4. Block malicious IP
5. Create incident ticket

---

## 📊 Key Findings

* Multiple failed login attempts detected
* Exploitation activity identified
* Wazuh successfully logged suspicious events

---

## 🧠 Root Cause Analysis (RCA)

* Vulnerable service (Samba)
* Lack of patch management
* Weak monitoring rules

---

## 📈 SOC Metrics

* **MTTD (Mean Time to Detect):** 2 minutes
* **MTTR (Mean Time to Respond):** 5 minutes

---

## 📸 Screenshots

* Metasploit exploit success
* Wazuh dashboard & logs
* Authentication failure logs
* VirusTotal IP analysis

---

## 📄 Conclusion

This project demonstrates how SOC teams detect and respond to cyber threats using SIEM tools and automation. It highlights the importance of proactive monitoring, threat hunting, and incident response in cybersecurity operations.

---

## 📁 Repository Structure

```
Week4/
 ├── Screenshots/
 ├── Report.pdf
 ├── README.md
```

---

## 🚀 Author

Dhana E
SOC Analyst (Aspiring)
