
Highcharts.chart('container', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                var series2 = this.series[1];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    
                    
                        var varY=Math.random();
                                 

                  
                        series.addPoint([x, y], true, true);

                  
                        series2.addPoint([x, y+1], true, true);
                  
                  
                    
                }

                , 2000);
                
               
            }
        }
    },

    time: {
        useUTC: false
    },

    title: {
        text: 'I '//titulo
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
    legend: {
        enabled: true
    },
    exporting: {
        enabled: true
    },
     credits: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -50; i <= 0; i += 1) {

                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    },
    {
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -50; i <= 0; i += 1) {

                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }
    ]
});

