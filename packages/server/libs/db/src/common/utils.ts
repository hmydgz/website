import { ClassType } from "src/types/env";

export function getDbSchemaName(_class: ClassType) {
  return `DB_${_class.name}`;
}