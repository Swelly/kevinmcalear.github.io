var languages = {
    labels: ["Ruby", "JavaScript", "Python", "PosgreSQL", "Bash", "HTML", "CSS"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(15, 35, 66, 0.2)",
            strokeColor: "rgba(15, 35, 66, 1)",
            pointColor: "rgba(15, 35, 66, 1)",
            pointStrokeColor: "rgba(15, 35, 66, 1)",
            pointHighlightFill: "rgba(15, 35, 66, 0.2)",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 90, 75, 45, 75, 95, 95]
        }
    ]
};

var design = {
    labels: ["Photoshop", "Illustrator", "UX", "UI Design"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(66, 15, 46, 0.2)",
            strokeColor: "rgba(66, 15, 46, 1)",
            pointColor: "rgba(66, 15, 46, 1)",
            pointStrokeColor: "rgba(66, 15, 46, 1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [80, 50, 75, 70]
        }
    ]
};

var data = {
    labels: ["iPython Notebook", "Scikit Learn", "Pandas", "Data Analysis", "Statistics"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(40, 15, 66, 0.2)",
            strokeColor: "rgba(40, 15, 66, 1)",
            pointColor: "rgba(40, 15, 66, 1)",
            pointStrokeColor: "rgba(40, 15, 66, 1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 90, 85, 70, 75]
        }
    ]
};

Chart.defaults.global.responsive = true;
Chart.defaults.global.pointDot = false;
Chart.defaults.global.pointDotRadius = 3;
// Chart.defaults.global.angleLineColor = "rgba(0,0,0,.1)";
Chart.defaults.global.angleLineWidth = 5;
Chart.defaults.global.pointLabelFontSize = 20;

(function(){
  if (document.getElementById("lang-graph")){

    // Get the context of the canvas element we want to select
    var langCtx = document.getElementById("lang-graph").getContext("2d");
    var designCtx = document.getElementById("design-graph").getContext("2d");
    var dataCtx = document.getElementById("data-graph").getContext("2d");
    // var myNewChart = new Chart(ctx).PolarArea(data);
    var langRadarChart = new Chart(langCtx).Radar(languages,{
      pointDot   : true,
      pointDotRadius : 1,
      datasetStrokeWidth : 1,
      responsive : true,
      angleLineWidth : .5,
      angleLineColor : "rgba(0,0,0,.1)",
      pointLabelFontSize : 11,
      tooltipTemplate: "<%=label%>: <%= value %>%",

    });
    var designRadarChart = new Chart(designCtx).Radar(design,{
      pointDot   : true,
      pointDotRadius : 1,
      datasetStrokeWidth : 1,
      responsive : true,
      angleLineWidth : .5,
      angleLineColor : "rgba(0,0,0,.1)",
      pointLabelFontSize : 11,
      tooltipTemplate: "<%=label%>: <%= value %>%",

    });
    var dataRadarChart = new Chart(dataCtx).Radar(data,{
      pointDot   : true,
      pointDotRadius : 1,
      datasetStrokeWidth : 1,
      responsive : true,
      angleLineWidth : .5,
      angleLineColor : "rgba(0,0,0,.1)",
      pointLabelFontSize : 11,
      tooltipTemplate: "<%=label%>: <%= value %>%",

    });

  }
})();
