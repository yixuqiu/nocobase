/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Plugin } from '@nocobase/server';
import { exportXlsx } from './actions';

export class PluginActionExportServer extends Plugin {
  beforeLoad() {}

  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.registerActionHandler('export', exportXlsx);
      dataSource.acl.setAvailableAction('export', {
        displayName: '{{t("Export")}}',
        allowConfigureFields: true,
      });
    });
  }
}

export default PluginActionExportServer;
