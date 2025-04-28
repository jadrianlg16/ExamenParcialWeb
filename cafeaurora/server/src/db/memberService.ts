// apps/server/src/db/memberService.ts
import { MemberProfile } from "../../../packages/types";

export abstract class MemberService {
  abstract initialized: boolean;
  abstract init(): Promise<void>;
  abstract validate(
    username: string,
    password: string,
  ): Promise<MemberProfile | null>;
}
