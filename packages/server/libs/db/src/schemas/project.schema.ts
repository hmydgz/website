import { Prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class Project extends TimeStamps {
  @Prop()
  name: string;

  @Prop()
  url: string;
}