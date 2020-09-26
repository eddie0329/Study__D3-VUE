d3.json("data/ages.json")
  .then((data) => {
    data.forEach((d) => {
      d.age = Number(d.age);
    });
    console.log(data);
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
        return 2 * d.age;
      })
      .attr("fill", (d) => {
        if (d.name === "Tony") {
          return "blue";
        }
        return "red";
      });
  })
  .catch((error) => {
    console.log(error);
  });
