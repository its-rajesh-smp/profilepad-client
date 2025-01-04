import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./style.css";

interface IGithubHitmapProps {
  dataPoints: any;
}

function GithubHitmap({ dataPoints }: IGithubHitmapProps) {
  const getClassForValue = (value: any) => {
    if (!value || value.count === 0) {
      return "color-empty"; // Handle the empty state (no contributions)
    }

    // Ensure the count falls within the expected range (0-4)
    const count = value.count;
    const clampedCount = Math.min(4, Math.max(0, count)); // Clamps count to the range 0-4

    return `color-scale-${clampedCount}`; // Return the corresponding color scale class
  };

  return (
    <CalendarHeatmap
      classForValue={getClassForValue}
      gutterSize={5}
      showOutOfRangeDays
      values={dataPoints}
    />
  );
}

export default GithubHitmap;
