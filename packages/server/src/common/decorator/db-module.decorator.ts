import { getDbSchemaName } from "@app/db/common/utils";
import { Inject } from "@nestjs/common";
import { ClassType } from "src/types/env";

export function DbModule(_class: ClassType): ParameterDecorator {
  return (target, key, index) => {
    Inject(getDbSchemaName(_class))(target, key, index);
  };
}