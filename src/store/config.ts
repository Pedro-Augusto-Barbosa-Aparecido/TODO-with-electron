import Store from "electron-store";
import { JSONSchemaType } from "json-schema-typed";

export const schema = {
  user: {
    type: JSONSchemaType.Object,
    default: {},
  },
  salt: {
    type: JSONSchemaType.String,
    default: ""
  }
}

export const config = new Store({
  schema,
  watch: true,
})
