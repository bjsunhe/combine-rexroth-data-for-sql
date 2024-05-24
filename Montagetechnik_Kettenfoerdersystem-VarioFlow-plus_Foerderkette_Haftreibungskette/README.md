CREATE TABLE Montagetechnik_Kettenfoerdersystem-VarioFlow-plus_Foerderkette_Haftreibungskette (
    verpackungseinheit VARCHAR(255) COMMENT 'Verpackungseinheit',
    baugr__e_b__mm_ VARCHAR(255) COMMENT 'Baugröße [b] [mm]',
    material VARCHAR(255) COMMENT 'Material',
    hinweis TEXT COMMENT 'Hinweis',
    erforderlichesZubeh_r TEXT COMMENT 'Erforderliches Zubehör',
    gewicht_kg_ DECIMAL(10, 3) COMMENT 'Gewicht [kg]',
    datenblatt VARCHAR(255) COMMENT 'Datenblatt',
    _3dCad_0 VARCHAR(255) COMMENT '3D CAD_0',
    productlink VARCHAR(255) COMMENT 'productLink',
    sku VARCHAR(255) COMMENT 'sku',
    kraft_fmax__n_ DECIMAL(10, 3) COMMENT 'Kraft [Fmax] [N]',
    l_nge_l__mm_ DECIMAL(10, 3) COMMENT 'Länge [L] [mm]',
    materialhinweis TEXT COMMENT 'Materialhinweis',
    lieferumfang TEXT COMMENT 'Lieferumfang',
    lieferhinweis TEXT COMMENT 'Lieferhinweis',
    PRIMARY KEY (sku)
);