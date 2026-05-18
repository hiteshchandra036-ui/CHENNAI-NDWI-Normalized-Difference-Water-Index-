 CHENNAI NDWI – Normalized Difference Water Index

A Remote Sensing and GIS project focused on detecting and analyzing water bodies in Chennai using the **Normalized Difference Water Index (NDWI)** derived from satellite imagery.



  Overview
  
This project uses satellite image processing techniques to identify water bodies and monitor surface water distribution in Chennai. NDWI enhances water features while suppressing vegetation and soil information, making it highly useful for:

1 Flood Mapping
2 Surface Water Extraction
3 Wetland Monitoring
4 Urban Water Analysis
5 Environmental Change Detection
6 Hydrological Studies

The project is implemented using Python and geospatial libraries for raster processing, analysis, and visualization.



 What is NDWI?

The **Normalized Difference Water Index (NDWI)** is a spectral index used in Remote Sensing to detect and map water bodies.

 NDWI Equation

\[
NDWI = \frac{Green - NIR}{Green + NIR}
\]

Where:

 **Green** = Green Band
 **NIR** = Near Infrared Band

Water bodies strongly reflect green light and absorb near-infrared radiation, resulting in higher NDWI values.

 Band Information

 Sentinel-2 Bands

| Band | Description |
|------|-------------|
| B3 | Green |
| B8 | Near Infrared (NIR) |

### Sentinel-2 NDWI Formula

\[
NDWI = \frac{B3 - B8}{B3 + B8}
\]

Landsat-8 Bands

| Band | Description |
|------|-------------|
| B3 | Green |
| B5 | Near Infrared (NIR) |

### Landsat-8 NDWI Formula

\[
NDWI = \frac{B3 - B5}{B3 + B5}
\]


🛰️ Satellite Data Sources

This project can work with imagery from:

- Sentinel-2
- Landsat-8

Data sources include:

- Copernicus Open Access Hub
- USGS Earth Explorer
- Google Earth Engine


Technologies Used

- Python
- Rasterio
- NumPy
- Matplotlib
- GDAL
- Jupyter Notebook

 Project Structure
CHENNAI-NDWI-Normalized-Difference-Water-Index/
│
├── data/                 # Input satellite imagery
├── output/               # Generated NDWI outputs
├── notebooks/            # Jupyter notebooks
├── scripts/              # Python scripts
├── images/               # Output maps/screenshots
├── requirements.txt
└── README.md
