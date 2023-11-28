import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['chore', 'docs', 'feat', 'fix', 'refactor', 'test'],
    ],
  },

  prompt: {
    messages: {},
  },
};

module.exports = Configuration;
