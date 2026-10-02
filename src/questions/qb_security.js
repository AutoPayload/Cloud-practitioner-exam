// Domain 2 — Security & Compliance
Q("srm", 0, "Which of the following is a SHARED control under the AWS shared responsibility model?", [
  ["Patch management", "Shared controls include patch management, configuration management, and awareness and training. AWS patches the infrastructure; you patch your guest OS and applications."],
  ["Physical and environmental controls", "These are inherited controls, fully handled by AWS."],
  ["Customer data classification", "Your data is entirely your responsibility."],
  ["Replacing failed disks in AWS data centers", "Hardware replacement is AWS's job."]
]);
Q("srm", 0, "A company uses Amazon RDS. Under the shared responsibility model, which task is the CUSTOMER's responsibility?", [
  ["Configuring the DB security group rules and database users", "With RDS, customers manage security group rules, in-database users, public vs. private access, enforcing SSL, and whether the database is encrypted."],
  ["Patching the operating system of the database host", "AWS applies automated OS and database patching for RDS."],
  ["Managing the underlying EC2 instance, including SSH access", "AWS manages the underlying instance, and SSH is disabled."],
  ["Auditing the physical disks of the database host", "AWS audits the underlying instance and disks."]
]);
Q("srm", 0, "Under the shared responsibility model, which Amazon S3 task is the CUSTOMER responsible for?", [
  ["Configuring bucket policies and Block Public Access settings", "Customers own bucket policies, public settings, versioning, replication, logging, storage class choice, encryption and IAM access."],
  ["Making sure objects achieve 99.999999999% durability", "AWS designs S3 for 11 nines durability. That is part of the infrastructure."],
  ["Surviving the concurrent loss of two facilities", "AWS's infrastructure provides this resilience."],
  ["Preventing AWS employees from accessing customer data", "AWS is responsible for keeping its employees out of customer data."]
]);
Q("srm", 0, "Who is responsible for backing up data stored on an EC2 instance store volume?", [
  ["The customer", "Instance store is ephemeral. Understanding that risk and handling backups or replication is the customer's job."],
  ["AWS", "AWS does not back up instance store data. It is lost if the instance stops or the hardware fails."],
  ["Both, equally", "This is not a shared control. Data on the drives belongs to the customer."],
  ["No one, because instance store data is automatically replicated to another AZ", "Instance store is NOT replicated. It is a physical disk on a single host."]
]);
Q("srm", 1, "As a customer moves from running software on Amazon EC2 to using a managed service such as Amazon RDS, how do the customer's security responsibilities typically change?", [
  ["They decrease, because AWS manages more layers", "The more managed the service, the more AWS handles, such as OS and database patching. You still keep responsibilities such as data, access control and configuration."],
  ["They increase, because managed services expose more settings", "Managed services shift work to AWS."],
  ["They stay exactly the same for every service", "The split varies by service. That is why the model is 'shared'."],
  ["They move completely to AWS", "Customers always keep security IN the cloud: data, identities and configuration."]
]);
Q("srm", 1, "A company runs a payment application on AWS and must comply with PCI DSS. AWS infrastructure is certified PCI DSS compliant. Which statement is correct?", [
  ["The customer must still make sure its own application and configuration meet PCI DSS requirements", "AWS's compliance covers the infrastructure. You inherit those controls but remain responsible for what you build and configure on it."],
  ["The application is automatically PCI DSS compliant because it runs on AWS", "Running on compliant infrastructure does not make your workload compliant."],
  ["AWS takes full legal responsibility for the application's compliance", "AWS is responsible only for its side of the shared responsibility model."],
  ["PCI DSS does not apply to cloud workloads", "PCI DSS applies wherever cardholder data is processed."]
]);
Q("srm", 0, "Who is responsible for replicating data for Amazon EBS and Amazon EFS to protect against hardware failure?", [
  ["AWS", "For EC2 storage, AWS handles infrastructure, data replication for EBS and EFS, and faulty hardware. The customer handles backups, snapshots and encryption."],
  ["The customer, by writing replication scripts", "Built-in replication for EBS and EFS is handled by AWS."],
  ["The customer's internet service provider", "ISPs have nothing to do with AWS storage replication."],
  ["Nobody, because EBS and EFS do not replicate data", "Both services replicate data. EBS replicates within its AZ, and EFS stores data across multiple AZs."]
]);
Q("srm", 0, "Which document describes prohibited uses of AWS, such as illegal or offensive content, security violations, and network or email abuse?", [
  ["AWS Acceptable Use Policy", "The Acceptable Use Policy (aws.amazon.com/aup) lists what you must not do with AWS services."],
  ["AWS shared responsibility model", "This model describes who secures what. It does not list prohibited uses."],
  ["AWS Well-Architected Framework", "This framework gives architecture best practices."],
  ["An AWS SOC 2 report in AWS Artifact", "SOC reports are third-party audits of AWS's controls."]
]);

// IAM, root, identity
Q("iam", 0, "What can an IAM group contain?", [
  ["IAM users only", "Groups contain users only. They cannot contain other groups. A user can belong to zero, one or many groups."],
  ["Other IAM groups", "IAM does not support nested groups."],
  ["IAM roles", "Roles are assumed by services or principals. They are not group members."],
  ["Users and other groups", "Groups can never contain other groups."]
]);
Q("iam", 0, "An administrator gives each employee only the permissions needed to perform their job and nothing more. Which security principle is this?", [
  ["Principle of least privilege", "Least privilege means granting only the permissions required. It is an IAM best practice and a Security pillar principle."],
  ["Defense in depth", "Defense in depth is about security at every layer, not the scope of permissions."],
  ["Separation of concerns", "This is a software design idea, not an IAM principle."],
  ["Shared responsibility", "This model is about AWS versus customer duties."]
]);
Q("iam", 0, "In what format are IAM policies written?", [
  ["JSON", "IAM policies are JSON documents with Version, optional Id, and a Statement list."],
  ["YAML", "CloudFormation templates can be YAML, but IAM policy documents are JSON."],
  ["XML", "IAM policies are not XML."],
  ["CSV", "The Credentials Report is a CSV file, but policies are JSON."]
]);
Q("iam", 0, "Which element of an IAM policy statement specifies whether the statement allows or denies access?", [
  ["Effect", "Effect is either Allow or Deny."],
  ["Action", "Action lists the API actions (for example s3:GetObject) that are allowed or denied."],
  ["Principal", "Principal is the account, user or role the policy applies to."],
  ["Resource", "Resource lists the resources the actions apply to."]
]);
Q("iam", 1, "An IAM user belongs to a group whose policy allows all Amazon S3 actions. The user also has a policy attached directly to them that explicitly DENIES s3:DeleteObject. What happens when the user tries to delete an object?", [
  ["The request is denied, because an explicit Deny always overrides an Allow", "In AWS policy evaluation, an explicit Deny anywhere wins over any Allow."],
  ["The request is allowed, because group policies take priority over inline policies", "No policy type outranks an explicit Deny."],
  ["The request is allowed, because the Allow in the group policy was attached first", "The order of attachment doesn't matter."],
  ["The result is random", "Policy evaluation is deterministic, and explicit Deny always wins."]
]);
Q("iam", 0, "What should a company do with its AWS account root user right after creating the account?", [
  ["Enable MFA, lock it away, and use IAM identities for daily work", "Use the root user only for account setup and root-only tasks. Protect it with MFA and never share it."],
  ["Share the root credentials with all administrators so they have full access", "One person should have one identity. Root credentials must never be shared."],
  ["Create root access keys for day-to-day CLI use", "Root access keys should be locked away or not created at all. Use IAM identities for programmatic access."],
  ["Delete the root user so it cannot be compromised", "The root user cannot be deleted. It is the account owner."]
]);
Q("iam", 0, "Which task can ONLY be performed by the AWS account root user?", [
  ["Changing the root user's email address", "Changing account settings (account name, root email, root password, root access keys) is root-only. Changing the Support plan is no longer root-only."],
  ["Creating an IAM user with admin rights", "An IAM user with the right permissions can create other IAM users."],
  ["Launching an EC2 instance in a new Region", "Any IAM identity with EC2 permissions can launch instances."],
  ["Creating an S3 bucket with versioning", "Any IAM identity with S3 permissions can create buckets."]
]);
Q("iam", 0, "Which of the following actions requires the AWS account root user?", [
  ["Closing the AWS account", "Closing the account is a root-only task. Others include changing the account name, email or root password, and restoring IAM user permissions."],
  ["Attaching a policy to an IAM group", "An IAM administrator can do this."],
  ["Creating an IAM role for EC2", "An IAM administrator can do this."],
  ["Viewing the AWS Management Console dashboard", "Any IAM user can sign in and view the console."]
]);
Q("iam", 0, "What does multi-factor authentication (MFA) combine?", [
  ["A password you know and a device you have", "MFA = a password you know + a device you own. A stolen password alone isn't enough."],
  ["Two different passwords you know", "Two passwords are still only one factor: something you know."],
  ["An access key ID and a secret access key", "These are the two parts of one programmatic credential, not MFA."],
  ["A username and an email address you know", "Neither is a second authentication factor."]
]);
Q("iam", 0, "A developer needs to manage AWS resources from the AWS CLI on their laptop. What credentials does the CLI use?", [
  ["An access key ID and a secret access key", "The CLI and SDKs are protected by access keys. The console uses a password plus MFA."],
  ["The IAM user's console password", "Console passwords are for the Management Console, not the CLI."],
  ["An EC2 key pair (.pem file)", "EC2 key pairs are for SSH into instances, not for calling AWS APIs."],
  ["The root user's email address", "An email address is not an API credential."]
]);
Q("iam", 0, "A developer wants to call AWS services directly from a Python application's code. What should they use?", [
  ["An AWS SDK", "For Python that is Boto3. SDKs are language-specific libraries you embed in your application to call AWS APIs."],
  ["The AWS Management Console", "The console is a web UI for people, not for application code."],
  ["AWS Artifact", "Artifact provides compliance reports."],
  ["An IAM Credentials Report", "This is an audit report of user credentials."]
]);
Q("iam", 0, "An application running on an EC2 instance needs to read objects from an S3 bucket. What is the MOST secure way to give it access?", [
  ["Attach an IAM role to the EC2 instance with a policy that allows the required S3 actions", "IAM roles give AWS services temporary credentials, so no long-term keys are stored on the instance."],
  ["Store an IAM user's access keys in a configuration file on the instance", "Long-term keys on disk can leak. Roles are the best practice."],
  ["Use the root user's access keys", "Never use root keys for applications."],
  ["Put the access keys in the instance User Data script", "User Data is readable from the instance and is not a place for secrets."]
]);
Q("iam", 0, "A security auditor wants a list of ALL IAM users in the account and the status of their credentials, such as passwords, access keys and MFA. Which IAM feature provides this?", [
  ["IAM Credentials Report", "The Credentials Report is an account-level report listing all users and the status of their credentials."],
  ["IAM Access Advisor", "Access Advisor is user-level. It shows which services a user can access and when each was last used."],
  ["IAM Access Analyzer", "Access Analyzer finds resources shared outside your zone of trust."],
  ["AWS Artifact", "Artifact provides AWS's own compliance reports, not your users' credential status."]
]);
Q("iam", 0, "An administrator wants to see which services an IAM user has permission to access and when the user last accessed each of them, in order to remove unused permissions. Which feature should they use?", [
  ["IAM Access Advisor", "Access Advisor shows the service permissions granted to a user and when each was last used. That is ideal for tightening to least privilege."],
  ["IAM Credentials Report", "The Credentials Report shows credential status for all users, not per-service last access."],
  ["Amazon GuardDuty", "GuardDuty detects threats. It does not review permissions."],
  ["Amazon Macie", "Macie finds sensitive data in S3."]
]);
Q("iam", 0, "A company wants to require that all IAM user passwords are at least 14 characters long and include uppercase letters, numbers and symbols. What should it configure?", [
  ["An IAM password policy", "The password policy sets minimum length, required character types, expiration, reuse prevention, and whether users can change their own password."],
  ["An S3 bucket policy", "Bucket policies control access to S3, not passwords."],
  ["A security group", "Security groups filter network traffic."],
  ["AWS Shield", "Shield protects against DDoS attacks."]
]);
Q("iam", 0, "Five developers share a single IAM user to access AWS. Which IAM best practice does this violate?", [
  ["One physical person should have one AWS user", "Each person needs their own identity so that access is traceable and can be revoked per person."],
  ["Use roles for AWS services", "This is about services such as EC2 and Lambda, not people sharing a user."],
  ["Use access keys for programmatic access", "This does not address sharing a user."],
  ["Enable Shield Standard", "Shield is DDoS protection and is always on anyway."]
]);
Q("iam", 0, "Which AWS service issues temporary, limited-privilege credentials with a configurable expiration, for example when a user assumes an IAM role?", [
  ["AWS Security Token Service (STS)", "STS returns temporary credentials when you assume a role. It is used for identity federation, cross-account access and EC2 roles."],
  ["Amazon Cognito", "Cognito manages identities for web and mobile app users."],
  ["AWS Key Management Service (KMS)", "KMS manages encryption keys, not login credentials."],
  ["AWS Certificate Manager (ACM)", "ACM manages SSL/TLS certificates."]
]);
Q("iam", 0, "A company is building a mobile app that will have millions of users. Users should be able to sign in with Google or Facebook accounts. Which service should the company use for user identities?", [
  ["Amazon Cognito", "Cognito provides identity for web and mobile app users at scale, including social login. You create app users in Cognito, not IAM."],
  ["IAM users", "IAM is for trusted people in your organization, not millions of app customers."],
  ["AWS Directory Service Simple AD", "Simple AD is a basic AD-compatible directory for workforce users."],
  ["AWS IAM Identity Center", "Identity Center provides workforce single sign-on to AWS accounts and business apps."]
]);
Q("iam", 0, "A company uses AWS Organizations with 40 accounts. Employees should sign in once to reach all of their AWS accounts and business apps such as Salesforce and Microsoft 365. Which service meets this need?", [
  ["AWS IAM Identity Center", "IAM Identity Center (the successor to AWS SSO) gives one login for all accounts in an organization, business cloud apps, SAML 2.0 apps and EC2 Windows instances."],
  ["Amazon Cognito", "Cognito is for customer-facing app users."],
  ["AWS STS", "STS issues temporary credentials but isn't a single sign-on portal."],
  ["IAM Access Advisor", "Access Advisor shows last-accessed services."]
]);
Q("iam", 0, "A company wants its AWS workloads to authenticate against its existing on-premises Microsoft Active Directory. Users must continue to be managed only on premises. Which AWS Directory Service option fits?", [
  ["AD Connector", "AD Connector is a directory gateway (proxy) that redirects requests to on-premises AD. Users stay managed on premises."],
  ["AWS Managed Microsoft AD", "Managed Microsoft AD runs a real AD in AWS where users are managed. It can trust on-premises AD, but it is not a pure proxy."],
  ["Simple AD", "Simple AD cannot be joined with an on-premises AD."],
  ["Amazon Cognito", "Cognito is for app users, not an AD proxy."]
]);
Q("iam", 0, "How is access to the AWS Management Console protected for an IAM user, following best practices?", [
  ["Password plus MFA", "Console = password + MFA. CLI and SDK = access keys."],
  ["Access key ID and secret access key", "Access keys are for programmatic access (CLI and SDK)."],
  ["An EC2 key pair", "Key pairs are for SSH into instances."],
  ["A security group", "Security groups are network firewalls for resources."]
]);

// Network & application protection
Q("netsec", 0, "Which AWS service provides FREE, automatic protection for all customers against common layer 3 and layer 4 DDoS attacks such as SYN floods and UDP reflection?", [
  ["AWS Shield Standard", "Shield Standard is free and automatically enabled for every AWS customer."],
  ["AWS Shield Advanced", "Shield Advanced is a paid service with extra protections."],
  ["AWS WAF", "WAF is a layer 7 web application firewall. You pay for it and configure its rules."],
  ["AWS Firewall Manager", "Firewall Manager centrally manages rules across accounts. It is not free DDoS protection."]
]);
Q("netsec", 0, "A company wants 24/7 access to the AWS Shield Response Team (SRT) and protection against unexpected cost spikes caused by DDoS attacks on its CloudFront and Route 53 resources. Which service should it use?", [
  ["AWS Shield Advanced", "Shield Advanced adds protection against sophisticated attacks, 24/7 access to the Shield Response Team (SRT, called the DDoS Response Team in your notes), and protection against DDoS-related fee spikes."],
  ["AWS Shield Standard", "Shield Standard gives basic automatic protection but no response team and no cost protection."],
  ["Amazon GuardDuty", "GuardDuty is threat detection, not DDoS mitigation."],
  ["Amazon Inspector", "Inspector scans for vulnerabilities."]
]);
Q("netsec", 0, "A company wants to protect its web application from SQL injection and cross-site scripting (XSS) attacks. Which AWS service should it use?", [
  ["AWS WAF", "WAF is a layer 7 (HTTP) firewall with rules that block common exploits such as SQL injection and XSS."],
  ["AWS Shield Standard", "Shield Standard protects against layer 3 and 4 DDoS attacks, not application exploits."],
  ["Security groups", "Security groups filter by port, protocol and IP. They cannot inspect HTTP content."],
  ["Amazon Macie", "Macie finds sensitive data in S3."]
]);
Q("netsec", 0, "A company wants to block all HTTP requests that come from certain countries and limit how many requests a single IP address can send to its Application Load Balancer. What should it use?", [
  ["AWS WAF", "WAF web ACLs support geo-match (block countries) and rate-based rules (limit requests per IP, which also helps against DDoS)."],
  ["Security group deny rules", "Security groups only have allow rules. They cannot deny or rate-limit."],
  ["AWS Shield Standard", "Shield Standard has no configurable country or rate rules."],
  ["Amazon GuardDuty", "GuardDuty detects threats but does not block or rate-limit requests."]
]);
Q("netsec", 0, "AWS WAF can be deployed on all of the following resources EXCEPT which one?", [
  ["Network Load Balancer", "WAF works at layer 7 and deploys on Application Load Balancers, API Gateway and CloudFront. An NLB works at layer 4."],
  ["Application Load Balancer", "The ALB is a supported WAF target."],
  ["Amazon CloudFront distribution", "CloudFront is a supported WAF target."],
  ["Amazon API Gateway", "API Gateway is a supported WAF target."]
]);
Q("netsec", 0, "A company wants to filter traffic for its ENTIRE VPC, at layers 3 through 7, in every direction, including traffic to and from Direct Connect and Site-to-Site VPN. Which service fits?", [
  ["AWS Network Firewall", "Network Firewall protects the whole VPC at layers 3 to 7: VPC to VPC, outbound, inbound, and to or from Direct Connect and VPN."],
  ["Security groups", "Security groups protect individual resources such as EC2 instances, not the whole VPC."],
  ["AWS WAF", "WAF protects HTTP applications on ALB, API Gateway and CloudFront."],
  ["AWS Shield Standard", "Shield handles DDoS, not general traffic filtering."]
]);
Q("netsec", 0, "A company uses AWS Organizations and wants to centrally manage WAF rules, security groups and Shield Advanced protections across ALL of its accounts, and apply them automatically to new resources. Which service should it use?", [
  ["AWS Firewall Manager", "Firewall Manager manages security rules across all accounts in an organization and applies them to new resources and new accounts."],
  ["AWS Network Firewall", "Network Firewall filters VPC traffic but is not a cross-account rule manager."],
  ["AWS Config", "Config records and evaluates configurations. It does not deploy firewall rules."],
  ["Amazon Detective", "Detective investigates security findings."]
]);
Q("netsec", 0, "Which of the following penetration-testing activities is PROHIBITED on AWS?", [
  ["Running a simulated DDoS attack against your own EC2 instances", "DoS, DDoS and simulated DoS/DDoS are prohibited, as are port, protocol and request flooding and DNS zone walking."],
  ["Running a vulnerability scan against your own EC2 instances", "EC2 instances are on the list of services you can test without prior approval."],
  ["Testing your own Amazon RDS instance", "RDS can be tested without prior approval."],
  ["Testing your own AWS Lambda functions", "Lambda and Lambda@Edge can be tested without prior approval."]
]);
Q("netsec", 0, "Which of the following can a customer penetration-test WITHOUT prior approval from AWS?", [
  ["Their own Amazon CloudFront distributions", "CloudFront is on the approved list, along with EC2, NAT gateways, ELB, RDS, Aurora, API Gateway, Lambda, Lightsail and Elastic Beanstalk."],
  ["DNS zone walking through Amazon Route 53 hosted zones", "DNS zone walking through Route 53 hosted zones is explicitly prohibited."],
  ["Protocol flooding against their application", "Protocol flooding is prohibited."],
  ["Request flooding against a login API", "Request flooding (login or API) is prohibited."]
]);
Q("netsec", 0, "A company notices that EC2 instances with AWS-owned IP addresses are port-scanning and sending spam to its servers. What should the company do?", [
  ["Report it to AWS Trust & Safety with the abuse form", "AWS Abuse handles reports of AWS resources used for spam, port scanning, DoS, intrusion attempts, malware and similar abuse."],
  ["Enable Shield Advanced on the attacker's account", "You cannot manage another customer's account."],
  ["Open a case with AWS Artifact", "Artifact is a portal for compliance reports, not incident reporting."],
  ["Do nothing, because AWS allows port scanning from its IP addresses", "Port scanning others is abuse and against the Acceptable Use Policy."]
]);
Q("netsec", 0, "Which combination of AWS services helps absorb and mitigate DDoS attacks at the edge, before traffic reaches the application?", [
  ["Amazon CloudFront and Amazon Route 53 with AWS Shield", "CloudFront and Route 53 use the global edge network. Together with Shield, attacks are mitigated at the edge."],
  ["Amazon Inspector and Amazon GuardDuty", "Inspector finds vulnerabilities and GuardDuty detects threats. Neither absorbs attack traffic."],
  ["AWS Config and AWS Security Hub", "These record configurations and aggregate findings. They don't sit in the traffic path."],
  ["Amazon EBS snapshots and AWS Backup", "Backups help you recover data. They do not mitigate traffic."]
]);
Q("netsec", 0, "At which OSI layer does AWS WAF operate?", [
  ["Layer 7 (application)", "WAF inspects HTTP requests: headers, body, URI strings and IPs."],
  ["Layer 3 (network)", "Layer 3/4 DDoS protection is Shield's area. The Gateway Load Balancer also works at layer 3."],
  ["Layer 4 (transport)", "Layer 4 is TCP/UDP. The Network Load Balancer works there, not WAF."],
  ["Layer 1 (physical)", "No AWS security service a customer configures works at the physical layer."]
]);

// Encryption & secrets
Q("crypto", 0, "Which of the following is an example of data AT REST?", [
  ["Data stored on an Amazon EBS volume", "At rest means stored or archived on a device, such as EBS, RDS, S3 or S3 Glacier Deep Archive."],
  ["Data sent from a browser to a web server over HTTPS", "That is data in transit."],
  ["Data copied from on premises to AWS over a VPN", "That is data in transit."],
  ["Data moving from an EC2 instance to DynamoDB", "That is data in transit."]
]);
Q("crypto", 0, "A company needs a managed service to create and control the encryption keys used to encrypt data in services such as EBS, S3 and RDS. Which service should it use?", [
  ["AWS Key Management Service (KMS)", "On the exam, 'encryption' usually points to KMS. AWS manages the key infrastructure and it integrates with most services."],
  ["AWS Certificate Manager (ACM)", "ACM manages SSL/TLS certificates for encryption in transit, not data-encryption keys."],
  ["AWS Secrets Manager", "Secrets Manager stores and rotates secrets such as database passwords."],
  ["Amazon Macie", "Macie discovers sensitive data. It does not manage keys."]
]);
Q("crypto", 0, "A company's regulations require encryption keys to be stored on dedicated, single-tenant hardware validated to FIPS 140-2 Level 3, with the company, not AWS, managing the keys. Which service meets this requirement?", [
  ["AWS CloudHSM", "CloudHSM gives you dedicated, tamper-resistant hardware security modules (FIPS 140-2 Level 3). AWS manages the hardware and you fully manage the keys."],
  ["AWS KMS with AWS managed keys", "With AWS managed keys, AWS creates and manages the keys."],
  ["AWS Certificate Manager", "ACM manages TLS certificates, not dedicated key hardware."],
  ["AWS Secrets Manager", "Secrets Manager stores secrets, encrypted with KMS."]
]);
Q("crypto", 0, "A company needs free public SSL/TLS certificates for HTTPS on its Application Load Balancer and CloudFront distribution, and it wants them renewed automatically. Which service should it use?", [
  ["AWS Certificate Manager (ACM)", "ACM provisions and deploys SSL/TLS certificates, is free for public certificates, renews them automatically, and integrates with ELB, CloudFront and API Gateway."],
  ["AWS Key Management Service (KMS)", "KMS manages encryption keys, not TLS certificates."],
  ["AWS CloudHSM", "CloudHSM is dedicated key hardware."],
  ["AWS Secrets Manager", "Secrets Manager stores secrets such as database credentials."]
]);
Q("crypto", 0, "A company wants to store its Amazon RDS database credentials securely and have them rotated automatically every 30 days. Which service is BEST suited?", [
  ["AWS Secrets Manager", "Secrets Manager can force rotation every X days, generates new secrets using Lambda, integrates natively with RDS, and encrypts secrets with KMS."],
  ["AWS KMS", "KMS manages encryption keys but does not store or rotate database passwords."],
  ["AWS Certificate Manager", "ACM manages certificates, not database credentials."],
  ["IAM Credentials Report", "This reports on IAM user credentials. It does not store or rotate secrets."]
]);
Q("crypto", 0, "For which of the following is encryption ALWAYS enabled and not something the customer needs to turn on?", [
  ["Amazon S3 Glacier", "In the course material, encryption is always on for CloudTrail logs, S3 Glacier and Storage Gateway. (Today every new S3 object, in every storage class, is also encrypted by default.)"],
  ["Amazon EBS volumes", "EBS encryption is opt-in."],
  ["Amazon RDS databases", "RDS encryption is opt-in and chosen when the database is created."],
  ["Amazon EFS file systems", "EFS encryption is opt-in."]
]);
Q("crypto", 0, "A company needs full control over its KMS keys, including the ability to enable, disable and schedule rotation of each key. Which type of KMS key should it use?", [
  ["Customer managed key", "Customer managed keys are created, managed and used by you, with enable/disable and optional automatic rotation."],
  ["AWS managed key", "AWS manages these for you, and you cannot disable them."],
  ["AWS owned key", "You cannot see or manage AWS owned keys."],
  ["An ACM certificate", "Certificates are for TLS, not KMS key management."]
]);
Q("crypto", 0, "What does encryption IN TRANSIT protect?", [
  ["Data moving across a network", "In transit means data moving across the network, such as on-premises to AWS or EC2 to DynamoDB. TLS (HTTPS) is the usual protection."],
  ["Data stored on a hard disk", "That is data at rest."],
  ["Data in an archived S3 Glacier object", "That is data at rest."],
  ["The physical servers in an AWS data center", "Physical security is a different control."]
]);
Q("crypto", 0, "What happens by default when a new object is uploaded to Amazon S3 without specifying any encryption?", [
  ["S3 encrypts it on the server side using SSE-S3", "Server-side encryption with S3-managed keys (SSE-S3) is on by default. SSE-KMS is opt-in."],
  ["It is stored unencrypted", "Since 2023, S3 encrypts all new objects by default."],
  ["It is rejected until the client encrypts it", "S3 does not reject unencrypted uploads by default."],
  ["It is encrypted with a key stored in the customer's CloudHSM", "CloudHSM keys are never used by default."]
]);
Q("crypto", 0, "A company's policy requires that data be encrypted BEFORE it leaves the company's own servers and is uploaded to Amazon S3. Which approach meets this requirement?", [
  ["Client-side encryption", "With client-side encryption, you encrypt the data yourself before uploading it."],
  ["Server-side encryption with SSE-S3", "Server-side encryption happens after S3 receives the data."],
  ["S3 Versioning", "Versioning keeps object versions but does not encrypt anything."],
  ["S3 Block Public Access", "This prevents public exposure but does not encrypt data."]
]);

// Compliance, detection & investigation
Q("detect", 0, "An external auditor asks for AWS's SOC 2 and PCI DSS compliance reports. Where can the company download them on demand?", [
  ["AWS Artifact", "Artifact is a self-service portal for AWS compliance reports (ISO, PCI, SOC) and agreements."],
  ["AWS Config", "Config reports on YOUR resources' compliance with rules, not AWS's third-party audit reports."],
  ["AWS Security Hub", "Security Hub aggregates security findings for your accounts."],
  ["Amazon Inspector", "Inspector reports software vulnerabilities in your workloads."]
]);
Q("detect", 0, "A healthcare company must review and accept the Business Associate Addendum (BAA) for HIPAA with AWS. Where can it do this?", [
  ["AWS Artifact (Agreements)", "Artifact Agreements let you review, accept and track agreements such as the BAA for an account or an organization."],
  ["AWS IAM Identity Center", "Identity Center provides single sign-on, not legal agreements."],
  ["AWS Acceptable Use Policy page", "The AUP lists prohibited uses. You don't accept a BAA there."],
  ["Amazon Macie", "Macie finds PII in S3. It doesn't manage agreements."]
]);
Q("detect", 0, "Which service uses machine learning, anomaly detection and third-party threat intelligence to analyze CloudTrail events, VPC Flow Logs and DNS logs for threats, and can be enabled with one click with no agents to install?", [
  ["Amazon GuardDuty", "GuardDuty is intelligent threat discovery. It is enabled with one click (30-day trial) and analyzes CloudTrail, VPC Flow Logs, DNS logs and more."],
  ["Amazon Inspector", "Inspector scans workloads for vulnerabilities. It does not analyze logs for threats."],
  ["AWS Config", "Config records configuration changes."],
  ["Amazon Macie", "Macie finds sensitive data in S3."]
]);
Q("detect", 0, "A company suspects that some of its EC2 instances have been compromised and are being used for cryptocurrency mining. Which service can detect this?", [
  ["Amazon GuardDuty", "GuardDuty has dedicated findings for cryptocurrency attacks and unusual network behavior."],
  ["Amazon Inspector", "Inspector finds vulnerabilities before they are exploited, not active mining behavior."],
  ["AWS Artifact", "Artifact provides compliance documents."],
  ["AWS Shield Standard", "Shield handles DDoS attacks, not compromised instances."]
]);
Q("detect", 0, "Which service automatically scans EC2 instances, container images in Amazon ECR, and Lambda functions for software vulnerabilities (CVEs) and unintended network exposure?", [
  ["Amazon Inspector", "Inspector runs automated security assessments for EC2 (through the SSM agent), ECR images and Lambda functions, and gives each finding a risk score."],
  ["Amazon GuardDuty", "GuardDuty detects threats from log analysis. It does not scan software packages for CVEs."],
  ["Amazon Detective", "Detective investigates the root cause of findings."],
  ["AWS WAF", "WAF filters HTTP traffic."]
]);
Q("detect", 0, "A company wants to record how its AWS resource configurations change over time and be alerted when a resource becomes non-compliant, for example a security group that allows SSH from anywhere. Which service should it use?", [
  ["AWS Config", "Config audits and records configurations and compliance over time, sends SNS alerts on changes, and answers questions such as 'is SSH open to the world?'"],
  ["Amazon GuardDuty", "GuardDuty detects threats but does not track configuration history or compliance rules."],
  ["Amazon Inspector", "Inspector finds software vulnerabilities."],
  ["AWS Artifact", "Artifact provides AWS's compliance reports, not your resource configurations."]
]);
Q("detect", 0, "A company needs to automatically discover and protect personally identifiable information (PII), such as credit card and passport numbers, stored in its Amazon S3 buckets. Which service should it use?", [
  ["Amazon Macie", "Macie uses machine learning and pattern matching to find sensitive data (PII) in S3 and alerts you through EventBridge."],
  ["Amazon Inspector", "Inspector scans compute workloads for vulnerabilities, not S3 data."],
  ["AWS Shield", "Shield protects against DDoS attacks."],
  ["AWS Config", "Config tracks configurations, not the contents of objects."]
]);
Q("detect", 0, "A security team wants a single dashboard that aggregates findings from GuardDuty, Inspector, Macie and IAM Access Analyzer across multiple AWS accounts and runs automated security checks. Which service should it use?", [
  ["AWS Security Hub", "Security Hub centralizes security across multiple accounts, aggregates findings from many services, and runs automated checks."],
  ["Amazon Detective", "Detective investigates the root cause. It does not aggregate findings from all these services."],
  ["AWS Firewall Manager", "Firewall Manager manages firewall rules across accounts."],
  ["AWS Artifact", "Artifact provides compliance documents."]
]);
Q("detect", 0, "After GuardDuty raises a finding, the security team wants to investigate the ROOT CAUSE using machine learning and graph visualizations built from VPC Flow Logs, CloudTrail and GuardDuty data. Which service should it use?", [
  ["Amazon Detective", "Detective analyzes, investigates and quickly finds the root cause of security issues, using ML and graphs over automatically collected data."],
  ["Amazon Inspector", "Inspector scans for vulnerabilities. It does not investigate incidents."],
  ["AWS Config", "Config shows configuration history, not a security investigation graph."],
  ["Amazon Macie", "Macie finds sensitive data in S3."]
]);
Q("detect", 0, "A company wants to find which of its resources, such as S3 buckets, IAM roles and KMS keys, are shared with principals OUTSIDE its AWS account or organization (its zone of trust). Which feature should it use?", [
  ["IAM Access Analyzer", "Access Analyzer defines a zone of trust (account or organization) and produces findings for resources shared outside it."],
  ["IAM Access Advisor", "Access Advisor shows which services a user used last. It does not show external sharing."],
  ["IAM Credentials Report", "This lists user credential status."],
  ["Amazon GuardDuty", "GuardDuty detects threats, not resource-sharing configurations."]
]);
Q("detect", 0, "GuardDuty detects that an EC2 instance is sending data out through unusual DNS queries. The company wants an automatic response, such as notifying the security team, whenever GuardDuty raises a finding. How is this typically done?", [
  ["Send findings to Amazon EventBridge to trigger SNS or Lambda", "GuardDuty findings go to EventBridge, where rules can trigger Lambda or SNS for automated response."],
  ["Add a security group rule that emails the team", "Security groups filter traffic. They can't send notifications."],
  ["Enable S3 Versioning on the GuardDuty findings", "Versioning protects S3 objects. It doesn't trigger any response."],
  ["Use AWS Artifact to forward findings to the team", "Artifact provides compliance documents, not alerts."]
]);
