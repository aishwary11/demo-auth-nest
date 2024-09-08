import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Item extends Document {
  @Prop({ required: true, unique: true })
  name: string;
  @Prop({ required: true })
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
