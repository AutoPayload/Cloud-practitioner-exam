// Domain 3 — Cloud Technology & Services (EC2 through S3 + data transfer)
Q("ec2", 0, "A company wants every new EC2 instance to automatically install software updates and download its application files the first time it boots. What should it use?", [
  ["EC2 User Data", "User Data is a bootstrap script that runs once, at first launch, as the root user. It is used for installing updates and software and downloading files."],
  ["An IAM role", "An IAM role grants permissions. It doesn't run scripts."],
  ["A security group", "A security group is a firewall."],
  ["EC2 Instance Connect", "Instance Connect is a way to open an SSH session from the browser."]
]);
Q("ec2", 0, "A company runs batch processing, media transcoding and dedicated gaming servers that need high-performance processors. Which EC2 instance family is MOST appropriate?", [
  ["Compute optimized", "Compute optimized instances (such as C family) are designed for compute-bound work: batch processing, transcoding, HPC, scientific modeling, ML and gaming servers."],
  ["Memory optimized", "Memory optimized is for large in-memory datasets."],
  ["Storage optimized", "Storage optimized is for high sequential read/write to local storage."],
  ["General purpose", "General purpose is balanced. It fits web servers and code repositories, not compute-intensive work."]
]);
Q("ec2", 0, "Which EC2 instance family is BEST for a high-performance in-memory database and real-time processing of large unstructured data sets?", [
  ["Memory optimized", "Memory optimized instances (such as R family) are for workloads that process large datasets in memory, such as in-memory databases and BI."],
  ["Compute optimized", "Compute optimized favors CPU-bound work."],
  ["Storage optimized", "Storage optimized favors high I/O to local disks."],
  ["General purpose", "General purpose has balanced resources, not large memory."]
]);
Q("ec2", 0, "A workload needs very high, sequential read and write access to large datasets on LOCAL storage, for example a data warehouse or high-frequency OLTP. Which EC2 instance family should be used?", [
  ["Storage optimized", "Storage optimized instances are built for high sequential read/write on local storage: OLTP, data warehousing and distributed file systems."],
  ["Memory optimized", "Memory optimized focuses on RAM."],
  ["Compute optimized", "Compute optimized focuses on CPU."],
  ["General purpose", "General purpose balances compute, memory and networking."]
]);
Q("ec2", 0, "What are the DEFAULT rules of a newly created EC2 security group?", [
  ["All inbound traffic is blocked and all outbound traffic is allowed", "By default, a security group denies all inbound traffic and allows all outbound traffic. You add allow rules for inbound access."],
  ["All inbound traffic is allowed and all outbound traffic is blocked", "It is the other way around."],
  ["All inbound and outbound traffic is allowed", "Inbound traffic is blocked by default."],
  ["All inbound and outbound traffic is blocked", "Outbound traffic is allowed by default."]
]);
Q("ec2", 0, "Which type of rules can an EC2 security group contain?", [
  ["Allow rules only", "Security groups contain only allow rules. Anything not explicitly allowed is blocked. Rules can reference IP ranges or other security groups."],
  ["Deny rules only", "Security groups have no deny rules."],
  ["Both allow and deny rules", "Only allow rules exist in security groups."],
  ["Only rules that reference other AWS accounts", "Rules reference IP ranges (IPv4/IPv6) or security groups."]
]);
Q("ec2", 0, "An administrator needs to connect remotely to the desktop of a Windows EC2 instance. Which port must be open in the security group?", [
  ["3389 (RDP)", "RDP (Remote Desktop Protocol) on port 3389 is used to log in to Windows instances."],
  ["22 (SSH)", "SSH on port 22 is used for Linux instances (and SFTP)."],
  ["80 (HTTP)", "Port 80 is unencrypted web traffic."],
  ["21 (FTP)", "Port 21 is FTP file transfer."]
]);
Q("ec2", 1, "An EC2 security group allows inbound HTTPS (port 443) from anywhere and has NO outbound rules. Can the instance still send responses back to clients?", [
  ["Yes, because security groups are stateful", "Security groups are stateful: if a request is allowed in, the response is allowed out, whatever the outbound rules say."],
  ["No, an outbound rule allowing port 443 must be added", "Security groups are stateful, so return traffic is allowed even with no outbound rules."],
  ["No, security groups block all return traffic by default", "Return traffic for allowed connections is always permitted."],
  ["Only if AWS WAF is attached to the instance", "WAF cannot be attached to EC2 instances, and it is unrelated to return traffic."]
]);
Q("ec2", 0, "A company has a short-term workload with unpredictable usage that must NOT be interrupted. It cannot make any long-term commitment. Which EC2 purchasing option is MOST appropriate?", [
  ["On-Demand Instances", "On-Demand has no commitment and no upfront payment, and it is never interrupted by AWS. It fits short-term, unpredictable workloads."],
  ["Spot Instances", "Spot can be reclaimed at any time, so it is not suitable for uninterruptible work."],
  ["Standard Reserved Instances (3-year)", "RIs require a 1- or 3-year commitment."],
  ["Dedicated Hosts", "Dedicated Hosts are the most expensive option and are meant for licensing and compliance needs."]
]);
Q("ec2", 0, "A company runs a steady-state database on EC2 24/7 and expects to keep running it for the next 3 years. Which purchasing option gives the LARGEST discount for this workload?", [
  ["3-year Standard Reserved Instance, All Upfront", "Steady-state workloads such as databases are ideal for RIs. A 3-year term with All Upfront gives the biggest RI discount (up to about 72%)."],
  ["On-Demand Instances", "On-Demand is the most expensive option for continuous use."],
  ["Spot Instances", "Spot can interrupt a database, so it is not appropriate even though it is cheap."],
  ["1-year Convertible Reserved Instance, No Upfront", "Convertible and No Upfront both give smaller discounts than Standard with All Upfront over 3 years."]
]);
Q("ec2", 0, "A company runs fault-tolerant image-processing batch jobs that can be stopped and restarted at any time and have flexible start and end times. Which purchasing option is the MOST cost-effective?", [
  ["Spot Instances", "Spot gives up to 90% off and is ideal for failure-resilient work such as batch, data analysis and image processing."],
  ["On-Demand Instances", "On-Demand works but costs much more."],
  ["Dedicated Instances", "Dedicated Instances add hardware isolation at extra cost."],
  ["On-Demand Capacity Reservations", "Capacity Reservations give no discount."]
]);
Q("ec2", 0, "Which workload is NOT a good fit for EC2 Spot Instances?", [
  ["A critical production database", "Spot capacity can be reclaimed with little warning. Never use it for critical jobs or databases."],
  ["Distributed batch data analysis", "This is a classic Spot use case."],
  ["Image rendering jobs", "Retryable jobs are ideal for Spot."],
  ["CI build agents that can be restarted", "Interruptible workers suit Spot."]
]);
Q("ec2", 0, "A company has server-bound software licenses (per-socket and per-core) that it wants to bring to AWS (BYOL). It also has strict regulatory requirements. Which EC2 option should it choose?", [
  ["Dedicated Hosts", "A Dedicated Host is a whole physical server for you, with visibility into sockets and cores. It supports server-bound BYOL and compliance needs."],
  ["Dedicated Instances", "Dedicated Instances run on dedicated hardware but don't give socket or core visibility or placement control for licensing."],
  ["Spot Instances", "Spot is for interruptible workloads, not licensing."],
  ["Savings Plans", "Savings Plans are a pricing commitment. They don't address licensing."]
]);
Q("ec2", 0, "A company needs its EC2 instances to run on hardware that is not shared with other AWS customers, but it does NOT need control over instance placement on specific physical servers. Which option is MOST cost-effective for this?", [
  ["Dedicated Instances", "Dedicated Instances run on hardware dedicated to you (possibly shared with your own other instances), without placement control. They are cheaper than Dedicated Hosts."],
  ["Dedicated Hosts", "Hosts give full server control but cost the most. They are more than required here."],
  ["Spot Instances", "Spot instances run on shared hardware."],
  ["On-Demand Capacity Reservations", "Capacity Reservations guarantee capacity. They don't by themselves give you hardware dedicated to you."]
]);
Q("ec2", 0, "A company must guarantee EC2 capacity in a specific Availability Zone for an important two-week event. It does not want a 1- or 3-year commitment. Which option meets this need?", [
  ["On-Demand Capacity Reservations", "Capacity Reservations reserve On-Demand capacity in a specific AZ for any duration with no commitment. You pay the On-Demand rate whether you use it or not."],
  ["Standard Reserved Instances", "RIs require a 1- or 3-year term."],
  ["Spot Instances", "Spot capacity is never guaranteed."],
  ["Savings Plans", "Savings Plans require a 1- or 3-year commitment and do not reserve capacity."]
]);
Q("ec2", 0, "A company commits to spending $10 per hour on EC2 for 1 year in exchange for a discount, while keeping the flexibility to change instance size and operating system. Any usage above $10 per hour is billed at On-Demand rates. Which pricing model is this?", [
  ["Savings Plans", "With Savings Plans you commit to a $/hour amount for 1 or 3 years. Usage above that is billed On-Demand, and you keep flexibility over size, OS and tenancy."],
  ["Spot Instances", "Spot has no commitment and can be interrupted."],
  ["Dedicated Hosts", "Dedicated Hosts are about physical servers, not an hourly spending commitment."],
  ["On-Demand Capacity Reservations", "These reserve capacity without a discount."]
]);
Q("ec2", 1, "A company wants a 3-year commitment discount that applies automatically across ANY EC2 instance family and Region, and also to AWS Fargate and AWS Lambda usage. Which option should it choose?", [
  ["Compute Savings Plans", "Compute Savings Plans are the most flexible. They apply across instance family, size, OS, tenancy and Region, and also cover Fargate and Lambda."],
  ["EC2 Instance Savings Plans", "EC2 Instance Savings Plans give a larger discount but are locked to one instance family in one Region (for example M5 in us-east-1)."],
  ["Standard Reserved Instances", "Standard RIs are tied to specific instance attributes and don't cover Lambda or Fargate."],
  ["Spot Instances", "Spot is not a commitment-based discount."]
]);
Q("ec2", 0, "A company wants a Reserved Instance discount but expects to change the instance family and operating system during the term. Which option fits BEST?", [
  ["Convertible Reserved Instances", "Convertible RIs let you change instance type, family, OS, scope and tenancy, with a somewhat smaller discount (up to about 66%)."],
  ["Standard Reserved Instances", "Standard RIs lock in the instance family and OS in exchange for a bigger discount."],
  ["Dedicated Hosts", "Dedicated Hosts are about physical isolation and licensing."],
  ["On-Demand Instances", "On-Demand has no discount."]
]);
Q("ec2", 0, "Which EC2 purchasing option is generally the MOST expensive?", [
  ["Dedicated Hosts", "A whole physical server reserved for you is the most expensive option."],
  ["Spot Instances", "Spot is the cheapest option (up to 90% off)."],
  ["Reserved Instances", "RIs are discounted in exchange for a commitment."],
  ["Savings Plans", "Savings Plans are discounted in exchange for a commitment."]
]);
Q("ec2", 0, "A company no longer needs some of its Standard Reserved Instances before the term ends. Where can it try to sell them?", [
  ["The Reserved Instance Marketplace", "Unused Standard RIs can be sold on the RI Marketplace. Registering as a seller is a root-user task."],
  ["AWS Artifact agreements", "Artifact provides compliance documents."],
  ["The Spot Instance market", "Spot is spare AWS capacity, not a resale market."],
  ["AWS Marketplace for AMIs", "AWS Marketplace sells third-party software, not Reserved Instances."]
]);
Q("ec2", 0, "A company wants to launch many EC2 instances that already have its software, configuration and monitoring agents installed, so they boot and become ready faster. What should it create?", [
  ["An Amazon Machine Image (AMI)", "An AMI is a customized image (OS, software, config). Instances launched from it boot faster because everything is pre-installed."],
  ["An EBS snapshot only", "Snapshots back up volumes. An AMI is what you launch instances from, and creating one also creates snapshots."],
  ["A security group", "Security groups are firewalls."],
  ["A User Data script that is shared across Regions", "User Data runs at boot and slows startup. It is not a pre-built image."]
]);
Q("ec2", 0, "A company wants to automatically build, test and distribute updated AMIs every week, including security patches, across several Regions. Which service should it use?", [
  ["EC2 Image Builder", "Image Builder automates creating, maintaining, validating and testing AMIs and container images on a schedule, and can distribute them to multiple Regions. It is free; you pay for the underlying resources."],
  ["AWS Config", "Config tracks configurations. It doesn't build images."],
  ["Amazon Inspector", "Inspector scans for vulnerabilities, but it doesn't build AMIs."],
  ["EC2 User Data", "User Data runs at instance launch. It is not an image pipeline."]
]);

// EC2 storage
Q("storage", 0, "An application needs a block storage volume for its EC2 instance that keeps its data even after the instance is terminated. Which storage should it use?", [
  ["Amazon EBS volume", "EBS is a network drive that can persist independently of the instance. Non-root volumes are kept by default when the instance terminates, and you can disable Delete on Termination for the root volume too."],
  ["EC2 instance store", "Instance store is ephemeral. Its data is lost when the instance stops or terminates."],
  ["Amazon S3", "S3 is object storage, not a block volume attached to an instance."],
  ["The instance's RAM", "Memory is lost when the instance stops."]
]);
Q("storage", 0, "An EBS volume was created in us-east-1a. The company needs to use its data with an instance in us-east-1b. What should it do?", [
  ["Snapshot it and create a new volume from it in us-east-1b", "EBS volumes are locked to one AZ. To move one, snapshot it and create a new volume from the snapshot in the target AZ."],
  ["Attach the volume directly to the instance in us-east-1b", "An EBS volume can only attach to instances in its own AZ."],
  ["Change the volume's AZ setting in the console", "There is no such setting. You must use a snapshot."],
  ["Move it with S3 Cross-Region Replication", "CRR copies S3 objects, not EBS volumes."]
]);
Q("storage", 0, "An application needs the HIGHEST possible disk I/O performance for temporary cache and scratch data, and losing that data is acceptable. Which storage option is BEST?", [
  ["EC2 instance store", "Instance store is a physical disk on the host with very high IOPS. It is ideal for buffers, caches and scratch data."],
  ["Amazon EBS", "EBS is network-attached, so it has a bit more latency than instance store."],
  ["Amazon EFS", "EFS is a network file system, not the fastest local disk."],
  ["Amazon S3 Glacier Deep Archive", "Deep Archive is archival storage with retrieval times of hours."]
]);
Q("storage", 0, "Hundreds of Linux EC2 instances across multiple Availability Zones need to read and write the SAME files at the same time. Which service should be used?", [
  ["Amazon EFS", "EFS is a managed NFS file system that can be mounted on hundreds of Linux instances across multiple AZs."],
  ["Amazon EBS", "An EBS volume attaches to one instance at a time (at this level) in one AZ."],
  ["EC2 instance store", "Instance store is local to one host."],
  ["S3 Glacier Flexible Retrieval", "Glacier is archival object storage, not a mounted file system."]
]);
Q("storage", 0, "A company stores files on Amazon EFS, but many files are not accessed for months. How can it reduce storage costs automatically without changing the application?", [
  ["Use an EFS lifecycle policy with EFS-IA", "EFS Infrequent Access (EFS-IA) is up to 92% cheaper than EFS Standard. A lifecycle policy moves files that haven't been accessed for N days, and applications don't notice."],
  ["Move the files to EC2 instance store", "Instance store is ephemeral and not shared."],
  ["Convert the EFS file system to an EBS volume", "EBS isn't a shared file system, and there is no conversion."],
  ["Enable S3 Transfer Acceleration", "Transfer Acceleration speeds up S3 uploads. It has nothing to do with EFS."]
]);
Q("storage", 0, "A company needs a fully managed, Windows-native shared file system that supports the SMB protocol and NTFS and integrates with Microsoft Active Directory. Which service should it use?", [
  ["Amazon FSx for Windows File Server", "FSx for Windows provides SMB, NTFS and AD integration. It can be multi-AZ and reached from AWS or on premises."],
  ["Amazon EFS (Elastic File System)", "EFS is NFS for Linux. It is not Windows SMB."],
  ["Amazon FSx for Lustre", "Lustre is a Linux high-performance computing file system."],
  ["Amazon EBS (Elastic Block Store)", "EBS is block storage for one instance."]
]);
Q("storage", 0, "A research team needs a high-performance file system for HPC and machine learning, with hundreds of GB/s of throughput and sub-millisecond latency, that can link to data in Amazon S3. Which service fits?", [
  ["Amazon FSx for Lustre", "Lustre (Linux + cluster) is built for HPC, ML, analytics and video processing, and it integrates with S3."],
  ["Amazon FSx for Windows File Server", "This is a Windows SMB file share, not an HPC file system."],
  ["Amazon EFS Infrequent Access", "EFS-IA is a low-cost class for rarely used files."],
  ["AWS Storage Gateway", "Storage Gateway is a hybrid bridge to S3, not an HPC file system."]
]);
Q("storage", 1, "A company wants to centrally define backup policies and automate backups of its EBS volumes, EFS file systems and RDS databases from one place, including across accounts and Regions. Which service should it use?", [
  ["AWS Backup", "AWS Backup is a fully managed service that centralizes and automates backups across many AWS services using backup plans."],
  ["AWS Storage Gateway", "Storage Gateway connects on-premises storage to AWS."],
  ["AWS DataSync", "DataSync moves data between on-premises storage and AWS."],
  ["EC2 Image Builder", "Image Builder builds AMIs."]
]);

// ELB & Auto Scaling
Q("elb", 0, "A company needs a load balancer for its HTTP/HTTPS web application that can route requests to different backend services based on the URL path. Which load balancer should it use?", [
  ["Application Load Balancer (ALB)", "The ALB works at layer 7 (HTTP, HTTPS, gRPC) and supports HTTP routing features such as path-based routing."],
  ["Network Load Balancer (NLB)", "The NLB works at layer 4 (TCP/UDP) and doesn't look at URL paths."],
  ["Gateway Load Balancer (GWLB)", "The GWLB sends traffic through security appliances at layer 3."],
  ["Classic Load Balancer", "The Classic Load Balancer is the previous-generation load balancer. It doesn't support path-based routing, and AWS recommends ALB or NLB for new workloads."]
]);
Q("elb", 0, "A gaming company needs a load balancer that handles millions of TCP and UDP requests per second with ultra-low latency and a static IP address. Which should it choose?", [
  ["Network Load Balancer (NLB)", "The NLB works at layer 4 (TCP/UDP), offers ultra-high performance, and supports a static IP through an Elastic IP."],
  ["Application Load Balancer (ALB)", "The ALB is for HTTP/HTTPS at layer 7 and provides a static DNS name, not a static IP."],
  ["Gateway Load Balancer (GWLB)", "The GWLB is for routing traffic through firewalls and appliances."],
  ["AWS WAF", "WAF is a firewall, not a load balancer."]
]);
Q("elb", 0, "A company must route all incoming network traffic through a fleet of third-party firewall and intrusion detection appliances running on EC2. Which load balancer is designed for this?", [
  ["Gateway Load Balancer (GWLB)", "The GWLB works at layer 3 (GENEVE protocol on IP packets) and sends traffic through third-party security appliances."],
  ["Application Load Balancer (ALB)", "The ALB routes HTTP requests to application targets."],
  ["Network Load Balancer (NLB)", "The NLB balances TCP/UDP to application targets."],
  ["Amazon CloudFront", "CloudFront is a CDN."]
]);
Q("elb", 0, "Which of the following is a benefit of using Elastic Load Balancing?", [
  ["It stops sending traffic to unhealthy instances", "ELB spreads load, exposes one DNS access point, runs health checks, handles instance failures seamlessly, terminates SSL, and provides high availability across AZs."],
  ["It encrypts EBS volumes attached to the instances", "EBS encryption is handled by KMS, not ELB."],
  ["It stores and serves static website files", "Static files belong in S3."],
  ["It registers internet domain names for you", "Domain registration is a DNS function (Route 53)."]
]);
Q("elb", 0, "Why would a company choose the managed Elastic Load Balancing service instead of running its own load balancer software on EC2?", [
  ["AWS handles its upgrades, maintenance and high availability", "AWS guarantees it works. A managed load balancer reduces operational effort. A self-managed one can be cheaper but takes much more work."],
  ["ELB is always free", "ELB is billed per hour and per usage."],
  ["A self-managed load balancer cannot do health checks", "A self-managed one can, but you must build and operate it yourself."],
  ["ELB removes the need for security groups", "Security groups are still used with load balancers."]
]);
Q("elb", 0, "Which AWS feature automatically adds EC2 instances when load increases, removes them when load decreases, and replaces instances that fail health checks?", [
  ["An Auto Scaling group (ASG)", "An ASG scales out and in, keeps the instance count between minimum and maximum, registers instances with the load balancer, and replaces unhealthy ones."],
  ["Elastic Load Balancing", "ELB distributes traffic but does not launch or terminate instances."],
  ["EC2 Image Builder", "Image Builder creates AMIs."],
  ["AWS Config", "Config records configurations."]
]);
Q("elb", 0, "A company wants its Auto Scaling group to keep the fleet's AVERAGE CPU utilization at about 40%, adding or removing instances as needed. Which scaling policy is this?", [
  ["Target tracking scaling", "Target tracking keeps a metric (such as average CPU at 40%) near a target value."],
  ["Scheduled scaling", "Scheduled scaling changes capacity at set times."],
  ["Predictive scaling", "Predictive scaling uses ML forecasts to provision ahead of time."],
  ["Manual scaling", "Manual scaling means changing the ASG size yourself."]
]);
Q("elb", 0, "An e-commerce site knows that traffic spikes every Friday at 5 PM. It wants to increase the minimum capacity of its Auto Scaling group to 10 just before then. Which scaling approach should it use?", [
  ["Scheduled scaling", "Scheduled scaling anticipates known patterns, for example setting minimum capacity to 10 at 5 PM on Fridays."],
  ["Target tracking scaling", "Target tracking reacts to a metric. It doesn't act at a set time."],
  ["Simple/step scaling", "Step scaling reacts to CloudWatch alarms after load appears."],
  ["Manual scaling", "Manual scaling would need a person to act every Friday."]
]);
Q("elb", 0, "Which Auto Scaling approach uses machine learning to forecast traffic from historical daily and weekly patterns and provisions capacity AHEAD of time?", [
  ["Predictive scaling", "Predictive scaling forecasts load with ML and scales in advance. It fits time-based patterns."],
  ["Target tracking scaling", "Target tracking reacts to current metric values."],
  ["Scheduled scaling", "Scheduled scaling uses times you set yourself, not ML forecasts."],
  ["Manual scaling", "Manual scaling is done by a person."]
]);
Q("elb", 0, "Which architecture gives a web application both high availability and elasticity?", [
  ["An Auto Scaling group spanning multiple AZs behind an Elastic Load Balancer", "A multi-AZ ASG with a load balancer survives an AZ failure (high availability) and scales with demand (elasticity)."],
  ["One large EC2 instance in a single AZ", "This has no redundancy and no automatic scaling."],
  ["Two EC2 instances in the same AZ without a load balancer", "An AZ failure takes down both, and there is no automatic scaling."],
  ["An EC2 instance with a larger EBS volume", "More storage doesn't provide high availability or elasticity."]
]);

// Amazon S3
Q("s3", 0, "Which statement about Amazon S3 buckets is correct?", [
  ["Each bucket is created in a specific AWS Region", "S3 looks global in the console, but every bucket lives in one Region that you choose."],
  ["Buckets are global resources with no Region", "Buckets are always created in a Region."],
  ["A bucket spans all Regions automatically", "Data stays in its Region unless you replicate it."],
  ["Buckets must be created in us-east-1", "You choose the Region for each bucket."]
]);
Q("s3", 0, "A company hosts a public static website on Amazon S3 and wants anonymous internet users to read its objects. What should it configure?", [
  ["A bucket policy that allows public reads", "Public website visitors are anonymous, so access is granted with a bucket policy (s3:GetObject for everyone). Block Public Access must also be turned off for that bucket."],
  ["An IAM user for each visitor with read-only S3 permissions", "Anonymous visitors don't have IAM identities."],
  ["An IAM role attached to the bucket that allows s3:GetObject", "Roles are assumed by principals. They aren't attached to buckets to grant public access."],
  ["Cross-Region Replication", "Replication copies data. It doesn't grant access."]
]);
Q("s3", 0, "A company needs to give another AWS account access to one of its S3 buckets. What is the typical way to do this?", [
  ["A bucket policy that grants access to the other account", "Bucket policies are resource-based and support cross-account access."],
  ["Share the root user credentials with the other account", "Never share root credentials."],
  ["Enable S3 Versioning", "Versioning doesn't grant access."],
  ["Use S3 Transfer Acceleration", "Transfer Acceleration speeds up uploads. It doesn't grant access."]
]);
Q("s3", 0, "A company wants to make sure that NONE of the S3 buckets in its AWS account can ever be made public, even by mistake. What should it enable?", [
  ["S3 Block Public Access at the account level", "Block Public Access prevents data leaks and can be set for the whole account."],
  ["S3 Versioning on every bucket", "Versioning protects against overwrites and deletes, not public exposure."],
  ["S3 Intelligent-Tiering", "This is a storage class."],
  ["Server-side encryption with SSE-S3", "Encryption doesn't prevent a bucket from being made public."]
]);
Q("s3", 0, "A company wants to protect S3 objects against accidental deletion or overwrites and be able to roll back to earlier versions. What should it enable?", [
  ["S3 Versioning", "With versioning, overwriting a key creates a new version and a delete is recoverable. It is a best practice."],
  ["S3 Lifecycle rules", "Lifecycle moves or expires objects. It doesn't keep old versions by itself."],
  ["S3 Transfer Acceleration", "This speeds up uploads."],
  ["S3 Block Public Access", "This prevents public access, not deletions."]
]);
Q("s3", 0, "A company must keep a copy of its S3 data in another AWS Region to meet compliance requirements and to give users on another continent lower-latency access. Which feature should it use?", [
  ["S3 Cross-Region Replication (CRR)", "CRR asynchronously copies objects to a bucket in another Region. Use cases include compliance, lower latency and cross-account replication."],
  ["S3 Same-Region Replication (SRR)", "SRR copies within the same Region."],
  ["S3 Lifecycle rules", "Lifecycle changes storage class or expires objects. It doesn't copy them to other Regions."],
  ["S3 Transfer Acceleration", "This speeds up uploads to one bucket. It doesn't make copies."]
]);
Q("s3", 0, "What durability is Amazon S3 designed for?", [
  ["99.999999999% (11 nines)", "S3 is designed for 11 nines of durability. If you store 10 million objects, you can expect to lose one about every 10,000 years."],
  ["99.99% (4 nines)", "99.99% is S3 Standard's designed AVAILABILITY, not durability."],
  ["99.9% (3 nines)", "99.9% is the availability of classes such as Standard-IA."],
  ["99.9999% (6 nines)", "Six nines is far below S3's designed durability of eleven nines."]
]);
Q("s3", 0, "A company stores backups that are accessed about once a month, but when they are needed they must be available within milliseconds and survive the loss of an Availability Zone. Which S3 storage class is the MOST cost-effective?", [
  ["S3 Standard-IA", "Standard-IA is for less frequent but rapid access, across at least 3 AZs, at a lower storage price than Standard. It fits DR and backups."],
  ["S3 One Zone-IA", "One Zone-IA stores data in a single AZ, so it would be lost if that AZ were destroyed."],
  ["S3 Glacier Deep Archive", "Deep Archive retrieval takes 12 to 48 hours."],
  ["S3 Standard", "Standard costs more for data that is rarely accessed."]
]);
Q("s3", 0, "A company needs low-cost storage for secondary backup copies of data that it can easily re-create if lost. It needs millisecond access. Which S3 storage class is MOST cost-effective?", [
  ["S3 One Zone-IA", "One Zone-IA is cheaper because data lives in one AZ (99.5% availability). It fits secondary copies or data you can re-create."],
  ["S3 Standard", "Standard costs more and is meant for frequently accessed data."],
  ["S3 Standard-IA", "Standard-IA gives multi-AZ resilience, which isn't needed for re-creatable data."],
  ["S3 Glacier Deep Archive", "Deep Archive doesn't give millisecond access."]
]);
Q("s3", 0, "A company archives medical images that are accessed about once a quarter, but when requested they must be retrieved in MILLISECONDS. Which storage class is MOST cost-effective?", [
  ["S3 Glacier Instant Retrieval", "Glacier Instant Retrieval gives millisecond retrieval for data accessed about once a quarter, with a 90-day minimum storage duration."],
  ["S3 Glacier Flexible Retrieval", "Flexible Retrieval takes minutes to hours."],
  ["S3 Glacier Deep Archive", "Deep Archive takes 12 to 48 hours."],
  ["S3 Standard", "Standard costs much more for rarely accessed data."]
]);
Q("s3", 0, "A company needs to archive data that is rarely accessed. Retrieval within 3 to 5 hours is acceptable, and free bulk retrievals within 5 to 12 hours would be useful. Which storage class fits BEST?", [
  ["S3 Glacier Flexible Retrieval", "Flexible Retrieval offers Expedited (1 to 5 min), Standard (3 to 5 h) and free Bulk (5 to 12 h) retrievals, with a 90-day minimum."],
  ["S3 Glacier Instant Retrieval", "Instant Retrieval costs more per GB. Millisecond access isn't needed here."],
  ["S3 Standard-IA", "Standard-IA costs more for archive data."],
  ["S3 Intelligent-Tiering", "Intelligent-Tiering is for unknown access patterns."]
]);
Q("s3", 0, "A financial company must keep records for 10 years for regulatory reasons. The data will almost never be read, and retrieval within 48 hours is acceptable. Which storage class is the LOWEST cost?", [
  ["S3 Glacier Deep Archive", "Deep Archive is the cheapest class for long-term retention, with 12 to 48 hour retrieval and a 180-day minimum."],
  ["S3 Glacier Flexible Retrieval", "It is cheap, but it costs more than Deep Archive."],
  ["S3 Standard-IA", "It costs much more for data that is never read."],
  ["S3 One Zone-IA", "It costs more and is stored in only one AZ."]
]);
Q("s3", 0, "A company stores data with UNKNOWN or changing access patterns and wants S3 to move objects between access tiers automatically, with NO retrieval charges. Which storage class should it use?", [
  ["S3 Intelligent-Tiering", "Intelligent-Tiering charges a small monitoring fee, has no retrieval fees, and moves objects automatically between tiers based on access."],
  ["S3 Standard-IA", "Standard-IA charges per-GB retrieval fees and doesn't move data automatically."],
  ["S3 One Zone-IA", "One Zone-IA doesn't move data automatically and charges retrieval fees."],
  ["S3 Glacier Deep Archive", "Deep Archive is for long-term archives and charges retrieval fees."]
]);
Q("s3", 0, "A company wants objects to move to S3 Standard-IA 30 days after creation and to S3 Glacier Flexible Retrieval after 90 days, without manual work. What should it configure?", [
  ["S3 Lifecycle rules", "Lifecycle configurations transition objects between storage classes (and can expire them) automatically."],
  ["S3 Cross-Region Replication", "CRR copies objects to another Region. It doesn't change their storage class over time."],
  ["S3 Versioning", "Versioning keeps object versions."],
  ["S3 Block Public Access", "This controls public access."]
]);
Q("s3", 1, "A company must store financial records in S3 in a WORM (write once, read many) model so that no one, including administrators, can delete or overwrite them for 7 years. Which feature meets this requirement?", [
  ["S3 Object Lock", "Object Lock enforces WORM retention. Use compliance mode: then no user (including root) can delete or overwrite objects until retention expires."],
  ["S3 Versioning alone", "Versioning keeps old versions, but privileged users can still delete them."],
  ["S3 Lifecycle rules", "Lifecycle moves or expires objects. It doesn't enforce retention."],
  ["S3 Block Public Access", "This prevents public access, not deletion."]
]);
Q("s3", 1, "Users around the world upload large files to a single S3 bucket in us-east-1, and uploads from distant countries are slow. Which feature speeds up these uploads by routing them through AWS edge locations?", [
  ["S3 Transfer Acceleration", "Transfer Acceleration sends uploads to the nearest edge location and then over the AWS global network to the bucket."],
  ["S3 Cross-Region Replication", "CRR copies data after it arrives. It doesn't speed up the upload."],
  ["S3 Lifecycle rules", "Lifecycle changes storage classes."],
  ["AWS Storage Gateway", "Storage Gateway connects on-premises storage to S3. It doesn't help global users upload faster."]
]);
Q("s3", 1, "A company wants to let a customer download one private S3 object for the next 15 minutes without making the object public or creating an IAM user for the customer. What should it use?", [
  ["An S3 pre-signed URL", "A pre-signed URL grants temporary access to a specific object, using the signer's permissions, until it expires."],
  ["A bucket policy that allows public read", "This would make the object public to everyone, indefinitely."],
  ["S3 Transfer Acceleration", "This speeds up transfers. It doesn't grant access."],
  ["Disable Block Public Access", "This would open the bucket to being made public."]
]);
Q("s3", 0, "Which of the following is NOT a typical use case for Amazon S3?", [
  ["Booting an EC2 instance's operating system", "An OS boots from block storage (EBS or instance store), not from object storage."],
  ["Hosting a static website", "S3 static website hosting is a classic use case."],
  ["Building a data lake for big data analytics", "S3 is the usual foundation for data lakes."],
  ["Storing backups for disaster recovery", "Backup and disaster recovery are core S3 use cases."]
]);
Q("s3", 0, "A company wants to host a website made only of HTML, CSS, JavaScript and images, with no server-side code and no servers to manage. What is the SIMPLEST AWS solution?", [
  ["Amazon S3 static website hosting", "S3 can host static websites directly from a bucket, reachable at a bucket-name.s3-website endpoint."],
  ["An EC2 instance running a web server", "This works, but you then have to manage servers."],
  ["Amazon EFS", "EFS is a file system for EC2 instances, not a web host."],
  ["AWS Snowball", "Snowball is for data transfer."]
]);

// Data transfer & hybrid storage
Q("transfer", 0, "A company needs to move 80 TB of data from its data center to Amazon S3. Its internet connection is 100 Mbps, so a network transfer would take many weeks. What is the BEST option?", [
  ["AWS Snowball Edge", "Rule of thumb: if a network transfer would take more than a week, use Snowball. You load the device, ship it, and AWS imports the data into S3."],
  ["S3 Transfer Acceleration", "Acceleration improves the network path but can't overcome a 100 Mbps bottleneck for 80 TB."],
  ["AWS Storage Gateway", "Storage Gateway also uses the network, so it has the same bandwidth limit."],
  ["S3 Cross-Region Replication", "CRR copies between buckets. It doesn't move on-premises data."]
]);
Q("transfer", 0, "A research ship at sea has very limited internet connectivity. It needs to collect data and run EC2 instances or Lambda functions locally to preprocess the data before sending it to AWS. Which service should it use?", [
  ["AWS Snowball Edge (edge computing)", "Snowball Edge can run EC2 instances and Lambda functions at the edge (ships, trucks, mines) for preprocessing, ML and transcoding, then ship the data to AWS."],
  ["Amazon EFS mounted over the internet", "EFS is a cloud file system that needs network connectivity."],
  ["AWS DataSync over satellite link", "DataSync needs a network connection to transfer data."],
  ["S3 Transfer Acceleration", "This still depends on internet connectivity."]
]);
Q("transfer", 0, "A company's on-premises applications need to use Amazon S3 as storage through standard file or volume protocols, for backup, disaster recovery and tiered storage. Which service bridges on-premises environments and S3?", [
  ["AWS Storage Gateway", "Storage Gateway is a hybrid bridge between on-premises data and S3. It comes as File, Volume and Tape gateways."],
  ["Amazon EFS", "EFS is a cloud file system, not a gateway to S3."],
  ["S3 Transfer Acceleration", "This speeds up uploads. It doesn't present S3 as local storage."],
  ["Amazon FSx for Lustre", "Lustre is an HPC file system."]
]);
Q("transfer", 0, "A company wants to move large amounts of data from its on-premises NFS server to Amazon EFS over the network, on a daily schedule, copying only what changed after the first full transfer. Which service should it use?", [
  ["AWS DataSync", "DataSync uses an on-premises agent to move data to S3, EFS or FSx over TLS. It can run on a schedule and copies incrementally after the first full load."],
  ["AWS Snowball Edge", "Snowball is an offline, shipped device. It is not suited to daily incremental syncs."],
  ["S3 Cross-Region Replication", "CRR replicates between S3 buckets only."],
  ["EC2 Image Builder", "Image Builder builds AMIs."]
]);
Q("transfer", 0, "A company needs to transfer 10 TB of data to AWS and has a dedicated 10 Gbps network connection. Based on typical transfer times, what is the MOST sensible approach?", [
  ["Transfer it over the network with DataSync", "10 TB over 10 Gbps takes about 3 hours. Snowball only makes sense when a network transfer would take more than a week."],
  ["Order an AWS Snowball Edge device", "Shipping a device takes days, which is far slower than about 3 hours over this link."],
  ["Use a Storage Gateway Tape Gateway", "Tape Gateway replaces tape backups. It isn't a bulk transfer tool."],
  ["Copy it to EC2 instance store volumes", "Instance store is ephemeral compute storage, not a transfer method."]
]);
Q("transfer", 1, "A company wants to replace its physical tape backup infrastructure with cloud storage without changing its existing backup software. Which service should it use?", [
  ["AWS Storage Gateway (Tape Gateway)", "Tape Gateway presents a virtual tape library to existing backup software and stores the tapes in S3 and Glacier."],
  ["AWS Snowball Edge", "Snowball can move data once, but it doesn't act as an ongoing virtual tape library."],
  ["Amazon EBS", "EBS is block storage for EC2."],
  ["Amazon FSx for Windows File Server", "This is a Windows file share, not a tape replacement."]
]);
Q("transfer", 0, "Which of the following is a common reason for a company to use a HYBRID cloud storage setup instead of moving everything to AWS at once?", [
  ["Long migrations, security or compliance requirements, or IT strategy", "Hybrid is common during long migrations or when security, compliance or strategy keep some data on premises."],
  ["Hybrid setups make S3 free", "Hybrid has no effect on pricing."],
  ["S3 cannot store more than 1 PB", "S3 storage is unlimited."],
  ["AWS requires all customers to keep half their data on premises", "There is no such requirement."]
]);
Q("transfer", 0, "Which list correctly matches AWS storage services to their storage type?", [
  ["Block: EBS and instance store; File: EFS; Object: S3 and S3 Glacier", "Block = EBS and instance store, file = EFS (and FSx), object = S3 and Glacier."],
  ["Block: S3; File: EBS; Object: EFS", "S3 is object storage, EBS is block storage, and EFS is file storage."],
  ["Block: EFS; File: S3 Glacier; Object: instance store", "EFS is file storage, Glacier is object storage, and instance store is block storage."],
  ["Block: S3 Glacier; File: instance store; Object: EBS", "Glacier is object storage, instance store is block, and EBS is block."]
]);
