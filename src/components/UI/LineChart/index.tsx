"use client";

import { ResponsiveLine } from "@nivo/line";
import { LineChartData } from "./Logic";

const LineChart = ({ data = [] }: { data: any }) => {
  if (!data?.length) return <></>;
  const { lineData } = LineChartData({
    currentData: data,
  });
  return (
    <div className="h-[200px] w-full ipod:w-[320px] text-center">
      <h3>Hourly forecast</h3>
      <ResponsiveLine
        data={lineData}
        margin={{ top: 10, right: 20, bottom: 20, left: 50 }}
        colors={["#AECADF"]}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 6,
          tickRotation: 0,
          legend: "",
          legendOffset: -60,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 7,
          tickRotation: 0,
          legend: "",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        enableGridX={false}
        enableGridY={false}
        lineWidth={1}
        enablePoints={false}
        pointSize={7}
        pointColor={{ theme: "background" }}
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-15}
        isInteractive={false}
        enableCrosshair={false}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 200,
            itemHeight: 24,
            itemOpacity: 0.75,
            symbolSize: 9,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
