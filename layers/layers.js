var wms_layers = [];


        var lyr_WikimediaMaps_0 = new ol.layer.Tile({
            'title': 'Wikimedia Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);
var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> Mid Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> Small Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_3.png" /> <br />'
        });

lyr_WikimediaMaps_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_WikimediaMaps_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'Name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'Iata', 'wikipedia': 'URL', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'Type': 'Type', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'comments': 'Hidden', 'wikidataid': 'Hidden', 'name_ar': 'Hidden', 'name_bn': 'Hidden', 'name_de': 'TextEdit', 'name_en': 'Hidden', 'name_es': 'Hidden', 'name_fr': 'TextEdit', 'name_el': 'Hidden', 'name_hi': 'Hidden', 'name_hu': 'Hidden', 'name_id': 'Hidden', 'name_it': 'Hidden', 'name_ja': 'Hidden', 'name_ko': 'Hidden', 'name_nl': 'Hidden', 'name_pl': 'Hidden', 'name_pt': 'Hidden', 'name_ru': 'Hidden', 'name_sv': 'Hidden', 'name_tr': 'Hidden', 'name_vi': 'Hidden', 'name_zh': 'Hidden', 'wdid_score': 'Hidden', 'ne_id': 'Hidden', 'Type': 'TextEdit', });
lyr_ne_10m_airports_1.set('fieldLabels', {'name': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'name_de': 'no label', 'name_fr': 'no label', 'Type': 'no label', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});