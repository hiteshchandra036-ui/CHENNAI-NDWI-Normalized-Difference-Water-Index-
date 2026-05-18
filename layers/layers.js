var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Chennai_NDWI_Clip1_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Chennai_NDWI_Clip1<br />\
    <img src="styles/legend/Chennai_NDWI_Clip1_1_0.png" /> <= -0.0450<br />\
    <img src="styles/legend/Chennai_NDWI_Clip1_1_1.png" /> > -0.0450<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Chennai_NDWI_Clip1_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8924440.000000, 1454218.085176, 8940080.000000, 1475024.871095]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_Chennai_NDWI_Clip1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Chennai_NDWI_Clip1_1];
