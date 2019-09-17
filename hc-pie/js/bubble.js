Highcharts.chart('hcContainer', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Airbnb cost and volume by DC neighborhood'
    },

    subtitle: {
        text: 'Source: <a href="http://insideairbnb.com/get-the-data.html">Inside Airbnb</a>'
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Number of Airbnbs'
        },
        labels: {
            format: '{value}'
        },
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Average cost per night'
        },
        labels: {
            format: '${value}'
        },
        mayPadding: 0.2,
    },

    tooltip: {
        backgroundColor: '#E2FFC4',
        borderColor: '#B5CC9D',
        borderRadius: 10,
        borderWidth: 3,
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.neighborhood}</h3></th></tr>' +
            '<tr><th>Cost/night:</th><td>${point.y}</td></tr>' +
            '<tr><th>Number of locations:</th><td>{point.x}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        bubble: {
            minSize: 39,
            maxSize: 39
        },
        series: {
            dataLabels: {
                enabled: false,
                // format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { y: 143.76, x: 498, neighborhood: 'Brightwood Park, Crestwood, Petworth' },
            { y: 127, x: 158, neighborhood: 'Brookland, Brentwood, Langdon' },
            { y: 226.75, x: 826, neighborhood: 'Capitol Hill, Lincoln Park' },
            { y: 103.83, x: 78, neighborhood: 'Capitol View, Marshall Heights, Benning Heights' },
            { y: 214.83, x: 129, neighborhood: 'Cathedral Heights, McLean Gardens, Glover Park' },
            { y: 203.76, x: 114, neighborhood: 'Cleveland Park, Woodley Park, Massachusetts Avenue Heights, Woodland-Normanstone Terrace' },
            { y: 143.83, x: 36, neighborhood: 'Colonial Village, Shepherd Park, North Portal Estates' },
            { y: 160.09, x: 883, neighborhood: 'Columbia Heights, Mt. Pleasant, Pleasant Plains, Park View' },
            { y: 152.57, x: 77, neighborhood: 'UCongress Heights, Bellevue, Washington Highlands' },
            { y: 92.21, x: 39, neighborhood: 'Deanwood, Burrville, Grant Park, Lincoln Heights, Fairmont Heights' },
            { y: 151.35, x: 26, neighborhood: 'Douglas, Shipley Terrace' },
            { y: 293.41, x: 389, neighborhood: 'Downtown, Chinatown, Penn Quarters, Mount Vernon Square, North Capitol Street' },
            { y: 191.99, x: 736, neighborhood: 'Dupont Circle, Connecticut Avenue/K Street' },
            { y: 115.4, x: 10, neighborhood: 'Eastland Gardens, Kenilworth' },
            { y: 169.76, x: 712, neighborhood: 'Edgewood, Bloomingdale, Truyton Circle, Eckington' },
            { y: 116.13, x: 38, neighborhood: 'Fairfay Village, Naylor Gardens, Hillcrest, Summit Park' },
            { y: 134.09, x: 91, neighborhood: 'Friendship Heights, American University Park, Tenleytown' },
            { y: 301.56, x: 262, neighborhood: 'Georgetown, Burleith/Hillandale' },
            { y: 249.06, x: 53, neighborhood: 'Hawthorne, Barnaby Woods, Chevy Chase' },
            { y: 114.68, x: 60, neighborhood: 'Historic Anacostia' },
            { y: 209.9, x: 352, neighborhood: 'Howard University, Le Droit Park, Cardozo/Shaw' },
            { y: 134, x: 257, neighborhood: 'Ivy City, Arboretum, Trinidad, Carver Langston' },
            { y: 176.91, x: 406, neighborhood: 'Kalorama Heights, Adams Morgan, Lanier Heights' },
            { y: 152.23, x: 110, neighborhood: 'Lamont Riggs, Queens Chapel, Fort Totten, Pleasant Hill' },
            { y: 89.19, x: 57, neighborhood: 'Mayfair, Hillbrook, Mahaning Heights' },
            { y: 188.15, x: 71, neighborhood: 'Near Southeast, Navy Yard' },
            { y: 179.19, x: 77, neighborhood: 'North Cleveland Park, Forest Hills, Van Ness' },
            { y: 120.65, x: 80, neighborhood: 'North Michigan Park, Michigan Park, University Heights' },
            { y: 157.74, x: 54, neighborhood: 'River Terrace, Benning, Greenway, Dupont Park' },
            { y: 232.35, x: 628, neighborhood: 'Shaw, Logan Circle' },
            { y: 83.89, x: 53, neighborhood: 'Sheridan, Barry Farm, Buena Vista' },
            { y: 277.16, x: 139, neighborhood: 'Southwest Employment Area, Southwest/Waterfront, Fort McNair, Buzzard Point' },
            { y: 290.41, x: 90, neighborhood: 'Spring Valley, Palisades, Wesley Heights, Foyhall Crescent, Foyhall Village, Georgetown Reservoir' },
            { y: 96.12, x: 171, neighborhood: 'Takoma, Brightwood, Manor Park' },
            { y: 161.37, x: 87, neighborhood: 'Twining, Fairlawn, Randle Highlands, Penn Branch, Fort Davis Park, Fort Dupont' },
            { y: 226.97, x: 866, neighborhood: 'Union Station, Stanton Park, Kingman Park' },
            { y: 463.67, x: 340, neighborhood: 'West End, Foggy Bottom, GWU' },
            { y: 161.57, x: 7, neighborhood: 'Woodland/Fort Stanton, Garfield Heights, Knoy Hill' },
            { y: 111.18, x: 66, neighborhood: 'Woodridge, Fort Lincoln, Gateway' }
        ],
        color: '#62806A',
        marker: {
            radius: 10,
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, '#C4FFD5'],
                    [1, '#62806A']
                ]
            }
        }
    }]

});