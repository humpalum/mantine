import React from 'react';
import { BarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';
import classes from './BarChart.demo.gridColor.module.css';

const cssCode = `
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}
`;

const code = `
import { BarChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      className={classes.root}
      series={[
        { name: 'Smartphones', color: 'indigo.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      className={classes.root}
      series={[
        { name: 'Smartphones', color: 'indigo.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

export const gridColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code: cssCode, language: 'scss', fileName: 'Demo.module.css' },
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
