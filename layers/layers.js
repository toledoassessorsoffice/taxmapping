var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GOOGLEHYBRID_1 = new ol.layer.Tile({
            'title': 'GOOGLE HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BARANGAYPARTITION_2 = new ol.format.GeoJSON();
var features_BARANGAYPARTITION_2 = format_BARANGAYPARTITION_2.readFeatures(json_BARANGAYPARTITION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARANGAYPARTITION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARANGAYPARTITION_2.addFeatures(features_BARANGAYPARTITION_2);
var lyr_BARANGAYPARTITION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARANGAYPARTITION_2, 
                style: style_BARANGAYPARTITION_2,
                interactive: true,
                title: '<img src="styles/legend/BARANGAYPARTITION_2.png" /> BARANGAY PARTITION'
            });
var format_CADASTRALCLAIMANTS_3 = new ol.format.GeoJSON();
var features_CADASTRALCLAIMANTS_3 = format_CADASTRALCLAIMANTS_3.readFeatures(json_CADASTRALCLAIMANTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADASTRALCLAIMANTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADASTRALCLAIMANTS_3.addFeatures(features_CADASTRALCLAIMANTS_3);
var lyr_CADASTRALCLAIMANTS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CADASTRALCLAIMANTS_3, 
                style: style_CADASTRALCLAIMANTS_3,
                interactive: true,
    title: 'CADASTRAL CLAIMANTS<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_0.png" /> <br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_1.png" /> AWIHAO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_2.png" /> BATO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_3.png" /> BIGA<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_4.png" /> BULONGAN<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_5.png" /> BUNGA<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_6.png" /> CABITOONAN<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_7.png" /> CALONGCALONG<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_8.png" /> CAMBANG-UG<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_9.png" /> CANLUMAMPAO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_10.png" /> CAPT. CLAUDIO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_11.png" /> CARMEN<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_12.png" /> DAS<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_13.png" /> DUMLOG<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_14.png" /> GEN. CLIMACO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_15.png" /> IBO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_16.png" /> ILIHAN<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_17.png" /> LANDAHAN<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_18.png" /> LURAY 2<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_19.png" /> MAGDUGO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_20.png" /> MATAB-ANG<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_21.png" /> MEDIA ONCE<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_22.png" /> PANGAMIHAN<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_23.png" /> POBLACION<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_24.png" /> POOG<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_25.png" /> PUTINGBATO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_26.png" /> SAGAY<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_27.png" /> SAM-ANG<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_28.png" /> SANGI<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_29.png" /> STO. NINO<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_30.png" /> SUBAYON<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_31.png" /> TALAVERA<br />\
    <img src="styles/legend/CADASTRALCLAIMANTS_3_32.png" /> TUBOD<br />'
        });
var format_LineFeatures_4 = new ol.format.GeoJSON();
var features_LineFeatures_4 = format_LineFeatures_4.readFeatures(json_LineFeatures_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineFeatures_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineFeatures_4.addFeatures(features_LineFeatures_4);
var lyr_LineFeatures_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineFeatures_4, 
                style: style_LineFeatures_4,
                interactive: true,
                title: '<img src="styles/legend/LineFeatures_4.png" /> Line Features'
            });
var format_PSA_Building_Footprint_5 = new ol.format.GeoJSON();
var features_PSA_Building_Footprint_5 = format_PSA_Building_Footprint_5.readFeatures(json_PSA_Building_Footprint_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSA_Building_Footprint_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSA_Building_Footprint_5.addFeatures(features_PSA_Building_Footprint_5);cluster_PSA_Building_Footprint_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PSA_Building_Footprint_5
});
var lyr_PSA_Building_Footprint_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PSA_Building_Footprint_5, 
                style: style_PSA_Building_Footprint_5,
                interactive: true,
                title: '<img src="styles/legend/PSA_Building_Footprint_5.png" /> PSA_Building_Footprint'
            });

lyr_OSMStandard_0.setVisible(false);lyr_GOOGLEHYBRID_1.setVisible(true);lyr_BARANGAYPARTITION_2.setVisible(false);lyr_CADASTRALCLAIMANTS_3.setVisible(true);lyr_LineFeatures_4.setVisible(true);lyr_PSA_Building_Footprint_5.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GOOGLEHYBRID_1,lyr_BARANGAYPARTITION_2,lyr_CADASTRALCLAIMANTS_3,lyr_LineFeatures_4,lyr_PSA_Building_Footprint_5];
lyr_BARANGAYPARTITION_2.set('fieldAliases', {'Area': 'Area', 'BARANGAY': 'BARANGAY', });
lyr_CADASTRALCLAIMANTS_3.set('fieldAliases', {'LOT NUMBER': 'LOT NUMBER', 'LAST NAME': 'LAST NAME', 'FIRST NAME': 'FIRST NAME', 'BARANGAY': 'BARANGAY', 'SECTION': 'SECTION', 'AREA (m²)': 'AREA (m²)', 'REMARKS': 'REMARKS', 'DSCRPT\'N': 'DSCRPT\'N', 'PHOTO': 'PHOTO', });
lyr_LineFeatures_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PSA_Building_Footprint_5.set('fieldAliases', {'FID_2251_b': 'FID_2251_b', 'BSN': 'BSN', 'Address': 'Address', 'Bldg_Name': 'Bldg_Name', 'Bldg_Type': 'Bldg_Type', 'Bldg_Form': 'Bldg_Form', 'No_of_Flr': 'No_of_Flr', 'Roof_Type': 'Roof_Type', 'Wall_Type': 'Wall_Type', 'Popcen_BSN': 'Popcen_BSN', 'HH_Head': 'HH_Head', 'IS_Ind': 'IS_Ind', 'Remarks': 'Remarks', 'Bldg_Image': 'Bldg_Image', 'Geoid': 'Geoid', 'GEOCODE': 'GEOCODE', 'FID_Toledo': 'FID_Toledo', 'Id': 'Id', 'Barangay': 'Barangay', });
lyr_BARANGAYPARTITION_2.set('fieldImages', {'Area': 'TextEdit', 'BARANGAY': 'TextEdit', });
lyr_CADASTRALCLAIMANTS_3.set('fieldImages', {'LOT NUMBER': 'TextEdit', 'LAST NAME': 'TextEdit', 'FIRST NAME': 'TextEdit', 'BARANGAY': 'TextEdit', 'SECTION': 'TextEdit', 'AREA (m²)': 'Range', 'REMARKS': 'TextEdit', 'DSCRPT\'N': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_LineFeatures_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PSA_Building_Footprint_5.set('fieldImages', {'FID_2251_b': 'TextEdit', 'BSN': 'TextEdit', 'Address': 'TextEdit', 'Bldg_Name': 'TextEdit', 'Bldg_Type': 'TextEdit', 'Bldg_Form': 'TextEdit', 'No_of_Flr': 'TextEdit', 'Roof_Type': 'TextEdit', 'Wall_Type': 'TextEdit', 'Popcen_BSN': 'TextEdit', 'HH_Head': 'TextEdit', 'IS_Ind': 'TextEdit', 'Remarks': 'TextEdit', 'Bldg_Image': 'TextEdit', 'Geoid': 'TextEdit', 'GEOCODE': 'TextEdit', 'FID_Toledo': 'TextEdit', 'Id': 'TextEdit', 'Barangay': 'TextEdit', });
lyr_BARANGAYPARTITION_2.set('fieldLabels', {'Area': 'inline label', 'BARANGAY': 'header label', });
lyr_CADASTRALCLAIMANTS_3.set('fieldLabels', {'LOT NUMBER': 'header label', 'LAST NAME': 'inline label', 'FIRST NAME': 'inline label', 'BARANGAY': 'inline label', 'SECTION': 'inline label', 'AREA (m²)': 'inline label', 'REMARKS': 'no label', 'DSCRPT\'N': 'no label', 'PHOTO': 'inline label', });
lyr_LineFeatures_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PSA_Building_Footprint_5.set('fieldLabels', {'FID_2251_b': 'inline label', 'BSN': 'inline label', 'Address': 'inline label', 'Bldg_Name': 'inline label', 'Bldg_Type': 'inline label', 'Bldg_Form': 'inline label', 'No_of_Flr': 'inline label', 'Roof_Type': 'inline label', 'Wall_Type': 'inline label', 'Popcen_BSN': 'inline label', 'HH_Head': 'header label', 'IS_Ind': 'inline label', 'Remarks': 'inline label', 'Bldg_Image': 'inline label', 'Geoid': 'inline label', 'GEOCODE': 'inline label', 'FID_Toledo': 'inline label', 'Id': 'inline label', 'Barangay': 'inline label', });
lyr_PSA_Building_Footprint_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});