// Domain 1 — Cloud Concepts. Q(topic, beyondNotes, stem, options) — options[0] is always the correct one; the app shuffles.
Q("concepts", 0, "A company wants its developers to be able to provision servers and storage themselves, at any time, without opening a ticket or talking to anyone at the cloud provider. Which characteristic of cloud computing does this describe?", [
  ["On-demand self-service", "On-demand self-service means users provision resources themselves, whenever they need them, with no human interaction from the provider."],
  ["Measured service", "Measured service is about metering usage so you pay for exactly what you consume, not about who provisions resources."],
  ["Broad network access", "Broad network access means resources are reachable over the network from many kinds of clients (laptops, phones). It says nothing about self-provisioning."],
  ["Multi-tenancy and resource pooling", "Resource pooling means many customers share the same physical infrastructure securely. It does not describe self-provisioning."]
]);
Q("concepts", 0, "Multiple AWS customers run workloads on the same physical hardware, but each customer's data and resources remain isolated and private. Which cloud characteristic is this?", [
  ["Multi-tenancy and resource pooling", "Many customers securely and privately share the same physical infrastructure. That pooling is one reason cloud is cheaper."],
  ["Rapid elasticity and scalability", "Elasticity is about quickly acquiring and releasing resources as demand changes, not about sharing hardware."],
  ["On-demand self-service", "Self-service is about provisioning without provider interaction, not about sharing hardware."],
  ["High availability across AZs", "High availability is about surviving failures, for example across AZs. It is not one of the five characteristics and isn't about sharing hardware."]
]);
Q("concepts", 0, "A company is billed only for the exact number of compute seconds and gigabytes of storage it used each month. Which characteristic of cloud computing makes this possible?", [
  ["Measured service", "Usage is metered, so you pay for exactly what you used. That is measured service."],
  ["Broad network access", "Broad network access is about reaching services over the network from many devices."],
  ["Resource pooling", "Resource pooling is about sharing infrastructure between tenants, not metering."],
  ["Agility", "Agility is about speed of provisioning and experimentation. It is not a billing characteristic."]
]);
Q("concepts", 0, "A startup does not want to spend a large amount of money up front on servers. Instead, it wants to pay only for the IT resources it consumes, as it consumes them. Which advantage of cloud computing does this describe?", [
  ["Trade fixed expense (CAPEX) for variable expense (OPEX)", "Paying on demand instead of buying hardware up front turns capital expenditure into operational expenditure."],
  ["Benefit from massive economies of scale", "Economies of scale is about AWS's size lowering prices for everyone. The scenario is about avoiding upfront investment."],
  ["Go global in minutes with AWS Regions", "Going global is about deploying in many Regions quickly. It has nothing to do with upfront spending."],
  ["Increase speed and agility", "Agility is about how quickly you can get resources, not how you pay for them."]
]);
Q("concepts", 0, "Because AWS aggregates usage from hundreds of thousands of customers, it can operate more efficiently and regularly lower its prices. Which advantage of cloud computing does this describe?", [
  ["Benefit from massive economies of scale", "AWS's huge aggregate usage makes it more efficient, and those savings are passed on as lower pay-as-you-go prices."],
  ["Trade capital expense for variable expense", "This is about switching from upfront purchases to paying on demand, not about AWS's scale lowering prices."],
  ["Stop guessing capacity", "This is about scaling with actual demand instead of forecasting hardware needs."],
  ["Stop spending money running and maintaining data centers", "This is about focusing on your business instead of racking and powering servers. It does not describe price reductions from scale."]
]);
Q("concepts", 0, "A retailer used to buy enough servers for its busiest holiday week, which left most of those servers idle for the rest of the year. After moving to AWS, it adds and removes capacity based on actual demand. Which advantage of cloud computing is the retailer taking advantage of?", [
  ["Stop guessing capacity", "Instead of forecasting and buying for the peak, you scale based on measured usage."],
  ["Go global in minutes", "Nothing in the scenario involves deploying to new geographic Regions."],
  ["Benefit from massive economies of scale", "Economies of scale lowers unit prices. The scenario is about matching capacity to demand."],
  ["Trade variable expense for capital expense", "The wording is backwards. The cloud lets you trade capital expense for variable expense, not the other way around."]
]);
Q("concepts", 0, "A media company wants to serve customers in Europe and Asia with low latency. With AWS it can deploy its application to Regions on both continents in a few clicks. Which advantage of cloud computing is this?", [
  ["Go global in minutes", "AWS's global infrastructure lets you deploy in many Regions worldwide in minutes, giving users lower latency at minimal cost."],
  ["Stop guessing capacity", "This is about scaling to demand, not about geographic reach."],
  ["Trade CAPEX for OPEX", "This is about the payment model, not about geography."],
  ["Multi-tenancy", "Multi-tenancy is a characteristic (shared infrastructure), not an advantage about global reach."]
]);
Q("concepts", 0, "A company keeps its sensitive customer database in its own data center but runs its public website on AWS, with the two environments connected. Which cloud deployment model is this company using?", [
  ["Hybrid cloud", "Hybrid means some resources stay on premises and some capabilities are extended to the cloud, connected together."],
  ["Private cloud", "A private cloud is used only by one organization and is not exposed publicly. Here the website runs on a public cloud."],
  ["Public cloud", "In a pure public cloud everything runs on the provider's infrastructure. Here part of the workload stays on premises."],
  ["Multi-Region cloud", "Multi-Region is an architecture choice inside a cloud provider. It is not one of the three deployment models."]
]);
Q("concepts", 0, "Which deployment model delivers all six advantages of cloud computing, such as massive economies of scale and going global in minutes?", [
  ["Public cloud", "Public cloud, owned and operated by a third-party provider such as AWS and delivered over the internet, is the model that delivers the six advantages."],
  ["Private cloud", "A private cloud gives full control to one organization, but it cannot deliver massive economies of scale or global reach in minutes."],
  ["On-premises data center", "Running your own data center is the traditional model that the cloud replaces."],
  ["Hybrid cloud", "Hybrid gets some cloud benefits for the part in the cloud, but the on-premises part still carries traditional costs and limits."]
]);
Q("concepts", 0, "Which AWS service is an example of Infrastructure as a Service (IaaS)?", [
  ["Amazon EC2", "EC2 gives you virtual machines: raw compute, networking and storage building blocks. You manage the OS and everything above it. That is IaaS."],
  ["AWS Elastic Beanstalk", "Elastic Beanstalk is Platform as a Service (PaaS). You upload code and AWS manages the platform."],
  ["Amazon Rekognition", "Rekognition is a finished AI service you just call. The course classifies it as SaaS."],
  ["Gmail", "Gmail is a Software as a Service product, and it is not an AWS service."]
]);
Q("concepts", 0, "A development team wants to upload its application code and let the platform handle capacity provisioning, load balancing, scaling and OS patching. The team only wants to manage the application and its data. Which cloud computing model fits BEST?", [
  ["Platform as a Service (PaaS)", "With PaaS (for example Elastic Beanstalk) the provider manages everything except your applications and data."],
  ["Infrastructure as a Service (IaaS)", "With IaaS you still manage the OS, middleware and runtime, which is more than the team wants."],
  ["Software as a Service (SaaS)", "With SaaS you use a finished product and manage nothing, not even your own application code."],
  ["On-premises", "On premises you manage every layer, from networking hardware up."]
]);
Q("concepts", 0, "In the Infrastructure as a Service (IaaS) model, which layer is the CUSTOMER responsible for managing?", [
  ["The operating system", "In IaaS the provider manages networking, storage, servers and virtualization. You manage the O/S and everything above it."],
  ["The virtualization layer (hypervisor)", "The provider manages virtualization in IaaS."],
  ["The physical servers", "Physical servers are managed by the provider in every cloud model."],
  ["The physical networking equipment", "Networking hardware is managed by the provider in every cloud model."]
]);
Q("concepts", 0, "A company uses a web-based email product. The provider runs and maintains everything, including the application itself; the company's employees simply sign in and use it. Which cloud computing model is this?", [
  ["Software as a Service (SaaS)", "SaaS is a finished product run by the provider. You just use it. Examples: Gmail, Dropbox, Zoom."],
  ["Platform as a Service (PaaS)", "With PaaS you still deploy and manage your own application code."],
  ["Infrastructure as a Service (IaaS)", "With IaaS you manage the OS, runtime and applications yourself."],
  ["Hybrid cloud", "Hybrid is a deployment model (where things run), not a service model (who manages what)."]
]);
Q("concepts", 0, "Under the AWS pay-as-you-go pricing model, which of the following is typically FREE?", [
  ["Data transferred into AWS from the internet", "Inbound data transfer is free. You pay for compute time, data stored, and data transferred OUT."],
  ["Data transferred out of AWS to the internet", "Outbound data transfer is one of the three things that cost money."],
  ["Compute time used by EC2 instances", "Compute time is billed, per second or per hour depending on the OS and pricing model."],
  ["Data stored in Amazon S3", "Storage is billed per GB-month."]
]);
Q("concepts", 0, "An online store's fleet automatically adds servers during a flash sale and removes them when traffic drops, so the store pays only for the capacity it actually needs. Which concept does this describe?", [
  ["Elasticity", "Elasticity is automatic scaling out and in to match demand, so you pay only for what you use."],
  ["Agility", "Agility is about how fast you can get new resources (minutes instead of weeks), not automatic matching to load."],
  ["Vertical scaling", "Vertical scaling means changing to a bigger or smaller instance. The scenario adds and removes servers."],
  ["Fault tolerance", "Fault tolerance is about continuing to work when components fail, not about following demand."]
]);
Q("concepts", 0, "Developers at a company can now create a complete test environment in minutes instead of waiting weeks for hardware to be purchased and installed. Which benefit of the AWS Cloud does this describe?", [
  ["Agility", "Agility means new IT resources are only a click away, cutting provisioning time from weeks to minutes and making experiments cheap."],
  ["Elasticity", "Elasticity is automatic scaling to demand. The scenario is about how quickly environments can be created."],
  ["High availability", "High availability is about staying up during failures."],
  ["Durability", "Durability is about not losing stored data."]
]);
Q("concepts", 0, "A database administrator changes a database server from a t2.micro instance to an r5.large instance to handle more load. What type of scaling is this?", [
  ["Vertical scaling (scale up)", "Increasing the size of a single instance is vertical scaling. It is common for non-distributed systems such as databases and is limited by hardware."],
  ["Horizontal scaling (scale out)", "Horizontal scaling adds more instances rather than making one instance bigger."],
  ["Elasticity through Auto Scaling", "Auto Scaling groups add and remove instances automatically (horizontal). A manual instance-type change is vertical scaling."],
  ["Loose coupling", "Loose coupling is a design principle about splitting components, not a scaling technique."]
]);
Q("concepts", 0, "Which approach is the MOST common way to scale a modern, stateless web application on AWS?", [
  ["Add more EC2 instances behind a load balancer (horizontal scaling)", "Modern web apps are distributed, so they scale out by adding instances, typically with an Auto Scaling group and a load balancer."],
  ["Move the application to the largest available instance type", "Vertical scaling is capped by hardware and gives no redundancy."],
  ["Move the application to a Dedicated Host", "Dedicated Hosts address licensing and compliance needs, not scalability."],
  ["Attach additional EBS volumes to the existing instance", "More disk does not add compute capacity for more users."]
]);
Q("concepts", 0, "What is the MINIMUM that AWS recommends to make an application highly available so it can survive the loss of a data center?", [
  ["Run it in at least two Availability Zones", "High availability means running in at least 2 AZs, usually with a multi-AZ Auto Scaling group and load balancer."],
  ["Run two EC2 instances in the same Availability Zone", "If that AZ fails, both instances fail together."],
  ["Run it in at least two AWS Regions", "Multi-Region helps with Region-level disasters, but it is more than the minimum needed to survive a data center loss."],
  ["Run it on a single larger instance with more vCPUs", "A single instance is a single point of failure, however large it is."]
]);
Q("concepts", 0, "Which of the following costs does a company STOP paying directly after it moves all of its workloads from its own data center to AWS?", [
  ["Power, cooling and rent for the data center", "The cloud externalizes rent, power, cooling and hardware maintenance. AWS operates the facilities."],
  ["Data transferred out to the internet", "Outbound data transfer is still billed on AWS."],
  ["Staff time spent building and maintaining the company's own applications", "You still own your applications in the cloud. What goes away is running the data center."],
  ["Compute usage", "You still pay for compute on AWS, per second or per hour."]
]);
Q("concepts", 1, "Which statement correctly describes how on-premises and AWS costs typically differ?", [
  ["On premises, costs are mostly fixed; on AWS, they are mostly variable", "On-premises infrastructure is bought up front and depreciated whether or not it is used. AWS turns most of this into variable, pay-as-you-go spending. The exam guide calls this fixed versus variable costs."],
  ["On AWS, customers pay a fixed monthly fee regardless of usage", "Most AWS services are pay-as-you-go. There is no flat fee for unlimited use."],
  ["On premises, costs rise automatically when usage drops", "On-premises costs are largely fixed. They do not follow usage."],
  ["On AWS, all costs must be paid three years in advance", "Upfront commitments such as Reserved Instances are optional discounts, not a requirement."]
]);
Q("concepts", 0, "A company is in the middle of a long, multi-year migration and must keep some systems on premises for compliance reasons. Which cloud problem does a hybrid model mainly help solve here?", [
  ["Keeping sensitive systems on premises while using the cloud for the rest", "Hybrid combines control over sensitive assets with the flexibility and cost-effectiveness of the public cloud."],
  ["Making every workload compliant automatically", "Compliance obligations stay with the customer whatever the deployment model."],
  ["Removing capacity planning for the on-premises systems", "On-premises capacity stays fixed and still has to be planned. Only the cloud side is elastic."],
  ["Eliminating data transfer charges between on premises and AWS", "Data transferred out of AWS is still billed in a hybrid setup."]
]);

// Global infrastructure
Q("infra", 0, "A European bank must make sure its customer data never leaves the country where it operates. Which factor should drive its choice of AWS Region FIRST?", [
  ["Compliance and data governance requirements", "Legal and governance requirements come first. AWS data never leaves a Region without your explicit permission, so you pick a Region inside the required country."],
  ["Proximity to customers for lower latency", "Latency matters, but a legal data residency requirement overrides it."],
  ["Pricing in the Region", "Prices vary by Region, but you cannot trade legal compliance for a lower price."],
  ["Number of edge locations nearby", "Edge locations cache content, but they don't decide where your primary data is stored."]
]);
Q("infra", 0, "Which of the following is NOT one of the main factors to consider when choosing an AWS Region?", [
  ["The number of IAM users in the account", "IAM is a global service, so the number of users has nothing to do with Region choice. The four factors are compliance, proximity (latency), service availability, and pricing."],
  ["Proximity to customers", "Being close to users lowers latency. This is one of the four factors."],
  ["Availability of the required services and features", "Not every service or feature exists in every Region. This is one of the four factors."],
  ["Pricing", "Prices differ between Regions. This is one of the four factors."]
]);
Q("infra", 0, "What is an AWS Availability Zone (AZ)?", [
  ["One or more discrete data centers with redundant power and networking, inside a Region", "Each AZ is one or more physically separate data centers. AZs in a Region are linked by high-bandwidth, low-latency networking."],
  ["A geographic area that contains several AWS Regions and their networks", "It's the other way around: a Region contains multiple AZs."],
  ["A location used only to cache content for Amazon CloudFront users", "That describes an edge location (point of presence)."],
  ["A single rack of servers inside one AWS data center building", "An AZ is far larger than a rack. It is at least one full data center."]
]);
Q("infra", 0, "Why are Availability Zones within a Region physically separated from each other?", [
  ["So that a disaster in one AZ does not affect the others", "AZs are separated from each other to isolate disasters such as fire, flooding or power loss. They are still close enough for low-latency networking. That is why multi-AZ designs are highly available."],
  ["To reduce the price of data transfer between them to zero", "Physical separation is about failure isolation, not pricing."],
  ["To meet IAM requirements for global services", "IAM has nothing to do with AZ placement."],
  ["So that each AZ can serve a different country", "All AZs of a Region are in the same geographic area."]
]);
Q("infra", 0, "Which AWS infrastructure component caches content close to end users to deliver it with lower latency?", [
  ["Edge locations", "Edge locations are also called points of presence. AWS has 400+ of them in 90+ cities. CloudFront uses them to serve content close to users."],
  ["Availability Zones", "AZs host your resources inside a Region. They are not a global caching layer."],
  ["Regions", "A Region is a cluster of AZs where you deploy workloads. There are far fewer Regions than edge locations."],
  ["Amazon VPC", "A VPC is a private network for your resources, not a content cache."]
]);
Q("infra", 0, "Which of the following AWS services is GLOBAL rather than Region-scoped?", [
  ["AWS IAM", "IAM is global, along with Route 53, CloudFront and WAF. Users and policies are not tied to a Region."],
  ["Amazon EC2", "EC2 is Region-scoped. Instances live in a specific Region and AZ."],
  ["AWS Elastic Beanstalk", "Elastic Beanstalk is Region-scoped."],
  ["AWS Lambda", "Lambda functions are created in a specific Region."]
]);
Q("infra", 1, "A company wants its application to keep running even if an ENTIRE AWS Region becomes unavailable. What should it do?", [
  ["Deploy the application in more than one AWS Region", "Multi-AZ protects against a data center failure. Only a multi-Region design protects against losing a whole Region. Using several Regions also helps with disaster recovery and serving global users with low latency."],
  ["Deploy the application across three Availability Zones in one Region", "Multi-AZ gives high availability within a Region, but every AZ is in the affected Region."],
  ["Use larger EC2 instances", "Instance size does not protect against a Region outage."],
  ["Use Dedicated Hosts", "Dedicated Hosts address licensing and compliance, not Region failure."]
]);
Q("infra", 0, "A company notices that a feature it needs is available in us-east-1 but not in the Region closest to its users. What does this illustrate?", [
  ["Service availability varies by Region and affects Region choice", "Not every service or feature launches in every Region at once. Check the Regional services list before choosing."],
  ["Features are released to all Regions on the same day", "Launches often reach some Regions first. Availability differs between Regions."],
  ["Features are tied to Availability Zones, not Regions", "Service availability is published per Region."],
  ["The feature must be enabled in IAM first", "IAM controls permissions. It cannot make a service available in a Region."]
]);

// Well-Architected
Q("wa", 0, "Which pillar of the AWS Well-Architected Framework focuses on a workload's ability to recover from disruptions, acquire resources to meet demand, and avoid misconfigurations?", [
  ["Reliability", "Reliability covers testing recovery, recovering automatically, scaling horizontally, stopping capacity guessing, and managing change through automation."],
  ["Performance Efficiency", "Performance Efficiency is about using resources efficiently as demand and technology change."],
  ["Operational Excellence", "Operational Excellence is about running and monitoring systems and continuously improving processes."],
  ["Security", "Security is about protecting information, systems and assets."]
]);
Q("wa", 0, "A team wants to perform operations as code, make frequent, small, reversible changes, and learn from every operational failure. Which Well-Architected pillar do these design principles belong to?", [
  ["Operational Excellence", "These are Operational Excellence principles: operations as code, small reversible changes, refining procedures, anticipating failure and learning from it."],
  ["Reliability", "Reliability is about recovering from failure and meeting demand. The listed principles are about how you run operations."],
  ["Cost Optimization", "Cost Optimization is about delivering value at the lowest price."],
  ["Sustainability", "Sustainability is about minimizing environmental impact."]
]);
Q("wa", 0, "Which Well-Architected pillar includes the design principles 'democratize advanced technologies', 'go global in minutes', 'use serverless architectures' and 'experiment more often'?", [
  ["Performance Efficiency", "These are the Performance Efficiency design principles, along with mechanical sympathy."],
  ["Reliability", "Reliability principles include automatic recovery and testing recovery procedures."],
  ["Operational Excellence", "Operational Excellence principles include operations as code and small, reversible changes."],
  ["Security", "Security principles include a strong identity foundation and traceability."]
]);
Q("wa", 0, "A company uses cost allocation tags to track which team is responsible for each part of its AWS bill and measures the return on its investments. Which Well-Architected pillar is it applying?", [
  ["Cost Optimization", "'Analyze and attribute expenditure' (with tags) and measuring efficiency are Cost Optimization design principles."],
  ["Operational Excellence", "Operational Excellence focuses on running and improving operations, not on attributing spending."],
  ["Performance Efficiency", "Performance Efficiency focuses on choosing and using resources efficiently for performance."],
  ["Security", "Tags can support security, but attributing costs to teams is a Cost Optimization practice."]
]);
Q("wa", 0, "A company right-sizes its instances, reduces idle resources, and uses S3 Lifecycle rules to move cold data to archive storage, specifically to reduce the environmental impact of its workloads. Which Well-Architected pillar does this BEST represent?", [
  ["Sustainability", "Sustainability focuses on minimizing environmental impact: maximize utilization, use efficient hardware and managed services, and move cold data automatically."],
  ["Reliability", "Reliability is about recovering from failures and meeting demand."],
  ["Performance Efficiency", "Performance Efficiency is about meeting performance needs efficiently. The stated goal here is environmental impact."],
  ["Operational Excellence", "Operational Excellence is about running and improving operations."]
]);
Q("wa", 0, "Implementing a strong identity foundation, enabling traceability, and applying security at every layer are design principles of which Well-Architected pillar?", [
  ["Security", "These are core Security pillar principles, along with protecting data in transit and at rest and preparing for security events."],
  ["Reliability", "Reliability deals with recovery and scaling, not identity and traceability."],
  ["Operational Excellence", "Operational Excellence includes observability, but identity and traceability are Security principles."],
  ["Cost Optimization", "Cost Optimization is about spending, not identity."]
]);
Q("wa", 0, "Which FREE AWS tool lets a company answer questions about a workload and review it against the six Well-Architected pillars, then receive improvement advice?", [
  ["AWS Well-Architected Tool", "The Well-Architected Tool is free. You define a workload, answer questions, and get a report and dashboard measured against the six pillars."],
  ["AWS Config rules", "Config records resource configurations and compliance. It does not run Well-Architected reviews."],
  ["AWS Artifact reports", "Artifact gives access to AWS compliance reports and agreements."],
  ["Amazon Inspector", "Inspector scans for software vulnerabilities."]
]);
Q("wa", 0, "A company breaks its monolithic application into smaller components so that a failure or change in one component does not cascade to the others. Which cloud design principle is this?", [
  ["Loose coupling", "Loose coupling separates components so that failures and changes stay contained."],
  ["Vertical scaling", "Vertical scaling makes one server bigger. It does not split components."],
  ["Mechanical sympathy", "Mechanical sympathy means understanding how services work to use them well."],
  ["Stop guessing capacity", "This principle is about scaling to demand, not about architecture boundaries."]
]);
Q("wa", 0, "Which design principle encourages customers to use managed AWS services instead of building and running everything themselves on EC2?", [
  ["Services, not servers", "'Services, not servers' means preferring managed services over only using raw EC2."],
  ["Disposable resources", "Disposable resources means treating servers as replaceable, not as long-lived pets."],
  ["Test at production scale", "This is about testing, not about service choice."],
  ["Drive architectures with data", "This is about using data to make design decisions."]
]);
Q("wa", 0, "Which AWS tool helps a company track, measure, review and forecast the carbon emissions produced by its AWS usage?", [
  ["AWS Customer Carbon Footprint Tool", "It shows emissions by geography, by service and over time, and forecasts the path to 100% renewable energy."],
  ["AWS Cost Explorer reports", "Cost Explorer shows spending, not carbon emissions."],
  ["AWS Well-Architected Tool", "It reviews workloads against pillars but does not measure emissions."],
  ["AWS Config rules", "Config tracks resource configuration changes."]
]);
Q("wa", 0, "Before a big product launch, a company runs a planned event that simulates flash-sale traffic in order to test how its systems and teams respond. Which Well-Architected general design principle is this?", [
  ["Improve through game days", "Game days simulate real events (such as a flash-sale day) to test systems and procedures."],
  ["Allow for evolutionary architectures", "This is about designing for changing requirements."],
  ["Automate to make architectural experimentation easier", "This is about automation. The scenario describes a simulated event."],
  ["Loose coupling", "This is about decoupling components."]
]);

// CAF, migration, right sizing
Q("caf", 0, "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on culture, organizational structure, leadership and workforce transformation?", [
  ["People", "The People perspective bridges technology and business and deals with culture, org structure, leadership and workforce."],
  ["Business", "The Business perspective makes sure cloud investments drive business outcomes."],
  ["Governance", "The Governance perspective orchestrates initiatives and minimizes transformation risk."],
  ["Operations", "The Operations perspective makes sure cloud services are delivered at the level the business needs."]
]);
Q("caf", 0, "Which AWS CAF perspective makes sure that cloud services are delivered at a level that meets the needs of the business?", [
  ["Operations", "Operations is a technical perspective focused on delivering and running services at the agreed level."],
  ["Platform", "Platform is about building an enterprise-grade, scalable hybrid cloud platform."],
  ["Security", "Security is about confidentiality, integrity and availability of data and workloads."],
  ["Governance", "Governance orchestrates initiatives and manages risk. It does not run services."]
]);
Q("caf", 0, "Which AWS CAF perspective helps orchestrate cloud initiatives while maximizing organizational benefits and minimizing transformation-related risks?", [
  ["Governance", "Governance orchestrates initiatives, maximizes benefits and minimizes risk."],
  ["People", "People covers culture, leadership and workforce."],
  ["Business", "Business makes sure cloud investments drive business outcomes."],
  ["Platform", "Platform is a technical perspective about the cloud platform itself."]
]);
Q("caf", 0, "A company wants to build an enterprise-grade, scalable, hybrid cloud platform and modernize existing workloads into cloud-native ones. Which AWS CAF perspective does this align with?", [
  ["Platform", "The Platform perspective builds the scalable hybrid platform and modernizes workloads."],
  ["Operations", "Operations is about running services at the required level."],
  ["Business", "Business focuses on business outcomes, not the platform build."],
  ["People", "People focuses on culture and workforce."]
]);
Q("caf", 0, "What is the correct order of the AWS CAF cloud transformation phases?", [
  ["Envision, Align, Launch, Scale", "Envision the value, Align to find capability gaps, Launch pilots in production, then Scale them."],
  ["Align, Envision, Scale, Launch", "You must envision the opportunity before aligning, and launch pilots before scaling."],
  ["Launch, Envision, Align, Scale", "Pilots are launched only after envisioning and aligning."],
  ["Plan, Build, Run, Optimize", "These are generic IT phases, not the AWS CAF phases."]
]);
Q("caf", 0, "During which AWS CAF transformation phase does an organization identify capability gaps across the six perspectives and create an action plan?", [
  ["Align", "Align identifies capability gaps across the six perspectives, which results in an action plan."],
  ["Envision", "Envision shows how the cloud will accelerate business outcomes and identifies opportunities."],
  ["Launch", "Launch delivers pilot initiatives in production."],
  ["Scale", "Scale expands pilots to the desired scale and benefits."]
]);
Q("caf", 1, "According to AWS, which of the following is a business outcome that customers can achieve through cloud transformation with the AWS CAF?", [
  ["Improved environmental, social and governance (ESG) performance", "AWS lists reduced business risk, improved ESG performance, increased revenue and increased operational efficiency as CAF benefits."],
  ["Guaranteed 100% uptime for every application", "No cloud provider guarantees 100% uptime for your applications."],
  ["Removal of all of the customer's security responsibilities", "Under the shared responsibility model the customer always keeps security IN the cloud."],
  ["Fixed, predictable hardware refresh costs", "Moving to the cloud removes hardware refresh cycles. It does not make them predictable."]
]);
Q("caf", 0, "A company wants to move an application to Amazon EC2 exactly as it is, without making any changes, to exit its data center quickly. Which migration strategy is this?", [
  ["Rehost (lift and shift)", "Rehost moves applications as they are, without cloud optimization. It can still save around 30%. AWS Application Migration Service helps with this."],
  ["Replatform (lift and reshape)", "Replatform makes a few cloud optimizations (such as moving to RDS). The scenario makes no changes."],
  ["Refactor / re-architect", "Refactor re-architects the application to use cloud-native features."],
  ["Repurchase (drop and shop)", "Repurchase replaces the application with a different product, often SaaS."]
]);
Q("caf", 0, "A company migrates its self-managed MySQL database to Amazon RDS but does not change the core architecture of its application. Which migration strategy is this?", [
  ["Replatform (lift and reshape)", "Replatform keeps the core architecture but adopts some cloud optimizations, such as a managed database."],
  ["Rehost (lift and shift)", "Rehost would move the database server unchanged, for example to EC2."],
  ["Refactor / re-architect", "Refactor would redesign the application, for example into microservices or serverless."],
  ["Retain (revisit later)", "Retain means leaving the workload where it is for now."]
]);
Q("caf", 0, "A company replaces its on-premises CRM system with Salesforce, a SaaS product. Which migration strategy is this?", [
  ["Repurchase (drop and shop)", "Repurchase switches to a different product, often SaaS. It can cost more in the short term but is fast to deploy."],
  ["Rehost (lift and shift)", "Rehost moves the same application to the cloud unchanged."],
  ["Relocate (hypervisor-level move)", "Relocate moves workloads to a cloud version of the same platform (for example VMware Cloud on AWS)."],
  ["Refactor / re-architect", "Refactor rewrites the existing application to be cloud-native."]
]);
Q("caf", 0, "A company redesigns a monolithic application into microservices and serverless components to gain scalability and agility it could not get before. Which migration strategy is this?", [
  ["Refactor / re-architect", "Refactoring is driven by needs for features, scale, performance or agility that the current architecture can't provide."],
  ["Replatform (lift and reshape)", "Replatform only makes a few optimizations and keeps the core architecture."],
  ["Rehost (lift and shift)", "Rehost changes nothing about the application."],
  ["Retire (decommission)", "Retire turns the application off."]
]);
Q("caf", 0, "During migration planning, a company discovers several applications that nobody uses anymore. It decides to turn them off. Which migration strategy is this?", [
  ["Retire (decommission)", "Retire removes what you don't need. That reduces the attack surface and often saves 10 to 20%."],
  ["Retain (revisit later)", "Retain keeps an application running as it is for now. It does not shut anything down."],
  ["Relocate (hypervisor-level move)", "Relocate moves workloads to the cloud version of the same platform."],
  ["Repurchase (drop and shop)", "Repurchase replaces an application with a different product."]
]);
Q("caf", 0, "A company decides to keep its mainframe application on premises for now because of unresolved dependencies and compliance concerns. Which migration strategy is this?", [
  ["Retain (revisit later)", "Retain is doing nothing for now, which is still a decision. It is common for mainframes, unresolved dependencies, or apps with no business value in migrating."],
  ["Retire (decommission)", "Retire means decommissioning the application."],
  ["Rehost (lift and shift)", "Rehost moves the application to the cloud."],
  ["Refactor / re-architect", "Refactor rebuilds the application for the cloud."]
]);
Q("caf", 0, "A company moves its VMware vSphere-based workloads to VMware Cloud on AWS without buying new hardware or rewriting applications. Which migration strategy is this?", [
  ["Relocate (hypervisor-level move)", "Relocate moves applications to the cloud version of their platform, for example VMware SDDC to VMware Cloud on AWS."],
  ["Replatform (lift and reshape)", "Replatform changes part of the platform, such as moving to a managed database."],
  ["Repurchase (drop and shop)", "Repurchase switches to a different product."],
  ["Retain (revisit later)", "Retain leaves the workload where it is."]
]);
Q("caf", 0, "Which AWS service is designed to simplify rehost (lift-and-shift) migrations of servers from physical, virtual or other cloud environments to AWS?", [
  ["AWS Application Migration Service", "Application Migration Service is the recommended rehost tool. It replicates servers into AWS with minimal changes."],
  ["AWS Elastic Beanstalk", "Elastic Beanstalk is a PaaS for deploying application code. It does not replicate existing servers."],
  ["AWS Storage Gateway", "Storage Gateway connects on-premises storage to AWS. It does not migrate servers."],
  ["AWS Database Migration Service", "DMS migrates databases, not whole servers."]
]);
Q("caf", 0, "When should a company perform right sizing of its EC2 instances?", [
  ["Before migrating to the cloud, and continuously afterwards as requirements change", "Right sizing is done before a migration and continuously after it, because workloads change over time."],
  ["Only once, just before the migration", "Requirements change after migration, so a one-time exercise leaves money on the table."],
  ["Only after the first full year of running in the cloud", "Waiting a year wastes money. Right-size from the start."],
  ["Never, because the cloud is elastic and right sizing is unnecessary", "Elasticity makes right sizing easy, not unnecessary. Oversized instances still cost money."]
]);
Q("caf", 0, "CloudWatch metrics show that a company's EC2 instances average only 5% CPU utilization. What is the MOST cost-effective action?", [
  ["Right-size the instances to a smaller instance type", "Matching the instance type and size to the actual workload at the lowest cost is right sizing. Start small and scale up if needed."],
  ["Purchase Reserved Instances for the current instance size", "Committing to an oversized instance locks in waste. Right-size first, then commit."],
  ["Add more instances to spread the load", "Adding instances increases cost when utilization is already very low."],
  ["Move the instances to Dedicated Hosts", "Dedicated Hosts are the most expensive option and don't fix low utilization."]
]);
Q("concepts", 1, "A company already owns Microsoft SQL Server licenses for its data center and wants to reuse them on AWS to lower costs. What is this licensing approach called?", [
  ["Bring your own license (BYOL)", "With BYOL you apply existing, eligible licenses to AWS resources instead of paying for them again. Server-bound licenses often need Dedicated Hosts."],
  ["License-included pricing", "License-included means AWS charges for the software license in the hourly instance price, so the company would pay for a license it already owns."],
  ["Spot Instance pricing", "Spot is a pricing option for spare capacity. It has nothing to do with software licenses."],
  ["An AWS Marketplace subscription", "Marketplace sells third-party software. It doesn't reuse licenses the company already owns."]
]);
