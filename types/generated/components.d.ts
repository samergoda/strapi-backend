import type { Schema, Struct } from '@strapi/strapi';

export interface ConstrictionsConstrictions extends Struct.ComponentSchema {
  collectionName: 'components_constrictions_constrictions';
  info: {
    displayName: 'constrictions';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'constrictions.constrictions': ConstrictionsConstrictions;
    }
  }
}
