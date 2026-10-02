files=['qb_n1.js','qb_n2.js','qb_n3.js']
src={f:open(f).read() for f in files}
def edit(stem, pairs):
    for f,s in src.items():
        i=s.find(stem)
        if i<0: continue
        j=s.find('\n]', i); block=s[i:j]
        for old,new in pairs:
            key='["'+old+'", '
            assert block.count(key)==1,(stem[:40],old)
            block=block.replace(key,'["'+new+'", ')
        src[f]=s[:i]+block+s[j:]; return
    raise SystemExit('nf '+stem)
def expl(stem, old, new):
    for f,s in src.items():
        i=s.find(stem)
        if i<0: continue
        j=s.find('\n]', i); block=s[i:j]
        assert block.count(old)==1,(stem[:40],old); src[f]=s[:i]+block.replace(old,new)+s[j:]; return
    raise SystemExit('nf '+stem)

edit("A company wants to make sure that no one in its development",[("A service control policy (SCP) in AWS Organizations","A service control policy (SCP)"),("An IAM password policy","An IAM password policy for all users"),("An S3 bucket policy","An S3 bucket policy on each bucket"),("A security group rule","A security group rule on each instance")])
edit("An SCP on an account allows all S3 actions.",[("No, because SCPs never grant permissions; the user also needs an IAM allow","No, SCPs never grant permissions on their own"),("Yes, but only read access","Yes, but only read-only access to S3")])
edit("A new customer wants to explore AWS for a few months",[("The Free plan, which uses credits and ends after 6 months or when credits run out","The Free plan"),("The Paid plan with a Reserved Instance","The Paid plan"),("The Enterprise Support plan","Enterprise Support"),("A Dedicated Host","A Dedicated Host reservation")])
expl("A new customer wants to explore AWS for a few months","\"The Free plan charges nothing.","\"The Free plan charges nothing and runs on credits.")
edit("Developers want to define their AWS infrastructure in Python",[("AWS Cloud Development Kit (CDK)","AWS CDK"),("AWS Config","AWS Config rules")])
edit("AWS plans maintenance on the hardware that hosts",[("AWS Health Dashboard (your account health)","AWS Health Dashboard"),("AWS Config","AWS Config timeline"),("AWS Cost Explorer","AWS Cost Explorer reports")])
edit("An EC2 instance doesn't appear as a managed node",[("The SSM Agent isn't running or the instance lacks the required IAM role","The SSM Agent or its IAM role is missing"),("The instance type is too small","The instance type is too small for the agent")])
edit("A company wants help from AWS's Concierge Support Team",[("Business","Business (classic)"),("Developer","Developer (classic)"),("Enterprise","Enterprise (classic)"),("Enterprise On-Ramp","Enterprise On-Ramp")])
edit("How is AWS Elastic Beanstalk priced?",[("There is no extra charge; you pay for the resources it creates","No extra charge beyond the resources it creates"),("A fee per deployment","A fee for each deployment you run")])
edit("What makes a subnet a public subnet in a VPC?",[("Its route table sends internet traffic to an internet gateway","It has a route to an internet gateway"),("It has a NAT gateway in it","It contains a NAT gateway"),("It has a VPC endpoint","It has a VPC endpoint attached")])
edit("In AWS Organizations, how can a company group accounts",[("Organizational units (OUs)","Organizational units"),("IAM groups","IAM user groups"),("VPCs","Shared VPCs")])
edit("A company wants to be alerted when the average CPU utilization",[("Amazon CloudWatch alarms","Amazon CloudWatch"),("AWS Config","AWS Config rules")])
edit("A company tagged all its resources with a Project tag",[("Activate the tag as a cost allocation tag in the Billing console","Activate it as a cost allocation tag"),("Recreate every resource with the tag","Recreate every resource with the same tag")])
edit("Security rules forbid opening port 22",[("AWS Systems Manager Session Manager","Session Manager"),("A bastion host","A bastion host with SSH")])
edit("An SCP attached to a member account denies all Amazon EC2 actions",[("Yes, SCPs apply to all users and roles in member accounts, including root","Yes, SCPs apply to the member account's root user too")])
edit("A networking team wants to share its VPC subnets",[("AWS Resource Access Manager (RAM)","AWS Resource Access Manager"),("VPC peering","VPC peering connections")])
edit("In which situation would a company choose to run its database",[("It needs operating-system access or an engine RDS doesn't support","It needs OS-level access to the database server")])
expl("In which situation would a company choose to run its database","\"RDS gives no OS access and supports a fixed list of engines.","\"RDS gives no OS access (SSH is disabled) and supports a fixed list of engines.")
edit("By default, EC2 sends metrics to CloudWatch every 5 minutes",[("Enable detailed monitoring on the instances","Enable detailed monitoring")])
edit("Which AWS service checks an account against best practices",[("AWS Trusted Advisor","AWS Trusted Advisor"),("AWS X-Ray","AWS X-Ray tracing"),("Amazon Macie","Amazon Macie")])
edit("A company serves files from a private S3 bucket through CloudFront",[("CloudFront Origin Access Control and a matching bucket policy","Origin Access Control with a bucket policy")])
edit("A company has 30 AWS accounts. It wants one monthly bill",[("Consolidated billing in AWS Organizations","Consolidated billing"),("AWS Budgets","AWS Budgets alerts")])
edit("When can AWS interrupt a running Spot Instance?",[("When AWS needs the capacity back, with a two-minute warning","When AWS needs the capacity back")])
expl("When can AWS interrupt a running Spot Instance?","\"Spot uses spare capacity.","\"Spot uses spare capacity, and you get a two-minute warning.")
edit("Why does placing an SQS queue between a web tier",[("Each tier can scale and fail independently, and spikes wait in the queue","Each tier can scale and fail independently")])
edit("Which of the following is NOT one of the AWS Trusted Advisor",[("Encryption key management","Encryption key management")])
edit("A company wants to deliberately stop instances and add CPU stress",[("AWS Fault Injection Service","AWS Fault Injection Service"),("AWS Config","AWS Config conformance packs")])
edit("What does a company commit to when it buys a Savings Plan?",[("A consistent amount of spend per hour for 1 or 3 years","A dollar amount per hour for 1 or 3 years")])
edit("Which action can a CloudWatch alarm take directly",[("Send an SNS notification or trigger an Auto Scaling policy","Send an SNS notification or trigger Auto Scaling"),("Create a new IAM user","Create a new IAM user for the on-call team")])
edit("How is Amazon EBS storage billed?",[("By the GB provisioned per month, even if the volume is mostly empty","By the GB provisioned per month, used or not")])
edit("A team wants to check whether an AWS service is having an outage",[("The AWS Health Dashboard","The AWS Health Dashboard"),("AWS Config","AWS Config history")])
edit("A company wants full-text search on its product catalog",[("Amazon OpenSearch Service","Amazon OpenSearch Service"),("Amazon Neptune","Amazon Neptune graphs")])
edit("A finance team wants to see AWS costs broken down",[("Cost allocation tags","Cost allocation tags"),("IAM groups","IAM groups per team")])
for f,s in src.items(): open(f,'w').write(s)
print('ok')
