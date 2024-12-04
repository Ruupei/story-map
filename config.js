var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicmhlaWtraW5lbiIsImEiOiJjbTQyNTNxdzEyemx5MmxvbXZ5bjZtOHI2In0.O68Sgugk5xEXfYFj5hJ6-w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'QinetiQ Air Affairs',
    subtitle: 'Our Mission and Strategy',
    byline: 'By Roope Heikkinen',
    footer: 'Source: QinetiQ webpage',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'USA office locations',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/1280px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg',
            description: 'Our corporate headquarters is located in Lorton Virginia, USA',
            locations: [
                { coordinates: [-77.2425059572631, 38.67464187227922], description: 'Lorton VA - Corporate HQ'},
                { coordinates: [-71.60791525850249, 42.53992343775302], description: 'Devens, MA'},
                { coordinates: [-71.39572584205759, 42.0564080739931], description: 'Franklin, MA'},
                { coordinates: [-77.22217708433298, 38.92410063611052], description: 'McLean, VA'},
                { coordinates: [-79.95006571414372, 40.45222507806174], description: 'Pittsburgh, PA'},
                { coordinates: [-77.36142260103384, 38.94408285450304], description: 'Reston, VA'},
                { coordinates: [-71.26831672866392, 42.38665879153932], description: 'Waltham, MA'}
            ], 
            location: {
                center: [-77.60659570727411, 40.92501334509034],
                zoom: 5,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Canada',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg',
            description: 'We have an office in Medicine Hat, Alberta, Canada. Canadians are part of Australia Sector. Mainly due to the high rate of Australian ski lift operators in Canadian skiing resorts.',
            locations: [
                { coordinates: [-110.70054662561112, 50.034375861542465], description: 'Medicine Hat, Alberta'}
            ], 
            location: {
                center: [-112.70054662561112, 50.034375861542465],
                zoom: 6,
                pitch: 15,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'United Kingdom',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            description: 'UK',
            locations: [
                // German locations
                { coordinates: [10.93533177067274, 48.42446864278767], description: 'Ausburg, Germany'},
                { coordinates: [7.194208327993752, 53.355281540836536], description: 'Emden, Germany'},
                { coordinates: [10.144158758029155, 54.38399914064688], description: 'Kiel, Germany'},
                { coordinates: [6.499133729140974, 51.229450180137], description: 'Emden, Germany'},
                // UK locations
                { coordinates: [-4.561540528202105, 52.1350605003244], description: 'Aberporth, UK'},
                { coordinates: [0.8948636751772645, 51.1301058120678], description: 'Ashford, UK'},
                { coordinates: [-0.5151611777688809, 52.17644994792114], description: 'Bedford, UK'},
                { coordinates: [-1.7563145705115548, 51.164369890292896], description: 'Boscombe Down, UK'},
                { coordinates: [-2.540470317087755, 51.5009557171275], description: 'Bristol, UK'},
                { coordinates: [-5.714714741212779, 57.281987314992676], description: 'BUTEC, UK'},
                { coordinates: [-3.4085796826483725, 54.3222740883025], description: 'Eskmeals, UK'},
                { coordinates: [-0.7919962323159322, 51.28070354709996], description: 'Farnborough, UK'},
                { coordinates: [0.15166482801061865, 51.31500893737002], description: 'Fort Halstead, UK'},
                { coordinates: [-0.8756927889061432, 50.86786098861433], description: 'Funtington, UK'},
                { coordinates: [-4.2651713565019325, 55.85865761429809], description: 'Glasgow, UK'},
                { coordinates: [-1.1291303997265894, 50.78686850902329], description: 'Haslar Marine Technology Park, UK'},
                { coordinates: [-7.3625102795172195, 57.34523552777421], description: 'Hebrides, UK'},
                { coordinates: [-0.6159532138968281, 53.203061443789956], description: 'Lincoln, UK'},
                { coordinates: [-4.899691594007848, 56.1699730449474], description: 'Loch Goil, UK'},
                { coordinates: [-2.316834185413805, 52.10181825267268], description: 'Malvern, UK'},
                { coordinates: [-4.520819970093501, 51.749956412201456], description: 'Pendine, UK'},
                { coordinates: [-4.184423515295364, 50.388771791620414], description: 'Plymouth Devonport, UK'},
                { coordinates: [-2.4529710919897534, 50.51770667289616], description: 'Portland Bill, UK'},
                { coordinates: [-1.0946933580962244, 50.85702813756294], description: 'Portsdown Technology Park, UK'},
                { coordinates: [-4.783422337807042, 55.99427242068128], description: 'Roseneath, UK'},
                { coordinates: [-3.447880288249319, 56.019767257771974], description: 'Rosyth South Arm, UK'},
                { coordinates: [0.8029411717894679, 51.5346815652167], description: 'Shoeburyness, UK'},
                { coordinates: [-4.9492340062565034, 54.8478841984062], description: 'West Freugh, UK'},
                { coordinates: [-2.2507448926002755, 50.68110348163866], description: 'Winfrith, UK'}
            ],
            location: {
                center: [-2.009182911528265, 52.59918502604538],
                zoom: 5,
                pitch: 10,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Germany',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/1920px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg',
            description: 'Germany is okay too',
            locations: [
                 // German locations
                 { coordinates: [10.93533177067274, 48.42446864278767], description: 'Ausburg, Germany'},
                 { coordinates: [7.194208327993752, 53.355281540836536], description: 'Emden, Germany'},
                 { coordinates: [10.144158758029155, 54.38399914064688], description: 'Kiel, Germany'},
                 { coordinates: [6.499133729140974, 51.229450180137], description: 'Emden, Germany'},
                 // UK locations
                 { coordinates: [-4.561540528202105, 52.1350605003244], description: 'Aberporth, UK'},
                 { coordinates: [0.8948636751772645, 51.1301058120678], description: 'Ashford, UK'},
                 { coordinates: [-0.5151611777688809, 52.17644994792114], description: 'Bedford, UK'},
                 { coordinates: [-1.7563145705115548, 51.164369890292896], description: 'Boscombe Down, UK'},
                 { coordinates: [-2.540470317087755, 51.5009557171275], description: 'Bristol, UK'},
                 { coordinates: [-5.714714741212779, 57.281987314992676], description: 'BUTEC, UK'},
                 { coordinates: [-3.4085796826483725, 54.3222740883025], description: 'Eskmeals, UK'},
                 { coordinates: [-0.7919962323159322, 51.28070354709996], description: 'Farnborough, UK'},
                 { coordinates: [0.15166482801061865, 51.31500893737002], description: 'Fort Halstead, UK'},
                 { coordinates: [-0.8756927889061432, 50.86786098861433], description: 'Funtington, UK'},
                 { coordinates: [-4.2651713565019325, 55.85865761429809], description: 'Glasgow, UK'},
                 { coordinates: [-1.1291303997265894, 50.78686850902329], description: 'Haslar Marine Technology Park, UK'},
                 { coordinates: [-7.3625102795172195, 57.34523552777421], description: 'Hebrides, UK'},
                 { coordinates: [-0.6159532138968281, 53.203061443789956], description: 'Lincoln, UK'},
                 { coordinates: [-4.899691594007848, 56.1699730449474], description: 'Loch Goil, UK'},
                 { coordinates: [-2.316834185413805, 52.10181825267268], description: 'Malvern, UK'},
                 { coordinates: [-4.520819970093501, 51.749956412201456], description: 'Pendine, UK'},
                 { coordinates: [-4.184423515295364, 50.388771791620414], description: 'Plymouth Devonport, UK'},
                 { coordinates: [-2.4529710919897534, 50.51770667289616], description: 'Portland Bill, UK'},
                 { coordinates: [-1.0946933580962244, 50.85702813756294], description: 'Portsdown Technology Park, UK'},
                 { coordinates: [-4.783422337807042, 55.99427242068128], description: 'Roseneath, UK'},
                 { coordinates: [-3.447880288249319, 56.019767257771974], description: 'Rosyth South Arm, UK'},
                 { coordinates: [0.8029411717894679, 51.5346815652167], description: 'Shoeburyness, UK'},
                 { coordinates: [-4.9492340062565034, 54.8478841984062], description: 'West Freugh, UK'},
                 { coordinates: [-2.2507448926002755, 50.68110348163866], description: 'Winfrith, UK'}
            ],
            location: {
                center: [-2.009182911528265, 52.59918502604538],
                zoom: 5,
                pitch: 10,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Abu Dhabi',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/1920px-Abu_dhabi_skylines_2014.jpg',
            description: 'We have an office in Abu Dhabi',
            locations: [
                { coordinates: [54.58815606841473, 24.364960153945315], description: 'Abu Dhabi, Middle East'}
            ],
            location: {
                center: [52.58815606841473, 24.364960153945315],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Australia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Fighting_red_kangaroos_1.jpg/1280px-Fighting_red_kangaroos_1.jpg',
            description: 'And then there is us here in Australia with multiple locations',
            locations: [
                { coordinates: [153.0443420278434, -27.540649206168755], description: 'Brisbane'},
                { coordinates: [138.5817312923309, -34.882206801829774], description: 'Adelaide'},
                { coordinates: [144.99437403180679, -37.81157242213516], description: 'Melbourne'},
                { coordinates: [150.56555873983905, -34.91088849886272], description: 'Nowra'},
                { coordinates: [149.1295061906207, -35.2688686888973], description: 'Canberra'}
            ],
            location: {
                center: [139.41123108088894, -32.3996988458729],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'QinetiQ Air Affairs - Nowra',
            image: 'https://cdn.v3.qinetiq.com/786569eb3f194c6b9972a75601d28d3d.ashx?h=400&w=1920&la=en-AU&hash=B0BAA7291D7BE7C33A4DB57C1733FCA1',
            description: 'By joining Qinetiq we have become part of a global company and are a part of its strategy',
            locations: [
                { coordinates: [150.5803594301609, -34.90636415185156], description: 'QAA AMC'},
                { coordinates: [150.53065922811, -34.943069107111135], description: 'QAA Head Office'}
            ],
            location: {
                center: [150.50555873983905, -34.93],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'What we do (see youtube video)',
            image: '',
            video: 'https://www.youtube.com/embed/RLrzWYqQOT8',
            description: 'Our products includes... As a part of a global defence company they are being delivered all over the globe to ally countries such as the European Union',
            locations: [
                { coordinates: [150.5803594301609, -34.90636415185156], description: 'QAA AMC'},
                { coordinates: [150.53065922811, -34.943069107111135], description: 'QAA Head Office'}
            ],
            location: {
                center: [150.50555873983905, -34.93],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};