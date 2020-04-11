// Create our first trace
var Feb = {
    x: [-1.55, 2.23],
    y: [33.644468, 17.996799],
    name: "Feb",
    type: "scatter"
  };
  
// Create our second trace
var Mar = {
    x: [-1.23, 1.68],
    y: 	[72.651808, 45.046983],
    name: "Mar",
    type: "scatter"
};

// Create our third trace
var Apr = {
    x: [-1.18, 1.29],
    y: [172.496893, 84.996583],
    name: "Apr",
    type: "scatter"
};

// Create our fourth trace
var May = {
    x: [-1.07, 1.06],
    y: [203.181288, 200.984722],
    name: "May",
    type: "scatter"
};

// Create our fifth trace
var Jun = {
    x: [-1.30, 1.25],
    y: [170.225326, 180.810851],
    name: "Jun",
    type: "scatter"
};

  // The data array consists of both traces
  var data = [Feb, Mar, Apr, May, Jun];
  var layout = {
    title: {
      text:'Tornado Season Regression Curves',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      title: {
        text: 'ENSO 4.3 Anomaly (Deg C)',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
      tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
        tick0: -1.5,
        dtick: 0.25
    },
    yaxis: {
      title: {
        text: 'Total Tornadoes (Count)',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };
  // Note that we omitted the layout object this time
  // This will use default parameters for the layout
  Plotly.newPlot("plot", data, layout);
  