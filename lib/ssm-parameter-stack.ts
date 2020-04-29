import core = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');

import { StringParameter } from '@aws-cdk/aws-ssm';
import { CfnOutput } from '@aws-cdk/core';

export class SsmParameterStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    const test = StringParameter.fromStringParameterName(this, 'test', 'ssp-param-north-virginia');

    new CfnOutput(this, 'ParameterValue', {
      description: 'ParameterValue',
      value: test.stringValue
    })
  }
}