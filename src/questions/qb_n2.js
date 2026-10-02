// New questions, Domain 3 (part 2): integration, monitoring, deployment, AI/ML, other services, plus additions to earlier topics.
Q("integration", 0, "An order website sometimes receives 100 times more orders than the processing system can handle at once. The company wants orders stored safely until the processing system can handle them. Which service should sit between the two?", [
  ["Amazon SQS", "An SQS queue buffers messages until consumers are ready, which decouples the website from the processing system and absorbs spikes."],
  ["Amazon SNS", "SNS pushes messages to subscribers immediately and doesn't store them for later processing."],
  ["AWS CloudTrail", "CloudTrail records API calls; it doesn't pass messages between systems."],
  ["Amazon Route 53", "Route 53 is DNS; it doesn't buffer work."]
]);
Q("integration", 0, "A payment system must process transactions in the exact order they were sent, with no duplicates. Which option should it use?", [
  ["An Amazon SQS FIFO queue", "FIFO (first in, first out) queues keep strict order and process each message exactly once."],
  ["An Amazon SQS standard queue", "Standard queues offer nearly unlimited throughput but only best-effort ordering."],
  ["An Amazon SNS topic with email subscribers", "Email subscribers aren't a way to process transactions in order."],
  ["Amazon Data Firehose to S3", "Firehose loads streaming data into storage; it isn't a strict ordered work queue."]
]);
Q("integration", 0, "When a server goes down, the operations team must receive an email and an SMS text message at the same time. Which service is BEST for sending one message to many recipients like this?", [
  ["Amazon SNS", "SNS is publish/subscribe: one message published to a topic is delivered to every subscriber, including email and SMS."],
  ["Amazon SQS", "In SQS each message is processed by one consumer, and it doesn't send emails or SMS."],
  ["Amazon MQ", "MQ is a managed broker for apps that use standard messaging protocols; it doesn't send SMS."],
  ["AWS Step Functions", "Step Functions coordinates workflows; it isn't a notification service."]
]);
Q("integration", 0, "When an order is placed, three separate systems (billing, shipping and analytics) must each receive and process their own copy of the order event. Which design is BEST?", [
  ["An SNS topic with a separate SQS queue subscribed for each system", "SNS fans the event out to every subscriber, and each system's SQS queue buffers its own copy. This is the classic fan-out pattern."],
  ["One SQS queue that all three systems poll", "Each SQS message is consumed by only one consumer, so each order would reach only one system."],
  ["An EC2 instance that copies orders with a cron job", "This adds a server to manage and delays the orders."],
  ["Amazon MQ with a single queue", "A single queue still gives each message to one consumer."]
]);
Q("integration", 0, "A company wants to collect and analyze website clickstream data in real time, from millions of users at once. Which service is designed for this?", [
  ["Amazon Kinesis", "Kinesis collects, processes and analyzes streaming data in real time at any scale, for example clickstreams, IoT and logs."],
  ["Amazon SQS", "SQS queues messages for asynchronous processing; it isn't built for real-time stream analytics."],
  ["Amazon Redshift", "Redshift analyzes data after it is loaded; it doesn't ingest real-time streams by itself."],
  ["AWS Glue", "Glue runs ETL jobs on stored data."]
]);
Q("integration", 0, "A company wants to run a Lambda function every hour, like a cron job, without managing any servers. Which service should trigger the function?", [
  ["Amazon EventBridge (scheduled rule)", "EventBridge schedules can invoke Lambda on a cron or rate expression, fully serverless."],
  ["An EC2 instance with a cron job", "This works but adds a server to run and pay for."],
  ["AWS CloudTrail", "CloudTrail records API activity; it doesn't schedule anything."],
  ["Amazon SQS", "SQS queues messages; it has no schedule."]
]);
Q("integration", 0, "The operations team wants an automatic email whenever any EC2 instance changes to the stopped state. Which service can match this event and route it to an SNS topic?", [
  ["Amazon EventBridge", "EventBridge rules match events from AWS services, such as EC2 state changes, and send them to targets like SNS or Lambda."],
  ["AWS CloudTrail event history", "CloudTrail records the API call but doesn't route events to targets by itself."],
  ["Amazon S3 Lifecycle rules", "Lifecycle rules move or delete S3 objects."],
  ["AWS Trusted Advisor", "Trusted Advisor checks best practices; it doesn't react to instance state changes."]
]);
Q("integration", 0, "A company is migrating an on-premises application that uses Apache ActiveMQ with the AMQP and MQTT protocols. It wants a managed broker on AWS without rewriting the messaging code. Which service should it use?", [
  ["Amazon MQ", "Amazon MQ is a managed ActiveMQ and RabbitMQ broker supporting open protocols such as AMQP, MQTT and STOMP."],
  ["Amazon SQS", "SQS uses its own AWS API, so the app's messaging code would need to be rewritten."],
  ["Amazon SNS", "SNS also uses an AWS API, not AMQP or MQTT broker semantics."],
  ["Amazon Kinesis", "Kinesis is for real-time data streams, not a message broker."]
]);
Q("integration", 0, "An order process has several steps: check stock, charge the card, wait for a manager's approval on large orders, then ship. Each step is a Lambda function. Which service coordinates the steps with retries and branching?", [
  ["AWS Step Functions", "Step Functions runs visual, serverless workflows with sequencing, branching, retries, timeouts and human approval steps."],
  ["Amazon SNS", "SNS sends notifications but doesn't manage multi-step workflows."],
  ["Amazon EventBridge Scheduler", "A scheduler starts tasks at set times; it doesn't track the state of a multi-step process."],
  ["Amazon Kinesis", "Kinesis streams data; it doesn't orchestrate business steps."]
]);
Q("integration", 1, "An online store needs to send order confirmation and password reset emails to its customers at scale. Which service is built for this?", [
  ["Amazon SES", "Simple Email Service sends transactional and marketing email at scale, with deliverability features."],
  ["Amazon SQS", "SQS queues messages between systems; it doesn't send email."],
  ["Amazon Kinesis Data Streams", "Kinesis ingests streaming data."],
  ["AWS Step Functions", "Step Functions coordinates workflows but doesn't deliver email by itself."]
]);
Q("integration", 0, "A company wants to load streaming data into Amazon S3 and Redshift automatically, with no servers or consumer applications to manage. Which service should it use?", [
  ["Amazon Data Firehose", "Firehose (formerly Kinesis Data Firehose) delivers streaming data to S3, Redshift, OpenSearch and more, fully managed."],
  ["Amazon Kinesis Data Streams alone", "Data Streams stores the stream, but you still need consumer apps to deliver the data."],
  ["Amazon SQS", "SQS queues messages; it doesn't load data into Redshift."],
  ["AWS Glue Data Catalog", "The catalog describes datasets; it doesn't deliver streams."]
]);
Q("integration", 0, "Why does placing an SQS queue between a web tier and a processing tier improve an application?", [
  ["Each tier can scale and fail independently", "Decoupling means a slow or failed consumer doesn't break producers; messages wait safely until processed."],
  ["It removes the need for IAM permissions", "Both tiers still need IAM permissions to use the queue."],
  ["It keeps every message forever", "SQS keeps messages for at most 14 days."],
  ["It guarantees strict ordering in standard queues", "Standard queues are best-effort ordering; only FIFO queues guarantee order."]
]);

// Monitoring
Q("monitor", 0, "A company wants to be alerted when the average CPU utilization of its EC2 instances stays above 80% for 10 minutes. Which service should it use?", [
  ["Amazon CloudWatch", "CloudWatch collects EC2 CPU metrics, and an alarm can notify you through SNS or trigger Auto Scaling when a threshold is crossed."],
  ["AWS CloudTrail", "CloudTrail records API calls, not performance metrics."],
  ["AWS Config rules", "Config tracks configuration changes, not CPU utilization."],
  ["AWS Artifact", "Artifact provides compliance documents."]
]);
Q("monitor", 0, "A developer needs to find which microservice is causing slow responses in a distributed application by following requests from end to end. Which service helps most?", [
  ["AWS X-Ray", "X-Ray traces requests across services and shows a service map with latencies and errors, pointing to bottlenecks."],
  ["AWS CloudTrail", "CloudTrail records who called which AWS API, not how long app requests take."],
  ["AWS Trusted Advisor", "Trusted Advisor checks account best practices, not request latency."],
  ["Amazon Inspector", "Inspector scans for software vulnerabilities."]
]);
Q("monitor", 0, "AWS plans maintenance on the hardware that hosts some of a company's EC2 instances. Where does the company see alerts about events that affect its own resources?", [
  ["AWS Health Dashboard", "The account view of the Health Dashboard (formerly Personal Health Dashboard) shows events that affect your resources, with guidance."],
  ["Amazon CloudWatch Logs", "CloudWatch Logs holds your application and system logs."],
  ["AWS Config timeline", "Config shows configuration history."],
  ["AWS Cost Explorer reports", "Cost Explorer shows spending."]
]);
Q("monitor", 0, "A company notices that CloudWatch doesn't show memory utilization for its EC2 instances. What should it do to collect this metric?", [
  ["Install the CloudWatch agent on the instances", "EC2 memory is inside the OS, so AWS can't see it by default. The CloudWatch agent sends memory and disk metrics and logs."],
  ["Enable detailed monitoring", "Detailed monitoring sends the default metrics every minute, but it still doesn't include memory."],
  ["Enable AWS CloudTrail", "CloudTrail records API calls, not memory usage."],
  ["Move to a memory optimized instance type", "Changing the instance type doesn't make memory metrics appear."]
]);
Q("monitor", 0, "In which Region are the billing metrics stored that CloudWatch billing alarms use?", [
  ["US East (N. Virginia), us-east-1", "Estimated charges metrics for the whole account are stored in us-east-1, so billing alarms are created there."],
  ["Every Region, separately", "Billing metrics are global and live only in us-east-1."],
  ["The Region where you spend the most", "The location doesn't depend on spending."],
  ["EU (Ireland), eu-west-1", "Billing metrics are not stored in eu-west-1."]
]);
Q("monitor", 0, "A company wants to collect application log files from its EC2 instances and Lambda functions in one place, search them, and keep them for 90 days. Which service should it use?", [
  ["Amazon CloudWatch Logs", "CloudWatch Logs collects, stores and searches logs from EC2 (with the agent), Lambda and other services, with retention you choose."],
  ["AWS CloudTrail", "CloudTrail records AWS API calls, not application log files."],
  ["AWS Config", "Config records resource configurations."],
  ["Amazon S3 Glacier Deep Archive", "Deep Archive is for long-term archives that take hours to retrieve, not for searching recent logs."]
]);
Q("monitor", 0, "Which action can a CloudWatch alarm take directly when it goes into the ALARM state?", [
  ["Send an SNS notification or trigger Auto Scaling", "Alarm actions include SNS notifications, Auto Scaling actions, and EC2 actions such as stop, terminate, reboot or recover."],
  ["Patch the operating system of the instance", "Patching is done with Systems Manager, not by an alarm action."],
  ["Rotate a database password", "Rotation is a Secrets Manager feature."],
  ["Create a new IAM user for the on-call team", "Alarms don't create IAM identities."]
]);
Q("monitor", 0, "A team wants to check whether an AWS service is having an outage in a specific Region right now. Where should it look?", [
  ["The AWS Health Dashboard", "The Health Dashboard shows the current status of AWS services in every Region, plus events that affect your account."],
  ["AWS CloudTrail", "CloudTrail shows API calls in your account, not AWS service health."],
  ["AWS Trusted Advisor", "Trusted Advisor checks your account against best practices."],
  ["AWS Config history", "Config records your resource configurations."]
]);
Q("monitor", 0, "A security team wants to be told automatically when there is an unusual burst of API activity in the account, such as many more instances launched than normal. Which feature does this?", [
  ["AWS CloudTrail Insights", "CloudTrail Insights analyzes management events and flags unusual API call volumes or error rates."],
  ["AWS X-Ray", "X-Ray traces application requests, not API activity patterns."],
  ["Amazon QuickSight", "QuickSight builds dashboards; it doesn't detect unusual activity by itself."],
  ["AWS Health Dashboard", "The Health Dashboard reports AWS service events, not activity in your account."]
]);
Q("monitor", 0, "An operations team wants a single screen showing graphs of metrics from EC2, RDS and Lambda across two Regions. What should it build?", [
  ["An Amazon CloudWatch dashboard", "CloudWatch dashboards combine metrics and alarms from many services and Regions in one view."],
  ["An AWS Cost Explorer report", "Cost Explorer shows spending, not performance metrics."],
  ["An AWS Artifact report", "Artifact provides compliance documents."],
  ["An AWS Trusted Advisor check", "Trusted Advisor gives best-practice recommendations, not metric graphs."]
]);

// Deploying and managing
Q("deploy", 0, "A company wants to create the same network, EC2 instances and database in several Regions, exactly the same way each time, from a file kept in version control. Which service should it use?", [
  ["AWS CloudFormation", "CloudFormation is infrastructure as code: a JSON or YAML template creates a whole stack in the right order, repeatably, in any Region or account."],
  ["AWS Elastic Beanstalk", "Beanstalk deploys web applications, but it isn't a general tool for describing any infrastructure."],
  ["The AWS Management Console", "Clicking in the console is manual and hard to repeat exactly."],
  ["AWS Systems Manager Session Manager", "Session Manager gives shell access to instances; it doesn't create infrastructure."]
]);
Q("deploy", 0, "Developers want to define their AWS infrastructure in Python and TypeScript instead of JSON or YAML templates. Which service lets them do this?", [
  ["AWS CDK", "The CDK lets you define infrastructure in programming languages and turns it into CloudFormation templates."],
  ["AWS CodeCommit", "CodeCommit stores code in Git repositories; it doesn't define infrastructure."],
  ["AWS CodeArtifact", "CodeArtifact stores software packages and dependencies."],
  ["AWS Config rules", "Config records configurations; it doesn't create resources."]
]);
Q("deploy", 0, "A developer wants to upload a Java web application and have AWS handle capacity provisioning, load balancing, auto scaling and health monitoring. The developer only wants to manage the code. Which service fits?", [
  ["AWS Elastic Beanstalk", "Beanstalk (PaaS) creates and manages the EC2 instances, load balancer, Auto Scaling and monitoring for your code."],
  ["Amazon EC2", "With EC2 you set up and manage the servers, scaling and load balancing yourself."],
  ["AWS CloudFormation", "CloudFormation can build the infrastructure, but you must describe every resource yourself."],
  ["Amazon Lightsail", "Lightsail gives simple servers, without Beanstalk's managed deployment and scaling for your app."]
]);
Q("deploy", 0, "How is AWS Elastic Beanstalk priced?", [
  ["No extra charge beyond the resources it creates", "Beanstalk itself is free. You pay for the EC2 instances, load balancers and other resources it launches."],
  ["A fee for each deployment you run", "There is no per-deployment fee."],
  ["A fixed monthly fee per application", "There is no fixed application fee."],
  ["A fee based on lines of code", "Code size doesn't affect pricing."]
]);
Q("deploy", 0, "A company must apply operating system patches to 500 servers, both EC2 instances and servers in its own data center, on a schedule. Which service should it use?", [
  ["AWS Systems Manager", "Systems Manager (Patch Manager) automates patching for EC2 and on-premises servers that run the SSM Agent."],
  ["AWS Elastic Beanstalk", "Beanstalk manages its own app environments, not a mixed fleet including on-premises servers."],
  ["Amazon Inspector", "Inspector finds missing patches and vulnerabilities, but it doesn't install patches."],
  ["AWS CloudFormation", "CloudFormation creates resources; it doesn't run patching schedules."]
]);
Q("deploy", 0, "Security rules forbid opening port 22 and managing SSH keys. Administrators still need shell access to EC2 instances. What should they use?", [
  ["Session Manager", "Session Manager gives browser or CLI shell access through the SSM Agent, with no open inbound ports and no keys, and access controlled by IAM."],
  ["EC2 Instance Connect", "Instance Connect avoids managing keys, but it still uses SSH, so port 22 must be open."],
  ["A bastion host with SSH", "A bastion host still needs SSH and keys."],
  ["An Elastic IP address", "An Elastic IP gives a fixed address; it doesn't provide shell access."]
]);
Q("deploy", 0, "A team wants every code change to be automatically built, tested and deployed through a release pipeline. Which service orchestrates these stages?", [
  ["AWS CodePipeline", "CodePipeline automates the release process: source, build, test and deploy, using CodeBuild, CodeDeploy and other tools."],
  ["AWS CodeArtifact", "CodeArtifact stores packages and dependencies."],
  ["AWS Cloud Map", "Cloud Map is service discovery, not a release pipeline."],
  ["Amazon CloudWatch", "CloudWatch monitors; it doesn't orchestrate deployments."]
]);
Q("deploy", 0, "Which AWS service compiles source code, runs tests and produces packages ready to deploy, with no build servers to manage and billing per minute of build time?", [
  ["AWS CodeBuild", "CodeBuild is a fully managed, serverless build service. You pay only for build time."],
  ["AWS CodeDeploy", "CodeDeploy deploys packages that are already built."],
  ["AWS CodeCommit", "CodeCommit stores the source code."],
  ["AWS CodePipeline", "CodePipeline orchestrates stages; it relies on a build service to compile."]
]);
Q("deploy", 0, "A company wants to automate deployments of new application versions to both EC2 instances and servers in its own data center. Which service should it use?", [
  ["AWS CodeDeploy", "CodeDeploy deploys applications to EC2, Lambda, ECS and on-premises servers running the CodeDeploy agent."],
  ["AWS Elastic Beanstalk", "Beanstalk only deploys to the AWS environments it manages."],
  ["Amazon Lightsail", "Lightsail is simple hosting, not a deployment service for on-premises servers."],
  ["AWS CloudShell", "CloudShell is a browser terminal."]
]);
Q("deploy", 1, "An administrator wants to run AWS CLI commands directly from the browser, without installing or configuring anything on a laptop. What should the administrator use?", [
  ["AWS CloudShell", "CloudShell is a browser-based shell in the console with the AWS CLI preinstalled and your console credentials already available."],
  ["AWS CloudFormation", "CloudFormation deploys templates; it isn't a command shell."],
  ["An AWS SDK", "SDKs are libraries you install and use in your own code."],
  ["AWS Artifact", "Artifact provides compliance documents."]
]);
Q("deploy", 0, "A company runs the same maintenance script every night against its AWS resources. Which way of interacting with AWS is BEST suited to this repeatable, automated task?", [
  ["The AWS CLI or an AWS SDK", "Programmatic access through the CLI or SDKs lets scripts run the same steps automatically, on a schedule."],
  ["The AWS Management Console", "The console is best for one-time, manual tasks, not nightly automation."],
  ["AWS Artifact", "Artifact is a compliance document portal."],
  ["The AWS Health Dashboard", "The Health Dashboard shows service events; it doesn't run scripts."]
]);
Q("deploy", 0, "Developers want a managed, private repository for software packages such as npm, pip and Maven dependencies used in their builds. Which service should they use?", [
  ["AWS CodeArtifact", "CodeArtifact is a managed artifact repository for package dependencies, used by developers and CodeBuild."],
  ["Amazon ECR", "ECR stores container images, not language packages."],
  ["AWS CodeCommit", "CodeCommit stores source code in Git."],
  ["Amazon S3 Glacier", "Glacier is archival storage with slow retrieval."]
]);

// AI and machine learning
Q("ml", 0, "A social media company must automatically detect inappropriate content in images and videos that users upload. Which service should it use?", [
  ["Amazon Rekognition", "Rekognition analyzes images and videos for objects, faces, text and unsafe content (content moderation)."],
  ["Amazon Textract", "Textract extracts text and data from documents, not unsafe content from photos."],
  ["Amazon Comprehend", "Comprehend analyzes written text."],
  ["Amazon Polly", "Polly turns text into speech."]
]);
Q("ml", 0, "A call center wants to turn thousands of recorded customer calls into written text. Which service should it use?", [
  ["Amazon Transcribe", "Transcribe converts speech to text, with features like PII redaction and language identification."],
  ["Amazon Polly", "Polly does the opposite: text to speech."],
  ["Amazon Translate", "Translate converts text between languages; it doesn't process audio."],
  ["Amazon Rekognition", "Rekognition analyzes images and video."]
]);
Q("ml", 0, "A news app wants to read articles aloud to users in a natural-sounding voice. Which service should it use?", [
  ["Amazon Polly", "Polly turns text into lifelike speech in many voices and languages."],
  ["Amazon Transcribe", "Transcribe turns speech into text, the reverse of what's needed."],
  ["Amazon Lex", "Lex builds conversational chatbots."],
  ["Amazon Comprehend", "Comprehend analyzes the meaning of text."]
]);
Q("ml", 0, "A company wants to offer its product website in 12 languages without hiring translators for every update. Which service should it use?", [
  ["Amazon Translate", "Translate provides fast, natural machine translation for websites, apps and documents."],
  ["Amazon Transcribe", "Transcribe converts speech to text."],
  ["Amazon Textract", "Textract extracts text from scanned documents."],
  ["Amazon Kendra", "Kendra searches documents."]
]);
Q("ml", 0, "A retailer wants to know whether thousands of written product reviews are positive or negative and which brands they mention. Which service should it use?", [
  ["Amazon Comprehend", "Comprehend is natural language processing: sentiment, key phrases, entities such as brands and places, and topics."],
  ["Amazon Rekognition", "Rekognition analyzes images and video, not text meaning."],
  ["Amazon Polly", "Polly converts text to speech."],
  ["Amazon Personalize", "Personalize makes recommendations; it doesn't analyze sentiment."]
]);
Q("ml", 0, "A bank wants to add a chatbot to its website and phone line that understands what customers want and answers common questions. Which service is designed for building this?", [
  ["Amazon Lex", "Lex builds conversational interfaces with speech recognition and natural language understanding, the same technology as Alexa."],
  ["Amazon Polly", "Polly can give a bot a voice, but it doesn't understand what users mean."],
  ["Amazon Textract", "Textract reads documents."],
  ["Amazon Rekognition", "Rekognition analyzes images."]
]);
Q("ml", 0, "An insurance company receives thousands of scanned claim forms each day and wants to extract the names, amounts and table data automatically. Which service should it use?", [
  ["Amazon Textract", "Textract extracts printed text, handwriting, forms and tables from scanned documents."],
  ["Amazon Comprehend", "Comprehend analyzes text that is already digital; it doesn't read scanned forms."],
  ["Amazon Transcribe", "Transcribe converts audio to text."],
  ["Amazon Translate", "Translate converts between languages."]
]);
Q("ml", 0, "Employees want to ask questions in plain language, such as “What is our parental leave policy?”, and get answers from documents stored in SharePoint and S3. Which service is designed for this?", [
  ["Amazon Kendra", "Kendra is ML-powered enterprise search that finds answers inside documents from many sources using natural language questions."],
  ["Amazon Athena", "Athena runs SQL on structured data in S3, not natural-language document search."],
  ["Amazon Comprehend", "Comprehend analyzes text but isn't a search engine over your documents."],
  ["Amazon Lex", "Lex builds chatbots but doesn't index and search your documents by itself."]
]);
Q("ml", 0, "An online store wants to show each shopper real-time product recommendations based on their browsing, using the same technology as Amazon.com. Which service should it use?", [
  ["Amazon Personalize", "Personalize creates real-time personalized recommendations without ML expertise."],
  ["Amazon Comprehend", "Comprehend analyzes text; it doesn't recommend products."],
  ["Amazon Forecast", "Forecast predicts future values like demand. It isn't a recommendation engine."],
  ["Amazon Kendra", "Kendra searches documents."]
]);
Q("ml", 0, "Data scientists want a fully managed platform to build, train, tune and deploy their own custom machine learning models. Which service should they use?", [
  ["Amazon SageMaker AI", "SageMaker AI covers the whole ML workflow for custom models: data preparation, training, tuning and deployment."],
  ["Amazon Rekognition", "Rekognition is a ready-made image service, not a platform for your own models."],
  ["Amazon Lex", "Lex builds chatbots."],
  ["Amazon QuickSight", "QuickSight builds BI dashboards."]
]);
Q("ml", 0, "A company wants a cloud contact center where customers call in, are routed to agents, and can use a chatbot, with no upfront costs. Which service should it use?", [
  ["Amazon Connect", "Connect is a cloud contact center with call routing and contact flows, and it integrates with Lex and CRM systems."],
  ["Amazon SNS", "SNS sends notifications; it isn't a contact center."],
  ["Amazon Chime SDK", "The Chime SDK adds audio and video to your own apps; it isn't a contact center."],
  ["Amazon Pinpoint", "Pinpoint runs marketing campaigns; it doesn't route customer calls to agents."]
]);
Q("ml", 1, "A company wants to build a generative AI application using foundation models from several providers, such as Anthropic and Amazon, through a single API and without managing any infrastructure. Which service should it use?", [
  ["Amazon Bedrock", "Bedrock is a fully managed service that gives API access to foundation models from Amazon and other AI companies, for building generative AI apps."],
  ["Amazon SageMaker AI Ground Truth", "Ground Truth labels training data; it doesn't provide foundation models through an API."],
  ["Amazon Comprehend", "Comprehend is a ready-made NLP service, not a generative AI platform."],
  ["Amazon Lex", "Lex builds chatbots with intents; it isn't a service for choosing foundation models."]
]);
Q("ml", 1, "Developers want a generative AI assistant inside their code editor that suggests code, explains errors and answers questions about AWS. Which service provides this?", [
  ["Amazon Q Developer", "Amazon Q Developer is AWS's generative AI assistant for software development, in the IDE and the AWS console."],
  ["AWS CodeBuild", "CodeBuild compiles and tests code; it doesn't suggest code."],
  ["Amazon Kendra", "Kendra searches your company's documents."],
  ["AWS X-Ray", "X-Ray traces application requests."]
]);
Q("ml", 0, "A company wants to measure customer sentiment from its recorded phone calls. Which combination of services should it use?", [
  ["Amazon Transcribe, then Amazon Comprehend", "Transcribe turns the audio into text, and Comprehend then detects sentiment in that text."],
  ["Amazon Polly, then Amazon Translate", "Polly creates speech from text, which is the wrong direction."],
  ["Amazon Rekognition, then Amazon Textract", "Both of these work on images and documents, not audio."],
  ["Amazon Lex, then Amazon Polly", "Lex and Polly build voice chatbots; they don't analyze recorded calls."]
]);

// More services to recognize
Q("other", 0, "A company wants to give 500 remote employees secure Windows desktops in the cloud, replacing its on-premises virtual desktop infrastructure (VDI). Which service should it use?", [
  ["Amazon WorkSpaces", "WorkSpaces is managed Desktop as a Service: persistent Windows or Linux desktops that scale to thousands of users."],
  ["Amazon AppStream 2.0", "AppStream streams individual applications to a browser, not full persistent desktops."],
  ["Amazon Lightsail", "Lightsail provides simple servers, not managed desktops for employees."],
  ["AWS Outposts", "Outposts puts AWS hardware in your data center; it isn't a desktop service."]
]);
Q("other", 0, "A software company wants customers to use its design application from any web browser, without installing it and without providing full virtual desktops. Which service fits?", [
  ["Amazon AppStream 2.0", "AppStream 2.0 streams desktop applications to a web browser on any device."],
  ["Amazon WorkSpaces", "WorkSpaces gives full desktops, which is more than needed here."],
  ["AWS Amplify", "Amplify builds web and mobile apps; it doesn't stream existing desktop apps."],
  ["Amazon CloudFront", "CloudFront delivers web content but can't run a desktop application."]
]);
Q("other", 0, "A mobile app team needs a managed GraphQL API with real-time updates and offline data synchronization. Which service should it use?", [
  ["AWS AppSync", "AppSync provides managed GraphQL APIs with real-time subscriptions and offline sync, integrating with DynamoDB and Lambda."],
  ["Amazon API Gateway", "API Gateway handles REST and WebSocket APIs; GraphQL with built-in offline sync points to AppSync."],
  ["Amazon SQS", "SQS queues messages; it isn't an API layer."],
  ["AWS Device Farm", "Device Farm tests apps on real devices."]
]);
Q("other", 0, "A small team wants to quickly build and host a full-stack web and mobile application with authentication, storage, APIs and CI/CD, using one set of tools. Which service should it use?", [
  ["AWS Amplify", "Amplify provides tools and hosting to build and deploy full-stack web and mobile apps quickly."],
  ["AWS CloudFormation", "CloudFormation can build anything, but it is not the quick, front-end-focused toolkit described."],
  ["Amazon WorkSpaces", "WorkSpaces provides virtual desktops."],
  ["AWS Ground Station", "Ground Station communicates with satellites."]
]);
Q("other", 0, "A company wants to test its mobile app on many real Android and iOS phones and tablets at the same time, not on emulators. Which service should it use?", [
  ["AWS Device Farm", "Device Farm tests web and mobile apps on real devices and browsers, with logs, videos and screenshots."],
  ["Amazon AppStream 2.0", "AppStream streams desktop applications; it doesn't test mobile apps."],
  ["AWS Fault Injection Service", "FIS injects failures into AWS resources for resilience testing."],
  ["AWS CodeBuild", "CodeBuild compiles and runs tests on build servers, not on real phones."]
]);
Q("other", 0, "A manufacturer wants to securely connect millions of sensors to AWS, send their data to other AWS services, and send commands back to the devices. Which service should it use?", [
  ["AWS IoT Core", "IoT Core connects billions of devices securely, handles publish/subscribe messaging (MQTT), and routes data to other services."],
  ["Amazon Data Firehose", "Firehose delivers streams to storage but doesn't manage device connections or commands."],
  ["Amazon WorkSpaces", "WorkSpaces provides desktops."],
  ["AWS Snowball Edge", "Snowball Edge moves data offline and runs edge compute; it isn't a device messaging hub."]
]);
Q("other", 0, "A research group needs to control satellites and download their images into AWS without building its own antenna stations. Which service should it use?", [
  ["AWS Ground Station", "Ground Station is a managed network of antennas near AWS Regions to communicate with satellites and deliver data into your VPC."],
  ["AWS Outposts", "Outposts brings AWS racks into your data center; it has no satellite antennas."],
  ["AWS Wavelength", "Wavelength runs compute inside 5G networks."],
  ["AWS Direct Connect", "Direct Connect links a data center to AWS, not satellites."]
]);
Q("other", 0, "A company wants to deliberately stop instances and add CPU stress in a controlled way to see whether its application recovers correctly (chaos engineering). Which service should it use?", [
  ["AWS Fault Injection Service", "FIS runs controlled experiments that inject failures such as CPU stress or instance stops, and stops automatically if an alarm fires."],
  ["Amazon Inspector", "Inspector scans for vulnerabilities; it doesn't inject failures."],
  ["AWS Trusted Advisor", "Trusted Advisor checks best practices."],
  ["AWS Config conformance packs", "Config records configurations."]
]);
Q("other", 0, "A marketing team wants to run targeted campaigns to customer segments over email, SMS and push notifications, with templates and scheduling. Which service was built for this?", [
  ["Amazon Pinpoint", "Pinpoint provides segmented, multichannel marketing campaigns."],
  ["Amazon SQS", "SQS queues messages between systems."],
  ["AWS Step Functions", "Step Functions orchestrates workflows; it isn't a marketing tool."],
  ["Amazon CloudWatch", "CloudWatch monitors resources."]
]);
Q("other", 1, "A company wants to track how many Microsoft and Oracle software licenses it uses across AWS and its data center, and stop launches that would break its license agreements. Which service should it use?", [
  ["AWS License Manager", "License Manager tracks license usage against rules you define and can block launches that would exceed them."],
  ["AWS Artifact", "Artifact provides AWS compliance reports, not your software license tracking."],
  ["AWS Service Catalog", "Service Catalog offers approved products but doesn't track license counts."],
  ["AWS Marketplace", "Marketplace sells software; it doesn't track licenses you already own."]
]);
Q("other", 0, "Several companies want to share a ledger of transactions without a trusted central authority, using Hyperledger Fabric or Ethereum. Which AWS service helps them set up and manage this network?", [
  ["Amazon Managed Blockchain", "Managed Blockchain creates and manages blockchain networks using Hyperledger Fabric or Ethereum."],
  ["Amazon Neptune", "Neptune is a graph database."],
  ["Amazon DynamoDB global tables", "Global tables copy one company's table to several Regions. The data still has one owner that everyone must trust, so it isn't a shared ledger."],
  ["AWS Resource Access Manager", "RAM shares AWS resources between accounts."]
]);

// Additions to earlier topics
Q("infra", 0, "A hospital must keep patient data in its own building for regulatory reasons, but it wants to use the same AWS APIs, tools and services such as EC2 and EBS on premises. Which AWS offering should it use?", [
  ["AWS Outposts", "Outposts installs AWS-managed racks in your own data center, running AWS services with the same APIs and tools."],
  ["AWS Local Zones", "Local Zones are AWS facilities near cities; the data would still leave the hospital's building."],
  ["AWS Wavelength", "Wavelength places compute in telecom 5G networks."],
  ["Amazon CloudFront", "CloudFront caches content at edge locations; it doesn't run workloads on premises."]
]);
Q("infra", 0, "A film studio in a large city needs single-digit millisecond latency to AWS compute for video rendering, but the nearest AWS Region is far away. Which option should it use?", [
  ["AWS Local Zones", "Local Zones place compute, storage and other services close to large cities, extending a Region for latency-sensitive work."],
  ["AWS Wavelength", "Wavelength is for apps serving mobile devices over 5G networks."],
  ["An extra Availability Zone that the studio creates", "Customers can't create Availability Zones."],
  ["S3 Transfer Acceleration", "Transfer Acceleration speeds up S3 uploads, but it doesn't put compute near the studio."]
]);
Q("infra", 0, "A company is building an augmented reality app for phones on 5G networks and needs ultra-low latency by keeping traffic inside the telecom provider's network. Which AWS offering is designed for this?", [
  ["AWS Wavelength", "Wavelength Zones embed AWS compute and storage in telecom 5G networks, so device traffic doesn't leave the carrier network."],
  ["AWS Outposts", "Outposts runs AWS in your own data center, not in a 5G network."],
  ["AWS Local Zones", "Local Zones are near cities but outside the telecom network."],
  ["Amazon CloudFront", "CloudFront caches content; it doesn't host application compute inside 5G networks."]
]);
Q("infra", 0, "A company wants a disaster recovery setup where a scaled-down but fully working copy of its application always runs in another Region, ready to scale up within minutes. Which strategy is this?", [
  ["Warm standby", "Warm standby keeps a complete, smaller copy running, so recovery is fast (minutes) at a moderate cost."],
  ["Backup and restore", "Backup and restore keeps only backups; recovery takes hours."],
  ["Pilot light", "Pilot light keeps only core pieces, such as the database, running. The rest must be started during recovery."],
  ["Multi-site active-active", "Multi-site runs a full-size copy serving traffic in both Regions. It is more than a scaled-down standby."]
]);
Q("transfer", 1, "Business partners must upload files to a company's S3 bucket using SFTP, because their systems only support that protocol. Which service provides a managed SFTP endpoint for S3?", [
  ["AWS Transfer Family", "Transfer Family provides fully managed SFTP, FTPS and FTP endpoints that store files directly in S3 or EFS."],
  ["AWS DataSync", "DataSync moves data using its own agent; it doesn't offer an SFTP endpoint for partners."],
  ["AWS Storage Gateway", "Storage Gateway serves on-premises apps with NFS, SMB, iSCSI or tape interfaces, not SFTP for partners."],
  ["S3 Transfer Acceleration", "Transfer Acceleration speeds up S3 API uploads; it doesn't add SFTP."]
]);
Q("transfer", 0, "A company wants to recover its on-premises servers into AWS within minutes after a ransomware attack or site failure, using continuous block-level replication to low-cost staging. Which service should it use?", [
  ["AWS Elastic Disaster Recovery", "Elastic Disaster Recovery (formerly CloudEndure DR) continuously replicates servers into AWS and launches them in minutes when needed, with failback."],
  ["AWS Backup", "AWS Backup takes scheduled backups of AWS resources; restoring whole on-premises servers in minutes is what DRS is for."],
  ["AWS DataSync", "DataSync copies files, not running servers."],
  ["Amazon S3 Glacier Deep Archive", "Deep Archive retrievals take 12 to 48 hours."]
]);
Q("caf", 0, "A company must migrate its production Oracle database to Amazon Aurora PostgreSQL while the source database stays online, to keep downtime to a minimum. Which service should it use?", [
  ["AWS Database Migration Service (DMS)", "DMS migrates databases while the source stays operational and replicates ongoing changes. For a different engine, AWS SCT or DMS Schema Conversion converts the schema first."],
  ["AWS Application Migration Service", "Application Migration Service rehosts whole servers; it can't convert Oracle to Aurora PostgreSQL."],
  ["AWS DataSync", "DataSync copies files, not live databases."],
  ["AWS Snowball Edge", "Snowball moves data offline, which means long downtime for a live database."]
]);
Q("caf", 0, "Before planning a migration, a company needs to collect data about its on-premises servers: configuration, utilization and which servers depend on each other. Which service should it use?", [
  ["AWS Application Discovery Service", "Application Discovery Service gathers server inventory, performance and dependency data, with or without agents, for migration planning."],
  ["AWS Application Migration Service", "MGN performs the rehost migration itself, after planning."],
  ["AWS Config", "Config records configurations of AWS resources, not on-premises servers."],
  ["Amazon Inspector", "Inspector scans for vulnerabilities."]
]);
Q("caf", 0, "A company's leadership wants a data-driven business case that shows how much it would cost to run its current on-premises environment on AWS. Which service is designed for this?", [
  ["Migration Evaluator", "Migration Evaluator analyzes your current footprint and produces a cost-focused business case for moving to AWS."],
  ["AWS Budgets", "Budgets tracks spending against limits once you are on AWS."],
  ["AWS Cost and Usage Report", "CUR details costs you already have on AWS, not projected migration costs."],
  ["AWS Trusted Advisor", "Trusted Advisor checks an existing AWS account."]
]);
Q("detect", 0, "An S3 bucket was deleted yesterday. The security team needs to find out which IAM user deleted it, when, and from which IP address. Which service records this information?", [
  ["AWS CloudTrail", "CloudTrail records every API call, including DeleteBucket, with the identity, time and source IP. It keeps 90 days of event history by default."],
  ["AWS Config", "Config shows that the bucket's configuration changed, but CloudTrail is the record of who called the API."],
  ["Amazon GuardDuty", "GuardDuty looks for threats in logs; it isn't the audit record of every call."],
  ["Amazon CloudWatch metrics", "Metrics measure performance, not who made an API call."]
]);
Q("detect", 0, "Which AWS service checks an account against best practices and flags issues such as security groups with unrestricted access, a root user without MFA, and idle resources?", [
  ["AWS Trusted Advisor", "Trusted Advisor checks cost optimization, performance, security, fault tolerance, service limits and operational excellence."],
  ["AWS Artifact", "Artifact provides AWS's compliance reports."],
  ["Amazon Macie", "Macie finds sensitive data in S3."],
  ["AWS X-Ray tracing", "X-Ray traces application requests."]
]);
