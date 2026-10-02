# AWS Certified Cloud Practitioner (CLF-C02) — Study Notes

> Personal study notes based on the course deck in this project, rewritten in my own words and reorganized by the four exam domains. Every service, number, and exam fact from the deck is kept; course-admin material (instructor bio, social links, coupons, Udemy tips) is left out.

**Contents**
1. [Cloud Concepts](#1-cloud-concepts)
2. [Security & Compliance](#2-security--compliance)
3. [Cloud Technology & Services](#3-cloud-technology--services)
4. [Billing, Pricing & Support](#4-billing-pricing--support)
5. [Exam Preparation](#5-exam-preparation)

---

## 1. Cloud Concepts

### 1.1 IT fundamentals
- **Client ↔ server:** both sides have IP addresses; the network carries packets between them (like addressed post mail).
- **What a server is made of:** compute (CPU), memory (RAM), storage (data), database (structured storage), network (routers, switches, DNS).
- **Network:** cables, routers, and servers connected together.
- **Router:** forwards packets *between* networks — knows where to send them on the internet.
- **Switch:** delivers a packet to the right server/client *inside* your network.

### 1.2 Why move away from traditional data centers
Running your own (home, garage, office, or data center) means you pay rent, power, cooling, and maintenance; hardware changes are slow; scaling is capped; you need a 24/7 monitoring team; and disasters (earthquake, fire, power loss) are your problem. The cloud externalizes all of this.

### 1.3 What cloud computing is
- On-demand delivery of compute, database storage, applications, and other IT resources through a cloud platform, billed **pay-as-you-go**.
- Provision exactly the type and size you need, as many as you need, almost instantly.
- AWS owns and maintains the networked hardware; you provision and use it through a web app.
- Everyday examples: **Gmail** (email; you pay only for what you store), **Dropbox** (storage; originally built on AWS), **Netflix** (video on demand; built on AWS).

### 1.4 Deployment models
| Model | Description | Key points |
|---|---|---|
| **Private** | Used by one organization, not exposed publicly | Full control; security for sensitive apps; meets specific business needs |
| **Public** | Owned/operated by a third-party provider, delivered over the internet | Delivers the six advantages of cloud computing |
| **Hybrid** | Some servers stay on-premises, some capabilities extended to the cloud | Control over sensitive assets + flexibility/cost-effectiveness of public cloud |

### 1.5 Five characteristics of cloud computing
1. **On-demand self-service** — provision resources without human interaction from the provider.
2. **Broad network access** — available over the network from many kinds of clients.
3. **Multi-tenancy & resource pooling** — many customers securely and privately share the same physical infrastructure.
4. **Rapid elasticity & scalability** — acquire/release resources automatically and fast; scale with demand.
5. **Measured service** — usage is metered; you pay for exactly what you used.

### 1.6 Six advantages of cloud computing
1. Trade **CAPEX for OPEX** — pay on demand, don't own hardware; lower TCO and OPEX.
2. Benefit from **massive economies of scale** — AWS's size makes it more efficient, so prices drop.
3. **Stop guessing capacity** — scale on measured usage.
4. **Increase speed and agility.**
5. **Stop spending money running and maintaining data centers.**
6. **Go global in minutes** — use AWS's global infrastructure.

### 1.7 Problems the cloud solves
Flexibility (change resource types anytime) · Cost-effectiveness (pay for use) · Scalability (bigger hardware or more nodes) · Elasticity (scale out/in as needed) · High availability & fault tolerance (span data centers) · Agility (develop, test, launch fast).

### 1.8 Service types (IaaS / PaaS / SaaS)
| Type | What you get | You manage | AWS examples | Other examples |
|---|---|---|---|---|
| **IaaS** | Networking, compute, storage building blocks; most flexible; closest to on-prem IT | OS, middleware, runtime, data, apps | EC2 | GCP, Azure, Rackspace, DigitalOcean, Linode |
| **PaaS** | No infrastructure to manage; focus on deploying/managing apps | Apps + data | Elastic Beanstalk | Heroku, Google App Engine, Azure |
| **SaaS** | Finished product run by the provider | Nothing (just use it) | Many AWS services, e.g. Rekognition | Gmail/Google Apps, Dropbox, Zoom |

Management stack (bottom → top): Networking → Storage → Servers → Virtualization → O/S → Middleware → Runtime → Data → Applications.
- **On-premises:** you manage all layers.
- **IaaS:** provider manages networking → virtualization; you manage O/S upward.
- **PaaS:** provider manages everything except data and applications.
- **SaaS:** provider manages everything.

### 1.9 Pricing fundamentals (pay-as-you-go)
Three things cost money: **compute time**, **data stored**, and **data transferred OUT** of the cloud. Data transfer **IN is free**.

### 1.10 AWS history & facts
| Year | Milestone |
|---|---|
| 2002 | Launched internally |
| 2003 | Idea to sell Amazon's infrastructure as a product |
| 2004 | Public launch with SQS |
| 2006 | Relaunch with SQS, S3, EC2 |
| 2007 | Expanded to Europe |

- 2023 revenue: **$90B**. Market share Q1 2024: **31%** (Microsoft 2nd at 25%).
- Gartner Magic Quadrant leader **13 years in a row**; **1,000,000+** active users.
- Use cases: enterprise IT, backup & storage, big data analytics, web hosting, mobile & social apps, gaming — across many industries.

### 1.11 Global infrastructure
- **Regions** — named like `us-east-1`, `eu-west-3`; each is a cluster of data centers; **most services are region-scoped**. Map: https://infrastructure.aws/
- **Choosing a region:** (1) compliance/data governance — data never leaves a region without your explicit permission; (2) proximity to customers for lower latency; (3) service availability — not every service/feature is in every region; (4) pricing — varies by region.
- **Availability Zones (AZs)** — usually 3 per region (**min 3, max 6**), e.g. `ap-southeast-2a/b/c` in Sydney. Each AZ = one or more discrete data centers with redundant power, networking, connectivity; physically separated for disaster isolation; linked by high-bandwidth, ultra-low-latency networking.
- **Edge locations / Points of Presence** — **400+ PoPs** (400+ edge locations + 10+ regional caches) in **90+ cities, 40+ countries**; deliver content with lower latency.
- **Global services:** IAM, Route 53 (DNS), CloudFront (CDN), WAF.
- **Region-scoped examples:** EC2 (IaaS), Elastic Beanstalk (PaaS), Lambda (FaaS), Rekognition (SaaS). Region table: https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services

### 1.12 Scalability, elasticity, agility, high availability
- **Vertical scaling (scale up/down):** bigger instance (e.g. t2.micro → t2.large). Common for non-distributed systems like databases; limited by hardware. Range: t2.nano (0.5 GB RAM, 1 vCPU) up to u-12tb1.metal (12.3 TB RAM, 448 vCPUs).
- **Horizontal scaling (scale out/in):** more instances; implies distributed systems; common for modern web apps. Tools: ASG + load balancer.
- **High availability:** run the app in **at least 2 AZs** to survive losing a data center. Usually paired with horizontal scaling (multi-AZ ASG + multi-AZ load balancer).
- **Scalability** = can handle more load (stronger hardware or more nodes).
- **Elasticity** = auto-scaling on top of scalability → pay-per-use, match demand, optimize cost.
- **Agility** = (unrelated to scalability — common distractor) new resources are a click away, cutting provisioning time from weeks to minutes.

### 1.13 Well-Architected Framework
**General guiding principles:** stop guessing capacity · test at production scale · automate to make experimentation easy · allow evolutionary architectures (design for changing requirements) · drive architecture with data · improve through game days (e.g. simulate a flash-sale day).

**Cloud design principles:** scalability (vertical & horizontal) · disposable, easily configured resources · automation (serverless, IaC, auto scaling) · loose coupling (break monoliths into components so one failure/change doesn't cascade) · services, not servers (use managed services, not just EC2).

**The 6 pillars** (they reinforce each other; not trade-offs):

| Pillar | Goal | Design principles | Related services |
|---|---|---|---|
| **1. Operational Excellence** | Run/monitor systems for business value; continuously improve processes | Operations as code (IaC); frequent, small, reversible changes; refine procedures often; anticipate failure; learn from every failure; use managed services; observability for actionable insights | Prepare: CloudFormation, Config · Operate: CloudFormation, Config, CloudTrail, CloudWatch, X-Ray · Evolve: CloudFormation, CodeBuild, CodeCommit, CodeDeploy, CodePipeline |
| **2. Security** | Protect information, systems, assets via risk assessment & mitigation | Strong identity foundation (centralized privileges, least privilege, few long-term credentials, IAM); traceability; security at every layer (edge, VPC, subnet, LB, instance, OS, app); automate best practices; protect data in transit & at rest (encryption, tokenization, access control); keep people away from data; prepare for incidents (simulations, automation); shared responsibility | IAM: IAM, STS, MFA, Organizations · Detective: Config, CloudTrail, CloudWatch · Infra protection: CloudFront, VPC, Shield, WAF, Inspector · Data: KMS, S3, ELB, EBS, RDS · Incident response: IAM, CloudFormation, CloudWatch Events |
| **3. Reliability** | Recover from disruptions, acquire resources to meet demand, mitigate misconfigurations/transient network issues | Test recovery procedures; recover automatically; scale horizontally (no single shared failure point); stop guessing capacity (Auto Scaling); manage change through automation | Foundations: IAM, VPC, Service Quotas, Trusted Advisor · Change mgmt: CloudWatch, CloudTrail, Config, Auto Scaling · Failure mgmt: Backups, CloudFormation, S3, S3 Glacier, Route 53 |
| **4. Performance Efficiency** | Use resources efficiently as demand and tech change | Democratize advanced tech (consume it as a service); go global in minutes; use serverless; experiment often; mechanical sympathy (know the services) | Selection: Auto Scaling, EBS, S3, Lambda, RDS · Review: CloudFormation · Monitoring: CloudWatch, Lambda · Trade-offs: RDS, ElastiCache, Snowball, CloudFront |
| **5. Cost Optimization** | Deliver business value at the lowest price | Consumption model (pay for use); measure efficiency (CloudWatch); stop spending on data center ops; analyze & attribute spend (use tags, measure ROI); managed services lower cost per transaction | Expenditure awareness: Budgets, CUR, Cost Explorer, RI reporting · Cost-effective resources: Spot, Reserved, S3 Glacier · Supply/demand: Auto Scaling, Lambda · Over time: Trusted Advisor, CUR |
| **6. Sustainability** | Minimize environmental impact | Understand your impact (KPIs); set long-term goals & model ROI; maximize utilization (right-size, reduce idle); adopt more efficient hardware/software; use managed/shared services (e.g. auto-move cold data, adjust capacity); reduce downstream impact on customers' devices | EC2 Auto Scaling, Lambda, Fargate; Cost Explorer, Graviton 2, T instances, Spot; EFS-IA, S3 Glacier, EBS Cold HDD; S3 Lifecycle, S3 Intelligent-Tiering; Data Lifecycle Manager; "read local, write global": RDS Read Replicas, Aurora Global DB, DynamoDB Global Tables, CloudFront |

**AWS Well-Architected Tool** — free; pick a workload, answer questions, review answers against the 6 pillars, get advice (videos, docs, report, dashboard). https://console.aws.amazon.com/wellarchitected

**AWS Customer Carbon Footprint Tool** — track, measure, review, and forecast carbon emissions from your AWS usage (by geography, by service, over time, path to 100% renewables).

### 1.14 AWS Cloud Adoption Framework (CAF)
- Helps plan and execute digital transformation with AWS; built by AWS professionals from best practices and lessons from thousands of customers; identifies organizational capabilities behind successful cloud transformations.
- **Six perspectives:**
  - *Business capabilities:* **Business** (cloud investments drive business outcomes) · **People** (bridge tech & business; culture, org structure, leadership, workforce; make change normal) · **Governance** (orchestrate initiatives, maximize benefits, minimize transformation risk).
  - *Technical capabilities:* **Platform** (enterprise-grade, scalable hybrid platform; modernize and build cloud-native) · **Security** (confidentiality, integrity, availability of data/workloads) · **Operations** (services delivered at the level the business needs).
- **Transformation domains:** **Technology** (migrate/modernize infra, apps, data & analytics) · **Process** (digitize, automate, optimize operations; new analytics; ML for customer service) · **Organization** (new operating model; teams around products/value streams; agile) · **Product** (new value propositions and revenue models).
- **Transformation phases:** **Envision** (show how cloud accelerates outcomes, find opportunities) → **Align** (find capability gaps across the 6 perspectives → action plan) → **Launch** (pilot initiatives in production, show incremental value) → **Scale** (expand pilots to desired scale and benefits).

### 1.15 Right sizing
- The biggest instance isn't the best choice — the cloud is elastic, so **start small** and scale up easily.
- Right sizing = matching instance type/size to workload performance & capacity needs at the lowest cost, and continuously finding instances to eliminate or downsize.
- Do it **before** a migration and **continuously after** (requirements change).
- Helpful tools: CloudWatch, Cost Explorer, Trusted Advisor, third-party tools.

### 1.16 Cloud migration strategies — the 7 Rs
| Strategy | Meaning | Notes / examples |
|---|---|---|
| **Retire** | Turn off what you don't need | Smaller attack surface; save ~10–20%; focus on what matters |
| **Retain** | Do nothing for now (still a decision) | Security, compliance, performance, unresolved dependencies; no business value; mainframe/mid-range/non-x86 Unix |
| **Relocate** | Move apps to their cloud version, or move EC2 to another VPC/account/region | VMware SDDC → VMware Cloud on AWS |
| **Rehost** ("lift and shift") | Move as-is, no cloud optimization | Physical/virtual/other-cloud → AWS; can save up to ~30%; AWS Application Migration Service |
| **Replatform** ("lift and reshape") | Keep core architecture, use some cloud optimizations | DB → RDS; app → Elastic Beanstalk; managed/serverless saves time & money |
| **Repurchase** ("drop and shop") | Switch to a different product, often SaaS | Pricier short-term, fast to deploy; CRM → Salesforce, HR → Workday, CMS → Drupal |
| **Refactor / Re-architect** | Redesign using cloud-native features | Driven by need for features, scale, performance, security, agility; monolith → microservices; move to serverless, S3 |

---

## 2. Security & Compliance

### 2.1 Shared Responsibility Model
- **AWS = security *of* the cloud:** protects the infrastructure (hardware, software, facilities, networking) and managed services (S3, DynamoDB, RDS, …).
- **Customer = security *in* the cloud:** for EC2, the guest OS (patches/updates), firewall & network config, IAM; encrypting application data.
- **Shared controls:** patch management, configuration management, awareness & training.
- Diagram: https://aws.amazon.com/compliance/shared-responsibility-model/

| Service | AWS | Customer |
|---|---|---|
| **IAM** | Infrastructure (global network security), configuration & vulnerability analysis, compliance validation | Manage/monitor users, groups, roles, policies; MFA on all accounts; rotate keys often; use IAM tools for proper permissions; analyze access patterns & review permissions |
| **EC2** | Infrastructure, isolation on physical hosts, replacing faulty hardware, compliance validation | Security group rules, OS patches/updates, installed software, IAM roles & user access, data security on the instance |
| **EC2 storage (EBS/EFS/Instance Store)** | Infrastructure, data replication for EBS & EFS, replacing faulty hardware, keeping employees out of your data | Backup/snapshot procedures, encryption, all data on the drives, understanding Instance Store risk |
| **S3** | Infrastructure (global security, durability, availability, survive concurrent loss of 2 facilities), config & vulnerability analysis, compliance validation; unlimited storage; encryption available; customer data separation; employees can't access data | Versioning, bucket policies/public settings, replication setup, logging & monitoring, storage classes, encryption at rest & in transit, IAM users/roles |
| **RDS** | Manage the underlying EC2 (SSH disabled), automated DB & OS patching, audit instance & disks | DB security group inbound rules (ports/IPs), in-database users & permissions, public vs private access, enforce SSL via parameter groups, DB encryption setting |

### 2.2 AWS Acceptable Use Policy
https://aws.amazon.com/aup/ — no illegal, harmful, or offensive use/content; no security violations; no network abuse; no email/message abuse.

### 2.3 IAM (Identity and Access Management) — global service
- **Root account** is created by default — don't use or share it.
- **Users** = people in your org; **Groups** contain users only (never other groups). A user can be in zero, one, or many groups.
- **Policies** = JSON documents attached to users or groups that define permissions. Apply **least privilege**.
- Policies are inherited from each group a user belongs to; a user can also have an **inline** policy of their own.

**Policy structure**
- `Version` — policy language version, always `"2012-10-17"`.
- `Id` — optional policy identifier.
- `Statement` — one or more (required). Each statement has:
  - `Sid` (optional id) · `Effect` (Allow/Deny) · `Principal` (account/user/role it applies to) · `Action` (allowed/denied actions) · `Resource` (what the actions apply to) · `Condition` (optional; when it's in effect).

Example (from the deck): allow `ec2:Describe*`, `elasticloadbalancing:Describe*`, and `cloudwatch:ListMetrics`, `cloudwatch:GetMetricStatistics`, `cloudwatch:Describe*` on `"Resource": "*"`.

**Password policy options:** minimum length; require uppercase, lowercase, numbers, non-alphanumeric characters; let users change their own password; password expiration; prevent reuse.

**MFA** = a password you know + a device you own. If the password is stolen, the account still isn't compromised. Protect root and IAM users.

| MFA device | Examples | Notes |
|---|---|---|
| Virtual MFA | Google Authenticator, Authy (phone only) | Multiple tokens on one device |
| U2F security key | YubiKey (Yubico, 3rd party) | One key can serve multiple root & IAM users |
| Hardware key fob | Gemalto (3rd party) | — |
| Hardware key fob for AWS GovCloud (US) | SurePassID (3rd party) | — |

**Ways to access AWS**
| Method | Protected by |
|---|---|
| Management Console | Password + MFA |
| CLI | Access keys |
| SDK (in code) | Access keys |

- Access keys are generated in the console; users manage their own; treat them like passwords, never share. **Access Key ID ≈ username**, **Secret Access Key ≈ password**.
- **CLI:** command-line tool with direct access to AWS public APIs; scriptable; open source (https://github.com/aws/aws-cli); alternative to the console.
- **SDK:** language-specific libraries embedded in your app. Languages: JavaScript, Python, PHP, .NET, Ruby, Java, Go, Node.js, C++; mobile (Android, iOS); IoT device SDKs (Embedded C, Arduino). The AWS CLI is built on the Python SDK.

**IAM Roles** — give AWS services permissions to act on your behalf. Common: EC2 instance roles, Lambda function roles, roles for CloudFormation.

**IAM security tools**
- **Credentials Report** (account level) — all users and the status of their credentials.
- **Access Advisor** (user level) — service permissions granted to a user and when each was last used → use it to tighten policies.

**IAM best practices:** root only for account setup · one physical person = one AWS user · put users in groups, attach permissions to groups · strong password policy · enforce MFA · use roles for AWS services · access keys for programmatic (CLI/SDK) access · audit with Credentials Report & Access Advisor · never share users or keys.

**IAM summary:** Users (physical person, console password) · Groups (users only) · Policies (JSON permissions) · Roles (EC2/AWS services) · Security (MFA + password policy) · CLI · SDK · Access keys · Audit (Credentials Report, Access Advisor).

### 2.4 Root user
- Account owner, created with the account; full access to everything. Lock away its access keys; don't use it for daily or even admin tasks.
- **Root-only actions:** change account settings (name, email, root password, root access keys) · view certain tax invoices · close the account · restore IAM user permissions · change/cancel the Support plan · register as a seller in the Reserved Instance Marketplace · configure an S3 bucket for MFA (Delete) · edit/delete an S3 bucket policy containing an invalid VPC ID or VPC endpoint ID · sign up for GovCloud.

### 2.5 Advanced identity
- **STS (Security Token Service)** — creates temporary, limited-privilege credentials with a configurable expiration. Use cases: identity federation (external identities get STS tokens), IAM roles for cross/same-account access, IAM roles for EC2 (temporary credentials). Flow: user assumes role → STS returns temporary credentials → access resources.
- **Amazon Cognito** — identity for web & mobile app users (potentially millions). Create users in Cognito instead of IAM; supports social login (Facebook, Google, Twitter…).
- **Microsoft Active Directory** — on Windows Server with AD Domain Services; database of users, computers, printers, file shares, security groups; centralized security management via a domain controller.
- **AWS Directory Services:**
  - **AWS Managed Microsoft AD** — your own AD in AWS, users managed locally, MFA, can set up *trust* with on-prem AD.
  - **AD Connector** — gateway/proxy that redirects to on-prem AD; users managed on-prem; MFA.
  - **Simple AD** — AD-compatible managed directory on AWS; cannot join on-prem AD.
- **IAM Identity Center** (successor to AWS SSO) — one login for all AWS accounts in Organizations, business cloud apps (Salesforce, Box, Microsoft 365…), SAML 2.0 apps, and EC2 Windows instances. Identity sources: built-in identity store or 3rd party (AD, OneLogin, Okta…).

**Summary:** IAM (trusted users in your company) · Organizations (multiple accounts) · STS (temporary credentials) · Cognito (app user database) · Directory Services (Microsoft AD in AWS) · IAM Identity Center (single login for accounts & apps).

### 2.6 Network & application protection
- **DDoS** = Distributed Denial of Service — attacker controls bots that flood an app server so real users can't reach it.
- **DDoS protection on AWS:** Shield Standard (free, all customers) · Shield Advanced (24/7 premium) · WAF (filter requests by rules) · CloudFront & Route 53 (global edge network; with Shield, mitigation at the edge) · scale with Auto Scaling. Reference architecture: https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/

| Service | Details |
|---|---|
| **Shield Standard** | Free, automatically on for everyone; protects against SYN/UDP floods, reflection attacks, other layer 3/4 attacks |
| **Shield Advanced** | Optional, **$3,000/month per organization**; protects EC2, ELB, CloudFront, Global Accelerator, Route 53 from sophisticated attacks; 24/7 AWS DDoS Response Team (DRP); protection against fee spikes caused by DDoS |
| **WAF** | Layer 7 (HTTP) firewall; deploy on ALB, API Gateway, CloudFront; Web ACL rules on IPs, HTTP headers/body, URI strings; blocks SQL injection & XSS; size constraints, geo-match (block countries); rate-based rules for DDoS |
| **Network Firewall** | Protects a whole VPC, layers 3–7, any direction: VPC↔VPC, outbound to internet, inbound from internet, to/from Direct Connect & Site-to-Site VPN |
| **Firewall Manager** | Manage security rules across all accounts in an Organization; security policies can include VPC security groups (EC2, ALB…), WAF rules, Shield Advanced, Network Firewall; auto-applied to new resources and future accounts |

### 2.7 Penetration testing
- **Allowed without prior approval** (8 services): EC2 instances, NAT Gateways, ELBs · RDS · CloudFront · Aurora · API Gateway · Lambda & Lambda@Edge · Lightsail · Elastic Beanstalk. (List can grow; not tested in detail.)
- **Prohibited:** DNS zone walking via Route 53 hosted zones · DoS/DDoS and simulated DoS/DDoS · port flooding · protocol flooding · request flooding (login or API).
- Other simulated events: contact aws-security-simulated-event@amazon.com. More: https://aws.amazon.com/security/penetration-testing/

### 2.8 Encryption & secrets
- **At rest:** data stored/archived on a device (hard disk, RDS, S3 Glacier Deep Archive…).
- **In transit:** data moving across the network (on-prem → AWS, EC2 → DynamoDB…).
- Encrypt both, using encryption keys.

**KMS (Key Management Service)** — "encryption" in a question usually means KMS; AWS manages the keys.
- **Opt-in encryption:** EBS volumes, S3 (SSE-S3 on by default, SSE-KMS opt-in), Redshift, RDS, EFS.
- **Always on:** CloudTrail logs, S3 Glacier, Storage Gateway.

| KMS key type | Details |
|---|---|
| **Customer managed** | Created/managed/used by you; enable/disable; optional yearly rotation (old key kept); bring-your-own-key possible |
| **AWS managed** | Created/managed by AWS for you, used by services (`aws/s3`, `aws/ebs`, `aws/redshift`) |
| **AWS owned** | Keys an AWS service owns and uses across many accounts; protects your resources but you can't see them |
| **CloudHSM keys (custom key store)** | Generated on your own CloudHSM device; crypto operations happen inside the CloudHSM cluster |

- **CloudHSM** — AWS provisions dedicated encryption **hardware** (Hardware Security Module); **you** manage the keys entirely. Tamper-resistant, **FIPS 140-2 Level 3**. AWS manages hardware; client connects over SSL. (KMS = AWS manages the software.)
- **ACM (AWS Certificate Manager)** — provision, manage, deploy SSL/TLS certs for HTTPS (in-flight encryption); public & private certs; **free for public certs**; auto-renewal; integrates with ELB, CloudFront, API Gateway.
- **Secrets Manager** — newer service for secrets; force rotation every X days; auto-generate secrets on rotation (via Lambda); integrates with RDS (MySQL, PostgreSQL, Aurora); encrypted with KMS; mostly for RDS.
- **SSM Parameter Store** — see §3.9.

### 2.9 Compliance, detection & investigation services
| Service | What it does |
|---|---|
| **AWS Artifact** (portal, not really a service) | On-demand AWS compliance docs & agreements. **Reports:** third-party audit docs (ISO, PCI, SOC). **Agreements:** review/accept/track agreements like the BAA or HIPAA for an account or organization. Supports internal audit/compliance. |
| **GuardDuty** | Intelligent threat discovery using ML, anomaly detection, 3rd-party data. One click to enable (30-day trial), nothing to install. Inputs: CloudTrail event logs (unusual API calls, unauthorized deployments), CloudTrail management events, CloudTrail S3 data events, VPC Flow Logs (unusual traffic/IPs), DNS logs (EC2 exfiltrating data in DNS queries); optional: EKS audit logs & runtime monitoring, RDS & Aurora login activity, EBS, Lambda network activity, S3 data events. Findings → EventBridge → Lambda/SNS. Dedicated finding for cryptocurrency attacks. |
| **Inspector** | Automated security assessments for **EC2** (via SSM agent; network reachability + OS known vulnerabilities), **ECR container images** (assessed on push), **Lambda** (code & dependency vulnerabilities, assessed on deploy). Continuous scanning only when needed; CVE database; risk score for prioritization; reports to Security Hub and EventBridge. |
| **Config** | Audit and record resource configurations and compliance over time; store in S3 (query with Athena); SNS alerts on changes; per-region but can aggregate across regions & accounts. Answers questions like "is SSH open to the world?", "are any buckets public?", "how has my ALB config changed?". Per resource: compliance over time, configuration over time, related CloudTrail API calls. |
| **Macie** | Managed data security/privacy service using ML & pattern matching to find sensitive data (**PII**) in **S3** and alert via EventBridge. |
| **Security Hub** | Central security across multiple accounts; automated checks; dashboards; aggregates findings from Config, GuardDuty, Inspector, Macie, IAM Access Analyzer, Systems Manager, Firewall Manager, Health, AWS Partner Network. **Requires AWS Config enabled.** Findings → EventBridge; investigate with Detective. |
| **Detective** | Finds the **root cause** of security findings/suspicious activity using ML and graphs; auto-collects VPC Flow Logs, CloudTrail, GuardDuty into a unified view with visualizations. |
| **AWS Abuse** | Report AWS resources used for abuse: spam, port scanning, DoS/DDoS from AWS IPs, intrusion attempts, hosting objectionable/copyrighted content, distributing malware. Contact via abuse form or abuse@amazonaws.com. |
| **IAM Access Analyzer** | Finds resources shared outside your **zone of trust** (account or organization): S3 buckets, IAM roles, KMS keys, Lambda functions & layers, SQS queues, Secrets Manager secrets → findings. |
| **IAM Access Analyzer for S3** | Ensures only intended people access buckets (flags public buckets or buckets shared with other accounts); evaluates bucket policies, ACLs, access point policies. |

**Security section summary:** Shield (auto DDoS + 24/7 support for Advanced) · WAF · KMS · CloudHSM · ACM · Artifact · GuardDuty · Inspector · Network Firewall · Config · Macie · CloudTrail · Security Hub · Detective · Abuse · root privileges · IAM Access Analyzer · Firewall Manager.

---

## 3. Cloud Technology & Services

### 3.1 EC2 (Elastic Compute Cloud) — IaaS
Core capabilities: rent VMs (**EC2**), virtual drives (**EBS**), distribute load (**ELB**), auto-scale (**ASG**).

**Configuration options:** OS (Linux, Windows, macOS) · CPU/cores · RAM · storage (network-attached EBS & EFS, or hardware EC2 Instance Store) · network card (speed, public IP) · firewall (security group) · bootstrap script (**User Data**).

**User Data** — script that runs **once at first launch**, **as root**. Used for installing updates/software, downloading files, any boot automation.

**Instance naming** — `m5.2xlarge`: `m` = class, `5` = generation, `2xlarge` = size within the class. List: https://aws.amazon.com/ec2/instance-types/

| Family | Best for |
|---|---|
| **General purpose** | Balanced compute/memory/networking; web servers, code repos (course uses **t2.micro**) |
| **Compute optimized** | Batch processing, media transcoding, high-performance web servers, HPC, scientific modeling & ML, dedicated gaming servers |
| **Memory optimized** | Large in-memory datasets: high-performance relational/NoSQL DBs, distributed web-scale caches, in-memory DBs for BI, real-time processing of big unstructured data |
| **Storage optimized** | High sequential read/write on local storage: high-frequency OLTP, relational & NoSQL DBs, cache for in-memory DBs (e.g. Redis), data warehousing, distributed file systems |

| Instance | vCPU | Mem (GiB) | Storage | Network | EBS bandwidth (Mbps) |
|---|---|---|---|---|---|
| t2.micro | 1 | 1 | EBS only | Low–moderate | — |
| t2.xlarge | 4 | 16 | EBS only | Moderate | — |
| c5d.4xlarge | 16 | 32 | 1 × 400 NVMe SSD | Up to 10 Gbps | 4,750 |
| r5.16xlarge | 64 | 512 | EBS only | 20 Gbps | 13,600 |
| m5.8xlarge | 32 | 128 | EBS only | 10 Gbps | 6,800 |

Comparison site: https://instances.vantage.sh

**Security Groups** (firewall for EC2)
- Contain **only allow rules**; can reference IP ranges (IPv4/IPv6) or other security groups.
- Control ports, authorized IP ranges, inbound and outbound traffic.
- Can attach to many instances; tied to a **region/VPC**; live *outside* the instance (blocked traffic never reaches it).
- Tip: keep a separate SG for SSH.
- **Timeout** → security group problem. **"Connection refused"** → app error or app not running.
- Default: **all inbound blocked, all outbound allowed.**
- Referencing SGs lets instances that carry an authorized SG talk to each other without IPs.

**Ports to know:** 22 SSH (Linux login) · 21 FTP · 22 SFTP (file upload over SSH) · 80 HTTP · 443 HTTPS · 3389 RDP (Windows login).

**Connecting to an instance**
| Your OS | Options |
|---|---|
| Mac / Linux | SSH (can configure `~/.ssh/config`) |
| Windows < 10 | PuTTY |
| Windows ≥ 10 | SSH or PuTTY |
| Any | EC2 Instance Connect |

- **EC2 Instance Connect:** browser-based; no key file needed (AWS pushes a temporary key); works out of the box with Amazon Linux 2; **port 22 must still be open**.
- SSH troubleshooting: rewatch, read the guide, try Instance Connect; any one working method is enough.

**Purchasing options**
| Option | Key facts | Best for |
|---|---|---|
| **On-Demand** | Linux/Windows billed per second after the first minute; other OS per hour; highest cost, no upfront, no commitment | Short-term, uninterrupted, unpredictable workloads |
| **Reserved Instances** | Up to **72%** off (pricing section says up to 75%); reserve instance type, region, tenancy, OS; 1 yr (+) or 3 yr (+++); No/Partial/All Upfront (+/++/+++); scope regional or zonal; buy/sell on RI Marketplace | Steady-state apps (e.g. databases) |
| **Convertible RI** | Can change instance type, family, OS, scope, tenancy; up to **66%** off | Long workloads needing flexibility |
| **Savings Plans** | Up to **72%** off; commit to $/hour (e.g. $10/h) for 1 or 3 yrs; excess billed On-Demand; locked to instance family + region (e.g. M5 in us-east-1); flexible on size, OS, tenancy | Long workloads |
| **Spot** | Up to **90%** off; can be reclaimed if your max price < spot price; most cost-efficient | Failure-resilient work: batch, data analysis, image processing, distributed jobs, flexible start/end. **Not** for critical jobs or DBs |
| **Dedicated Host** | Whole physical server for you; meets compliance; use server-bound licenses (per-socket/core/VM, BYOL); On-Demand per second or Reserved 1/3 yrs; **most expensive** | Complex licensing or strict regulatory needs |
| **Dedicated Instance** | Runs on hardware dedicated to you; may share with your own other instances; no placement control (can move on stop/start) | Hardware isolation from other customers |
| **Capacity Reservations** | Reserve On-Demand capacity in a specific AZ for any duration; no commitment, **no discount** (combine with regional RIs/Savings Plans); charged On-Demand rate whether used or not | Short-term uninterrupted workloads that must be in a specific AZ |

*Resort analogy (my wording):* On-Demand = walk in anytime, full price · Reserved = book far ahead for a long stay, get a discount · Savings Plans = commit to spend per hour, any room type · Spot = bid on empty rooms, can be evicted anytime · Dedicated Host = rent the whole building · Capacity Reservation = pay full price for a room even if you don't show up.

**Price example — m4.large, us-east-1 (per hour)**
| Type | Price |
|---|---|
| On-Demand | $0.10 |
| Spot | $0.038–$0.039 (up to 61% off) |
| RI 1 yr | $0.062 (No Upfront) – $0.058 (All Upfront) |
| RI 3 yr | $0.043 (No Upfront) – $0.037 (All Upfront) |
| EC2 Savings Plan 1 yr | $0.062 (No Upfront) – $0.058 (All Upfront) |
| Convertible RI 1 yr | $0.071 (No Upfront) – $0.066 (All Upfront) |
| Dedicated Host | On-Demand price |
| Dedicated Host reservation | Up to 70% off |
| Capacity Reservation | On-Demand price |

*(Exact discount percentages change over time and aren't needed for the exam.)*

**EC2 summary:** instance = AMI (OS) + size (CPU+RAM) + storage + security groups + User Data · SG = firewall · User Data = first-boot script · SSH on port 22 · instance role → IAM role · purchase options: On-Demand, Spot, Reserved (Standard + Convertible), Dedicated Host, Dedicated Instance.

### 3.2 EC2 storage
**EBS (Elastic Block Store) volume**
- Network drive (not physical) attached while the instance runs → a bit of latency; can detach/reattach quickly. Think "network USB stick".
- Persists data after instance termination.
- One instance at a time (at CCP level).
- **Locked to one AZ** (us-east-1a volume can't attach in us-east-1b) — snapshot to move it.
- Provisioned capacity (GB + IOPS), billed for all of it; can grow over time.
- **Delete on Termination:** root volume deleted by default (enabled); other volumes kept by default (disabled); change via console/CLI (e.g. to preserve root volume).

**EBS Snapshots**
- Point-in-time backup; detaching first is recommended, not required; copy across AZs or regions.
- **Snapshot Archive:** 75% cheaper tier; restore takes 24–72 hours.
- **Recycle Bin:** retention rules to recover accidentally deleted snapshots; retention 1 day–1 year.

**AMI (Amazon Machine Image)**
- Customized image (software, config, OS, monitoring) → faster boot/config.
- Built per region, can be copied across regions.
- Sources: **public** (AWS-provided), **your own**, **AWS Marketplace** (third-party, possibly paid).
- Process: launch & customize instance → stop it (data integrity) → create AMI (also creates EBS snapshots) → launch new instances from it.

**EC2 Image Builder** — automates creating, maintaining, validating, and testing EC2 AMIs / container images; can run on a schedule (weekly, on package updates…); free (pay for underlying resources). Flow: builder instance → apply components → new AMI → test instance runs test suite → distribute (multi-region possible).

**EC2 Instance Store**
- Physical disk on the host: much better I/O (very high IOPS) than EBS.
- **Ephemeral** — lost if the instance stops; risk of loss on hardware failure; backups/replication are your job.
- Good for buffers, caches, scratch/temporary data.

**EFS (Elastic File System)**
- Managed NFS, mountable on **hundreds** of EC2 instances; Linux only; **multi-AZ**.
- Highly available, scalable, pricey (~3× gp2), pay per use, no capacity planning.
- **EBS vs EFS:** EBS is per-AZ (move via snapshot); EFS spans AZs via mount targets.
- **EFS-IA (Infrequent Access):** storage class for files not accessed daily; up to **92%** cheaper than EFS Standard; lifecycle policy moves files automatically (e.g. not accessed for 60 days); transparent to apps.

**Amazon FSx** — fully managed third-party high-performance file systems:
- **FSx for Windows File Server** — Windows-native shared file system; SMB & NTFS; integrates with Microsoft AD; accessible from AWS or on-prem; multi-AZ.
- **FSx for Lustre** — HPC file storage ("Linux" + "cluster"); ML, analytics, video processing, financial modeling; 100s GB/s, millions of IOPS, sub-ms latency; can link to S3 and be accessed from on-prem.
- **FSx for NetApp ONTAP** — also offered.

**Storage summary:** EBS (network drive, one instance, one AZ, snapshots) · AMI · Image Builder · Instance Store (fast, lost on stop/terminate) · EFS (NFS for hundreds of instances in a region) · EFS-IA · FSx for Windows · FSx for Lustre.

### 3.3 Elastic Load Balancing & Auto Scaling
**Load balancer** = servers that forward traffic to multiple downstream EC2 instances.
Why: spread load · single DNS access point · handle instance failures seamlessly · regular health checks · SSL termination (HTTPS) · high availability across zones.

**ELB** = managed load balancer: AWS guarantees it works and handles upgrades, maintenance, HA; few config knobs. Self-managed is cheaper but much more effort.

| Type | Layer | Protocols | Highlights |
|---|---|---|---|
| **Application (ALB)** | 7 | HTTP, HTTPS, gRPC | HTTP routing features; static DNS (URL) |
| **Network (NLB)** | 4 | TCP, UDP | Ultra-high performance (millions of req/s); static IP via Elastic IP |
| **Gateway (GWLB)** | 3 | GENEVE on IP packets | Routes traffic through firewalls/3rd-party security appliances on EC2; intrusion detection |
| **Classic** | 4 & 7 | — | **Retired in 2023** |

**Auto Scaling Group (ASG)** — scale out (add instances) for rising load, scale in for falling load; keep min/max count; auto-register instances with the load balancer; replace unhealthy instances; saves cost by running at optimal capacity. Sizes: minimum, desired (actual), maximum.

**Scaling strategies**
- **Manual** — change ASG size yourself.
- **Dynamic:**
  - *Simple/Step* — on a CloudWatch alarm (e.g. CPU > 70% add 2 units; CPU < 30% remove 1).
  - *Target tracking* — e.g. keep average CPU around 40%.
  - *Scheduled* — known patterns (e.g. min capacity 10 at 5 pm on Fridays).
- **Predictive** — ML forecasts traffic and provisions ahead of time; for time-based patterns.

**Summary:** know HA vs scalability (vertical/horizontal) vs elasticity vs agility · ELB: distributes traffic, multi-AZ, health checks, 4 types · ASG: implements elasticity across AZs, scales on demand, replaces unhealthy, integrates with ELB.

### 3.4 Amazon S3
Main AWS building block; "infinitely scaling" storage; backbone for many websites and AWS integrations.

**Use cases:** backup & storage, disaster recovery, archive, hybrid cloud storage, application hosting, media hosting, data lakes & big data analytics, software delivery, static websites. (Nasdaq keeps 7 years of data in S3 Glacier; Sysco runs analytics for business insights.)

**Buckets**
- Objects (files) live in buckets (top-level "directories").
- Buckets are **created in a region** even though S3 looks global.
- Naming: *Shared Global Namespace* (unique across all regions/accounts) or *Account Regional Namespace* (lets you reuse a name across regions).
- Rules: no uppercase, no underscore, not an IP, start with a lowercase letter or number, must not start with `xn--`, must not end with `-s3alias`.

**Objects**
- **Key** = full path = prefix + object name (e.g. `s3://my-bucket/my_folder1/another_folder/my_file.txt`). No real directories — just long keys with slashes (the UI pretends otherwise).
- **Max object size 50 TB**; uploads over **5 GB** must use **multi-part upload**.
- Metadata (system/user key-value text pairs), Tags (Unicode key-value, **up to 10** — for security/lifecycle), Version ID (if versioning on).

**Security**
- **User-based:** IAM policies.
- **Resource-based:** bucket policies (bucket-wide, allow cross-account), object ACLs (finer grain, can be disabled), bucket ACLs (less common, can be disabled).
- Access rule: allowed if IAM **or** resource policy allows it, **and** there's no explicit Deny.
- Encryption with keys.
- **Bucket policies** (JSON): Resources (buckets/objects), Effect, Actions, Principal. Uses: public access, force encryption at upload, cross-account access.
- Patterns: public website visitor → bucket policy; IAM user → IAM policy; EC2 → IAM instance role; other account → bucket policy allowing cross-account.
- **Block Public Access** — prevents data leaks; leave on if the bucket should never be public; can be set account-wide.

**Static website hosting** — URL `http://bucket-name.s3-website-aws-region.amazonaws.com` or `http://bucket-name.s3-website.aws-region.amazonaws.com`. **403 Forbidden** → bucket policy must allow public reads.

**Versioning** — enabled per bucket; overwriting a key creates versions 1, 2, 3…; best practice; protects against accidental deletes and allows rollback. Pre-existing objects get version `null`; suspending versioning keeps old versions.

**Replication** — requires versioning on source and destination; **CRR** (cross-region) and **SRR** (same-region); buckets may be in different accounts; asynchronous copy; S3 needs IAM permissions. CRR use: compliance, lower-latency access, cross-account replication. SRR use: log aggregation, live replication between prod and test accounts.

**Durability vs availability**
- Durability **99.999999999% (11 nines)** across AZs, same for all classes — store 10 million objects and expect to lose one every ~10,000 years on average.
- Availability varies by class; e.g. S3 Standard 99.99% ≈ 53 minutes unavailable per year.

**Storage classes** (move manually or with **Lifecycle** configurations)
- **Standard (general purpose):** 99.99% availability; frequent access; low latency, high throughput; survives 2 concurrent facility failures; big data, mobile & gaming, content distribution.
- **Standard-IA:** less frequent but rapid access; cheaper; 99.9% availability; DR, backups.
- **One Zone-IA:** 11 nines in a *single* AZ (lost if the AZ is destroyed); 99.5% availability; secondary backup copies or re-creatable data.
- **Glacier** classes (archive/backup; pay storage + retrieval):
  - **Instant Retrieval** — milliseconds; ~once a quarter access; min 90 days.
  - **Flexible Retrieval** (formerly S3 Glacier) — Expedited 1–5 min, Standard 3–5 h, Bulk 5–12 h (free); min 90 days.
  - **Deep Archive** — long-term; Standard 12 h, Bulk 48 h; min 180 days.
- **Intelligent-Tiering:** small monthly monitoring/auto-tiering fee; **no retrieval charges**; moves objects automatically — Frequent (default) → Infrequent (30 days no access) → Archive Instant (90 days) → optional Archive Access (configurable 90 to 700+ days) → optional Deep Archive Access (180 to 700+ days).

| | Standard | Intelligent-Tiering | Standard-IA | One Zone-IA | Glacier Instant | Glacier Flexible | Glacier Deep Archive |
|---|---|---|---|---|---|---|---|
| Durability | 11 nines | 11 nines | 11 nines | 11 nines | 11 nines | 11 nines | 11 nines |
| Availability | 99.99% | 99.9% | 99.9% | 99.5% | 99.9% | 99.99% | 99.99% |
| Availability SLA | 99.9% | 99% | 99% | 99% | 99% | 99.9% | 99.9% |
| AZs | ≥3 | ≥3 | ≥3 | 1 | ≥3 | ≥3 | ≥3 |
| Min storage duration | None | None | 30 days | 30 days | 90 days | 90 days | 180 days |
| Min billable object size | None | None | 128 KB | 128 KB | 128 KB | 40 KB | 40 KB |
| Retrieval fee | None | None | Per GB | Per GB | Per GB | Per GB | Per GB |

**Prices (us-east-1)**
| | Standard | Intelligent-Tiering | Standard-IA | One Zone-IA | Glacier Instant | Glacier Flexible | Glacier Deep Archive |
|---|---|---|---|---|---|---|---|
| Storage ($/GB/month) | 0.023 | 0.0025–0.023 | 0.0125 | 0.01 | 0.004 | 0.0036 | 0.00099 |
| Requests (per 1,000) | GET 0.0004 / POST 0.005 | GET 0.0004 / POST 0.005 | GET 0.001 / POST 0.01 | GET 0.001 / POST 0.01 | GET 0.01 / POST 0.02 | GET 0.0004 / POST 0.03; retrieval: Expedited $10, Standard $0.05, Bulk free | GET 0.0004 / POST 0.05; retrieval: Standard $0.10, Bulk $0.025 |
| Retrieval time | Instant | Instant | Instant | Instant | Instant | Expedited 1–5 min, Standard 3–5 h, Bulk 5–12 h | Standard 12 h, Bulk 48 h |
| Monitoring (per 1,000 objects) | — | $0.0025 | — | — | — | — | — |

**S3 Express One Zone** — high-performance single-AZ class; objects in a **Directory Bucket**; 100,000s of requests/s at single-digit ms latency; up to 10× faster than Standard with 50% lower cost; 11 nines durability, 99.95% availability; co-locate storage and compute in one AZ. Use: latency-sensitive/data-intensive apps, AI/ML training, financial modeling, media processing, HPC. Best with SageMaker training, Athena, EMR, Glue.

**Encryption** — **Server-side** (default): S3 encrypts after receiving. **Client-side**: you encrypt before uploading.

### 3.5 Data transfer & hybrid storage
**AWS Snowball** — secure, portable devices for edge data collection/processing and migrating data into/out of AWS (up to petabytes).
| Device | vCPUs | Memory | SSD storage |
|---|---|---|---|
| Snowball Edge Storage Optimized | 104 | 416 GB | 210 TB |
| Snowball Edge Compute Optimized | 104 | 416 GB | 28 TB |

Network transfer times:
| Data | 100 Mbps | 1 Gbps | 10 Gbps |
|---|---|---|---|
| 10 TB | 12 days | 30 hours | 3 hours |
| 100 TB | 124 days | 12 days | 30 hours |
| 1 PB | 3 years | 124 days | 12 days |

- Network challenges: limited connectivity/bandwidth, high cost, shared bandwidth, unstable connection.
- **Rule of thumb: if a network transfer would take more than a week, use Snowball.** Direct: client → internet → S3. With Snowball: load device → ship → AWS imports to S3.
- **Edge computing** — process data where it's created (truck, ship, underground mine) with limited internet/compute; run EC2 or Lambda on Snowball Edge; use cases: preprocessing, ML, media transcoding.
- **Pricing:** pay for device usage + data transfer out; transfer **into S3 is $0.00/GB**. *On-Demand:* one-time fee per job including 10 days (Storage Optimized 80 TB) or 15 days (Storage Optimized 210 TB); shipping days don't count; extra days billed daily. *Committed upfront:* monthly, 1-yr, or 3-yr (edge computing), up to 62% off.

**Hybrid cloud** — part on-prem, part cloud (long migrations, security, compliance, IT strategy). S3 is proprietary (unlike EFS/NFS), so on-prem access to S3 needs **Storage Gateway**.

**Cloud-native storage:** Block = EBS, Instance Store · File = EFS · Object = S3, Glacier.

**AWS Storage Gateway** — bridge between on-prem data and S3; hybrid storage; use cases: DR, backup & restore, tiered storage. Types: File, Volume, Tape Gateway (types not needed for exam).

**AWS DataSync** — move large data from on-prem to AWS (agent on-prem, TLS). Targets: S3 (any class incl. Glacier), EFS, FSx for Windows. Schedule hourly/daily/weekly; incremental after first full load.

**S3 summary:** buckets vs objects (unique name, tied to region) · security (IAM, bucket policy, encryption) · static websites · versioning · replication (needs versioning) · storage classes · Snowball · Storage Gateway.

### 3.6 Databases & analytics
- Databases let you structure data, index for fast queries, and define relationships — each optimized for a purpose.
- **Relational (SQL):** spreadsheet-like tables linked by keys (e.g. Students, Subjects, Departments linked by Student ID / Dept ID).
- **NoSQL (non-relational):** purpose-built data models, flexible schema. Benefits: flexibility, scale-out, high performance, rich types. Types: key-value, document, graph, in-memory, search. **JSON** is a common NoSQL format — nested data, fields change over time, arrays supported.
- **Managed DBs on AWS:** fast provisioning, HA, vertical & horizontal scaling, automated backup/restore, operations, upgrades, OS patching by AWS, monitoring & alerting. (Running a DB on EC2 means you handle resiliency, backups, patching, HA, fault tolerance, scaling.)

| Service | Summary |
|---|---|
| **RDS** | Managed relational DB (SQL): PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, IBM DB2, Aurora. Automated provisioning & OS patching, continuous backups + point-in-time restore, dashboards, read replicas, Multi-AZ for DR, maintenance windows, vertical & horizontal scaling, EBS-backed. **No SSH access.** Typical arch: ELB → EC2 (ASG) → RDS. |
| **Aurora** | AWS proprietary (not open source); PostgreSQL & MySQL compatible; ~5× MySQL-on-RDS and 3×+ Postgres-on-RDS performance; storage grows in 10 GB increments up to 256 TB; ~20% pricier than RDS but more efficient. |
| **Aurora Serverless** | Auto instantiation & scaling by usage (PostgreSQL/MySQL); no capacity planning; least management; pay per second; good for infrequent, intermittent, unpredictable workloads. Clients connect via an Aurora-managed proxy fleet to shared storage. |
| **ElastiCache** | Managed **Redis** or **Memcached**; in-memory, high-performance, low-latency caches; offloads read-heavy DB traffic; AWS handles OS patching, setup, config, monitoring, recovery, backups. |
| **DynamoDB** | Fully managed NoSQL **key/value**, replicated across 3 AZs; serverless; millions of req/s, trillions of rows, 100s of TB; single-digit ms latency; IAM-integrated; low cost, auto scaling; Standard & IA table classes. |
| **DAX** | In-memory cache for DynamoDB only; up to 10× faster (ms → µs). ElastiCache works with other DBs; DAX only with DynamoDB. |
| **DynamoDB Global Tables** | Low-latency multi-region access; **active-active** (read/write in any region), 2-way replication. |
| **Redshift** | PostgreSQL-based but **OLAP** (analytics/data warehousing), not OLTP; load data hourly, not per second; 10× better than other warehouses; scales to PBs; **columnar** storage; massively parallel (MPP); HA; pay per provisioned instance; SQL interface; works with QuickSight, Tableau. |
| **Redshift Serverless** | Auto-provisions/scales warehouse capacity; pay only for use; reporting, dashboards, real-time analytics. Query via Query Editor or any tool. |
| **EMR** (Elastic MapReduce) | Hadoop big-data clusters (hundreds of EC2); also Spark, HBase, Presto, Flink; AWS provisions/configures; auto scaling, Spot integration. Use: data processing, ML, web indexing, big data. |
| **Athena** | Serverless SQL queries on **S3** data (CSV, JSON, ORC, Avro, Parquet; built on Presto); **$5 per TB scanned**; use compressed/columnar data to save; BI/reporting, analyze VPC Flow Logs, ELB logs, CloudTrail. **Exam tip: serverless SQL on S3 = Athena.** |
| **QuickSight** | Serverless, ML-powered BI dashboards; fast, auto-scaling, embeddable, per-session pricing; integrates with RDS, Aurora, Athena, Redshift, S3. |
| **DocumentDB** | "Aurora for MongoDB" (store/query/index JSON); fully managed, HA across 3 AZs; storage grows in 10 GB increments; millions of req/s. |
| **Neptune** | Managed **graph** DB (social networks: friends, posts, comments, likes); HA across 3 AZs, up to 15 read replicas; billions of relations, ms queries; knowledge graphs (Wikipedia), fraud detection, recommendations, social networking. |
| **Timestream** | Managed serverless **time-series** DB; auto-scales; trillions of events/day; 1000s× faster and 1/10 the cost of relational DBs; built-in time-series analytics for near-real-time patterns. |
| **Managed Blockchain** | Lets multiple parties transact without a trusted central authority; join public networks or create private ones; Hyperledger Fabric & Ethereum. |
| **Glue** | Managed serverless **ETL** to prepare data for analytics (e.g. S3/RDS → Redshift); **Glue Data Catalog** of datasets used by Athena, Redshift, EMR. |
| **DMS** (Database Migration Service) | Quick, secure, resilient, self-healing migration; source stays available; homogeneous (Oracle → Oracle) or heterogeneous (SQL Server → Aurora); runs on an EC2 instance. |

**RDS deployments**
- **Read Replicas:** scale reads; up to **15**; writes only go to the main DB.
- **Multi-AZ:** failover if an AZ fails (HA); reads/writes only on main; only one failover AZ.
- **Multi-Region read replicas:** DR for region issues, local read performance globally, replication cost.

**Summary:** OLTP relational = RDS & Aurora · in-memory = ElastiCache · key/value = DynamoDB (+DAX) · OLAP warehouse = Redshift · Hadoop = EMR · S3 queries = Athena · dashboards = QuickSight · MongoDB = DocumentDB · blockchain = Managed Blockchain · ETL = Glue · migration = DMS · graph = Neptune · time-series = Timestream.

### 3.7 Containers, serverless & other compute
**Docker** — package apps in containers that run identically on any OS/machine: no compatibility issues, predictable, less work, easier to maintain/deploy, any language/tech, scales in seconds.
- Images live in repositories: public **Docker Hub** (base images: Ubuntu, MySQL, Node.js, Java…) or private **Amazon ECR**.
- **Docker vs VMs:** VMs each run a guest OS on a hypervisor; containers share the host OS via the Docker daemon → many containers per server.

| Service | Summary |
|---|---|
| **ECS** (Elastic Container Service) | Run Docker containers on AWS; **you provision/maintain EC2 instances**; AWS starts/stops containers; integrates with ALB |
| **Fargate** | Run containers **without managing infrastructure** — serverless; AWS runs them based on CPU/RAM you request |
| **ECR** (Elastic Container Registry) | Private Docker image registry for ECS/Fargate |
| **EKS** (Elastic Kubernetes Service) | Managed Kubernetes (open-source container orchestration); nodes on EC2 or Fargate; Kubernetes is cloud-agnostic |

**Serverless** — developers deploy code/functions without managing servers (servers exist, you just don't see or provision them). Started as FaaS (pioneered by Lambda); now covers any managed service (DBs, messaging, storage). Examples so far: S3, DynamoDB, Fargate, Lambda.

**EC2 vs Lambda**
| EC2 | Lambda |
|---|---|
| Virtual servers | Virtual functions, no servers |
| Limited by RAM & CPU | Limited by time (short runs) |
| Always running | Runs on demand |
| Scaling needs intervention | Scaling is automatic |

**Lambda benefits:** pay per request + compute time; free tier 1,000,000 requests and 400,000 GB-s; integrated across AWS; event-driven; many languages; monitoring via CloudWatch; up to **10 GB RAM** per function (more RAM also boosts CPU & network).
- **Languages:** Node.js, Python, Java, C# (.NET Core)/PowerShell, Ruby, Custom Runtime API (e.g. Rust, Go); Lambda container images must implement the Lambda Runtime API (for arbitrary Docker images prefer ECS/Fargate).
- **Examples:** thumbnail creation (new S3 image triggers Lambda → thumbnail to S3 + metadata like name/size/date to DynamoDB); serverless cron (EventBridge every hour → Lambda).
- **Pricing:** first 1M requests free, then $0.20 per million ($0.0000002/request). Duration billed per 1 ms: 400,000 GB-s free/month (= 400,000 s at 1 GB, 3,200,000 s at 128 MB), then $1.00 per 600,000 GB-s. Usually very cheap. https://aws.amazon.com/lambda/pricing/
- **Summary:** serverless FaaS, seamless scaling, reactive; billed by run time × RAM and by invocations; any language except arbitrary Docker; **max 15 minutes**.

**API Gateway** — fully managed, serverless, scalable service to create, publish, maintain, monitor, secure APIs; REST & WebSocket; auth, throttling, API keys, monitoring. Pattern: client → API Gateway → Lambda → DynamoDB.

**AWS Batch** — fully managed batch processing at any scale (100,000s of jobs); batch job = has a start and end; dynamically launches EC2/Spot; provisions right compute/memory; jobs are Docker images on ECS, EKS, or Fargate; you submit/schedule, Batch handles the rest; cost-friendly.

| Lambda | Batch |
|---|---|
| Time limit | No time limit |
| Limited runtimes | Any runtime packaged as Docker |
| Limited temp disk | EBS/instance store for disk |
| Serverless | Relies on EC2 (can be AWS-managed) |

**Lightsail** — virtual servers, storage, DBs, networking with low, predictable pricing; simpler than EC2/RDS/ELB/EBS/Route 53; for people with little cloud experience; notifications & monitoring; templates (LAMP, Nginx, MEAN, Node.js, WordPress, Magento, Plesk, Joomla); dev/test; **HA but no auto scaling**, limited integrations.

**Summary:** Docker · ECS (containers on EC2) · Fargate (serverless containers) · ECR · Batch · Lightsail · Lambda + API Gateway.

### 3.8 Infrastructure as Code & developer services
**CloudFormation** — declarative IaC for (almost) all AWS resources; you describe e.g. a security group, two EC2 instances, an S3 bucket, an ELB, and it builds them in the right order with exact config.
- *Benefits:* no manual resources, changes reviewed as code · each stack's resources tagged for cost visibility; estimate cost from template; e.g. delete dev stacks at 5 PM and recreate at 8 AM · destroy/re-create on the fly · auto-generated diagrams · declarative (no ordering to figure out) · reuse templates & docs · custom resources for unsupported ones.
- **Infrastructure Composer** — visualize stack resources and their relationships (e.g. WordPress stack).

**AWS CDK (Cloud Development Kit)** — define infrastructure in JavaScript/TypeScript, Python, Java, .NET; compiled (via CDK CLI) into a CloudFormation template (JSON/YAML); deploy infra and runtime code together — great for Lambda and ECS/EKS containers.

**Typical 3-tier web app:** ELB → multi-AZ ASG of EC2 → ElastiCache (sessions & cache) + RDS (read/write).

**Developer pain points:** managing infra, deploying code, configuring DBs/LBs, scaling; most web apps share the same ALB + ASG architecture; developers just want code to run consistently across apps/environments.

**Elastic Beanstalk** (PaaS)
- Developer-centric deployment using EC2, ASG, ELB, RDS… in one easy view, with full config control.
- Free; pay for underlying instances.
- Managed: instance/OS config, deployment strategy (configurable), capacity provisioning, load balancing & auto scaling, health monitoring. **Developer owns only the code.**
- Architectures: single instance (dev) · LB + ASG (prod/pre-prod web) · ASG only (non-web prod workers).
- Platforms: Go, Java SE, Java with Tomcat, .NET on Windows Server with IIS, Node.js, PHP, Python, Ruby, Packer Builder, single-container Docker, multi-container Docker, preconfigured Docker.
- Health agent pushes metrics to CloudWatch, checks app health, publishes health events.

| Service | Purpose |
|---|---|
| **CodeCommit** | Private Git repos (AWS's GitHub competitor); collaboration, auto-versioning; fully managed, scalable, HA, secure, AWS-integrated |
| **CodeBuild** | Compile, test, package in the cloud; fully managed serverless, scalable, HA, secure; pay per build time |
| **CodeDeploy** | Auto-deploy apps to EC2 **and on-prem** servers (hybrid); servers need the CodeDeploy Agent pre-installed; upgrades v1 → v2 |
| **CodePipeline** | Orchestrates code → build → test → provision → deploy; basis of CI/CD; works with CodeCommit, CodeBuild, CodeDeploy, Beanstalk, CloudFormation, GitHub, 3rd-party & custom plugins; fast delivery |
| **CodeArtifact** | Artifact management for code dependencies; works with Maven, Gradle, npm, yarn, twine, pip, NuGet; devs and CodeBuild pull from it |

### 3.9 AWS Systems Manager (SSM)
- Manage EC2 and on-prem systems at scale (**hybrid**); operational insights; 10+ products.
- Key features: patching automation for compliance, run commands across a fleet, store config in Parameter Store.
- OS: Linux, Windows, macOS, Raspberry Pi OS (Raspbian).
- Requires the **SSM agent** (preinstalled on Amazon Linux AMI and some Ubuntu AMIs). If an instance can't be managed, suspect the agent.
- **Session Manager** — secure shell on EC2/on-prem **without SSH, bastion hosts, or keys; no port 22**; Linux, macOS, Windows; session logs to S3 or CloudWatch Logs; access controlled by IAM.
- **Parameter Store** — secure storage for config & secrets (API keys, passwords…); serverless, scalable, durable, easy SDK; IAM access control; version tracking; optional KMS encryption.

**Deployment summary:** CloudFormation (AWS only; IaC; repeat across regions & accounts) · Beanstalk (AWS only; PaaS; known architecture like ALB + EC2 + RDS) · CodeDeploy (hybrid) · Systems Manager (hybrid; patch, configure, run commands).
**Developer services summary:** CodeCommit · CodeBuild · CodeDeploy · CodePipeline · CodeArtifact · CDK.

### 3.10 Global applications
**Why go global:** lower latency (deploy near users; packets from Asia to the US take time) · disaster recovery (fail over to another region if one goes down from earthquake, storm, power, politics) · harder to attack.

**Route 53** — managed DNS; routes users to the closest/lowest-latency deployment; DR strategies.
| Record | Maps |
|---|---|
| **A** | hostname → IPv4 |
| **AAAA** | hostname → IPv6 |
| **CNAME** | hostname → hostname |
| **Alias** | hostname → AWS resource (ELB, CloudFront, S3, RDS…) |

Flow: browser asks Route 53 for `myapp.mydomain.com` → gets IP (A record) → sends HTTP request to that IP.
**Routing policies:** Simple (no health checks) · Weighted (e.g. 70/20/10 split) · Latency-based · Failover (health check on primary → switch to secondary for DR).

**CloudFront** — CDN; caches content at the edge for faster reads and better UX; hundreds of PoPs; DDoS protection with Shield and WAF.
- **Origins:** S3 bucket (distribute/cache files, upload through CloudFront; secured with **Origin Access Control** + bucket policy) · VPC origin (private subnets: private ALB/NLB/EC2) · custom HTTP origin (S3 static website, any public HTTP backend like a public ALB).
- Flow: client → edge location (local cache) → forwards to origin on cache miss.

| CloudFront | S3 Cross-Region Replication |
|---|---|
| Global edge network | Configure per destination region |
| Files cached for a TTL (e.g. a day) | Near real-time updates |
| Static content needed everywhere | Read-only; dynamic content at low latency in a few regions |

**S3 Transfer Acceleration** — upload to a nearby edge location, which forwards over AWS's private network to the target bucket. Speed test: https://s3-accelerate-speedtest.s3-accelerate.amazonaws.com/en/accelerate-speed-comparsion.html

**AWS Global Accelerator** — improves availability & performance via AWS's internal network (~60% improvement); creates **2 Anycast IPs**; traffic enters at edge locations and travels privately to your app. Speed test: https://speedtest.globalaccelerator.aws/

| CloudFront | Global Accelerator |
|---|---|
| CDN; caches content (images, video) at the edge | **No caching**; proxies packets at the edge to apps in one or more regions |
| — | Any TCP/UDP app; HTTP use cases needing static IPs or fast deterministic regional failover |
| *Both* use the AWS global network & edge locations and integrate with Shield | |

**AWS Outposts** — AWS-managed server racks in *your* data center with the same AWS infrastructure, services, APIs, tools (solves running two different operating models in hybrid setups). **You handle the rack's physical security.** Benefits: low-latency access to on-prem systems, local processing, data residency, easier migration, fully managed. Services on Outposts: EC2, EBS, S3, EKS, ECS, RDS, EMR.

**AWS Wavelength** — AWS infrastructure inside telecom providers' data centers at the edge of **5G** networks (EC2, EBS, VPC…); ultra-low latency; traffic stays in the carrier's network; high-bandwidth secure link to the parent region; no extra charges or agreements. Use: smart cities, ML-assisted diagnostics, connected vehicles, interactive live video, AR/VR, real-time gaming.

**AWS Local Zones** — compute, storage, DB and other services placed closer to users for latency-sensitive apps; extend your VPC ("extension of a region"); works with EC2, RDS, ECS, EBS, ElastiCache, Direct Connect. E.g. region us-east-1 with Local Zones in Boston, Chicago, Dallas, Houston, Miami.

**Global architectures** (difficulty increases down the list)
| Pattern | Characteristics |
|---|---|
| Single region, single AZ | No HA, high global latency, easiest |
| Single region, multi-AZ | HA, still high global latency |
| Multi-region, active-passive | Better global read latency; writes still go to one active region |
| Multi-region, active-active | Low read and write latency everywhere; hardest |

### 3.11 Cloud integration (decoupling)
- **Synchronous** (app → app) vs **asynchronous/event-based** (app → queue → app).
- Synchronous struggles with sudden spikes (e.g. 1,000 videos to encode instead of the usual 10) → decouple with **SQS** (queue), **SNS** (pub/sub), **Kinesis** (real-time streaming). These scale independently.

**SQS (Simple Queue Service)** — producers send messages, consumers poll.
- **Standard queue:** oldest AWS offering (10+ years); fully managed (~serverless); 1 to 10,000s msgs/s; retention default **4 days, max 14 days**; unlimited messages; deleted after consumption; < 10 ms latency; consumers share work and scale horizontally. E.g. web-server ASG → SQS → video-processing ASG.
- **FIFO queue:** first in, first out — messages processed in order.

**Kinesis** — exam: **real-time big data streaming**; collect, process, analyze streaming data at any scale. (Detail, good to know: Kinesis Data Streams ingests from hundreds of thousands of sources at low latency; **Amazon Data Firehose** loads into S3, Redshift, OpenSearch…) Sources: click streams, IoT, metrics & logs.

**SNS (Simple Notification Service)** — one message to many receivers (pub/sub). Publishers send to one topic; every subscriber gets every message; up to **12,500,000 subscriptions per topic**, **100,000 topics**. Subscribers: SQS, Lambda, Data Firehose, HTTP(S) endpoints, SMS & mobile notifications, email.

**Amazon MQ** — SQS/SNS use AWS proprietary protocols; on-prem apps may use open protocols (MQTT, AMQP, STOMP, OpenWire, WSS). MQ = managed broker (ActiveMQ, RabbitMQ) so you don't have to re-engineer. Doesn't scale like SQS/SNS; runs on servers; multi-AZ failover; has both queues (~SQS) and topics (~SNS).

**Summary:** SQS (queue; many producers; up to 14 days; consumers share & delete) · SNS (notifications; all subscribers get all messages; no retention) · Kinesis (real-time streaming) · MQ (managed ActiveMQ/RabbitMQ).

### 3.12 Monitoring
**CloudWatch Metrics** — metrics for every service; a metric = a monitored variable (CPUUtilization, NetworkIn…) with timestamps; build dashboards.
- **Key metrics:** EC2 — CPU, status checks, network (**not RAM**); default every **5 min**, detailed monitoring (paid) every **1 min** · EBS — disk reads/writes · S3 — BucketSizeBytes, NumberOfObjects, AllRequests · Billing — Total Estimated Charge (**us-east-1 only**) · Service limits — API usage · Custom metrics.

**CloudWatch Alarms** — notify on any metric. Actions: Auto Scaling (change desired count), EC2 actions (stop, terminate, reboot, recover), SNS notifications. Options: sampling, %, max, min…; choose evaluation period; e.g. billing alarm. States: **OK, INSUFFICIENT_DATA, ALARM**.

**CloudWatch Logs** — collects from Elastic Beanstalk, ECS containers, Lambda, CloudTrail (filtered), CloudWatch agents on EC2/on-prem, Route 53 DNS queries; real-time monitoring; adjustable retention.
- EC2 sends **no logs by default** — run the CloudWatch agent (also works on-prem) and set correct IAM permissions.

**EventBridge** (formerly CloudWatch Events)
- **Schedule:** cron jobs (e.g. every hour → Lambda). **Event pattern:** react to service activity (e.g. root user sign-in → SNS email).
- Sources: EC2 (instance start), CodeBuild (failed build), S3 (object upload), Trusted Advisor (new finding), CloudTrail (any API call), schedules. Destinations: compute (Lambda, Batch, ECS task), integration (SQS, SNS, Kinesis Data Streams), orchestration (Step Functions, CodePipeline, CodeBuild), maintenance (SSM, EC2 actions).
- Event buses: default (AWS services), partner (SaaS partners), custom (your apps). Schema Registry; archive events (all/filtered, indefinitely or set period) and **replay** them.

**CloudTrail** — governance, compliance, audit; **enabled by default**; history of API calls from Console, SDK, CLI, AWS services; send to CloudWatch Logs or S3; trail applies to all regions (default) or one. **If something was deleted, check CloudTrail first.** **CloudTrail Insights** = automated analysis of events.

**X-Ray** — distributed tracing. Old way: test locally, add logs everywhere, redeploy; log formats differ; distributed services are hard to debug and lack a whole-architecture view. X-Ray gives visual analysis: troubleshoot bottlenecks, understand microservice dependencies, pinpoint issues, review request behavior, find errors/exceptions, check SLA timing, see where you're throttled, identify impacted users.

**AWS Health Dashboard**
- **Service History:** all regions & services, daily history, RSS feed (formerly Service Health Dashboard).
- **Your Account** (formerly Personal Health Dashboard): alerts and remediation guidance when AWS events may affect *your* resources; personalized view; proactive notices for scheduled activities; can aggregate across an Organization; global service.

**Summary:** CloudWatch (metrics, alarms, logs, events/EventBridge) · CloudTrail (+Insights) · X-Ray · Health Dashboard (service) · Account Health Dashboard.

### 3.13 Amazon VPC (overview level; 1–2 exam questions at most)
**IP addresses**
- **IPv4** (4.3 billion). *Public* — internet-usable; EC2 gets a **new public IP on each stop/start** by default. *Private* — for LANs/internal AWS (e.g. 192.168.1.1); fixed across stop/start.
- **Elastic IP** — fixed public IPv4 you attach to an instance.
- All public IPv4 (incl. Elastic IP) cost **$0.005/hour**.
- **IPv6** (3.4 × 10³⁸ addresses) — all public in AWS, e.g. `2001:db8:3333:4444:cccc:dddd:eeee:ffff`; **free**.

**Components**
| Component | Summary |
|---|---|
| **VPC** | Private network for your resources; **regional**; e.g. CIDR 10.0.0.0/16 |
| **Subnet** | Partition of a VPC; **tied to an AZ**; public (internet-reachable) or private; **route tables** define access |
| **Internet Gateway** | VPC-level; gives instances internet access; public subnets route to it |
| **NAT Gateway** (AWS-managed) / **NAT Instance** (self-managed) | Let private-subnet instances reach the internet while staying private |
| **NACL** | Subnet-level firewall; **allow and deny** rules; IP-only rules; **stateless** |
| **Security Group** | Instance/ENI-level firewall; **allow only**; rules on IPs and other SGs; **stateful** |
| **VPC Flow Logs** | IP traffic info at VPC, subnet, or ENI level; troubleshoot subnet↔internet/subnet connectivity; also covers ELB, ElastiCache, RDS, Aurora…; send to S3, CloudWatch Logs, Data Firehose |
| **VPC Peering** | Privately connect two VPCs over AWS network as if one; **no overlapping CIDR**; **not transitive** (A–B and B–C doesn't give A–C) |
| **VPC Endpoints** | Reach AWS services privately (not via public internet) — better security, lower latency. **Gateway:** S3 & DynamoDB. **Interface (ENI):** most services incl. S3 & DynamoDB |
| **PrivateLink** (VPC Endpoint Services) | Most secure/scalable way to expose a service to 1000s of VPCs; no peering, IGW, NAT, or route tables; needs an NLB (service side) and ENI (customer side) |
| **Site-to-Site VPN** | On-prem ↔ AWS over the **public internet**, automatically encrypted; on-prem needs a **Customer Gateway (CGW)**, AWS side a **Virtual Private Gateway (VGW)** |
| **Direct Connect (DX)** | **Physical private** connection on-prem ↔ AWS; secure, fast; takes **at least a month** to set up |
| **Client VPN** | From your computer via OpenVPN into your VPC (and on-prem via Site-to-Site); reach EC2 by private IP; goes over public internet |
| **Transit Gateway** | Hub-and-spoke transitive connectivity for thousands of VPCs + on-prem; one gateway; works with Direct Connect Gateway and VPN |

- AWS creates a **default VPC** for you.
- NACL vs SG comparison table: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html#VPC_Security_Comparison

### 3.14 Machine learning services
| Service | Purpose |
|---|---|
| **Rekognition** | Find objects, people, text, scenes in images/video; facial analysis & search (verification, counting); "familiar faces" DB or celebrity matching. Uses: labeling, content moderation, text detection, face detection & analysis (gender, age range, emotions), face search/verification, celebrity recognition, pathing (sports analysis) |
| **Transcribe** | Speech → text via deep-learning ASR; PII redaction; automatic language ID for multilingual audio. Uses: customer-service call transcripts, captions/subtitles, searchable media metadata |
| **Polly** | Text → lifelike speech (deep learning); apps that talk |
| **Translate** | Natural, accurate translation; localize websites/apps; translate large text volumes |
| **Lex** | Same tech as Alexa: ASR + natural-language understanding of intent; chatbots, call-center bots |
| **Connect** | Cloud contact center: receive calls, contact flows; integrates with CRMs/AWS; no upfront cost; ~80% cheaper than traditional. Example: call → Connect → Lex (intent) → Lambda → CRM appointment |
| **Comprehend** | Managed serverless NLP: detect language; extract key phrases, places, people, brands, events; sentiment; tokenization & parts of speech; auto-organize documents by topic. Uses: find what drives good/bad customer experiences in emails; group articles by topic |
| **SageMaker AI** | Fully managed platform for developers/data scientists to build, train, tune, and apply ML models in one place (e.g. predict exam score from IT/AWS experience and study time) |
| **Kendra** | ML-powered document search; extracts answers from text, PDF, HTML, PowerPoint, Word, FAQs; natural-language queries; learns from feedback (incremental learning); manual tuning. Sources: S3, RDS, Google Drive, SharePoint, OneDrive, 3rd party |
| **Personalize** | Real-time personalized recommendations (same tech as Amazon.com); product recommendations/re-ranking, targeted marketing; integrates with websites, apps, SMS, email; implement in days; retail, media & entertainment |
| **Textract** | Extract text, handwriting, and data (forms, tables) from scanned documents (PDFs, images). Uses: financial (invoices, reports), healthcare (records, insurance claims), public sector (tax forms, IDs, passports) |

### 3.15 Other services
| Service | Summary |
|---|---|
| **WorkSpaces** | Managed **Desktop as a Service** (Windows/Linux); replaces on-prem VDI; scales to thousands of users; KMS-secured; monthly or hourly pricing; deploy in multiple regions near users |
| **AppStream 2.0** | Stream a **desktop application** to a web browser on any device; no VDI connection; choose instance type (CPU, RAM, GPU) per app |
| **IoT Core** | Connect IoT devices to AWS; serverless, secure, scales to billions of devices/trillions of messages; talk to devices even when offline; publish/subscribe; integrates with Lambda, S3, SageMaker… |
| **AppSync** | Real-time data store/sync for web & mobile using **GraphQL**; auto-generated client code; DynamoDB/Lambda integration; real-time subscriptions; offline sync (replaces Cognito Sync); fine-grained security; used by Amplify |
| **Amplify** | Tools to build & deploy full-stack web/mobile apps: auth, storage, API (REST, GraphQL), CI/CD, PubSub, analytics, AI/ML predictions, monitoring; source from AWS or GitHub |
| **Infrastructure Composer** | Visually design serverless apps; configure resource interactions; generates CloudFormation IaC; import existing CloudFormation/SAM templates to visualize |
| **Device Farm** | Test web/mobile apps on real desktop browsers, phones, tablets (not emulators); run concurrently; configure GPS, language, Wi-Fi, Bluetooth; reports, logs, screenshots |
| **AWS Backup** | Central managed backups across services; on-demand & scheduled; point-in-time recovery; retention, lifecycle, policies; cross-region; cross-account (via Organizations). Supports EC2, EBS, S3, RDS, Aurora, DynamoDB, EFS, FSx, Storage Gateway |
| **Elastic Disaster Recovery (DRS)** | Formerly CloudEndure DR; recover physical, virtual, cloud servers into AWS; protect critical DBs (Oracle, MySQL, SQL Server), SAP, ransomware; continuous block-level replication (seconds) to low-cost staging; failover in minutes; failback supported |
| **Step Functions** | Serverless visual workflows orchestrating Lambda; sequence, parallel, conditions, timeouts, error handling; integrates with EC2, ECS, on-prem, API Gateway, SQS; human approval steps; order fulfillment, data processing, web apps |
| **Fault Injection Simulator (FIS)** | Managed chaos engineering: inject disruptions (e.g. CPU/memory spikes), observe, improve; find hidden bugs & bottlenecks; EC2, ECS, EKS, RDS; pre-built templates; monitored with CloudWatch/EventBridge; stops when complete or on alarm |
| **Ground Station** | Control satellite communications, process data, scale operations; global ground stations near regions; satellite data into your VPC in seconds (S3/EC2); weather, imaging, communications, broadcasts |
| **Pinpoint** | Scalable two-way marketing comms: email, SMS, push, voice, in-app; segmentation & personalization; receive replies; billions of messages/day; campaigns, bulk & transactional SMS. vs SNS/SES: there you manage each message's audience/content/schedule; Pinpoint gives templates, schedules, segments, full campaigns. Streams events (e.g. TEXT_SUCCESS, TEXT_DELIVERED) to SNS, Data Firehose, CloudWatch Logs |

**Disaster recovery strategies** (cost rises down the list)
| Strategy | Description |
|---|---|
| **Backup & Restore** | Back up data to S3; restore when needed |
| **Pilot Light** | Core functions running in AWS, minimal setup, ready to scale |
| **Warm Standby** | Full app running at minimum size |
| **Multi-Site / Hot Site** | Full app running at full size |

Typical cloud DR: multi-AZ in us-east-1 with failover to multi-AZ in eu-west-2.

**Migration services**
| Service | Summary |
|---|---|
| **Application Discovery Service** | Gathers on-prem data for migration planning (utilization, dependency mapping). *Agentless* (Agentless Discovery Connector): VM inventory, config, CPU/memory/disk history. *Agent-based* (Discovery Agent): system config & performance, running processes, network connections. View in Migration Hub |
| **Application Migration Service (MGN)** | Evolution of CloudEndure Migration, replaces Server Migration Service (SMS); lift-and-shift (rehost); converts physical/virtual/cloud servers to run natively on AWS; many platforms/OS/DBs; continuous replication to staging → cutover; minimal downtime, lower cost |
| **Migration Evaluator** | Data-driven business case: baseline of current environment; Agentless Collector snapshots on-prem footprint and dependencies (or import from 3rd-party tools/Discovery Service); Quick Insights cost report; expert guidance |
| **Migration Hub** | Central place to discover, assess, plan, track migrations; group servers into apps; right-sizing & strategy recommendations; **Orchestrator** templates (SAP, SQL Server…); status from MGN and DMS; incremental refactoring |
| **DataSync / DMS / Snowball** | See §3.5 and §3.6 |

---

## 4. Billing, Pricing & Support

### 4.1 Multi-account management
**AWS Organizations** (global service)
- Manage multiple accounts; one **master (management) account**.
- **Consolidated billing** with a single payment method; aggregated usage for volume discounts (EC2, S3…); pooled Reserved Instances.
- API to automate account creation.
- Restrict privileges with **Service Control Policies (SCPs)**.
- **Organizational Units (OUs)** can be organized by business unit, environment/lifecycle, or project (e.g. Root OU → Dev, Prod, Finance, HR OUs).

**Multi-account strategies:** accounts per department, cost center, dev/test/prod, regulatory needs (via SCP), resource isolation (e.g. VPC), separate service limits, isolated logging account. Compare multi-account vs one account with multiple VPCs. Use tagging standards for billing; enable CloudTrail everywhere → central S3; send CloudWatch Logs to a central account.

**SCPs**
- Allow-list or deny-list IAM actions at the OU or account level.
- **Don't apply to the management account.**
- Apply to all users and roles in an account, **including root**.
- Don't affect **service-linked roles** (which let other services integrate with Organizations).
- Need an **explicit Allow** (nothing allowed by default).
- Uses: block services (e.g. no EMR); enforce PCI compliance by disabling services. Examples: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_example-scps.html

**Consolidated billing** — combined usage shares volume pricing, RI and Savings Plans discounts across accounts (e.g. account A's 5 reserved instances can benefit account B's usage); one bill; management account can turn off RI sharing for any account, including itself.

**AWS Control Tower** — set up and govern a secure, compliant multi-account environment using best practices in a few clicks; guardrails for ongoing policy management; detect & remediate violations; compliance dashboard; runs on top of Organizations (sets it up and applies SCPs automatically).

**AWS Resource Access Manager (RAM)** — share resources you own with other accounts (any account or within your Organization) to avoid duplication; e.g. Aurora, VPC subnets, Transit Gateway, Route 53, EC2 Dedicated Hosts, License Manager configs.

**AWS Service Catalog** — self-service portal of admin-approved products so new users don't create non-compliant stacks. Admins: products (CloudFormation templates) → portfolios (collections) → IAM permissions. Users: launch authorized products that come out properly configured and tagged.

### 4.2 Pricing models & free tier
**Four pricing models:** pay as you go · save when you reserve (EC2 RIs, DynamoDB Reserved Capacity, ElastiCache Reserved Nodes, RDS RIs, Redshift Reserved Nodes) · pay less by using more (volume discounts) · pay less as AWS grows.

**Free Plan (new accounts)** — up to **$200** in credits (the course intro says $100, up to $200). Choose **Free Plan** (expires after **6 months** or when credits run out, no charges) or **Paid Plan** (charged after credits). Both include **Always Free** monthly limits, e.g. Lambda 1M requests + 400,000 GB-s; DynamoDB 25 GB + 200M requests. https://aws.amazon.com/free/

### 4.3 Service pricing
| Service | What you pay for |
|---|---|
| **EC2** | Number of instances; config (physical capacity, region, OS & software, type, size); ELB running time & data processed; detailed monitoring. On-Demand: min 60 s, per second (Linux/Windows) or per hour (other). Reserved: up to 75% off, 1 or 3 yrs, All/Partial/No upfront. Spot: up to 90% off, bid on unused capacity. Dedicated Host: On-Demand or 1/3-yr reservation. Savings Plans as an alternative |
| **Lambda** | Per call + per duration |
| **ECS (EC2 launch type)** | No extra fee; pay for the AWS resources you create |
| **Fargate launch type** | vCPU + memory allocated to containers |
| **S3** | Storage class; number & size of objects (tiered by volume); number & type of requests; data transfer out of the region; Transfer Acceleration; lifecycle transitions. (EFS is similar: pay per use, IA class, lifecycle rules) |
| **EBS** | Volume type; GB-month provisioned; IOPS (included for General Purpose SSD; provisioned amount for Provisioned IOPS SSD; per request for Magnetic); snapshots (per GB-month); outbound transfer tiered, inbound free |
| **RDS** | Per-hour billing; engine, size, memory class; On-Demand or Reserved (1/3 yrs, optional upfront); backup storage free up to 100% of total DB storage per region; extra storage per GB-month; I/O requests per month; Single-AZ vs Multi-AZ; outbound transfer tiered, inbound free |
| **CloudFront** | Varies by geography; aggregated per edge location; data transfer out (volume discount); number of HTTP/HTTPS requests |

**Networking costs per GB (simplified)**
- Traffic **into** EC2: free.
- Same AZ over private IP: **free**.
- Across AZs over **private IP: $0.01**; over **public/Elastic IP: $0.02**.
- Inter-region: **$0.02**.
- Tips: use private IPs (cheaper, faster); keep traffic in one AZ for maximum savings (at the cost of HA).

**Savings Plans** — commit $/hour for 1 or 3 years; easiest long-term commitment.
- **EC2 Savings Plan:** up to 72% off; one instance family in a region (e.g. C5 or M5), any AZ, size (m5.xl–m5.4xl), OS, tenancy; All/Partial/No upfront.
- **Compute Savings Plan:** up to 66% off; any family, region, size, OS, tenancy; covers EC2, Fargate, Lambda.
- **Machine Learning Savings Plan:** SageMaker…
- Set up in Cost Explorer; estimate at https://aws.amazon.com/savingsplans/pricing/

**Compute Optimizer** — ML-based right-sizing recommendations from configuration + CloudWatch utilization; EC2, EC2 ASGs, EBS, Lambda; up to 25% savings; export to S3.

### 4.4 Billing & cost tools
- **Estimate:** Pricing Calculator (https://calculator.aws/).
- **Track:** Billing Dashboard, Cost Allocation Tags, Cost & Usage Reports, Cost Explorer.
- **Monitor against plans:** Billing Alarms, Budgets.

| Tool | Summary |
|---|---|
| **Billing Dashboard** | High-level overview of spend |
| **Cost Allocation Tags** | Detailed cost tracking. AWS-generated (auto-applied, prefix `aws:`, e.g. `aws:createdBy`) and user-defined (prefix `user:`) |
| **Tags & Resource Groups** | Tag EC2 (instances, images, LBs, SGs), RDS, VPC, Route 53, IAM users…; CloudFormation tags stack resources consistently; common tags: Name, Environment, Team; group resources sharing tags; manage with **Tag Editor** |
| **Cost & Usage Report** | Most comprehensive cost/usage dataset incl. metadata on services, pricing, reservations; hourly or daily line items per service, account, IAM user, and activated tags; integrates with Athena, Redshift, QuickSight |
| **Cost Explorer** | Visualize and manage costs over time; custom reports; high-level totals or monthly/hourly/resource-level; pick an optimal Savings Plan (alternative to RIs); **forecast up to 12 months** |
| **Billing Alarms (CloudWatch)** | Billing metric stored in **us-east-1**; covers worldwide costs; **actual, not projected**; simple compared with Budgets |
| **AWS Budgets** | Alerts when costs exceed budget; 4 types: **Usage, Cost, Reservation, Savings Plans**; RI utilization tracking for EC2, ElastiCache, RDS, Redshift; up to 5 SNS notifications per budget; filter by service, linked account, tag, purchase option, instance type, region, AZ, API operation (same filters as Cost Explorer) |
| **Cost Anomaly Detection** | ML monitors spend continuously, learns your patterns, detects one-time spikes and ongoing increases — no thresholds needed; monitor services, member accounts, tags, cost categories; root-cause analysis; individual alerts or daily/weekly SNS summaries |
| **Service Quotas** | Alerts when approaching a quota (e.g. Lambda concurrent executions) via CloudWatch alarms; request an increase or shut things down first |
| **Trusted Advisor** | Nothing to install; high-level account assessment with recommendations in **6 categories: cost optimization, performance, security, fault tolerance, service limits, operational excellence**. Business & Enterprise plans: full set of checks + programmatic access via AWS Support API |

**Billing summary:** Compute Optimizer · Pricing Calculator · Billing Dashboard · Cost Allocation Tags · CUR · Cost Explorer · Billing Alarms (us-east-1) · Budgets · Savings Plans · Cost Anomaly Detection · Service Quotas.

### 4.5 Support plans
The deck contains two versions of the support lineup; both are kept here.

**Current lineup (newer slides)**
| Plan | Key features |
|---|---|
| **Basic** (free) | 24/7 customer service, docs, whitepapers, forums; Trusted Advisor core checks (deck says 7) + best-practice guidance; Personal Health Dashboard |
| **Business Support+** (24/7) | For production workloads; real-time contextual answers via generative AI; full Trusted Advisor + API; 24/7 phone/web/chat with Cloud Support Engineers; unlimited cases & contacts; human response **≤ 30 min** for business-critical system down; third-party software support (e.g. Ubuntu on EC2) |
| **Enterprise** (24/7) | For production or business-critical workloads; everything in Business Support+; designated **Technical Account Manager (TAM)**; **< 15 min** response for production-critical cases; AWS Security Incident Response; business reviews; AWS Countdown event management (TAM-led help for critical events) |
| **Unified Operations** (24/7) | For mission-critical workloads; everything in Business +; application architecture guidance (short-term deep-dive engagements); designated TAM, Domain Specialist Engineer, Senior Billing & Account Specialist, Incident Management Engineer, on-demand Migration Specialist, Specialist Support Engineer; AWS Countdown Premium and Customer Incident Response Team (CIRT); critical workload reviews, operational procedures |

**Older lineup (ecosystem slide)**
| Plan | Response targets & access |
|---|---|
| **Developer** | Business-hours email to Cloud Support Associates; general guidance < 24 business hours; system impaired < 12 business hours |
| **Business** | 24/7 phone, email, chat with Cloud Support Engineers; production system impaired < 4 hours; production system down < 1 hour |
| **Enterprise** | Access to a TAM; Concierge Support Team (billing & account best practices); business-critical system down < 15 minutes |

### 4.6 AWS ecosystem
- **Free resources:** AWS Blogs (https://aws.amazon.com/blogs/aws/), Forums (https://forums.aws.amazon.com/index.jspa), Whitepapers & Guides (https://aws.amazon.com/whitepapers), **Solutions Library** (formerly Quick Starts — vetted solutions, e.g. live streaming on AWS: https://aws.amazon.com/solutions/).
- **AWS Marketplace:** catalog of thousands of third-party listings — custom AMIs (OS, firewalls…), CloudFormation templates, SaaS, containers; purchases go on your AWS bill; you can sell your own.
- **AWS Training:** digital and classroom (in-person/virtual); private training for your org; programs for the U.S. Government and enterprises; **AWS Academy** for universities.
- **AWS Professional Services & Partner Network (APN):** Professional Services = global expert team working with you and an APN member. APN **Technology Partners** (hardware, connectivity, software) · **Consulting Partners** (professional services firms) · **Training Partners**. **Competency Program** recognizes partners with proven expertise and customer success in specialized areas. **Navigate Program** helps partners improve.
- **AWS re:Post:** AWS-managed Q&A with crowd-sourced, expert-reviewed answers; replaced AWS Forums; members earn reputation points; unanswered questions from Premium Support customers go to AWS Support engineers; **not** for time-sensitive or proprietary questions. **Knowledge Center** holds the most frequent questions (https://repost.aws/knowledge-center).
- **AWS Managed Services (AMS):** AWS experts operate your infrastructure and applications for security, reliability, availability; handles change requests, monitoring, patching, security, backups; implements best practices; **24/365**. Lifecycle: Enable (baseline governance) → Sustain/Build/Migrate → Operate at scale. Benefits: better security, automation, compliance, lower operating cost, simpler management, frictionless innovation.

### 4.7 Account best practices
- Use **Organizations** for multiple accounts; **SCPs** to restrict power; **Control Tower** for best-practice setup.
- **Tags & cost allocation tags** for management and billing.
- IAM guidelines: MFA, least privilege, password policy, password rotation.
- **Config** to record configuration & compliance over time.
- **CloudFormation** to deploy stacks across accounts & regions.
- **Trusted Advisor** for insights; choose the right **Support plan**.
- Send service/access logs to S3 or CloudWatch Logs; **CloudTrail** for API calls.
- **If compromised:** change the root password, delete and rotate all passwords/keys, contact AWS Support.
- **Service Catalog** so users can launch admin-approved stacks.

---

## 5. Exam Preparation

### 5.1 Exam facts
| Item | Detail |
|---|---|
| Exam code | CLF-C02 |
| Registration | https://www.aws.training/ |
| Fee | **100 USD** |
| ID | Two identity documents (details emailed) |
| Rules | No notes, no pen, no speaking |
| Format | **65 questions in 90 minutes** |
| Result | Pass/fail shown immediately; which answers were wrong is never shown; score emailed a few days later |
| Passing score | **700 / 1000** |
| Retake | After **14 days** |
| Recommended experience | 6+ months hands-on AWS |
| Guide | https://aws.amazon.com/certification/certified-cloud-practitioner/ |

### 5.2 Question types & strategy
- **Multiple choice:** 1 correct answer, 3 wrong.
- **Multiple response:** 2+ correct out of 5+ options — the required number is stated, but the software won't warn you if you pick the wrong count.
- Answer everything: blanks count as wrong and there's **no penalty for guessing**. Flag questions to revisit.
- Most questions are high-level "pick the service". Eliminate the clearly wrong options, pick the most sensible remaining one. Very few trick questions — don't overthink; a feasible but very complicated solution is probably wrong.
- **Distractors:** AWS has 200+ services; unfamiliar ones (e.g. QuickSight, Cognito, AppStream, Server Migration Service) often appear as distractors.
- Sample question: *Which service simplifies migrating a database to AWS?* — Storage Gateway / **Database Migration Service (correct)** / EC2 / AppStream 2.0.

### 5.3 Study tips
- New to AWS? Get hands-on practice before booking; repeat the material if overwhelmed.
- Read each service's overview page (e.g. https://aws.amazon.com/s3/).
- Engage with the community: course Q&A, practice tests, extra practice exams, forums, blogs, local meetups, re:Invent videos on YouTube.
- Official practice question set: https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set-clf-c02-english

### 5.4 Certification levels
| Level | Description |
|---|---|
| **Foundational** | Knowledge-based; cloud fundamentals; no experience needed |
| **Associate** | Role-based; core skills; prior cloud or strong on-prem IT experience recommended |
| **Professional** | Role-based; advanced design, optimization, modernization, automation; ~2 years AWS experience recommended |
| **Specialty** | Deep expertise in specific strategic areas; see exam guides |

### 5.5 Certification paths by role
Reference: https://d1.awsstatic.com/training-and-certification/docs/AWS_certification_paths.pdf

| Track | Role | What the role does |
|---|---|---|
| Architecture | Solutions Architect | Design, develop, manage cloud infrastructure; work with DevOps on migrations |
| Architecture | Application Architect | Design app architecture (UI, middleware, infra); scalable, reliable, manageable systems |
| Operations | Systems Administrator | Install, upgrade, maintain components & software; integrate automation |
| Operations | Cloud Engineer | Implement/operate networked infrastructure and security systems |
| DevOps | Test Engineer | Embed testing & quality best practices across the lifecycle |
| DevOps | Cloud DevOps Engineer | Large-scale global hybrid environments; end-to-end automated CI/CD |
| DevOps | DevSecOps Engineer | Accelerate cloud adoption with rapid, stable CI/CD delivery |
| Security | Cloud Security Engineer | Security architecture & cyber-security designs; track security measures |
| Security | Cloud Security Architect | Enterprise cloud solutions with governance to minimize risk |
| Development | Software Development Engineer | Build and maintain software across platforms/devices |
| Networking | Network Engineer | Design/implement LAN, WAN, intranets, extranets |
| Data Analytics | Cloud Data Engineer | Automate collection/processing of structured & semi-structured data; monitor pipelines |
| AI/ML | Machine Learning Engineer | Research, build, design AI/ML systems and predictive models |
| AI/ML | Prompt Engineer | Design, test, refine prompts for language models |
| AI/ML | ML Ops Engineer | Build/maintain AI/ML platforms and deployment infrastructure |
| AI/ML | Data Scientist | Develop, train, fine-tune, evaluate models for business problems |

*(The deck marks the Cloud Practitioner as optional for IT/cloud professionals on most paths, and the AI-related foundational/associate certs as recommended for roles leveraging or securing AI/ML.)*
