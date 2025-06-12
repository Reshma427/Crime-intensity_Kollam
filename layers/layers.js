var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_klm_jrsdctn_jnd_1 = new ol.format.GeoJSON();
var features_klm_jrsdctn_jnd_1 = format_klm_jrsdctn_jnd_1.readFeatures(json_klm_jrsdctn_jnd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_klm_jrsdctn_jnd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_klm_jrsdctn_jnd_1.addFeatures(features_klm_jrsdctn_jnd_1);
var lyr_klm_jrsdctn_jnd_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_klm_jrsdctn_jnd_1, 
                style: style_klm_jrsdctn_jnd_1,
                popuplayertitle: 'klm_jrsdctn_jnd',
                interactive: true,
    title: 'klm_jrsdctn_jnd<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_0.png" /> 14<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_1.png" /> 38<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_2.png" /> 76<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_3.png" /> 83<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_4.png" /> 112<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_5.png" /> 119<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_6.png" /> 124<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_7.png" /> 128<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_8.png" /> 133<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_9.png" /> 171<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_10.png" /> 219<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_11.png" /> 251<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_12.png" /> 252<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_13.png" /> 258<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_14.png" /> 260<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_15.png" /> 274<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_16.png" /> 300<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_17.png" /> 305<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_18.png" /> 307<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_19.png" /> 308<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_20.png" /> 346<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_21.png" /> 352<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_22.png" /> 363<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_23.png" /> 365<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_24.png" /> 384<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_25.png" /> 405<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_26.png" /> 424<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_27.png" /> 465<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_28.png" /> 485<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_29.png" /> 552<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_30.png" /> 800<br />\
    <img src="styles/legend/klm_jrsdctn_jnd_1_31.png" /> <br />' });
var format_klm_police_stations_prj_2 = new ol.format.GeoJSON();
var features_klm_police_stations_prj_2 = format_klm_police_stations_prj_2.readFeatures(json_klm_police_stations_prj_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_klm_police_stations_prj_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_klm_police_stations_prj_2.addFeatures(features_klm_police_stations_prj_2);
var lyr_klm_police_stations_prj_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_klm_police_stations_prj_2, 
                style: style_klm_police_stations_prj_2,
                popuplayertitle: 'klm_police_stations_prj',
                interactive: true,
                title: '<img src="styles/legend/klm_police_stations_prj_2.png" /> klm_police_stations_prj'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_klm_jrsdctn_jnd_1.setVisible(true);lyr_klm_police_stations_prj_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_klm_jrsdctn_jnd_1,lyr_klm_police_stations_prj_2];
lyr_klm_jrsdctn_jnd_1.set('fieldAliases', {'id': 'id', 'Jurisdctn': 'Jurisdctn', 'layer': 'layer', 'tot_crime': 'tot_crime', 'Jurisdctn_': 'Jurisdctn_', });
lyr_klm_police_stations_prj_2.set('fieldAliases', {'element': 'element', 'amenity': 'amenity', 'police_stn': 'police_stn', 'Jurisdctn': 'Jurisdctn', 'sexl_hrssm': 'sexl_hrssm', 'kid_wmn_gl': 'kid_wmn_gl', 'rbbry': 'rbbry', 'murder': 'murder', 'rape': 'rape', 'molestn': 'molestn', 'cheating': 'cheating', 'tot_crimes': 'tot_crimes', });
lyr_klm_jrsdctn_jnd_1.set('fieldImages', {'id': 'Hidden', 'Jurisdctn': 'TextEdit', 'layer': 'Hidden', 'tot_crime': 'TextEdit', 'Jurisdctn_': 'TextEdit', });
lyr_klm_police_stations_prj_2.set('fieldImages', {'element': 'Hidden', 'amenity': 'Hidden', 'police_stn': 'TextEdit', 'Jurisdctn': 'TextEdit', 'sexl_hrssm': 'TextEdit', 'kid_wmn_gl': 'TextEdit', 'rbbry': 'TextEdit', 'murder': 'TextEdit', 'rape': 'TextEdit', 'molestn': 'TextEdit', 'cheating': 'TextEdit', 'tot_crimes': 'TextEdit', });
lyr_klm_jrsdctn_jnd_1.set('fieldLabels', {'Jurisdctn': 'inline label - visible with data', 'tot_crime': 'inline label - visible with data', 'Jurisdctn_': 'inline label - visible with data', });
lyr_klm_police_stations_prj_2.set('fieldLabels', {'police_stn': 'inline label - visible with data', 'Jurisdctn': 'inline label - visible with data', 'sexl_hrssm': 'inline label - visible with data', 'kid_wmn_gl': 'inline label - visible with data', 'rbbry': 'inline label - visible with data', 'murder': 'inline label - visible with data', 'rape': 'inline label - visible with data', 'molestn': 'inline label - visible with data', 'cheating': 'inline label - visible with data', 'tot_crimes': 'inline label - visible with data', });
lyr_klm_police_stations_prj_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});