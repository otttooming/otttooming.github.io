import * as React from "react"
import { PieChart, Pie, Sector, Cell } from "recharts"
import styled from "styled-components"
import { theme } from "@coterminous/ui"

interface DataProps {
  name: string
  value: number
}

interface Props {
  data: DataProps[]
  info?: React.ReactNode
}

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ]

const COLORS = ["#80CC8E", "#686AF6", "#C5C7F0", "#CFD2F0", "#DADDEF"]
// const COLORS = ["#686AF6", "#C5C7F0", "#CFD2F0", "#DADDEF"]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <>
      <line
        x1={x - 8}
        y1={y}
        x2={x + 48}
        strokeLinecap="round"
        y2={y}
        style={{
          stroke: "#3E3E54",
          strokeWidth: 25,
        }}
      />

      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={"start"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  margin-top: 64px;
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  max-width: 1024px !important;
`

const PieWrapper = styled.div`
  display: inline-flex;
  border-radius: 8px;
  margin-top: 24px;
`

const List = styled.ul`
  text-align: center;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li<{ index: number }>`
  display: inline-flex;
  margin-left: 24px;
  margin-top: 16px;
  padding-left: 24px;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 16px;
    height: 16px;
    background-color: ${props => COLORS[props.index % COLORS.length]};
  }
`

const InfoWrapper = styled.div`
  font-size: ${theme.fontSize.xs};
  margin-top: 24px;
  color: #808080;
`

export default class Example extends React.PureComponent<Props> {
  render() {
    const { data, info } = this.props

    return (
      <Wrapper>
        <List>
          {data.map((item, index) => (
            <ListItem key={index} index={index}>
              {item.name}
            </ListItem>
          ))}
        </List>
        <PieWrapper>
          <PieChart width={260} height={220}>
            <Pie
              data={data}
              cx={110}
              cy={100}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={96}
              innerRadius={64}
              stroke={"none"}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={4}
              cornerRadius={4}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </PieWrapper>

        {info && <InfoWrapper>{info}</InfoWrapper>}
      </Wrapper>
    )
  }
}
