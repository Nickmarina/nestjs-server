import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  desription: number;
  @Prop()
  online: boolean;
  @Prop()
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
