// New questions, Domain 3 (part 1): edge, containers and serverless, databases, networking. Q(topic, beyondNotes, stem, options[, nCorrect]) — the first nCorrect options are correct; the app shuffles.
Q("edge", 0, "A company runs its application in us-east-1 and ap-southeast-2. It wants each user to be sent automatically to the Region that gives that user the lowest latency. What should it use?", [
  ["Amazon Route 53 latency-based routing", "Latency-based routing answers each DNS query with the Region that has the lowest latency for that user."],
  ["Amazon Route 53 simple routing", "Simple routing returns the same answer to everyone and has no latency logic or health checks."],
  ["Amazon CloudFront geographic restrictions", "Geo restriction blocks or allows countries. It doesn't choose the fastest Region."],
  ["Cross-zone load balancing on an ALB", "Cross-zone load balancing spreads traffic across AZs inside one Region, not between Regions."]
]);
Q("edge", 0, "A company is releasing a new version of its website. It wants to send 10% of users to the new version and 90% to the current one, using DNS. Which Route 53 routing policy should it use?", [
  ["Weighted routing", "Weighted routing splits traffic between records by the weights you set, such as 90/10. It is ideal for gradual rollouts."],
  ["Failover routing", "Failover sends all traffic to a primary and switches to a secondary only when health checks fail."],
  ["Latency-based routing", "Latency routing picks the fastest Region for each user. It can't split traffic by percentage."],
  ["Geolocation routing", "Geolocation routes by the user's location, not by a percentage."]
]);
Q("edge", 0, "A company has a primary website and a static backup site. If health checks show the primary is down, DNS must automatically send users to the backup. Which Route 53 routing policy does this?", [
  ["Failover routing", "Failover routing uses health checks on the primary record and answers with the secondary when the primary is unhealthy."],
  ["Weighted routing", "Weighted routing splits traffic by percentage; it isn't built for active-passive failover."],
  ["Simple routing", "Simple routing has no health checks, so it can't fail over."],
  ["Geoproximity routing", "Geoproximity routes by distance to resources, not by the health of a primary site."]
]);
Q("edge", 0, "Users around the world complain that images and videos stored in an S3 bucket in one Region load slowly. What is the MOST effective way to reduce latency for them?", [
  ["Serve the content through Amazon CloudFront", "CloudFront caches the content at edge locations near users, so most requests never travel to the origin Region."],
  ["Copy the bucket to every Region with Cross-Region Replication", "Replicating to every Region is costly and complex, and users would still need to be routed to the right bucket."],
  ["Put the bucket behind AWS Global Accelerator", "Global Accelerator speeds up traffic to application endpoints but doesn't cache content."],
  ["Connect the Region to users with AWS Direct Connect", "Direct Connect links your own data center to AWS. It doesn't help internet users."]
]);
Q("edge", 0, "A multiplayer game uses UDP traffic. The company needs two static IP addresses for its players and fast failover between Regions. Which service meets these requirements?", [
  ["AWS Global Accelerator", "Global Accelerator provides two static anycast IPs, supports TCP and UDP, and fails over between Regions quickly over the AWS network."],
  ["Amazon CloudFront", "CloudFront is a CDN for HTTP content. It doesn't give fixed IPs for UDP game traffic."],
  ["Amazon Route 53 weighted routing", "Route 53 answers with DNS records. It doesn't provide static anycast IPs."],
  ["An Application Load Balancer", "An ALB handles HTTP/HTTPS, not UDP, and has no static IPs."]
]);
Q("edge", 0, "A company serves files from a private S3 bucket through CloudFront. It wants to make sure users can only get the files through CloudFront, never directly from S3. What should it configure?", [
  ["Origin Access Control with a bucket policy", "Origin Access Control lets only the CloudFront distribution read the bucket; the bucket policy denies everyone else."],
  ["S3 Transfer Acceleration on the bucket", "Transfer Acceleration speeds up uploads. It doesn't restrict who can read the bucket."],
  ["A bucket policy that allows public read", "Public read would let anyone skip CloudFront and download directly from S3."],
  ["S3 Versioning on the bucket", "Versioning keeps old versions of objects. It doesn't control access."]
]);
Q("edge", 0, "Which AWS service translates human-friendly domain names such as www.example.com into IP addresses?", [
  ["Amazon Route 53", "Route 53 is AWS's managed DNS service, and it can also register domain names."],
  ["Amazon CloudFront", "CloudFront delivers content from edge caches. It relies on DNS but isn't a DNS service."],
  ["Amazon API Gateway", "API Gateway creates and manages APIs."],
  ["Amazon VPC", "A VPC is a private network. It has internal DNS resolution, but public domain names are Route 53's job."]
]);
Q("edge", 0, "Besides lower latency for users, which benefit does Amazon CloudFront provide?", [
  ["DDoS protection at the edge through AWS Shield", "CloudFront includes Shield Standard and integrates with WAF, so attacks are absorbed at edge locations before reaching your origin."],
  ["Automated backups of the origin database", "CloudFront doesn't back up anything. Backups are AWS Backup's or the database's job."],
  ["Automatic patching of the origin servers", "Patching EC2 origins is the customer's job, for example with Systems Manager."],
  ["Lower storage prices for S3 objects", "CloudFront doesn't change S3 storage prices. It can reduce data transfer from the origin."]
]);
Q("edge", 0, "Which statement about AWS Global Accelerator is correct?", [
  ["It routes user traffic over the AWS global network and doesn't cache content", "Traffic enters AWS at the nearest edge location and travels on AWS's private network to your endpoints. There is no caching."],
  ["It caches static files at edge locations to reduce load on the origin", "Caching is what CloudFront does, not Global Accelerator."],
  ["It is a DNS service that registers domain names", "Domain registration and DNS are Route 53."],
  ["It requires AWS Direct Connect at every customer site", "Global Accelerator works for internet users. It has nothing to do with Direct Connect."]
]);

// Containers and serverless
Q("containers", 0, "A company wants to run Docker containers on AWS without provisioning or managing any EC2 instances. Which option should it use?", [
  ["AWS Fargate", "Fargate is the serverless way to run containers for ECS or EKS. You set CPU and memory; AWS runs the infrastructure."],
  ["Amazon ECS with the EC2 launch type", "With the EC2 launch type you still provision and manage the container instances."],
  ["EC2 Auto Scaling groups", "Auto Scaling manages EC2 instances, which is exactly what the company wants to avoid."],
  ["Amazon Lightsail instances", "Lightsail gives simple virtual servers that you still manage."]
]);
Q("containers", 0, "A company already runs Kubernetes in its own data center. It wants a managed Kubernetes service on AWS so its tools and skills carry over. Which service should it use?", [
  ["Amazon EKS", "Elastic Kubernetes Service runs managed Kubernetes. Kubernetes is open source and cloud-agnostic, so existing tools keep working."],
  ["Amazon ECS", "ECS is AWS's own container orchestrator, not Kubernetes."],
  ["Amazon ECR", "ECR stores container images; it doesn't run or orchestrate them."],
  ["AWS Elastic Beanstalk", "Beanstalk deploys web apps. It isn't a Kubernetes service."]
]);
Q("containers", 0, "Developers need a private place on AWS to store, version and share their Docker container images. Which service should they use?", [
  ["Amazon ECR", "Elastic Container Registry is a private, managed registry for container images, integrated with ECS, EKS and Fargate."],
  ["AWS CodeCommit", "CodeCommit stores source code in Git repositories, not container images."],
  ["Amazon S3 Glacier Deep Archive", "Deep Archive is for long-term archives with retrieval times in hours."],
  ["Amazon EFS", "EFS is a shared file system, not an image registry."]
]);
Q("containers", 0, "Every time a user uploads a photo to an S3 bucket, a thumbnail must be created. The company wants no servers to manage and to pay only when a photo is processed. What is the BEST solution?", [
  ["An AWS Lambda function triggered by the S3 upload event", "S3 can invoke Lambda on every upload. Lambda runs only when needed, scales automatically, and bills per request and duration."],
  ["An EC2 instance that checks the bucket every minute", "An always-on instance costs money while idle and must be managed."],
  ["An AWS Batch job that runs once a day", "Batch works, but a daily job adds delay and more setup than needed for small, event-driven work."],
  ["A Lightsail instance with a cron job", "Lightsail is a server you manage and pay for all the time."]
]);
Q("containers", 0, "Which of the following is a limitation of AWS Lambda?", [
  ["Each invocation can run for at most 15 minutes", "Lambda functions time out after 15 minutes. Longer jobs belong on Batch, ECS/Fargate or EC2."],
  ["Functions can only be written in Java", "Lambda supports Node.js, Python, Java, .NET, Ruby, and custom runtimes such as Go or Rust."],
  ["Functions must run on a Dedicated Host", "Lambda is serverless. You never choose or see hosts."],
  ["Functions can't be triggered by events", "Lambda is event-driven: S3, SQS, API Gateway, EventBridge and many other services trigger it."]
]);
Q("containers", 0, "How is AWS Lambda billed?", [
  ["By the number of requests and the duration of each run, based on memory", "You pay per request and per millisecond of run time, scaled by the memory you configure (GB-seconds). The free tier covers 1 million requests a month."],
  ["By the hour for a reserved server, whether or not it runs", "There are no reserved servers. Lambda charges nothing while idle."],
  ["A fixed monthly fee per function", "There is no per-function monthly fee."],
  ["By the number of GB of code stored", "Code storage isn't what drives Lambda cost."]
]);
Q("containers", 0, "A mobile app needs a REST API with authentication, throttling and API keys. The backend logic runs in AWS Lambda. Which service should sit in front of Lambda?", [
  ["Amazon API Gateway", "API Gateway creates, publishes, secures and monitors REST and WebSocket APIs, with throttling and API keys, and integrates directly with Lambda."],
  ["Amazon CloudFront", "CloudFront caches and delivers content; it isn't an API management service."],
  ["AWS Direct Connect", "Direct Connect is a private network link to your data center."],
  ["Amazon SNS", "SNS pushes notifications to subscribers. It doesn't expose a REST API with keys and throttling."]
]);
Q("containers", 0, "A research team must run hundreds of thousands of computing jobs. Each job has a start and an end, some run for hours, and the team wants AWS to provision the right compute, including Spot Instances. Which service fits BEST?", [
  ["AWS Batch", "Batch runs batch jobs at any scale, launches EC2 or Spot capacity automatically, and has no time limit per job."],
  ["AWS Lambda", "Lambda's 15-minute limit rules out jobs that run for hours."],
  ["Amazon Lightsail", "Lightsail gives simple servers; it doesn't schedule or scale batch jobs."],
  ["Amazon EventBridge", "EventBridge routes events and runs schedules, but it doesn't provide compute for jobs."]
]);
Q("containers", 0, "A small business with little cloud experience wants to launch a WordPress site with a simple setup and a low, predictable monthly price. Which service is the BEST fit?", [
  ["Amazon Lightsail", "Lightsail bundles a virtual server, storage and networking with ready-made templates like WordPress, at a fixed monthly price."],
  ["Amazon EKS", "Kubernetes is far too complex for a simple WordPress site."],
  ["EC2 with 3-year Reserved Instances", "EC2 works, but it takes more setup and knowledge, and RIs need a long commitment."],
  ["AWS Batch", "Batch runs batch jobs, not websites."]
]);
Q("containers", 0, "A company runs containers on Amazon ECS using the EC2 launch type. Who is responsible for managing and patching the EC2 instances in the cluster?", [
  ["The customer", "With the EC2 launch type, the container instances are yours to manage. Choose Fargate if you want AWS to handle the infrastructure."],
  ["AWS, automatically", "AWS manages the infrastructure only with the Fargate launch type."],
  ["No one, because ECS doesn't use EC2 instances", "The EC2 launch type runs containers on EC2 instances in your account."],
  ["Amazon ECR", "ECR is an image registry. It doesn't manage instances."]
]);
Q("containers", 0, "What is a key benefit of packaging an application in containers?", [
  ["The app and its dependencies run the same way on any machine", "A container image bundles code, runtime and libraries, so it behaves consistently from a laptop to production."],
  ["Each container includes a full guest operating system", "That describes virtual machines. Containers share the host's OS kernel, which makes them lighter."],
  ["Containers can't scale beyond one server", "Orchestrators like ECS and EKS run many containers across many servers."],
  ["Containers can only run on premises", "Containers run anywhere, including ECS, EKS and Fargate on AWS."]
]);
Q("containers", 0, "A team is building microservices in containers. It wants an AWS-native orchestrator with deep AWS integration and does NOT want to use Kubernetes. Which service should it choose?", [
  ["Amazon ECS", "Elastic Container Service is AWS's own container orchestrator. It integrates closely with ALB, IAM and CloudWatch."],
  ["Amazon EKS", "EKS is managed Kubernetes, which the team wants to avoid."],
  ["Amazon ECR", "ECR stores images but doesn't run containers."],
  ["AWS Batch", "Batch runs batch jobs; it isn't a general microservices orchestrator."]
]);
Q("containers", 0, "Which combination builds a fully serverless web backend?", [
  ["Amazon API Gateway, AWS Lambda and Amazon DynamoDB", "All three are serverless: no servers to manage, automatic scaling, pay per use. This is the classic serverless pattern."],
  ["An Application Load Balancer, Amazon EC2 and Amazon RDS", "EC2 and provisioned RDS are servers you size and manage."],
  ["Amazon CloudFront, Amazon EC2 and Amazon EBS", "EC2 and EBS are server-based."],
  ["A Network Load Balancer, ECS on EC2 and provisioned Aurora", "The EC2 launch type and provisioned Aurora both involve capacity you manage."]
]);

// Databases and analytics
Q("db", 0, "Which task does AWS handle for you when you use Amazon RDS instead of running a database on EC2?", [
  ["Automated backups and operating system patching", "RDS automates provisioning, OS and engine patching, backups and point-in-time restore."],
  ["Designing the database tables and indexes", "Your schema design stays your job with any database service."],
  ["Writing the application's SQL queries", "Queries are part of your application."],
  ["Deciding which users may read each table", "Database users and permissions stay the customer's responsibility."]
]);
Q("db", 0, "An Amazon RDS database must keep running with automatic failover if its Availability Zone fails. What should the company enable?", [
  ["RDS Multi-AZ deployment", "Multi-AZ keeps a synchronous standby in another AZ and fails over to it automatically."],
  ["RDS read replicas", "Read replicas scale reads; they aren't the automatic failover mechanism for high availability."],
  ["A larger RDS instance size", "A bigger instance adds power but still sits in one AZ."],
  ["Daily manual snapshots", "Snapshots help restore data, but recovery is manual and slow."]
]);
Q("db", 0, "Heavy reporting queries are slowing down a company's production RDS for MySQL database. What is the BEST way to take the reporting load off the primary database?", [
  ["Create a read replica and run the reports against it", "Read replicas serve read-only traffic, such as reports, so the primary can focus on writes."],
  ["Enable Multi-AZ and run the reports on the standby", "The Multi-AZ standby is for failover and can't serve reads."],
  ["Take hourly snapshots and query the snapshots", "Snapshots are backups; you can't query them directly."],
  ["Move the database to an instance store volume", "Instance store is temporary and would put the data at risk."]
]);
Q("db", 0, "A company needs a MySQL-compatible relational database with up to five times the throughput of standard MySQL, and storage that grows automatically with data copied across three AZs. Which service should it choose?", [
  ["Amazon Aurora", "Aurora is AWS's MySQL- and PostgreSQL-compatible engine, with higher performance and self-healing storage replicated across 3 AZs."],
  ["Amazon RDS for MySQL", "RDS for MySQL is managed MySQL, but without Aurora's performance and storage design."],
  ["Amazon DynamoDB", "DynamoDB is a NoSQL key-value database, not MySQL-compatible."],
  ["Amazon Redshift", "Redshift is a data warehouse for analytics, not a transactional MySQL database."]
]);
Q("db", 0, "A relational database is used only a few hours a week, at unpredictable times. The company doesn't want to manage capacity and wants to pay only for what it uses. Which option fits BEST?", [
  ["Amazon Aurora Serverless", "Aurora Serverless starts, scales and pauses capacity automatically, which suits intermittent and unpredictable workloads."],
  ["Amazon RDS with a 3-year Reserved Instance", "An RI commits you to paying for an instance all the time, even when idle."],
  ["Amazon Redshift provisioned cluster", "Redshift is a data warehouse, and a provisioned cluster runs all the time."],
  ["Amazon ElastiCache", "ElastiCache is an in-memory cache, not a relational database."]
]);
Q("db", 0, "A gaming company needs a serverless NoSQL key-value database that delivers single-digit millisecond latency at any scale. Which service should it use?", [
  ["Amazon DynamoDB", "DynamoDB is fully managed, serverless, key-value NoSQL, handling millions of requests per second with millisecond latency."],
  ["Amazon RDS", "RDS is relational and runs on instances you size."],
  ["Amazon Redshift", "Redshift is for analytic queries, not low-latency key-value lookups."],
  ["Amazon Neptune", "Neptune is a graph database for relationships."]
]);
Q("db", 0, "A DynamoDB table needs read latency in microseconds instead of milliseconds for its most frequently read items. What should the company add?", [
  ["DynamoDB Accelerator (DAX)", "DAX is an in-memory cache built for DynamoDB that brings reads down to microseconds without app changes."],
  ["DynamoDB global tables", "Global tables replicate across Regions for multi-Region access, not microsecond caching."],
  ["RDS read replicas", "Read replicas belong to RDS, not DynamoDB."],
  ["S3 Transfer Acceleration", "Transfer Acceleration speeds up S3 uploads."]
]);
Q("db", 0, "An application must read and write the same DynamoDB data with low latency from users in both Europe and North America (active-active). Which feature provides this?", [
  ["DynamoDB global tables", "Global tables replicate a table across Regions so every Region can read and write locally (active-active)."],
  ["DynamoDB Accelerator (DAX)", "DAX caches reads in one Region; it doesn't replicate across Regions."],
  ["RDS cross-Region read replicas", "RDS replicas are read-only and belong to RDS, not DynamoDB."],
  ["S3 Cross-Region Replication", "CRR copies S3 objects, not DynamoDB tables."]
]);
Q("db", 0, "A web application repeatedly runs the same expensive queries against its RDS database and stores user session data. What should the company add to reduce database load and latency?", [
  ["Amazon ElastiCache", "ElastiCache (Redis/Valkey or Memcached) keeps hot data and sessions in memory, so fewer queries reach the database."],
  ["DynamoDB Accelerator (DAX)", "DAX only works with DynamoDB, not RDS."],
  ["Amazon Redshift", "Redshift is a data warehouse, not a cache."],
  ["Amazon S3 Glacier", "Glacier is archival storage with slow retrieval."]
]);
Q("db", 0, "A retailer wants to run complex analytic SQL queries over years of sales data, several petabytes in size, for business intelligence reports. Which service is designed for this?", [
  ["Amazon Redshift", "Redshift is a columnar data warehouse built for OLAP analytics at petabyte scale."],
  ["Amazon RDS for PostgreSQL", "RDS is built for day-to-day transactions (OLTP), not petabyte analytics."],
  ["Amazon DynamoDB", "DynamoDB is for key-value lookups, not complex analytic SQL."],
  ["Amazon ElastiCache", "ElastiCache is an in-memory cache."]
]);
Q("db", 0, "A company stores application logs as CSV and Parquet files in S3. Analysts want to query them with standard SQL without setting up any servers or loading the data elsewhere. Which service should they use?", [
  ["Amazon Athena", "Athena runs serverless SQL queries directly on data in S3. You pay per TB scanned."],
  ["Amazon Redshift", "Redshift needs a cluster (or Serverless workgroup) and usually loading data into the warehouse."],
  ["Amazon EMR", "EMR runs Hadoop and Spark clusters that you configure."],
  ["Amazon RDS", "RDS is a database you'd have to load the logs into."]
]);
Q("db", 0, "A social media app needs to store and quickly query relationships such as friends, likes and comments between millions of users. Which database is the BEST fit?", [
  ["Amazon Neptune", "Neptune is a managed graph database, designed for highly connected data like social networks and recommendations."],
  ["Amazon DocumentDB", "DocumentDB stores JSON documents. It isn't optimized for traversing relationships."],
  ["Amazon Timestream", "Timestream is for time-series data."],
  ["Amazon Redshift", "Redshift is for analytic reporting."]
]);
Q("db", 0, "A company wants to move its MongoDB workload to a fully managed AWS database with minimal code changes. Which service should it choose?", [
  ["Amazon DocumentDB", "DocumentDB is a managed document database that is MongoDB-compatible."],
  ["Amazon Neptune", "Neptune is a graph database."],
  ["Amazon Aurora", "Aurora is relational (MySQL/PostgreSQL), not MongoDB-compatible."],
  ["Amazon Keyspaces", "Keyspaces is Apache Cassandra-compatible, not MongoDB."]
]);
Q("db", 0, "An industrial company collects temperature readings from thousands of sensors every second and needs to analyze trends over time. Which database is purpose-built for this?", [
  ["Amazon Timestream", "Timestream is a serverless time-series database for IoT and operational data, with built-in time-series functions."],
  ["Amazon Neptune", "Neptune is for graph relationships."],
  ["Amazon RDS for Oracle", "A relational database can store readings but isn't optimized for time-series at this scale."],
  ["Amazon DocumentDB", "DocumentDB is for JSON documents."]
]);
Q("db", 0, "A company needs a serverless service to extract data from S3 and RDS, transform it, and load it into Redshift for analytics. It also wants a catalog of its datasets. Which service should it use?", [
  ["AWS Glue", "Glue is serverless ETL (extract, transform, load) and includes the Glue Data Catalog used by Athena, Redshift and EMR."],
  ["Amazon Athena", "Athena queries data in S3, but it isn't an ETL pipeline service."],
  ["Amazon QuickSight", "QuickSight builds dashboards from data that is already prepared."],
  ["AWS DMS", "DMS migrates databases; it isn't a general analytics ETL service."]
]);
Q("db", 0, "Business managers want interactive dashboards and charts built from data in Redshift and Athena, shared across the company. Which service should they use?", [
  ["Amazon QuickSight", "QuickSight is a serverless business intelligence service for interactive dashboards, with per-session pricing."],
  ["Amazon CloudWatch dashboards", "CloudWatch dashboards show operational metrics like CPU, not business data from Redshift."],
  ["AWS Glue", "Glue prepares data; it doesn't visualize it."],
  ["Amazon Athena", "Athena runs queries but doesn't build shareable dashboards."]
]);
Q("db", 0, "A data team needs managed clusters to process very large datasets with Apache Spark and Hadoop. Which service should it use?", [
  ["Amazon EMR", "EMR (Elastic MapReduce) runs managed Hadoop, Spark, HBase, Presto and Flink clusters on EC2, with Spot and auto scaling support."],
  ["Amazon Athena", "Athena runs SQL queries on S3 without clusters. It isn't a Spark or Hadoop platform."],
  ["Amazon QuickSight", "QuickSight is for dashboards."],
  ["Amazon Timestream", "Timestream is a time-series database."]
]);
Q("db", 0, "In which situation would a company choose to run its database on Amazon EC2 instead of using Amazon RDS?", [
  ["It needs OS-level access to the database server", "RDS gives no OS access (SSH is disabled) and supports a fixed list of engines. Full control means running it on EC2 and managing it yourself."],
  ["It wants AWS to take automated backups", "Automated backups are an RDS feature, a reason to choose RDS."],
  ["It wants AWS to patch the database engine", "Managed patching is a reason to choose RDS."],
  ["It wants managed Multi-AZ failover", "Managed Multi-AZ failover is an RDS feature."]
]);
Q("db", 1, "A company needs a Redis-compatible, in-memory database that is also durable enough to be the primary database for its application. Which service fits BEST?", [
  ["Amazon MemoryDB", "MemoryDB is a durable, Redis-compatible in-memory database with data stored across multiple AZs, suitable as a primary database."],
  ["ElastiCache for Memcached", "Memcached is a cache with no persistence."],
  ["DynamoDB Accelerator (DAX)", "DAX is a cache for DynamoDB only."],
  ["Amazon Timestream", "Timestream is for time-series data."]
]);
Q("db", 1, "A company wants full-text search on its product catalog and interactive analysis of its application logs. Which managed service is built for this?", [
  ["Amazon OpenSearch Service", "OpenSearch Service (successor to Amazon Elasticsearch Service) provides full-text search and log analytics with dashboards."],
  ["Amazon Redshift", "Redshift is for SQL analytics on structured data, not full-text search."],
  ["Amazon Neptune", "Neptune is a graph database."],
  ["Amazon DocumentDB", "DocumentDB stores JSON documents; it isn't a search engine."]
]);

// VPC and hybrid networking
Q("network", 0, "Instances in a private subnet need to download software updates from the internet, but they must not be reachable from the internet. What should the company use?", [
  ["A NAT gateway in a public subnet", "A NAT gateway allows outbound internet connections from private subnets while blocking inbound connections from the internet."],
  ["An internet gateway attached to the private subnet's route", "Routing a subnet to an internet gateway makes it public, which is what the company wants to avoid."],
  ["A VPC gateway endpoint", "Gateway endpoints reach S3 and DynamoDB privately; they don't provide general internet access."],
  ["AWS Direct Connect", "Direct Connect links to your data center, not to the internet."]
]);
Q("network", 0, "A company transfers large volumes of data between its data center and AWS every day. It needs a dedicated, private connection with consistent network performance. Which service should it use?", [
  ["AWS Direct Connect", "Direct Connect is a dedicated physical connection to AWS that doesn't go over the public internet, giving consistent bandwidth and latency."],
  ["AWS Site-to-Site VPN", "A VPN runs over the public internet, so its performance varies."],
  ["An internet gateway", "An internet gateway connects a VPC to the public internet."],
  ["VPC peering", "VPC peering connects two VPCs, not a data center."]
]);
Q("network", 0, "A company needs to connect its office network to a VPC today. The connection must be encrypted, and using the public internet is acceptable. Which option is the fastest to set up?", [
  ["AWS Site-to-Site VPN", "A Site-to-Site VPN creates an encrypted tunnel over the internet and can be running in minutes."],
  ["AWS Direct Connect", "Direct Connect needs a physical circuit and usually takes weeks to set up."],
  ["A NAT gateway", "A NAT gateway gives private instances outbound internet access; it doesn't connect an office."],
  ["Amazon CloudFront", "CloudFront is a CDN."]
]);
Q("network", 0, "VPC A is peered with VPC B, and VPC B is peered with VPC C. Can resources in VPC A communicate with resources in VPC C through VPC B?", [
  ["No, because VPC peering is not transitive", "Each pair of VPCs needs its own peering connection. For hub-and-spoke routing, use a Transit Gateway."],
  ["Yes, peering is transitive by default", "Peering connections are never transitive."],
  ["Yes, if all three VPCs are in the same Region", "Being in the same Region doesn't make peering transitive."],
  ["Yes, if all three VPCs are in the same account", "Sharing an account doesn't make peering transitive either."]
]);
Q("network", 0, "A company must connect 50 VPCs and its on-premises network, and wants to manage the routing through one central hub. Which service should it use?", [
  ["AWS Transit Gateway", "Transit Gateway is a hub that connects thousands of VPCs and on-premises networks with transitive routing."],
  ["A full mesh of VPC peering connections", "Peering 50 VPCs needs over 1,000 separate connections and isn't transitive."],
  ["A NAT gateway", "A NAT gateway gives private instances outbound internet access."],
  ["An internet gateway", "An internet gateway connects a single VPC to the internet."]
]);
Q("network", 0, "An application on EC2 in a private subnet must read objects from S3 without its traffic going over the internet. What should the company create?", [
  ["A VPC gateway endpoint for S3", "A gateway endpoint lets the VPC reach S3 privately over the AWS network, with no internet or NAT needed."],
  ["A NAT gateway", "A NAT gateway sends the traffic out to S3's public endpoint through the internet gateway."],
  ["An internet gateway", "An internet gateway would give the subnet public internet access."],
  ["An AWS Direct Connect link", "Direct Connect connects on premises to AWS, not a VPC to S3."]
]);
Q("network", 0, "A network engineer needs to capture information about the IP traffic going to and from network interfaces in a VPC to troubleshoot connectivity. What should the engineer use?", [
  ["VPC Flow Logs", "Flow Logs record IP traffic at the VPC, subnet or network interface level and send it to CloudWatch Logs, S3 or Data Firehose."],
  ["AWS CloudTrail", "CloudTrail records API calls, not network packets."],
  ["AWS X-Ray", "X-Ray traces application requests, not raw IP traffic."],
  ["AWS Config", "Config records resource configurations, not traffic."]
]);
Q("network", 0, "Which statement correctly describes a network ACL?", [
  ["It works at the subnet level, is stateless, and supports allow and deny rules", "NACLs filter traffic in and out of a subnet; return traffic must be allowed explicitly because they are stateless."],
  ["It works at the instance level, is stateful, and supports allow rules only", "That describes a security group."],
  ["It filters HTTP requests for SQL injection", "That is AWS WAF."],
  ["It encrypts traffic between subnets", "NACLs filter traffic; they don't encrypt it."]
]);
Q("network", 0, "A company needs its EC2 instance to keep the same public IPv4 address even after the instance is stopped and started. What should it use?", [
  ["An Elastic IP address", "An Elastic IP is a static public IPv4 address that you allocate and attach to an instance. It stays the same across stops and starts."],
  ["The instance's default public IPv4 address", "The default public IPv4 address changes when the instance stops and starts."],
  ["A private IPv4 address", "A private IP isn't reachable from the internet."],
  ["A NAT gateway", "A NAT gateway handles outbound traffic for private subnets; it doesn't give an instance a fixed inbound address."]
]);
Q("network", 0, "A software company wants to offer its service privately to thousands of customer VPCs without VPC peering, internet gateways or NAT. Which technology is designed for this?", [
  ["AWS PrivateLink", "PrivateLink exposes a service (behind a Network Load Balancer) to other VPCs through interface endpoints, privately and at scale."],
  ["VPC peering", "Peering thousands of VPCs isn't practical, and it exposes whole networks rather than one service."],
  ["An internet gateway", "This would send the traffic over the public internet."],
  ["AWS Site-to-Site VPN", "A VPN connects networks over the internet; it isn't a way to publish a service to many VPCs."]
]);
Q("network", 0, "Remote employees need to connect their laptops securely to resources in a VPC from home. Which AWS service is designed for this?", [
  ["AWS Client VPN", "Client VPN is a managed OpenVPN-based service that lets individual users connect their devices to a VPC."],
  ["AWS Site-to-Site VPN", "Site-to-Site VPN connects whole networks (an office or data center), not individual laptops."],
  ["AWS Direct Connect", "Direct Connect is a dedicated line from a data center, not for home laptops."],
  ["A NAT gateway", "A NAT gateway gives private instances outbound internet access."]
]);
