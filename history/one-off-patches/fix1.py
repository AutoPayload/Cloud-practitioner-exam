import re
def sub(path, pairs):
    s=open(path).read()
    for a,b in pairs:
        n=s.count(a)
        assert n==1, (path, n, a[:80])
        s=s.replace(a,b)
    open(path,'w').write(s)

sub('qb_security.js', [
 # root-only support plan -> account settings
 ('''Q("iam", 0, "Which task can ONLY be performed by the AWS account root user?", [
  ["Changing or canceling the AWS Support plan", "Changing or canceling the Support plan is on the root-only list, along with closing the account and changing account settings."],''',
  '''Q("iam", 0, "Which task can ONLY be performed by the AWS account root user?", [
  ["Changing the account name or the root user's email address", "Changing account settings (account name, root email, root password, root access keys) is root-only. Note: your notes list changing or canceling the Support plan as root-only too, but AWS now lets IAM users with the right permissions do that, so it is unlikely to be the answer on a current exam."],'''),
 ('24/7 access to the AWS DDoS Response Team and protection', '24/7 access to the AWS Shield Response Team (SRT) and protection'),
 ('24/7 access to the DDoS Response Team, and protection against DDoS-related fee spikes."', '24/7 access to the Shield Response Team (SRT, called the DDoS Response Team in your notes), and protection against DDoS-related fee spikes."'),
 ('"In the course material, encryption is always on for CloudTrail logs, S3 Glacier and Storage Gateway."', '"In the course material, encryption is always on for CloudTrail logs, S3 Glacier and Storage Gateway. (Today every new S3 object, in every storage class, is also encrypted by default.)"'),
 ('AWS manages the hardware and you fully manage the keys."]', 'AWS manages the hardware and you fully manage the keys. (Newer HSM types are validated to FIPS 140-3 Level 3.)"]'),
 ('with enable/disable and optional yearly rotation. You can even bring your own key material."', 'with enable/disable and optional automatic rotation (every 365 days by default, configurable from 90 to 2,560 days). You can even bring your own key material."'),
 ('''Q("detect", 0, "Which service must be enabled before you can use AWS Security Hub?", [
  ["AWS Config", "Security Hub requires AWS Config to be enabled, because its automated checks rely on Config."],''',
  '''Q("detect", 0, "AWS Security Hub runs automated security checks against standards such as CIS. Which service must be enabled for these checks to work?", [
  ["AWS Config", "Security Hub's automated checks rely on AWS Config, so Config must be enabled. (In December 2025 AWS renamed this original Security Hub to Security Hub CSPM and gave the Security Hub name to a new unified service.)"],'''),
 # giveaways
 ('["AWS IAM Identity Center (successor to AWS SSO)", "IAM Identity Center gives', '["AWS IAM Identity Center", "IAM Identity Center (the successor to AWS SSO) gives'),
 ('''  ["AWS WAF with geo-match conditions and rate-based rules", "WAF web ACLs''', '''  ["AWS WAF", "WAF web ACLs'''),
 ('''  ["Amazon Inspector", "Inspector does not filter traffic."]
]);''', '''  ["Amazon GuardDuty", "GuardDuty detects threats but does not block or rate-limit requests."]
]);'''),
 ('["Protecting the global infrastructure (hardware, software, facilities and networking) that runs AWS services", "AWS is responsible for security OF the cloud: the infrastructure that runs every AWS service."]',
  '["Protecting the physical infrastructure that runs AWS services", "AWS is responsible for security OF the cloud: the hardware, software, facilities and networking that run every AWS service."]'),
 ('["Data moving across a network, for example between a client and a server using TLS", "In transit means data moving across the network, such as on-premises to AWS or EC2 to DynamoDB."]',
  '["Data moving across a network", "In transit means data moving across the network, such as on-premises to AWS or EC2 to DynamoDB. TLS (HTTPS) is the usual protection."]'),
 ('''  ["Amazon CloudFront and Amazon Route 53, protected by AWS Shield", "CloudFront and Route 53 use the global edge network. Together with Shield, attacks are mitigated at the edge."],
  ["A single EC2 instance with an Elastic IP address", "A single instance is easy to overwhelm and has no edge protection."],
  ["Amazon EBS snapshots", "Snapshots are backups. They do not mitigate traffic."],
  ["S3 One Zone-IA", "This is a storage class, not a network protection."]''',
  '''  ["Amazon CloudFront and Amazon Route 53 with AWS Shield", "CloudFront and Route 53 use the global edge network. Together with Shield, attacks are mitigated at the edge."],
  ["Amazon Inspector and Amazon GuardDuty", "Inspector finds vulnerabilities and GuardDuty detects threats. Neither absorbs attack traffic."],
  ["AWS Config and AWS Security Hub", "These record configurations and aggregate findings. They don't sit in the traffic path."],
  ["Amazon EBS snapshots and AWS Backup", "Backups help you recover data. They do not mitigate traffic."]'''),
 # dedupe GuardDuty one-click -> different angle
 ('''Q("detect", 0, "What is required to start using Amazon GuardDuty?", [
  ["Enable it with one click; there is no software or agent to install", "GuardDuty is one click to enable with a 30-day trial. It reads data sources such as CloudTrail, VPC Flow Logs and DNS logs on its own."],
  ["Install the GuardDuty agent on every EC2 instance", "No agent is required for core GuardDuty."],
  ["Buy a license from AWS Marketplace", "GuardDuty is a native AWS service."],
  ["Deploy a Gateway Load Balancer in front of the VPC", "No network appliances are needed."]
]);''',
  '''Q("detect", 0, "GuardDuty detects that an EC2 instance is sending data out through unusual DNS queries. The company wants an automatic response, such as notifying the security team, whenever GuardDuty raises a finding. How is this typically done?", [
  ["Send GuardDuty findings to Amazon EventBridge and trigger an SNS notification or a Lambda function", "GuardDuty findings go to EventBridge, where rules can trigger Lambda or SNS for automated response."],
  ["Configure a security group rule that emails the team", "Security groups filter traffic. They can't send notifications."],
  ["Enable S3 Versioning on the GuardDuty findings", "Versioning protects S3 objects. It doesn't trigger any response."],
  ["Use AWS Artifact to forward findings to the team", "Artifact provides compliance documents, not alerts."]
]);'''),
 # dedupe Artifact internal audits -> ISO certification angle
 ('''Q("detect", 0, "Which service gives an organization on-demand access to AWS security and compliance documentation to support its INTERNAL audits?", [
  ["AWS Artifact", "Artifact supports internal audit and compliance with on-demand AWS reports and agreements."],
  ["Amazon GuardDuty", "GuardDuty is threat detection."],
  ["IAM Access Analyzer", "Access Analyzer finds externally shared resources."],
  ["AWS WAF", "WAF is a web application firewall."]
]);''',
  '''Q("detect", 0, "A company's compliance team wants to prove to a customer that AWS data centers are ISO 27001 certified. What should the team do?", [
  ["Download the ISO certification report from AWS Artifact", "Artifact Reports provide AWS's third-party audit documents (ISO, PCI, SOC) on demand. They support both customer requests and internal audits."],
  ["Run AWS Config rules against the AWS data centers", "Config evaluates YOUR resources, not AWS's facilities."],
  ["Enable Amazon Inspector on its EC2 instances", "Inspector scans your workloads for vulnerabilities. It says nothing about AWS's certifications."],
  ["Ask AWS to allow an on-site audit of a data center", "Customers can't tour AWS data centers. Third-party audit reports in Artifact serve this purpose."]
]);'''),
])

sub('qb_tech.js', [
 ('"The Classic Load Balancer was retired in 2023."', '"The Classic Load Balancer is the previous-generation load balancer. It doesn\'t support path-based routing, and AWS recommends ALB or NLB for new workloads. (Your notes say it was retired in 2023; it was EC2-Classic networking that retired.)"'),
 ('then ship the data to AWS."]', 'then ship the data to AWS. (Since November 2025 Snowball Edge is only offered to existing customers, and AWS points new customers to other options such as DataSync. Exam questions may still use Snowball.)"]'),
 ('Snowball. You load the device, ship it, and AWS imports the data into S3."]', 'Snowball. You load the device, ship it, and AWS imports the data into S3. (Since November 2025 Snowball Edge is only offered to existing customers, and AWS points new customers to DataSync or AWS Data Transfer Terminal. Exam questions may still use Snowball.)"]'),
 ('Q("s3", 1, "What is the MAXIMUM size', 'Q("s3", 0, "What is the MAXIMUM size'),
 ('"In December 2025 AWS raised the S3 maximum object size from 5 TB to 50 TB, and your notes list 50 TB. Older practice material still says 5 TB, so treat that as the previous limit."', '"In December 2025 AWS raised the maximum object size from 5 TB to 50 TB. Older practice material still says 5 TB."'),
 (' S3 Glacier Vault Lock is the similar feature for Glacier vaults."]', '"]'),
 ('''Q("ec2", 1, "An EC2 security group allows inbound HTTPS (port 443) from anywhere. Is the response traffic back to the client allowed automatically?", [
  ["Yes, because security groups are stateful, so return traffic for allowed requests is automatically allowed", "Security groups are stateful: if a request is allowed in, the response is allowed out, whatever the outbound rules say."],
  ["No, an outbound rule for each client IP must be added", "Stateful security groups don't need this."],''',
  '''Q("ec2", 1, "An EC2 security group allows inbound HTTPS (port 443) from anywhere and has NO outbound rules. Can the instance still send responses back to clients?", [
  ["Yes, because security groups are stateful", "Security groups are stateful: if a request is allowed in, the response is allowed out, whatever the outbound rules say."],
  ["No, an outbound rule allowing port 443 must be added", "Security groups are stateful, so return traffic is allowed even with no outbound rules."],'''),
 ('"Capacity Reservations reserve capacity on shared hardware."', '"Capacity Reservations guarantee capacity. They don\'t by themselves give you hardware dedicated to you."'),
 # giveaways
 ('["Amazon EBS volume (with Delete on Termination disabled)", "EBS is a network drive that can persist independently of the instance. Non-root EBS volumes are kept by default when the instance terminates."]',
  '["Amazon EBS volume", "EBS is a network drive that can persist independently of the instance. Non-root volumes are kept by default when the instance terminates, and you can disable Delete on Termination for the root volume too."]'),
 ('''  ["A bucket policy that allows public read (s3:GetObject), with Block Public Access turned off for that bucket", "Public website visitors are anonymous, so access is granted with a bucket policy. Block Public Access must allow it."],
  ["An IAM user for each website visitor", "Visitors don't have IAM identities."],
  ["An IAM role attached to the bucket", "Roles are assumed by principals. They aren't attached to buckets to grant public access."],''',
  '''  ["A bucket policy that allows public reads", "Public website visitors are anonymous, so access is granted with a bucket policy (s3:GetObject for everyone). Block Public Access must also be turned off for that bucket."],
  ["An IAM user for each visitor with read-only S3 permissions", "Anonymous visitors don't have IAM identities."],
  ["An IAM role attached to the bucket that allows s3:GetObject", "Roles are assumed by principals. They aren't attached to buckets to grant public access."],'''),
 # replace 403 near-duplicate with a different S3 security question
 ('''Q("s3", 0, "A company enables static website hosting on an S3 bucket, but visitors receive a 403 Forbidden error. What is the MOST likely fix?", [
  ["Add a bucket policy that allows public reads (and make sure Block Public Access allows it)", "A 403 on an S3 website usually means the bucket policy doesn't allow public reads."],
  ["Enable S3 Versioning", "Versioning doesn't affect access."],
  ["Move the objects to S3 Glacier", "Glacier objects can't be served directly as a website."],
  ["Enable Cross-Region Replication", "Replication doesn't fix permissions."]
]);''',
  '''Q("s3", 0, "A company wants to reject any upload to an S3 bucket that is not encrypted with SSE-KMS. What should it use?", [
  ["A bucket policy that denies PutObject requests without SSE-KMS", "Bucket policies are commonly used to force encryption at upload, grant public access, or allow cross-account access."],
  ["An IAM Credentials Report", "This lists user credential status. It doesn't enforce anything."],
  ["S3 Transfer Acceleration", "This speeds up uploads. It doesn't check encryption."],
  ["An S3 Lifecycle rule", "Lifecycle moves or expires objects after they are stored. It can't reject uploads."]
]);'''),
 ('["Buckets are created in a specific AWS Region, even though the S3 console looks global", "S3 looks global, but every bucket lives in one Region that you choose."]',
  '["Each bucket is created in a specific AWS Region", "S3 looks global in the console, but every bucket lives in one Region that you choose."]'),
 ('["Enable an EFS lifecycle policy to move files to EFS Infrequent Access (EFS-IA)", "EFS-IA is up to 92%', '["Use an EFS lifecycle policy with EFS-IA", "EFS Infrequent Access (EFS-IA) is up to 92%'),
 ('["AWS guarantees it works and takes care of upgrades, maintenance and high availability", "A managed', '["AWS handles its upgrades, maintenance and high availability", "AWS guarantees it works. A managed'),
 ('''  ["Transfer it over the network (for example with DataSync), which takes about 3 hours", "10 TB over 10 Gbps takes about 3 hours. Snowball only makes sense when a network transfer would take more than a week."],
  ["Order several Snowball devices, because any transfer over 1 TB requires Snowball", "There's no such rule. Choose based on transfer time."],
  ["Use EC2 instance store to carry the data", "Instance store is ephemeral compute storage, not a transfer method."],
  ["It is impossible to move 10 TB to AWS", "It is easily possible over this network."]''',
  '''  ["Transfer it over the network, for example with AWS DataSync", "10 TB over 10 Gbps takes about 3 hours. Snowball only makes sense when a network transfer would take more than a week."],
  ["Order an AWS Snowball Edge device", "Shipping a device takes days, which is far slower than about 3 hours over this link."],
  ["Use a Storage Gateway Tape Gateway", "Tape Gateway replaces tape backups. It isn't a bulk transfer tool."],
  ["Copy it to EC2 instance store volumes", "Instance store is ephemeral compute storage, not a transfer method."]'''),
 # dedupe Storage Gateway proprietary -> different
 ('''Q("transfer", 0, "Amazon S3 uses a proprietary protocol, unlike EFS, which uses NFS. What does an on-premises application need so it can store files in S3 through a standard file protocol?", [
  ["AWS Storage Gateway", "Because S3 is proprietary, on-premises systems use Storage Gateway to reach S3 as file, volume or tape storage."],
  ["S3 Transfer Acceleration", "This speeds up S3 API uploads. It doesn't provide a file protocol."],
  ["AWS Snowball", "Snowball is offline bulk transfer, not an ongoing file interface."],
  ["An S3 Lifecycle rule", "Lifecycle rules manage storage classes."]
]);''',
  '''Q("transfer", 0, "Which list correctly matches AWS storage services to their storage type?", [
  ["Block: EBS and instance store; File: EFS; Object: S3 and S3 Glacier", "Block = EBS and instance store, file = EFS (and FSx), object = S3 and Glacier."],
  ["Block: S3; File: EBS; Object: EFS", "S3 is object storage, EBS is block storage, and EFS is file storage."],
  ["Block: EFS; File: S3 Glacier; Object: instance store", "EFS is file storage, Glacier is object storage, and instance store is block storage."],
  ["Block: S3 Glacier; File: instance store; Object: EBS", "Glacier is object storage, instance store is block, and EBS is block."]
]);'''),
])

sub('qb_concepts.js', [
 ('["To isolate them from disasters such as fire, flooding or power loss, so a failure in one AZ does not affect the others", "AZs are separated',
  '["So that a disaster in one AZ does not affect the others", "AZs are separated from each other to isolate disasters such as fire, flooding or power loss. They are'),
 ('for disaster isolation but close enough', 'but close enough'),
 ('["On premises, hardware is a large fixed upfront cost; on AWS, costs are mostly variable and tied to actual usage", "On-premises',
  '["On premises, costs are mostly fixed; on AWS, they are mostly variable", "On-premises'),
 ('''  ["It keeps control over sensitive on-premises assets while still using the flexibility of the public cloud", "Hybrid combines control over sensitive assets with the flexibility and cost-effectiveness of the public cloud."],
  ["It removes all compliance obligations from the company", "Compliance obligations remain with the customer whatever the deployment model."],
  ["It makes on-premises servers automatically scale with demand", "On-premises capacity stays fixed. Only the cloud side is elastic."],
  ["It makes all AWS services free during the migration", "Hybrid is an architecture choice. It has no effect on pricing."]''',
  '''  ["Keeping sensitive systems on premises while using the cloud for the rest", "Hybrid combines control over sensitive assets with the flexibility and cost-effectiveness of the public cloud."],
  ["Making every workload compliant automatically", "Compliance obligations stay with the customer whatever the deployment model."],
  ["Removing capacity planning for the on-premises systems", "On-premises capacity stays fixed and still has to be planned. Only the cloud side is elastic."],
  ["Eliminating data transfer charges between on premises and AWS", "Data transferred out of AWS is still billed in a hybrid setup."]'''),
 ('["All AWS services are available in all Regions at all times", "This is false. Availability differs between Regions."]', '["Features are released to all Regions on the same day", "Launches often reach some Regions first. Availability differs between Regions."]'),
 ('"Which statement BEST describes the cloud deployment model of a company that keeps its sensitive customer database in its own data center but runs its public website on AWS, with the two environments connected?"',
  '"A company keeps its sensitive customer database in its own data center but runs its public website on AWS, with the two environments connected. Which cloud deployment model is this company using?"'),
 ('"High availability is about surviving failures (for example across AZs). It is not one of the five characteristics that describes shared hardware."', '"High availability is about surviving failures, for example across AZs. It is not one of the five characteristics and isn\'t about sharing hardware."'),
])
print("ok")
