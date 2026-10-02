// New questions, Domain 4 (billing, pricing, support) and multiple-response questions across all domains.
Q("pricing", 0, "The price per GB that a company pays for S3 storage goes down as the total amount it stores goes up. Which AWS pricing principle is this?", [
  ["Pay less by using more", "Tiered volume pricing lowers the unit price as usage grows, for example for S3 storage and data transfer out."],
  ["Pay as you go", "Pay-as-you-go means paying for actual use with no upfront commitment, not a lower unit price at volume."],
  ["Save when you commit", "Commitment discounts come from Reserved Instances and Savings Plans, not from volume."],
  ["Pay less as AWS grows", "This refers to AWS lowering prices over time thanks to its scale, for all customers."]
]);
Q("pricing", 0, "Two EC2 instances exchange a lot of data. How can a company keep the data transfer cost between them as low as possible?", [
  ["Place them in the same AZ and use private IP addresses", "Traffic between instances in the same AZ over private IPs is free. The trade-off is lower availability."],
  ["Place them in different Regions", "Inter-Region traffic is charged per GB."],
  ["Use Elastic IP addresses for all traffic", "Using public or Elastic IPs between AZs costs more than private IPs."],
  ["Place them in different AZs using public IPs", "Cross-AZ traffic over public IPs is the more expensive option."]
]);
Q("pricing", 0, "Which of these AWS services has no additional charge, so you pay only for the resources it creates?", [
  ["AWS CloudFormation", "CloudFormation is free for AWS resources; you pay for what the stack creates. Elastic Beanstalk, IAM and Auto Scaling are also free."],
  ["NAT gateway", "NAT gateways are billed per hour and per GB processed."],
  ["AWS Shield Advanced", "Shield Advanced is a paid subscription."],
  ["AWS Direct Connect", "Direct Connect is billed by port hours and data transfer out."]
]);
Q("pricing", 0, "A new customer wants to explore AWS for a few months with no risk of being charged. What should the customer choose when creating the account?", [
  ["The Free plan", "The Free plan charges nothing. It runs on credits and closes after 6 months or when the credits are used, unless you upgrade."],
  ["The Paid plan", "The Paid plan starts charging as soon as your credits are used up, so it doesn't remove the risk of charges."],
  ["Enterprise Support", "Enterprise Support costs thousands of dollars per month."],
  ["A Dedicated Host reservation", "Dedicated Hosts are the most expensive EC2 option."]
]);
Q("pricing", 0, "How is Amazon EBS storage billed?", [
  ["By the GB provisioned per month, used or not", "You pay for the capacity you provision (plus provisioned IOPS and snapshots), not for how much of it you use."],
  ["Only for the data actually written to the volume", "That is how EFS and S3 are billed, not EBS."],
  ["A flat fee per volume, whatever the size", "The price depends on size and volume type."],
  ["It is free when attached to an On-Demand instance", "EBS is always billed separately from the instance."]
]);
Q("pricing", 0, "Which choice INCREASES the cost of an Amazon RDS database?", [
  ["Enabling Multi-AZ deployment", "Multi-AZ runs a standby instance in another AZ, so you pay for extra instance and storage capacity."],
  ["Data transferred into the database from the internet", "Inbound data transfer is free."],
  ["Backup storage up to the size of the database", "RDS includes backup storage up to 100% of your total database storage in a Region at no charge."],
  ["Using the AWS Management Console to manage it", "Using the console is free."]
]);
Q("pricing", 0, "Besides EC2, which of the following services also offers reserved pricing for a 1- or 3-year commitment?", [
  ["Amazon RDS", "RDS offers Reserved Instances. So do ElastiCache, Redshift and OpenSearch, and DynamoDB offers reserved capacity."],
  ["AWS IAM", "IAM is free, so there is nothing to reserve."],
  ["AWS CloudFormation", "CloudFormation itself is free."],
  ["Amazon VPC", "A basic VPC has no charge; there is nothing to reserve."]
]);
Q("pricing", 0, "When can AWS interrupt a running Spot Instance?", [
  ["When AWS needs the capacity back", "Spot uses spare EC2 capacity. AWS can take it back with a two-minute warning, which is why Spot suits fault-tolerant work."],
  ["After the instance has run for 24 hours", "There is no fixed running-time limit for Spot."],
  ["At the end of every calendar month", "Interruptions depend on capacity, not the calendar."],
  ["Whenever CPU usage passes 80%", "Your utilization doesn't trigger interruptions."]
]);
Q("pricing", 0, "Which of the following is NOT a factor in the cost of Amazon S3?", [
  ["Data transferred into S3 from the internet", "Inbound transfer is free. You pay for storage by class, requests, retrievals and data transferred out."],
  ["The storage class of the objects", "Each class has a different price per GB."],
  ["The number of requests such as GET and PUT", "Requests are charged per thousand."],
  ["Data transferred out of the Region", "Outbound transfer is charged."]
]);
Q("pricing", 1, "Which of the following is one of the offer types of the classic AWS Free Tier?", [
  ["12 months free for new accounts", "The classic Free Tier has three offer types: Always Free, 12 months free, and short free trials. Since July 2025, new accounts get credits instead of the 12-months-free offers (Always Free offers still apply), but older exam questions still describe the classic offers."],
  ["Free Reserved Instances for the first year", "Reserved Instances are a paid commitment. They are never part of the Free Tier."],
  ["Unlimited free use of every service", "Free Tier offers have monthly limits, and many services have no free offer at all."],
  ["Free Enterprise Support for six months", "Support plans aren't part of the Free Tier. Only Basic Support is free."]
]);

// Accounts and governance
Q("accounts", 0, "A company has 30 AWS accounts. It wants one monthly bill and wants the combined usage of all accounts to count toward volume pricing discounts. What should it use?", [
  ["Consolidated billing", "Consolidated billing gives one bill and combines usage across accounts for volume tiers, and it is free."],
  ["AWS Cost Explorer", "Cost Explorer analyzes costs; it doesn't merge billing across accounts."],
  ["AWS Budgets alerts", "Budgets sets alerts; it doesn't combine usage."],
  ["AWS Resource Access Manager", "RAM shares resources between accounts, not billing."]
]);
Q("accounts", 0, "A company wants to make sure that no one in its development accounts can launch resources outside the eu-west-1 Region, not even administrators. What should it use?", [
  ["A service control policy (SCP)", "SCPs set the maximum permissions for accounts or OUs, and apply to every user and role in those accounts, including administrators."],
  ["An IAM password policy for all users", "Password policies control password rules, not Regions."],
  ["An S3 bucket policy on each bucket", "Bucket policies control access to one bucket."],
  ["A security group rule on each instance", "Security groups filter network traffic to instances."]
]);
Q("accounts", 0, "An SCP on an account allows all S3 actions. An IAM user in that account has no IAM policies attached. Can the user read objects in S3?", [
  ["No, SCPs never grant permissions on their own", "SCPs only set limits. Permissions must still be granted by IAM policies."],
  ["Yes, the SCP grants the permission", "SCPs are guardrails; they don't grant anything."],
  ["Yes, but only read-only access to S3", "Without an IAM allow, the user can't read either."],
  ["Only if the user signs in as root", "Users should never share the root user, and this isn't how SCPs work."]
]);
Q("accounts", 0, "A company wants to set up a new multi-account AWS environment that follows best practices, with guardrails and a dashboard showing compliance, in just a few clicks. Which service should it use?", [
  ["AWS Control Tower", "Control Tower sets up a landing zone on top of Organizations with preventive and detective controls and a compliance dashboard."],
  ["AWS Service Catalog", "Service Catalog offers approved products; it doesn't build the multi-account environment."],
  ["AWS Config", "Config records configurations; it doesn't create accounts and guardrails."],
  ["AWS IAM Identity Center", "Identity Center provides sign-in across accounts, which Control Tower also sets up, but it isn't the whole landing zone."]
]);
Q("accounts", 0, "A networking team wants to share its VPC subnets and a Transit Gateway with other accounts in the organization instead of creating copies in each account. Which service should it use?", [
  ["AWS Resource Access Manager", "RAM shares resources such as subnets, Transit Gateways and Route 53 Resolver rules with other accounts."],
  ["VPC peering connections", "Peering connects VPCs but doesn't share one team's subnets with other accounts."],
  ["AWS Service Catalog", "Service Catalog offers approved products; it doesn't share existing network resources."],
  ["Consolidated billing", "Consolidated billing combines bills, not resources."]
]);
Q("accounts", 0, "An IT team wants employees to launch only pre-approved, correctly configured environments, such as a standard web server stack, from a self-service portal. Which service should it use?", [
  ["AWS Service Catalog", "Service Catalog lets admins publish approved CloudFormation products that users can launch themselves, already configured and tagged."],
  ["AWS Marketplace", "Marketplace sells third-party software; it isn't your internal catalog of approved stacks."],
  ["AWS Control Tower", "Control Tower governs accounts, not a portal of approved stacks for users."],
  ["Amazon Lightsail", "Lightsail offers simple servers, not company-approved configurations."]
]);
Q("accounts", 0, "A finance team wants to see AWS costs broken down by project and by department in its billing reports. What should the company use?", [
  ["Cost allocation tags", "Tag resources (for example Project=Apollo), activate the tags in Billing, and costs appear per tag in Cost Explorer and the Cost and Usage Report."],
  ["Security groups", "Security groups filter network traffic."],
  ["IAM groups per team", "IAM groups organize users' permissions, not costs."],
  ["VPC Flow Logs", "Flow Logs record network traffic."]
]);
Q("accounts", 0, "In AWS Organizations, how can a company group accounts, for example by department or by environment, so it can apply policies to each group at once?", [
  ["Organizational units", "OUs group accounts in a hierarchy; SCPs attached to an OU apply to every account inside it."],
  ["IAM user groups", "IAM groups contain users inside one account, not accounts."],
  ["Resource groups", "Resource groups collect resources by tag inside an account."],
  ["Shared VPCs", "VPCs are networks, not account groups."]
]);
Q("accounts", 0, "Account A in an organization bought Reserved Instances that it isn't fully using. Account B in the same organization runs matching instances. What happens with consolidated billing?", [
  ["Account B can benefit from Account A's unused RI discount", "RI and Savings Plans discounts are shared across the organization by default, so unused discounts apply to matching usage in other accounts."],
  ["Nothing, because RIs can't be shared between accounts", "Sharing is exactly what consolidated billing enables."],
  ["Account A must first transfer the RIs to Account B", "No transfer is needed; the discount applies automatically."],
  ["The discount only applies in the management account", "The discount can apply to any member account's matching usage."]
]);
Q("accounts", 0, "Why do companies often use separate AWS accounts for development and production?", [
  ["To isolate workloads and limit the impact of mistakes or breaches", "Separate accounts are strong boundaries for security, quotas and billing, so a problem in dev can't affect prod."],
  ["Because one account can't have more than 10 IAM users", "IAM supports thousands of users in an account."],
  ["Because an account can't contain more than one VPC", "An account can have several VPCs in each Region."],
  ["To get a separate free support plan for each account", "Every account already has Basic Support; that isn't the reason."]
]);
Q("accounts", 0, "Service control policies do NOT apply to which of the following?", [
  ["The organization's management account", "SCPs never affect users or roles in the management account, which is one reason to keep workloads out of it."],
  ["The root user of a member account", "SCPs do apply to member accounts' root users."],
  ["IAM users in a member account", "SCPs apply to all IAM users in member accounts."],
  ["IAM roles in a member account", "SCPs apply to roles in member accounts, except service-linked roles."]
]);

// Cost management tools
Q("costtools", 0, "Before migrating, a company wants to estimate the monthly cost of a planned architecture with EC2, RDS and S3. Which tool should it use?", [
  ["AWS Pricing Calculator", "The Pricing Calculator estimates costs for services you plan to use, before anything is deployed."],
  ["AWS Cost Explorer", "Cost Explorer analyzes costs you have already incurred."],
  ["AWS Cost and Usage Report", "CUR details past billing data."],
  ["AWS Budgets", "Budgets sets alerts on actual or forecasted spend of an existing account."]
]);
Q("costtools", 0, "A manager wants to see a graph of how the company's AWS spending changed over the last six months, broken down by service, and a forecast for the coming months. Which tool should the manager use?", [
  ["AWS Cost Explorer", "Cost Explorer visualizes historical cost and usage with filters and grouping, and forecasts future spend."],
  ["AWS Pricing Calculator", "The calculator estimates new architectures; it doesn't show your history."],
  ["Amazon CloudWatch Logs", "CloudWatch Logs stores application logs."],
  ["AWS Artifact", "Artifact provides compliance documents."]
]);
Q("costtools", 0, "A company wants an email alert when its FORECASTED monthly AWS cost is expected to exceed $1,000. Which service provides this?", [
  ["AWS Budgets", "Budgets can alert on actual or forecasted costs, usage, and RI or Savings Plans metrics."],
  ["A CloudWatch billing alarm", "Billing alarms watch the actual estimated charges, not a forecast."],
  ["AWS Pricing Calculator", "The calculator estimates new designs; it doesn't send alerts."],
  ["AWS Trusted Advisor", "Trusted Advisor gives recommendations, not budget alerts."]
]);
Q("costtools", 0, "A data team needs the most detailed AWS billing data available, with hourly line items and resource IDs, to analyze in Athena. Which should it use?", [
  ["AWS Cost and Usage Report", "CUR (Data Exports) is the most comprehensive cost and usage dataset, delivered to S3 and queryable with Athena, Redshift or QuickSight."],
  ["The Billing Dashboard", "The Billing Dashboard gives a high-level overview."],
  ["AWS Budgets", "Budgets tracks spending against limits."],
  ["AWS Pricing Calculator", "The calculator estimates future costs."]
]);
Q("costtools", 0, "A company wants to be told automatically when spending suddenly spikes in an unusual way, without having to set fixed thresholds. Which service should it use?", [
  ["AWS Cost Anomaly Detection", "Cost Anomaly Detection uses machine learning to learn your spending patterns and alert on unusual spikes, with root-cause details."],
  ["AWS Pricing Calculator", "The calculator estimates costs before you build."],
  ["AWS Service Catalog", "Service Catalog offers approved products."],
  ["Amazon Inspector", "Inspector scans for vulnerabilities."]
]);
Q("costtools", 0, "A company wants machine learning-based recommendations to right-size its EC2 instances, EBS volumes and Lambda functions based on their real utilization. Which service should it use?", [
  ["AWS Compute Optimizer", "Compute Optimizer analyzes configuration and CloudWatch utilization and recommends better sizes for EC2, Auto Scaling groups, EBS, Lambda and more."],
  ["AWS Pricing Calculator", "The calculator estimates prices; it doesn't analyze real utilization."],
  ["AWS Budgets", "Budgets sends alerts; it doesn't recommend sizes."],
  ["AWS Artifact", "Artifact provides compliance reports."]
]);
Q("costtools", 0, "Which of the following is NOT one of the AWS Trusted Advisor check categories?", [
  ["Encryption key management", "Trusted Advisor's categories are cost optimization, performance, security, fault tolerance, service limits and operational excellence."],
  ["Operational excellence", "Operational excellence is a Trusted Advisor category."],
  ["Fault tolerance", "Fault tolerance is a Trusted Advisor category."],
  ["Service limits", "Service limits is a Trusted Advisor category."]
]);
Q("costtools", 0, "Which of these can AWS Budgets track and alert on?", [
  ["Reserved Instance utilization and coverage", "Budgets has four types: cost, usage, reservation (RI utilization and coverage) and Savings Plans."],
  ["The CPU utilization of an EC2 instance", "CPU utilization is a CloudWatch metric."],
  ["The number of IAM users in the account", "Budgets doesn't track IAM users."],
  ["The durability of S3 objects", "Durability is a design property of S3, not something Budgets tracks."]
]);
Q("costtools", 0, "An application is approaching the account's limit on concurrent Lambda executions. Where can the team view this limit and request an increase?", [
  ["Service Quotas", "The Service Quotas console shows your quotas, lets you request increases, and can alarm when usage gets close."],
  ["AWS Budgets", "Budgets tracks cost and usage against your own targets, not service quotas."],
  ["AWS Artifact", "Artifact provides compliance documents."],
  ["AWS Config", "Config records resource configurations."]
]);
Q("costtools", 0, "Which tool recommends how much to commit to a Savings Plan based on the company's past usage?", [
  ["AWS Cost Explorer", "Cost Explorer includes Savings Plans and RI purchase recommendations based on your historical usage."],
  ["AWS Pricing Calculator", "The calculator estimates planned resources; it doesn't analyze your history."],
  ["AWS Budgets", "Budgets tracks commitments once you have them, but it doesn't recommend purchases."],
  ["AWS Artifact", "Artifact provides compliance documents."]
]);
Q("costtools", 1, "An AWS reseller wants to show each of its customers a custom bill using its own pricing rates, different from the AWS invoice. Which service is designed for this?", [
  ["AWS Billing Conductor", "Billing Conductor creates custom billing groups and pricing rules, for resellers or to bill each internal team for its own usage."],
  ["AWS Cost Anomaly Detection", "Anomaly Detection finds unusual spend; it doesn't create custom bills."],
  ["AWS Pricing Calculator", "The calculator estimates AWS list prices for new designs."],
  ["AWS Marketplace", "Marketplace sells software; it doesn't produce custom bills for resellers."]
]);
Q("costtools", 0, "A company tagged all its resources with a Project tag, but the tag doesn't appear in its cost reports. What must it do?", [
  ["Activate it as a cost allocation tag", "User-defined tags only appear in Cost Explorer and the Cost and Usage Report after they are activated as cost allocation tags."],
  ["Enable AWS CloudTrail in all Regions", "CloudTrail records API calls; it doesn't make tags appear in billing."],
  ["Recreate every resource with the same tag", "The resources are already tagged; activation is the missing step."],
  ["Upgrade to the Enterprise Support plan", "Cost allocation tags work on every support plan."]
]);

// Support plans and resources
Q("support", 0, "A company wants a designated Technical Account Manager (TAM) who knows its environment and gives proactive guidance. Which support plan should it choose?", [
  ["Enterprise", "Enterprise includes a designated TAM. (Enterprise On-Ramp offered a pool of TAMs.)"],
  ["Business", "Business includes 24/7 access to Cloud Support Engineers, but no TAM."],
  ["Developer", "Developer offers business-hours email support only."],
  ["Basic", "Basic has no technical support cases."]
]);
Q("support", 0, "A company needs a response within 15 minutes when a business-critical system goes down. Which support plan meets this requirement?", [
  ["Enterprise", "Enterprise targets a response within 15 minutes for business-critical system outages."],
  ["Business", "Business targets less than 1 hour for a production system down."],
  ["Developer", "Developer targets less than 12 business hours for an impaired system."],
  ["Basic", "Basic doesn't include technical support."]
]);
Q("support", 0, "What is the LEAST expensive classic support plan that includes 24/7 phone, email and chat access to Cloud Support Engineers and the full set of Trusted Advisor checks?", [
  ["Business", "Business adds 24/7 phone, email and chat, full Trusted Advisor checks and the Support API. In the new lineup this is Business Support+."],
  ["Developer", "Developer offers only business-hours email access."],
  ["Enterprise", "Enterprise includes all of this, but it costs far more than Business."],
  ["Basic", "Basic has no technical support."]
]);
Q("support", 0, "A developer is experimenting with AWS in a test account and wants the cheapest classic plan that includes technical support by email during business hours. Which plan fits?", [
  ["Developer", "Developer gives business-hours email access to Cloud Support Associates, with general guidance within 24 business hours."],
  ["Basic", "Basic doesn't include technical support cases."],
  ["Business", "Business includes 24/7 access but costs more than needed."],
  ["Enterprise On-Ramp", "Enterprise On-Ramp is aimed at business-critical production workloads."]
]);
Q("support", 0, "Which of the following is included with the free Basic Support plan?", [
  ["Customer service for billing and account questions", "Basic includes 24/7 customer service for account and billing, documentation, re:Post, the Health Dashboard and core Trusted Advisor checks."],
  ["A designated Technical Account Manager", "A TAM comes with Enterprise support."],
  ["24/7 phone access to Cloud Support Engineers", "That starts with Business support."],
  ["Architecture reviews with AWS experts", "Reviews are part of the higher Enterprise-level plans."]
]);
Q("support", 1, "A company wants help from AWS's Concierge Support Team on billing and account best practices, at the LOWEST cost among the classic plans that include it. Which plan should it choose?", [
  ["Enterprise On-Ramp", "The Concierge Support Team is included with Enterprise On-Ramp and Enterprise; On-Ramp is the cheaper of the two."],
  ["Business (classic)", "Business doesn't include the Concierge Support Team."],
  ["Developer (classic)", "Developer doesn't include the Concierge Support Team."],
  ["Enterprise (classic)", "Enterprise includes Concierge, but it costs more than Enterprise On-Ramp."]
]);
Q("support", 0, "A company wants to buy a third-party firewall product and pay for it through its existing AWS bill. Where should it look?", [
  ["AWS Marketplace", "Marketplace is a catalog of third-party software (AMIs, SaaS, containers), and charges appear on your AWS bill."],
  ["AWS Artifact", "Artifact provides compliance documents."],
  ["AWS Service Catalog", "Service Catalog holds your own approved products, not a store of third-party software."],
  ["AWS re:Post", "re:Post is a community question-and-answer site."]
]);
Q("support", 0, "A company wants to hire an outside consulting firm that has proven expertise in migrating workloads to AWS. Where should it look?", [
  ["The AWS Partner Network (APN)", "The APN lists consulting and technology partners, including those with AWS Competencies such as migration."],
  ["AWS Managed Services", "AMS is AWS's own service for operating your infrastructure, not a directory of consulting firms."],
  ["AWS Trust & Safety", "Trust & Safety handles abuse reports."],
  ["The AWS Health Dashboard", "The Health Dashboard shows service events."]
]);
Q("support", 0, "A company wants AWS experts to operate its infrastructure day to day, including patching, monitoring, backups and change requests, following AWS best practices. Which offering fits?", [
  ["AWS Managed Services (AMS)", "AMS operates your AWS infrastructure 24/7: patching, monitoring, security, backups and change management."],
  ["AWS Professional Services", "Professional Services helps with projects such as migrations; it doesn't run your operations day to day."],
  ["AWS re:Post", "re:Post is a community Q&A site."],
  ["AWS Marketplace", "Marketplace sells third-party software."]
]);
Q("support", 0, "Where can a developer ask a technical question and get community answers that are reviewed by AWS experts?", [
  ["AWS re:Post", "re:Post is AWS's managed Q&A community, which replaced the AWS Forums. The Knowledge Center on re:Post answers frequent questions."],
  ["AWS Artifact", "Artifact provides compliance documents."],
  ["AWS Trusted Advisor", "Trusted Advisor checks your account against best practices."],
  ["AWS Service Catalog", "Service Catalog holds approved products."]
]);

// Multiple response (Select TWO) — the first two options are correct.
Q("concepts", 0, "Which of the following are advantages of cloud computing? (Select TWO.)", [
  ["Trade fixed expense for variable expense", "You pay for what you use instead of buying hardware up front."],
  ["Stop guessing capacity", "You scale with real demand instead of forecasting peaks."],
  ["Trade variable expense for fixed expense", "The wording is backwards. The cloud lets you trade fixed (capital) expense for variable expense."],
  ["AWS takes over all of the customer's security tasks", "Security is shared. The customer always keeps security IN the cloud: data, IAM and configuration."],
  ["A guaranteed lower cost for every workload", "The cloud is often cheaper, but no workload is guaranteed to cost less. Cost depends on how you use it."]
], 2);
Q("srm", 0, "According to the shared responsibility model, which tasks are the CUSTOMER's responsibility when using Amazon EC2? (Select TWO.)", [
  ["Patching the guest operating system", "On EC2, the customer patches the OS and the software installed on it."],
  ["Configuring security group rules", "Security groups are customer configuration."],
  ["Physical security of the data center", "Physical security is AWS's responsibility."],
  ["Patching the hypervisor", "The virtualization layer is AWS's responsibility."],
  ["Replacing failed hardware", "Hardware is AWS's responsibility."]
], 2);
Q("srm", 0, "According to the shared responsibility model, which of the following are AWS's responsibilities? (Select TWO.)", [
  ["Physical security of AWS data centers", "Facilities and hardware are part of security OF the cloud."],
  ["Patching the database engine of Amazon RDS", "For managed RDS, AWS patches the OS and database engine."],
  ["Configuring S3 bucket policies", "Bucket policies are customer configuration."],
  ["Managing IAM users and their permissions", "Identity and access management is the customer's job."],
  ["Encrypting the customer's application data", "Choosing to encrypt data is the customer's responsibility."]
], 2);
Q("iam", 0, "Which actions follow AWS best practices for protecting the root user? (Select TWO.)", [
  ["Enable MFA on the root user", "MFA protects root even if its password is stolen."],
  ["Delete any access keys for the root user", "Root access keys give unlimited programmatic access; don't keep them."],
  ["Share the root password with the admin team", "Never share root credentials."],
  ["Use the root user for daily administration", "Use IAM identities for daily work and root only for root-only tasks."],
  ["Attach an IAM policy to the root user", "You can't attach IAM policies to the root user."]
], 2);
Q("iam", 0, "Which are IAM best practices? (Select TWO.)", [
  ["Grant only the permissions each user needs", "Least privilege limits damage from mistakes or stolen credentials."],
  ["Use IAM roles for applications running on EC2", "Roles give temporary credentials, so no keys are stored on the instance."],
  ["Share one IAM user among a team", "Each person should have their own identity."],
  ["Embed access keys in application source code", "Keys in code can leak, for example through a public repository."],
  ["Use the root user instead of creating IAM users", "Root should be locked away."]
], 2);
Q("wa", 0, "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO.)", [
  ["Reliability", "Reliability is one of the six pillars."],
  ["Sustainability", "Sustainability is the sixth pillar, added in 2021."],
  ["Scalability", "Scalability is a design principle, not a pillar."],
  ["Elasticity", "Elasticity is a cloud characteristic, not a pillar."],
  ["Availability", "Availability belongs to Reliability; it isn't a pillar on its own."]
], 2);
Q("infra", 0, "Which design choices make a web application highly available? (Select TWO.)", [
  ["Deploy instances across multiple Availability Zones", "If one AZ fails, instances in the other AZs keep serving."],
  ["Use Elastic Load Balancing with an Auto Scaling group", "The load balancer skips unhealthy instances and Auto Scaling replaces them."],
  ["Use one larger instance instead of several small ones", "A single instance is a single point of failure."],
  ["Keep all instances in one AZ to lower latency", "One AZ means one failure takes everything down."],
  ["Turn off health checks to avoid false alarms", "Health checks are what detect and replace failures."]
], 2);
Q("s3", 0, "Which S3 storage classes store data in a single Availability Zone? (Select TWO.)", [
  ["S3 One Zone-Infrequent Access", "One Zone-IA keeps data in one AZ, so it is cheaper but lost if that AZ is destroyed."],
  ["S3 Express One Zone", "Express One Zone stores data in one AZ for the highest performance."],
  ["S3 Standard-Infrequent Access", "Standard-IA stores data in at least three AZs."],
  ["S3 Glacier Instant Retrieval", "Glacier Instant Retrieval stores data in at least three AZs."],
  ["S3 Intelligent-Tiering", "Intelligent-Tiering stores data in at least three AZs."]
], 2);
Q("ec2", 0, "Which workloads are good candidates for EC2 Spot Instances? (Select TWO.)", [
  ["Batch image processing that can restart", "Interruptible, restartable work is ideal for Spot's large discount."],
  ["CI build jobs that can be retried", "Build jobs can simply rerun if interrupted."],
  ["A production database that must stay up", "Spot can be reclaimed, so it isn't for critical stateful systems."],
  ["A payment service with strict uptime rules", "Interruptions would break uptime requirements."],
  ["A single stateful server with no backup", "Losing it on interruption would lose its state."]
], 2);
Q("db", 0, "Which of the following are non-relational (NoSQL) databases? (Select TWO.)", [
  ["Amazon DynamoDB", "DynamoDB is a key-value NoSQL database."],
  ["Amazon DocumentDB", "DocumentDB is a document (JSON) database, MongoDB-compatible."],
  ["Amazon Aurora", "Aurora is relational (MySQL/PostgreSQL)."],
  ["Amazon RDS for PostgreSQL", "RDS runs relational engines."],
  ["Amazon Redshift", "Redshift is a relational, SQL-based data warehouse."]
], 2);
Q("containers", 0, "Which of the following are serverless compute services? (Select TWO.)", [
  ["AWS Lambda", "Lambda runs functions with no servers to manage."],
  ["AWS Fargate", "Fargate runs containers with no servers to manage."],
  ["Amazon EC2", "EC2 instances are servers you manage."],
  ["Amazon Lightsail", "Lightsail gives you simple servers to manage."],
  ["Amazon EMR on EC2", "EMR on EC2 runs clusters of instances."]
], 2);
Q("detect", 0, "Which services analyze activity to detect threats or investigate the root cause of security findings? (Select TWO.)", [
  ["Amazon GuardDuty", "GuardDuty detects threats by analyzing CloudTrail, VPC Flow Logs and DNS logs."],
  ["Amazon Detective", "Detective investigates the root cause of findings with graphs and ML."],
  ["Amazon Inspector", "Inspector scans software for known vulnerabilities (CVEs). It doesn't analyze account activity for threats."],
  ["AWS Config", "Config records resource configurations and checks them against rules. It doesn't detect threats."],
  ["AWS Artifact", "Artifact provides compliance documents."]
], 2);
Q("crypto", 0, "Which of the following are encrypted by default, with no action from the customer? (Select TWO.)", [
  ["AWS CloudTrail log files", "CloudTrail encrypts its log files by default."],
  ["New objects uploaded to Amazon S3", "Since January 2023, S3 encrypts every new object with SSE-S3 by default."],
  ["Amazon EBS volumes in a new account", "EBS encryption is opt-in (you can turn on encryption by default for the account)."],
  ["Amazon RDS databases", "RDS encryption is chosen when you create the database."],
  ["Amazon EFS file systems", "EFS encryption is an option you choose."]
], 2);
Q("accounts", 0, "What are benefits of consolidated billing in AWS Organizations? (Select TWO.)", [
  ["One bill for all accounts in the organization", "The management account pays one combined bill."],
  ["Combined usage that reaches volume discounts sooner", "Usage across accounts adds up for tiered pricing."],
  ["A free Enterprise Support plan", "Support plans are still paid separately."],
  ["Automatic encryption of all member accounts' data", "Billing doesn't encrypt anything."],
  ["Unlimited free tier usage", "Free tier limits don't grow with more accounts."]
], 2);
Q("costtools", 0, "Which services can send an alert when a company's AWS spending passes an amount that the company sets? (Select TWO.)", [
  ["AWS Budgets", "Budgets alerts on actual or forecasted spend against the amount you set."],
  ["Amazon CloudWatch billing alarms", "Billing alarms fire when estimated charges pass a threshold."],
  ["AWS Pricing Calculator", "The calculator estimates costs but sends no alerts."],
  ["AWS Artifact", "Artifact provides compliance documents."],
  ["AWS Cost and Usage Report", "CUR delivers detailed data; it doesn't send threshold alerts."]
], 2);
Q("support", 0, "Which of the following are included in the classic Enterprise Support plan? (Select TWO.)", [
  ["A designated Technical Account Manager", "Enterprise includes a designated TAM for proactive guidance."],
  ["Access to the Concierge Support Team", "Enterprise includes Concierge help with billing and account questions."],
  ["AWS Managed Services operating your infrastructure", "AWS Managed Services is a separate offering. A support plan gives guidance; it doesn't run your operations."],
  ["Free AWS Shield Advanced protection", "Shield Advanced is a separate paid subscription. No support plan includes it."],
  ["AWS engineers writing your application code", "Support gives guidance; it doesn't write your application."]
], 2);
Q("network", 0, "Which services can connect an on-premises network to a VPC privately or securely? (Select TWO.)", [
  ["AWS Site-to-Site VPN", "An encrypted tunnel over the internet between your network and the VPC."],
  ["AWS Direct Connect", "A dedicated private line from your data center to AWS."],
  ["A NAT gateway", "A NAT gateway gives private instances outbound internet access."],
  ["VPC Flow Logs", "Flow Logs record traffic; they don't connect networks."],
  ["Amazon CloudFront", "CloudFront is a CDN for internet users."]
], 2);
Q("integration", 0, "Which services help decouple the components of an application? (Select TWO.)", [
  ["Amazon SQS", "A queue lets producers and consumers work at their own pace."],
  ["Amazon SNS", "Pub/sub lets publishers send without knowing who the subscribers are."],
  ["AWS CloudTrail", "CloudTrail records API calls."],
  ["AWS Config", "Config records configurations."],
  ["AWS X-Ray", "X-Ray traces requests."]
], 2);
Q("ml", 0, "Which AWS AI services work with spoken audio? (Select TWO.)", [
  ["Amazon Transcribe", "Transcribe turns speech into text."],
  ["Amazon Polly", "Polly turns text into speech."],
  ["Amazon Rekognition", "Rekognition works with images and video."],
  ["Amazon Textract", "Textract works with scanned documents."],
  ["Amazon Comprehend", "Comprehend works with written text."]
], 2);
Q("caf", 0, "Which of the following are technical perspectives of the AWS Cloud Adoption Framework (AWS CAF)? (Select TWO.)", [
  ["Platform", "Platform is a technical perspective (with Security and Operations)."],
  ["Operations", "Operations is a technical perspective."],
  ["People", "People is a business perspective."],
  ["Governance", "Governance is a business perspective."],
  ["Business", "Business is a business perspective."]
], 2);
Q("pricing", 0, "Which options give a discount in exchange for a 1- or 3-year commitment? (Select TWO.)", [
  ["Reserved Instances", "RIs trade a commitment for a discount of up to about 72%."],
  ["Savings Plans", "Savings Plans trade a $/hour commitment for a discount."],
  ["On-Demand Instances", "On-Demand has no commitment and no discount."],
  ["Spot Instances", "Spot is discounted but has no commitment; it can be interrupted instead."],
  ["The Free Tier", "The Free Tier needs no commitment."]
], 2);
Q("edge", 0, "Which AWS services use edge locations to serve users? (Select TWO.)", [
  ["Amazon CloudFront", "CloudFront caches content at edge locations."],
  ["Amazon Route 53", "Route 53 answers DNS queries from edge locations."],
  ["Amazon RDS", "RDS runs in a Region's AZs, not at edge locations."],
  ["Amazon EBS", "EBS volumes live in one AZ."],
  ["Amazon EFS", "EFS lives in a Region."]
], 2);
Q("storage", 0, "Which services provide shared file storage that many EC2 instances can use at the same time? (Select TWO.)", [
  ["Amazon EFS", "EFS is a shared NFS file system for many Linux instances across AZs."],
  ["Amazon FSx for Windows File Server", "FSx for Windows provides shared SMB file storage."],
  ["Amazon EBS", "An EBS volume is attached to one instance at a time (at this level)."],
  ["EC2 instance store", "Instance store is local to one host."],
  ["S3 Glacier Deep Archive", "Deep Archive is archival object storage, not a mounted file system."]
], 2);
Q("deploy", 0, "Which services can manage or deploy to servers in a company's own data center as well as on AWS? (Select TWO.)", [
  ["AWS Systems Manager", "Systems Manager manages EC2 and on-premises servers that run the SSM Agent."],
  ["AWS CodeDeploy", "CodeDeploy deploys applications to EC2 and on-premises servers."],
  ["AWS Elastic Beanstalk", "Beanstalk only manages the AWS environments it creates."],
  ["Amazon Lightsail", "Lightsail runs only on AWS."],
  ["Amazon CloudFront", "CloudFront delivers content; it doesn't manage servers."]
], 2);
