import core = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import { BlockPublicAccess } from '@aws-cdk/aws-s3';
import { AccountPrincipal } from '@aws-cdk/aws-iam';

export class HelloCdkStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Bucket is a construct. 
    // This means its initialization signature has scope, id, and props and it is a child of the stack.
    // FirstCdkBucket is the logical id of the bucket constuct, not the physical bucket name
    // Set the bucketName property when you define your bucket for the physical bucket name
    const bucket = new s3.Bucket(this, 'FirstCdkBucket', {
      bucketName: "affaqiri-test5",
      versioned: true,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.KMS_MANAGED
    })

    bucket.grantReadWrite(new AccountPrincipal('766627780664'));
    //bucket.grantReadWrite(new AccountPrincipal()
  }
}
