Highcharts.chart('containerfijo', {

    /*chart: {
        type: 'area',
        spacingBottom: 30
    },*/

    title: {
        text: 'Consumo de corriente I, 2010-2016'
    },

    subtitle: {
        text: 'Fuente: itca-fepade.com'
    },

    yAxis: {
       title: {
            text: 'Amps'
        } 
    },
    xAxis: {
        /*title: {
            text: 'Amps'
        },*/
        categories: [
        '0:00', 
        '1:00', 
        '2:00', 
        '3:00', 
        '4:00', 
        '5:00', 
        '6:00', 
        '7:00',
        '8:00', 
        '9:00', 
        '10:00', 
        '11:00', 
        '12:00', 
        '13:00', 
        '14:00', 
        '15:00',
        '16:00', 
        '17:00', 
        '18:00', 
        '19:00', 
        '20:00', 
        '21:00', 
        '22:00', 
        '23:00',
        '24:00'
        ]

    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0

        }
    },

    series: [{
        name: 'Sensor 1',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 1000000]
    }, {
        name: 'Sensor 2',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sensor 3',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387,11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Sensor 4',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 32]
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});