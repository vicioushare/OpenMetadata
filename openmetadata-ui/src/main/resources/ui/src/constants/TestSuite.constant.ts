/*
 *  Copyright 2022 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import i18next from 'i18next';
import { StepperStepType } from 'Models';
import { DataQualityPageTabs } from 'pages/DataQuality/DataQualityPage.interface';
import { getDataQualityPagePath } from 'utils/RouterUtils';

const TEST_SUITE_LABEL = i18next.t('label.test-suite');
const ADD_TEST_SUITE_LABEL = i18next.t('label.add-entity', {
  entity: i18next.t('label.test-suite'),
});

export const STEPS_FOR_ADD_TEST_SUITE: Array<StepperStepType> = [
  {
    name: ADD_TEST_SUITE_LABEL,
    step: 1,
  },
  {
    name: i18next.t('label.add-entity', {
      entity: i18next.t('label.test-case'),
    }),
    step: 2,
  },
  {
    name: i18next.t('label.test-suite-status'),
    step: 3,
  },
];

export const TEST_SUITE_BREADCRUMB = [
  {
    name: TEST_SUITE_LABEL,
    url: '',
    activeTitle: true,
  },
];
export const TEST_SUITE_STEPPER_BREADCRUMB = [
  {
    name: TEST_SUITE_LABEL,
    url: getDataQualityPagePath(DataQualityPageTabs.TEST_SUITES),
    activeTitle: false,
  },
  {
    name: ADD_TEST_SUITE_LABEL,
    url: '',
    activeTitle: true,
  },
];

export const PROGRESS_BAR_COLOR = '#48ca9e';
