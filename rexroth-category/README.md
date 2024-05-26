CREATE TABLE rexroth_varioflow_categories (
    category VARCHAR(255) PRIMARY KEY,
    parentCategory VARCHAR(255),
    categoryLink VARCHAR(255),
    FOREIGN KEY (parentCategory) REFERENCES rexroth_varioflow_categories(category)
);
