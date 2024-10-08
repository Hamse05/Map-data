ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([42.421590, 9.127221, 46.859392, 11.291640]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SomalilandretailersTerminated_1 = new ol.format.GeoJSON();
var features_SomalilandretailersTerminated_1 = format_SomalilandretailersTerminated_1.readFeatures(json_SomalilandretailersTerminated_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SomalilandretailersTerminated_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomalilandretailersTerminated_1.addFeatures(features_SomalilandretailersTerminated_1);
var lyr_SomalilandretailersTerminated_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SomalilandretailersTerminated_1, 
                style: style_SomalilandretailersTerminated_1,
                popuplayertitle: "Somaliland retailers Terminated",
                interactive: true,
                title: '<img src="styles/legend/SomalilandretailersTerminated_1.png" /> Somaliland retailers Terminated'
            });
var format_Somalilandretailerssuspended_2 = new ol.format.GeoJSON();
var features_Somalilandretailerssuspended_2 = format_Somalilandretailerssuspended_2.readFeatures(json_Somalilandretailerssuspended_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Somalilandretailerssuspended_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Somalilandretailerssuspended_2.addFeatures(features_Somalilandretailerssuspended_2);
var lyr_Somalilandretailerssuspended_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Somalilandretailerssuspended_2, 
                style: style_Somalilandretailerssuspended_2,
                popuplayertitle: "Somaliland retailers suspended",
                interactive: true,
                title: '<img src="styles/legend/Somalilandretailerssuspended_2.png" /> Somaliland retailers suspended'
            });
var format_Somalilandretailersactive_3 = new ol.format.GeoJSON();
var features_Somalilandretailersactive_3 = format_Somalilandretailersactive_3.readFeatures(json_Somalilandretailersactive_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Somalilandretailersactive_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Somalilandretailersactive_3.addFeatures(features_Somalilandretailersactive_3);
var lyr_Somalilandretailersactive_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Somalilandretailersactive_3, 
                style: style_Somalilandretailersactive_3,
                popuplayertitle: "Somaliland retailers active",
                interactive: true,
                title: '<img src="styles/legend/Somalilandretailersactive_3.png" /> Somaliland retailers active'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SomalilandretailersTerminated_1.setVisible(true);lyr_Somalilandretailerssuspended_2.setVisible(true);lyr_Somalilandretailersactive_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SomalilandretailersTerminated_1,lyr_Somalilandretailerssuspended_2,lyr_Somalilandretailersactive_3];
lyr_SomalilandretailersTerminated_1.set('fieldAliases', {'SCOPECODE': 'SCOPECODE', 'NOTES 1': 'NOTES 1', 'Region': 'Region', 'District': 'District', 'Town/village': 'Town/village', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'COMMERCIAL NAME': 'COMMERCIAL NAME', 'CONTACT PERSON': 'CONTACT PERSON', 'PHONE NUMBER': 'PHONE NUMBER', 'EMAIL ADDRESS': 'EMAIL ADDRESS', 'Status': 'Status', });
lyr_Somalilandretailerssuspended_2.set('fieldAliases', {'SCOPECODE': 'SCOPECODE', 'NOTES 1': 'NOTES 1', 'Region': 'Region', 'District': 'District', 'Town/village': 'Town/village', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'COMMERCIAL NAME': 'COMMERCIAL NAME', 'CONTACT PERSON': 'CONTACT PERSON', 'PHONE NUMBER': 'PHONE NUMBER', 'EMAIL ADDRESS': 'EMAIL ADDRESS', 'Status': 'Status', });
lyr_Somalilandretailersactive_3.set('fieldAliases', {'SCOPECODE': 'SCOPECODE', 'NOTES 1': 'NOTES 1', 'Region': 'Region', 'District': 'District', 'Town/village': 'Town/village', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'COMMERCIAL NAME': 'COMMERCIAL NAME', 'CONTACT PERSON': 'CONTACT PERSON', 'PHONE NUMBER': 'PHONE NUMBER', 'EMAIL ADDRESS': 'EMAIL ADDRESS', 'Status': 'Status', });
lyr_SomalilandretailersTerminated_1.set('fieldImages', {'SCOPECODE': 'Range', 'NOTES 1': 'TextEdit', 'Region': 'TextEdit', 'District': 'TextEdit', 'Town/village': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'COMMERCIAL NAME': 'TextEdit', 'CONTACT PERSON': 'TextEdit', 'PHONE NUMBER': 'TextEdit', 'EMAIL ADDRESS': 'TextEdit', 'Status': 'TextEdit', });
lyr_Somalilandretailerssuspended_2.set('fieldImages', {'SCOPECODE': 'Range', 'NOTES 1': 'TextEdit', 'Region': 'TextEdit', 'District': 'TextEdit', 'Town/village': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'COMMERCIAL NAME': 'TextEdit', 'CONTACT PERSON': 'TextEdit', 'PHONE NUMBER': 'Range', 'EMAIL ADDRESS': 'TextEdit', 'Status': 'TextEdit', });
lyr_Somalilandretailersactive_3.set('fieldImages', {'SCOPECODE': 'Range', 'NOTES 1': 'TextEdit', 'Region': 'TextEdit', 'District': 'TextEdit', 'Town/village': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'COMMERCIAL NAME': 'TextEdit', 'CONTACT PERSON': 'TextEdit', 'PHONE NUMBER': 'TextEdit', 'EMAIL ADDRESS': 'TextEdit', 'Status': 'TextEdit', });
lyr_SomalilandretailersTerminated_1.set('fieldLabels', {'SCOPECODE': 'inline label - always visible', 'NOTES 1': 'inline label - always visible', 'Region': 'inline label - always visible', 'District': 'inline label - always visible', 'Town/village': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'COMMERCIAL NAME': 'inline label - always visible', 'CONTACT PERSON': 'inline label - always visible', 'PHONE NUMBER': 'inline label - always visible', 'EMAIL ADDRESS': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_Somalilandretailerssuspended_2.set('fieldLabels', {'SCOPECODE': 'inline label - always visible', 'NOTES 1': 'inline label - always visible', 'Region': 'inline label - visible with data', 'District': 'inline label - always visible', 'Town/village': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'COMMERCIAL NAME': 'inline label - always visible', 'CONTACT PERSON': 'inline label - always visible', 'PHONE NUMBER': 'inline label - always visible', 'EMAIL ADDRESS': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_Somalilandretailersactive_3.set('fieldLabels', {'SCOPECODE': 'inline label - always visible', 'NOTES 1': 'inline label - always visible', 'Region': 'inline label - always visible', 'District': 'inline label - always visible', 'Town/village': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'COMMERCIAL NAME': 'inline label - visible with data', 'CONTACT PERSON': 'inline label - visible with data', 'PHONE NUMBER': 'inline label - always visible', 'EMAIL ADDRESS': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_Somalilandretailersactive_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});