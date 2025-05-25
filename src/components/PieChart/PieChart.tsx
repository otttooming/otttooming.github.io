import { Cell, Pie, PieChart as RechartsPie } from 'recharts';
import * as styles from './PieChart.css';

interface DataProps {
  name: string;
  value: number;
}

interface Props {
  data: DataProps[];
  info?: React.ReactNode;
}

const COLORS = ['#80CC8E', '#686AF6', '#C5C7F0', '#CFD2F0', '#DADDEF'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <line
        x1={x - 8}
        y1={y}
        x2={x + 48}
        strokeLinecap="round"
        y2={y}
        style={{
          stroke: '#3E3E54',
          strokeWidth: 25,
        }}
      />

      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={'start'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

export const PieChart = ({ data, info }: Props) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data.map(({ name }, index) => (
          <li
            key={index}
            className={styles.listItem({
              colorIndex: index as 0 | 1 | 2 | 3 | 4,
            })}
          >
            {name}
          </li>
        ))}
      </ul>
      <div className={styles.pieWrapper}>
        <RechartsPie width={260} height={220}>
          <Pie
            data={data}
            cx={110}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={96}
            innerRadius={64}
            stroke={'none'}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={4}
            cornerRadius={4}
          >
            {data.map(({ name }, index) => (
              <Cell key={name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </RechartsPie>
      </div>

      {info && <div className={styles.infoWrapper}>{info}</div>}
    </div>
  );
};
