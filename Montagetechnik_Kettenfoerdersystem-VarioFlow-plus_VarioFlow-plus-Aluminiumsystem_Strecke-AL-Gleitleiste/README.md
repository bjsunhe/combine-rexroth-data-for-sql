CREATE TABLE Montagetechnik_Kettenfoerdersystem-VarioFlow-plus_VarioFlow-plus-Aluminiumsystem_Strecke-AL-Gleitleiste (
    lieferzustand VARCHAR(255) COMMENT 'Lieferzustand',
    verpackungseinheit VARCHAR(255) COMMENT 'Verpackungseinheit',
    baugr__e_b__mm_ VARCHAR(255) COMMENT 'Baugröße [b] [mm]',
    l_nge_l__mm_ VARCHAR(255) COMMENT 'Länge [L] [mm]',
    material VARCHAR(255) COMMENT 'Material',
    erforderlichesZubeh_r VARCHAR(255) COMMENT 'Erforderliches Zubehör',
    gewicht_kg_ DECIMAL(10, 3) COMMENT 'Gewicht [kg]',
    datenblatt VARCHAR(255) COMMENT 'Datenblatt',
    _3dCad_0 VARCHAR(255) COMMENT '3D CAD_0',
    productlink VARCHAR(255) COMMENT 'productLink',
    sku VARCHAR(255) COMMENT 'sku',
    PRIMARY KEY (sku)
);
