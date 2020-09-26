const data = [25, 20, 10, 12, 15];

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 800)
  .attr("height", 800);

const circles = svg.selectAll("circle").data(data);

circles
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    return i * 50 + 50;
  })
  .attr("cy", 250)
  .attr("r", (d) => {
    return d;
  })
  .attr("fill", "red");
