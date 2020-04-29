import core = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import { BlockPublicAccess } from '@aws-cdk/aws-s3';

export class HelloCdkStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Bucket is a construct. 
    // This means its initialization signature has scope, id, and props and it is a child of the stack.
    // FirstCdkBucket is the logical id of the bucket constuct, not the physical bucket name
    // Set the bucketName property when you define your bucket for the physical bucket name
    new s3.Bucket(this, 'FirstCdkBucket', {
      versioned: true,
      encryption: s3.BucketEncryption.KMS_MANAGED
    })

    new s3.Bucket(this, 'FirstCdkBucket2', {
      bucketName: "affaqiri-test3",
      versioned: true,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.KMS_MANAGED
    })
  }
}
