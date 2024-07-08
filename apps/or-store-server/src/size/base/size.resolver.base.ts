/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Size } from "./Size";
import { SizeCountArgs } from "./SizeCountArgs";
import { SizeFindManyArgs } from "./SizeFindManyArgs";
import { SizeFindUniqueArgs } from "./SizeFindUniqueArgs";
import { CreateSizeArgs } from "./CreateSizeArgs";
import { UpdateSizeArgs } from "./UpdateSizeArgs";
import { DeleteSizeArgs } from "./DeleteSizeArgs";
import { SizeService } from "../size.service";
@graphql.Resolver(() => Size)
export class SizeResolverBase {
  constructor(protected readonly service: SizeService) {}

  async _sizesMeta(
    @graphql.Args() args: SizeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Size])
  async sizes(@graphql.Args() args: SizeFindManyArgs): Promise<Size[]> {
    return this.service.sizes(args);
  }

  @graphql.Query(() => Size, { nullable: true })
  async size(@graphql.Args() args: SizeFindUniqueArgs): Promise<Size | null> {
    const result = await this.service.size(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Size)
  async createSize(@graphql.Args() args: CreateSizeArgs): Promise<Size> {
    return await this.service.createSize({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Size)
  async updateSize(@graphql.Args() args: UpdateSizeArgs): Promise<Size | null> {
    try {
      return await this.service.updateSize({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Size)
  async deleteSize(@graphql.Args() args: DeleteSizeArgs): Promise<Size | null> {
    try {
      return await this.service.deleteSize(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}