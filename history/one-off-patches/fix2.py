import json
files=['qb_concepts.js','qb_security.js','qb_tech.js']
src={f:open(f).read() for f in files}
def edit(stem, pairs):
    for f,s in src.items():
        i=s.find(stem)
        if i<0: continue
        j=s.find('\n]);', i)
        block=s[i:j]
        for old,new in pairs:
            key='["'+old+'", '
            assert block.count(key)==1,(stem[:40],old)
            block=block.replace(key,'["'+new+'", ')
        src[f]=s[:i]+block+s[j:]
        return
    raise SystemExit('stem not found: '+stem)
def expl(stem, old, new):
    for f,s in src.items():
        i=s.find(stem)
        if i<0: continue
        j=s.find('\n]);', i); block=s[i:j]
        assert block.count(old)==1,(stem[:40],old); src[f]=s[:i]+block.replace(old,new)+s[j:]; return
    raise SystemExit('nf '+stem)

R={'Rehost':'Rehost (lift and shift)','Replatform':'Replatform (lift and reshape)','Repurchase':'Repurchase (drop and shop)',
   'Refactor':'Refactor / re-architect','Retain':'Retain (revisit later)','Retire':'Retire (decommission)','Relocate':'Relocate (hypervisor-level move)',
   'Refactor / Re-architect':'Refactor / re-architect'}
s=src['qb_concepts.js']
for old,new in R.items(): s=s.replace('["'+old+'", ','["'+new+'", ')
src['qb_concepts.js']=s

edit("What durability is Amazon S3 designed for?",[("99.99%","99.99% (4 nines)"),("99.9%","99.9% (3 nines)"),("100%","99.9999% (6 nines)")])
expl("What durability is Amazon S3 designed for?",'"No storage system guarantees 100% durability."','"Six nines is far below S3\'s designed durability of eleven nines."')
edit("How many Availability Zones does an AWS Region usually have?",[("Usually three (minimum 3, maximum 6)","Usually 3 (min 3, max 6)"),("Exactly one","Exactly 1 per Region"),("Exactly two","Usually 2 (min 1, max 2)"),("At least 20","At least 20 per Region")])
edit("A company wants to reject any upload to an S3 bucket",[("A bucket policy that denies PutObject requests without SSE-KMS","An S3 bucket policy")])
expl("A company wants to reject any upload to an S3 bucket",'"Bucket policies are commonly','"A bucket policy with a Deny for PutObject requests that lack SSE-KMS does this. Bucket policies are commonly')
edit("Which task can ONLY be performed by the AWS account root user?",[("Changing the account name or the root user's email address","Changing the root user's email address"),("Creating an IAM user","Creating an IAM user with admin rights"),("Launching an EC2 instance","Launching an EC2 instance in a new Region"),("Creating an S3 bucket","Creating an S3 bucket with versioning")])
edit("Which task requires the root user?",[("Buying a Reserved Instance","Buying a Reserved Instance for a 3-year term"),("Creating an IAM password policy","Creating an IAM password policy for all users"),("Enabling MFA for an IAM user","Enabling MFA for an existing IAM user")])
edit("Which AWS infrastructure component caches content",[("Edge locations (points of presence)","Edge locations")])
expl("Which AWS infrastructure component caches content",'"AWS has 400+ points of presence','"Edge locations are also called points of presence. AWS has 400+ of them')
edit("Which of the following AWS services is GLOBAL",[("AWS Identity and Access Management (IAM)","AWS IAM")])
edit("GuardDuty detects that an EC2 instance",[("Send GuardDuty findings to Amazon EventBridge and trigger an SNS notification or a Lambda function","Send findings to Amazon EventBridge to trigger SNS or Lambda"),("Configure a security group rule that emails the team","Add a security group rule that emails the team"),("Use AWS Artifact to forward findings to the team","Use AWS Artifact to forward findings to the team")])
edit("A company stores backups that are accessed about once a month",[("S3 Standard-Infrequent Access (Standard-IA)","S3 Standard-IA")])
edit("What is an AWS Availability Zone (AZ)?",[("One or more discrete data centers with redundant power, networking and connectivity, located within a Region","One or more discrete data centers with redundant power and networking, inside a Region"),("A geographic area that contains several AWS Regions","A geographic area that contains several AWS Regions and their networks"),("A location used only to cache content for Amazon CloudFront","A location used only to cache content for Amazon CloudFront users"),("A single rack of servers inside a data center","A single rack of servers inside one AWS data center building")])
edit("Where does Amazon S3 encrypt data when using SERVER-SIDE",[("In S3, after S3 receives the data and before it is written to disk","In S3, after S3 receives the data")])
edit("How are On-Demand Linux and Windows EC2 instances billed?",[("Per hour, rounded up","Per hour, rounded up to the next hour"),("Per day","Per day, with a 24-hour minimum"),("A fixed monthly fee","A fixed monthly fee per instance")])
edit("A company notices that a feature it needs is available",[("Service and feature availability varies by Region, so it is a factor in Region selection","Service availability varies by Region and affects Region choice")])
edit("An administrator accidentally deletes an important EBS snapshot",[("Recycle Bin with a retention rule","Recycle Bin")])
expl("An administrator accidentally deletes an important EBS snapshot",'"Recycle Bin rules keep','"Recycle Bin retention rules keep')
edit("Which of the following is NOT a typical use case for Amazon S3?",[("Serving as the boot volume that runs an EC2 instance's operating system","Booting an EC2 instance's operating system")])
edit("What does multi-factor authentication (MFA) combine?",[("Something you know (a password) and something you have (a device)","A password you know and a device you have"),("Two different passwords","Two different passwords you know"),("A username and an email address","A username and an email address you know")])
edit("A developer wants to call AWS services directly from a Python",[("An AWS SDK (for example, Boto3 for Python)","An AWS SDK")])
expl("A developer wants to call AWS services directly from a Python",'"SDKs are language-specific','"For Python that is Boto3. SDKs are language-specific')
edit("A company needs a fully managed, Windows-native shared file system",[("Amazon EFS","Amazon EFS (Elastic File System)"),("Amazon EBS","Amazon EBS (Elastic Block Store)")])
edit("An Auto Scaling policy is configured as",[("Simple/step scaling (dynamic)","Simple/step scaling")])
edit("A user wants to open an SSH session to an Amazon Linux 2 instance",[("PuTTY; port 3389 must be open","PuTTY; port 3389 must be open for the session"),("AWS CLI; port 443 must be open","AWS CLI; port 443 must be open for the session")])
edit("Which AWS feature automatically adds EC2 instances",[("Amazon EC2 Auto Scaling group (ASG)","An Auto Scaling group (ASG)")])
edit("A company must store financial records in S3 in a WORM",[("S3 Object Lock (in compliance mode)","S3 Object Lock")])
expl("A company must store financial records in S3 in a WORM",'"Object Lock enforces WORM retention. In compliance mode,','"Object Lock enforces WORM retention. Use compliance mode: then')
edit("A company needs to transfer 10 TB of data to AWS",[("Transfer it over the network, for example with AWS DataSync","Transfer it over the network with DataSync")])
edit("Which AWS service is designed to simplify rehost",[("Amazon Rekognition","AWS Database Migration Service")])
expl("Which AWS service is designed to simplify rehost",'"Rekognition is an image and video analysis service."','"DMS migrates databases, not whole servers."')
edit("Which FREE AWS tool lets a company answer questions",[("AWS Config","AWS Config rules"),("AWS Artifact","AWS Artifact reports")])
edit("A company needs free public SSL/TLS certificates",[("AWS KMS","AWS Key Management Service (KMS)")])
for f,s in src.items(): open(f,'w').write(s)
print('ok')
