export interface Datasource {
  sex: Array<DatasourceSexOrLanguage>,
  language: Array<DatasourceSexOrLanguage>,
  country: Array<DatasourceCountry>
}

export interface DatasourceSexOrLanguage {
  id: Number,
  description: String,
  key: String,
}

export interface DatasourceCountry {
  id: Number,
  description: String,
  prefix: Number,
  language: String,
}
