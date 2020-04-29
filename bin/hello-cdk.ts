#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloCdkStack } from '../lib/hello-cdk-stack';
import { SsmParameterStack } from '../lib/ssm-parameter-stack';

const env = {
  region: 'ap-southeast-2',
  //account: ''
}

const app = new cdk.App();

new HelloCdkStack(app, 'HelloCdkStack');

new SsmParameterStack(app, 'SsmParameterStack')